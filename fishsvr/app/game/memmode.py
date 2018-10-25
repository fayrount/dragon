#-*-coding:utf8-*-
'''
Created on 2013-6-5

@author: lan
'''
from firefly.dbentrust.mmode import MAdmin

tb_character_admin = MAdmin('tb_character','id',incrkey='id')
tb_character_admin.insert()
tb_item_admin = MAdmin('tb_item','id',fk ='characterId',incrkey='id')
tb_item_admin.insert()
tb_itemopen_admin = MAdmin('tb_item_open','id',fk ='characterId',incrkey='id')
tb_itemopen_admin.insert()