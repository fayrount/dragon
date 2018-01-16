#coding:utf8
'''
Created on 2012-2-27

@author: sean_lan
'''
from app.gate.appinterface import login
import json
from app.gate.gateservice import localserviceHandle
import app.protocol.netutil as netutil
import app.protocol.protocol_def as protocol_def
from twisted.python import log
from firefly.server.globalobject import GlobalObject
@localserviceHandle
def loginToServer_1(key,dynamicId,request_proto):

    argument = netutil.c2s_buf2data("c2s_login",request_proto);
    dynamicId = dynamicId
    username = argument['account']
    password = argument['pwd']
    loginkey = argument['localkey'];
    bpassager = argument['bpassager']
    log.msg('loginToServer_1 %d %s ' % (dynamicId,str(argument)));
    data = login.loginToServer(dynamicId, username, password,loginkey,bpassager)
    result = data.get('result',False)
    response = {}
    response["cmdid"] = protocol_def.c2s_login;
    if not result:
        response["result"] = 1;
    else:
        response["result"] = 0;
    buf = netutil.s2c_data2buf("s2c_common_rsp",response)
    GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_common_rsp,buf, [dynamicId])
    log.msg("loginToServer_1 end ",bpassager,result,loginkey,data)
    if bpassager == 1 and result:
        if loginkey == None or len(loginkey) <= 0:
            loginkey =data.get('localkey');
            buf = netutil.s2c_data2buf("s2c_localkey",{"key":loginkey});
            log.msg("send localkey ",loginkey);
            GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_localkey,buf, [dynamicId])
    return

@localserviceHandle
def activeNewPlayer_2(key,dynamicId,request_proto):
    '''创建角色
    '''
    argument = netutil.c2s_buf2data("c2s_createrole",request_proto);
    shape = argument['shape'];
    pcls = argument['class'];
    name = argument['name'];
    data  = login.activeNewPlayer(dynamicId, name, pcls,shape)
    result = data.get('result',False)
    response = {}
    response["cmdid"] = protocol_def.c2s_createrole;
    if not result:
        response["result"] = 1;
    else:
        response["result"] = 0;
    buf = netutil.s2c_data2buf("s2c_common_rsp",response)
    GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_common_rsp,buf, [dynamicId])

    ######
    #cid =1;
    #shape = 0;
    #lv = 0;
    #name = name;
    #cls = 0;
    #role_data = {'id':cid,'shape':shape,'lv':lv,'name':name,'class':cls};
    #buf = netutil.s2c_data2buf("s2c_rolelist",{'rolelist':[role_data]});
    #log.msg("send rolelist ",role_data);
    #GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_rolelist,buf, [dynamicId])

    return
def SerializePartialEnterScene(result,response):
    '''序列化进入场景的返回消息
    '''
    log.msg('SerializePartialEnterScene %s %s' % (str(response),str(result)));
    sceneid = response['sceneid'];
    dynamicId = response['dynamicId']
    ret = {};
    ret['sceneid'] = 200;
    buf = netutil.s2c_data2buf("s2c_enterscene",ret)
    #GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_enterscene,buf, [dynamicId])
    #GlobalObject().netfactory.pushObject(protocol_def.s2c_enterscene,buf, [dynamicId])
    return

@localserviceHandle
def roleLogin_3(key,dynamicId, request_proto):
    '''角色登陆'''
    argument = netutil.c2s_buf2data("c2s_choserole",request_proto);
    characterId = argument.get('roleid')
    data = login.roleLogin(dynamicId, characterId)
    result = data.get('result',False)
    response = {}
    response["cmdid"] = protocol_def.c2s_choserole;
    if not result:
        response["result"] = 1;
    else:
        response["result"] = 0;
    buf = netutil.s2c_data2buf("s2c_common_rsp",response)
    GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_common_rsp,buf, [dynamicId])
    #GlobalObject().netfactory.pushObject(protocol_def.s2c_common_rsp,buf, [dynamicId])
    if not result:
        return;
    #log.msg("ready enterscene ",placeId,x,y,type(x),data['data']['position_x'],type(data['data']['position_x']),data['data']);
    login.enterScene(dynamicId, characterId, True)
    return
@localserviceHandle
def getrolelist_5(key,dynamicId, request_proto):
    log.msg('getrolelist_5 %d %s ' % (dynamicId,str(request_proto)));
    data = login.getrolelist(dynamicId)
    result = data.get('result',False)
    response = {}
    response["cmdid"] = protocol_def.c2s_getrolelist;
    if not result:
        response["result"] = 1;
    else:
        response["result"] = 0;
    buf = netutil.s2c_data2buf("s2c_common_rsp",response)
    GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_common_rsp,buf, [dynamicId])
    log.msg("getrolelist_5 end ",result,data)
    ######
    #log.msg("test send start ");
    #response = {}
    #response["id"] = 1000;
    #buf = netutil.s2c_data2buf("s2c_role_out",response)
    #GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_role_out,buf, [dynamicId])
    #GlobalObject().netfactory.pushObject(protocol_def.s2c_common_rsp,buf, [dynamicId])
    #log.msg("test send end ");

    if result:
        cid =data.get('cid',0);
        shape = data.get('shape',0);
        lv = data.get('lv',0);
        name = data.get('name','');
        if isinstance(name,unicode):
            name = name.encode('utf-8');
        cls = data.get('class',0);
        role_data = {'id':cid,'shape':shape,'lv':lv,'name':name,'class':cls};
        buf = netutil.s2c_data2buf("s2c_rolelist",{'rolelist':[role_data]});
        log.msg("send rolelist ",role_data);
        GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_rolelist,buf, [dynamicId])
    return


