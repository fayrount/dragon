# -*- coding: utf-8 -*-

'''
Author: Hannibal
Data: 
Desc: local data config
NOTE: Don't modify this file, it's build by xml-to-python!!!
'''


itemmerge_map = {};
itemmerge_map[101] = {"shape":101,"src1":512,"src2":512,};


class Itemmerge:
	def __init__(self, key):
		config = itemmerge_map.get(key);
		for k, v in config.items():
			setattr(self, k, v);
		return

def create_Itemmerge(key):
		config = itemmerge_map.get(key);
		if not config:
			return
		return Itemmerge(key)

