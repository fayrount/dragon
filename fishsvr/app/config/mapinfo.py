# -*- coding: utf-8 -*-

'''
Author: Hannibal
Data: 
Desc: local data config
NOTE: Don't modify this file, it's build by xml-to-python!!!
'''


mapinfo_map = {};
mapinfo_map[1001] = {"id":1001,"w":5504,"h":3456,};
mapinfo_map[1700] = {"id":1700,"w":1536,"h":1152,};


class Mapinfo:
	def __init__(self, key):
		config = mapinfo_map.get(key);
		for k, v in config.items():
			setattr(self, k, v);
		return

def create_Mapinfo(key):
		config = mapinfo_map.get(key);
		if not config:
			return
		return Mapinfo(key)

