#coding:utf8
'''
Created on 2012-2-27

@author: sean_lan
'''
from app.gate.appinterface import login
import json
from app.gate.gateservice import localserviceHandle
import app.protocol.netutil as netutil
from twisted.python import log
from firefly.server.globalobject import GlobalObject
@localserviceHandle
def loginToServer_1(key,dynamicId,request_proto):
    return


