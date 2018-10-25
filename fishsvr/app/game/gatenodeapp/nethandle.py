#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
from app.game.gatenodeservice import remoteserviceHandle
from app.game.core.character.PlayerCharacter import PlayerCharacter
from app.game.core.PlayersManager import PlayersManager
import app.protocol.netutil as netutil
from twisted.python import log
from firefly.server.globalobject import GlobalObject
import app.protocol.ProtocolDesc as ProtocolDesc
@remoteserviceHandle
def enter_1(dynamicId, characterId):
    
    return
@remoteserviceHandle
def NetConnLost_2(dynamicId):
    '''loginout
    '''
    return True

@remoteserviceHandle
def nethandle_3(cmd,dynamicId, characterId):
    if cmd == ProtocolDesc.C2S_WEBSOCKET_HELLO:
        log.msg('testnet_256 %s ' % (dynamicId));
        c_data = netutil.c2s_buf2data("C2S_WEBSOCKET_HELLO",request_proto);
        log.msg('msg:%s'%(c_data['msg']));
        c_data['msg'] = "svr reply:"+c_data['msg'];
        buf = netutil.s2c_data2buf("S2C_WEBSOCKET_HELLO",c_data)
        GlobalObject().remote['gate'].callRemote("pushObject",protocol_def.S2C_WEBSOCKET_HELLO,buf, [dynamicId]) 
    return 
@remoteserviceHandle
def broadcast_4(cmd,dynamicId, characterId,data):
    
    return     
