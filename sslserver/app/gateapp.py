#coding:utf8


from firefly.server.globalobject import GlobalObject, rootserviceHandle,webserviceHandle
from gate.gatelocalservice import gateLocalService
from twisted.web import resource

@rootserviceHandle
def netconnlost(dynamicId):
    '''客户端断开连接时的处理
    @param dynamicId: int 客户端的动态ID
    '''
@webserviceHandle('/testweb')
class testweb(resource.Resource):
    '''stop service'''
    
    def render(self, request):
    	print "test web render "+str(request);
    	print "args "+str(request.args);
        return "testweb succeed"


