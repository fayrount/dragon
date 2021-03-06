#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
from firefly.server.globalobject import rootserviceHandle,GlobalObject
from app.gate.gateservice import localservice
from app.gate.core.UserManager import UsersManager
from app.gate.core.VCharacterManager import VCharacterManager
from app.gate.core.scenesermanger import SceneSerManager
from twisted.python import log

@rootserviceHandle
def forwarding(key,dynamicId,data):
    """
    """
    if localservice._targets.has_key(key):
        return localservice.callTarget(key,dynamicId,data)
    else:
        user = UsersManager().getUserByDynamicId(dynamicId)
        if not user:
            return
        oldvcharacter = VCharacterManager().getVCharacterByClientId(dynamicId)
        if not oldvcharacter:
            return
        if oldvcharacter.getLocked():#判断角色对象是否被锁定
            return
        node = VCharacterManager().getNodeByClientId(dynamicId)
        return GlobalObject().root.callChild(node,key,dynamicId,data)
    

@rootserviceHandle
def pushObject(topicID,msg,sendList):
    """
    """
    GlobalObject().root.callChild("net","pushObject",topicID,msg,sendList)
@rootserviceHandle
def pushObjectOthers(topicID,msg,exclude_list):
    """
    """
    GlobalObject().root.callChild("net","pushObjectOthers",topicID,msg,exclude_list)
@rootserviceHandle
def callAllSces(topicID,dynamicId, characterId,data):
    """
    """
    allsceids = SceneSerManager().getAllSceId();
    log.msg("callAllSces ",len(allsceids),allsceids);
    for i in allsceids:
        GlobalObject().root.callChild(i,topicID,dynamicId, characterId,data);


@rootserviceHandle
def loseConnect(id):
    """
    """
    GlobalObject().root.callChild("net","loseConnect",id)

def SavePlayerInfoInDB(dynamicId):
    '''将玩家信息写入数据库'''
    vcharacter = VCharacterManager().getVCharacterByClientId(dynamicId)
    node = vcharacter.getNode()
    d = GlobalObject().root.callChild(node,600002,dynamicId)
    return d

def SaveDBSuccedOrError(result,vcharacter):
    '''写入角色数据成功后的处理
    @param result: 写入后返回的结果
    @param vcharacter: 角色的实例
    '''
    vcharacter.release()#释放角色锁定
    return True

def dropClient(deferResult,dynamicId,vcharacter):
    '''清理客户端的记录
    @param result: 写入后返回的结果
    '''
    node = vcharacter.getNode()
    if node:#角色在场景中的处理
        SceneSerManager().dropClient(node, dynamicId)
        
    VCharacterManager().dropVCharacterByClientId(dynamicId)
    UsersManager().dropUserByDynamicId(dynamicId)

@rootserviceHandle
def netconnlost(dynamicId):
    '''客户端断开连接时的处理
    @param dynamicId: int 客户端的动态ID
    '''
    vcharacter = VCharacterManager().getVCharacterByClientId(dynamicId)
    if vcharacter and vcharacter.getNode()>0:#判断是否已经登入角色
        vcharacter.lock()#锁定角色
        d = SavePlayerInfoInDB(dynamicId)#保存角色,写入角色数据
        d.addErrback(SaveDBSuccedOrError,vcharacter)#解锁角色
        d.addCallback(dropClient,dynamicId,vcharacter)#清理客户端的数据
    else:
        UsersManager().dropUserByDynamicId(dynamicId)





