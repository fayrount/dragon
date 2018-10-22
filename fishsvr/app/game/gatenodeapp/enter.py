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

@remoteserviceHandle
def enterPlace_600001(dynamicId, characterId,force,player):
    
    return

                    
