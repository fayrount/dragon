#coding:utf8


from firefly.server.globalobject import GlobalObject, rootserviceHandle
from gate.gatelocalservice import gateLocalService


@rootserviceHandle
def netconnlost(dynamicId):
    '''客户端断开连接时的处理
    @param dynamicId: int 客户端的动态ID
    '''
@webserviceHandle('/test')
def test():
    print("test func");
    return "test succeed";


