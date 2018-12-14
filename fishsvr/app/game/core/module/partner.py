# coding: utf-8
# 
import app.base.game_module_mgr
from app.game.core.game_event_def import *
from app.protocol.ProtocolDesc import *
import app.protocol.netutil as netutil
from twisted.python import log
import app.util.helper as helper
import app.util.lang_config as lang_config
import app.game.memmode as memmode
from firefly.server.globalobject import GlobalObject
import app.game.core.game_module_def as game_module_def
class partner(app.base.game_module_mgr.game_module):
	def __init__(self):
		super(partner,self).__init__();
		self.game_ins = None;
		return
	def start(self):
		super(partner,self).start();
		self.game_ins = self.get_module(game_module_def.GAME_MAIN);
		return
	
	def dispose(self):
		super(partner,self).dispose();
		return