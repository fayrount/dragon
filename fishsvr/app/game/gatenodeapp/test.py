#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
import app.protocol.netutil as netutil
import app.protocol.ProtocolDesc as protocol_def
from twisted.python import log
from firefly.server.globalobject import GlobalObject

@remoteserviceHandle
def testnet_256(dynamicId, request_proto):
    '''进入场景'''
    log.msg('testnet_256 %s ' % (dynamicId));
    c_data = netutil.c2s_buf2data("C2S_WEBSOCKET_HELLO",request_proto);
    log.msg('msg:%s'%(c_data['msg']));
    c_data['msg'] = "svr reply:"+c_data['msg'];
    buf = netutil.s2c_data2buf("S2C_WEBSOCKET_HELLO",c_data)
    GlobalObject().remote['gate'].callRemote("pushObject",protocol_def.S2C_WEBSOCKET_HELLO,buf, [dynamicId])    
    return

                    
