# -*- coding: utf-8 -*-

'''
Author: Hannibal
Data: 
Desc: local data config
NOTE: Don't modify this file, it's build by xml-to-python!!!
'''


item_map = {};
item_map[1001] = {"shape":1001,"price":5504,"goldspd":3456,};
item_map[1700] = {"shape":1700,"price":1536,"goldspd":1152,};


class Item:
	def __init__(self, key):
		config = item_map.get(key);
		for k, v in config.items():
			setattr(self, k, v);
		return

def create_Item(key):
		config = item_map.get(key);
		if not config:
			return
		return Item(key)

