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
    if bpassager == 1 and result:
        if loginkey == None or len(loginkey) <= 0:
            loginkey =data.get('localkey');
            buf = netutil.s2c_data2buf("s2c_localkey",{"key":loginkey});
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
    data  = login.activeNewPlayer(dynamicId, name, pcls)
    result = data.get('result',False)
    response = {}
    response["cmdid"] = protocol_def.c2s_createrole;
    if not result:
        response["result"] = 1;
    else:
        response["result"] = 0;
        uid = data['userId']
        new_cid = data['newCharacterId'];
    buf = netutil.s2c_data2buf("s2c_common_rsp",response)
    GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_common_rsp,buf, [dynamicId])
    #GlobalObject().netfactory.pushObject(protocol_def.s2c_common_rsp,buf, [dynamicId])
    return
def SerializePartialEnterScene(result,response):
    '''序列化进入场景的返回消息
    '''
    log.msg('SerializePartialEnterScene %s ' % (str(response)));
    sceneid = response['sceneid'];
    dynamicId = response['dynamicId']
    ret = {};
    ret['sceneid'] = sceneid;
    buf = netutil.s2c_data2buf("s2c_enterscene",ret)
    GlobalObject().root.callChild("net","pushObject",protocol_def.s2c_enterscene,buf, [dynamicId])
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
    placeId = data['data'].get('placeId',1000)
    response = {}
    response['sceneid'] = placeId;
    response['dynamicId'] = dynamicId;
    dd = login.enterScene(dynamicId, characterId, placeId, True)
    if not dd:
        return
    dd.addCallback(SerializePartialEnterScene,response)
    return dd



