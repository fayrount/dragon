#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
from app.game.gatenodeservice import remoteserviceHandle
from app.game.core.character.PlayerCharacter import PlayerCharacter
from app.game.core.PlayersManager import PlayersManager
import app.protocol.netutil as netutil
import app.protocol.protocol_def as protocol_def
from twisted.python import log
from firefly.server.globalobject import GlobalObject

@remoteserviceHandle
def enterPlace_601(dynamicId, characterId, placeId,force,player):
    '''进入场景'''
    log.msg('enterPlace_601 %s %s %s %s %s' % (dynamicId,characterId,placeId,force,player));
    if not player:
        player = PlayerCharacter(characterId,dynamicId = dynamicId)
    PlayersManager().addPlayer(player)
    ret = {};
    ret['sceneid'] = placeId;
    buf = netutil.s2c_data2buf("s2c_enterscene",ret)
    GlobalObject().remote['gate'].callRemote("pushObject",protocol_def.s2c_enterscene,buf, [dynamicId])
    return

                    
