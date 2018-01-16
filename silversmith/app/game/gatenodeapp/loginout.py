#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
from app.game.gatenodeservice import remoteserviceHandle
from app.game.core.PlayersManager import PlayersManager
import app.protocol.netutil as netutil
import app.protocol.protocol_def as protocol_def
from twisted.python import log
from firefly.server.globalobject import GlobalObject

@remoteserviceHandle
def NetConnLost_2(dynamicId):
    '''loginout
    '''
    player = PlayersManager().getPlayerBydynamicId(dynamicId)
    if not player:
        return True
    player.updatePlayerDBInfo()
    PlayersManager().dropPlayer(player)


    buf = netutil.s2c_data2buf("s2c_role_out",{'id':player.getBaseID()})
    GlobalObject().remote['gate'].callRemote("pushObjectOthers",protocol_def.s2c_role_out,buf, [dynamicId])
    return True
    
