#coding:utf8

from firefly.server.globalobject import netserviceHandle
from firefly.server.globalobject import GlobalObject
import time
import protocol.protocol_pb2
from twisted.python import log
@netserviceHandle
def echo_1(_conn,data):
    log.msg("enter echo_1");
    chat_msg = protocol.protocol_pb2.ChatMsg();
    chat_msg.ParseFromString(data);
    ret_msg = '%d said %s'%(chat_msg.id,chat_msg.content);
    chat_msg.content = ret_msg;
    log.msg("quit echo_1 ",chat_msg.id,chat_msg.content);

    lis = GlobalObject().netfactory.connmanager._connections.keys()     #获取所有在线用户
    lis.remove(_conn.transport.sessionno)                               #移除发言者本身，                      (补充说明：避免和客户端显示重复)
    #GlobalObject().netfactory.pushObject(1, chat_msg.SerializeToString(), [_conn.transport.sessionno])         #向用户群发送当前发言者发言信息
    GlobalObject().netfactory.pushObject(1, "hello hello hello获取所有", [_conn.transport.sessionno])         #向用户群发送当前发言者发言信息
    return;
    #return chat_msg.SerializeToString();

    


