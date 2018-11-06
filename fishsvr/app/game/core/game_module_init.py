# coding: utf-8

import app.game.core.game_module_def as game_module_def
import app.game.core.module.game_main as game_main
import app.base.game_module_mgr
import app.game.core.module.gm as gm
def init_game_module():
	app.base.game_module_mgr.game_module_mgr().register_module(game_module_def.GAME_MAIN,game_main.game_main);
	app.base.game_module_mgr.game_module_mgr().register_module(game_module_def.GM_MAIN,gm.gm_main);