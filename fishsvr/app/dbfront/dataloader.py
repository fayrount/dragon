#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
import memmode
from firefly.dbentrust.madminanager import MAdminManager
from twisted.internet import reactor
reactor = reactor


    
def registe_madmin():
    """注册数据库与memcached对应
    """
    MAdminManager().registe( memmode.tb_character_admin)
    
def CheckMemDB(delta):
    """同步内存数据到数据库
    """
    MAdminManager().checkAdmins()
    reactor.callLater(delta,CheckMemDB,delta)
    

    
    
    
    