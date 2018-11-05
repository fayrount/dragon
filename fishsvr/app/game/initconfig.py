#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
from dataloader import load_config_data,registe_madmin
from firefly.server.globalobject import GlobalObject
from app.game.core.PlayersManager import PlayersManager
from twisted.python import log
import app.game.core.game_module_init
import app.game.core.game_module_def as game_module_def
import app.base.game_module_mgr as game_module_mgr
def doWhenStop():
    """服务器关闭前的处理
    """
    for player in PlayersManager()._players.values():
        try:
            player.updatePlayerDBInfo()
            PlayersManager().dropPlayer(player)
        except Exception as ex:
            log.err(ex) 
    
GlobalObject().stophandler = doWhenStop

def loadModule():
    """
    """
    
    load_config_data()
    registe_madmin()
    from gatenodeapp import *
    app.game.core.game_module_init.init_game_module();
    game_module_mgr.game_module_mgr().get_module(game_module_def.GAME_MAIN).start();
    
