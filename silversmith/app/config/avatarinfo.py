# -*- coding: utf-8 -*-

'''
Author: Hannibal
Data: 
Desc: local data config
NOTE: Don't modify this file, it's build by xml-to-python!!!
'''


avatarinfo_map = {};
avatarinfo_map[101] = {"id":101,"info_data":[{"aid":0,"w":512,"h":512,"path":"xiannv/stand.atlas","total":16,"speed":30,"prefix":"stand/","dir":"0,1,2,3,4,5,6,7",},{"aid":1,"w":512,"h":512,"path":"xiannv/run.atlas","total":10,"speed":30,"prefix":"run/","dir":"0,1,2,3,4,5,6,7",},],};


class Avatarinfo:
	def __init__(self, key):
		config = avatarinfo_map.get(key);
		for k, v in config.items():
			setattr(self, k, v);
		return

def create_Avatarinfo(key):
		config = avatarinfo_map.get(key);
		if not config:
			return
		return Avatarinfo(key)

