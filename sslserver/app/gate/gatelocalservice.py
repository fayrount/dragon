#coding:utf8
from firefly.server.globalobject import GlobalObject
from firefly.utils.services import CommandService
from twisted.internet import defer
from twisted.python import log
import json




class GateLocalService(CommandService):
    
    def callTargetSingle(self,targetKey,*args,**kw):
        '''call Target by Single
        @param conn: client connection
        @param targetKey: target ID
        @param data: client data
        '''
        
        self._lock.acquire()
        try:
            target = self.getTarget(targetKey)
            if not target:
                log.err('the command '+str(targetKey)+' not Found on service')
                return None
            if targetKey not in self.unDisplay:
                log.msg("call method %s on service[single]"%target.__name__)
            defer_data = target(targetKey,*args,**kw)
            if not defer_data:
                return None
            if isinstance(defer_data,defer.Deferred):
                return defer_data
            d = defer.Deferred()
            d.callback(defer_data)
        finally:
            self._lock.release()
        return d
    #end def
    
#end class

gateLocalService = GateLocalService("gateLocalService")

def gate_localservice_handle(target):
    gateLocalService.mapTarget(target)
#end def













