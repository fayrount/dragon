#coding:utf8

from firefly.server.globalobject import netserviceHandle
from firefly.server.globalobject import GlobalObject
import time
import protocol.protocol_pb2
import protocol.protocolbuf
from twisted.python import log
@netserviceHandle
def echo_1(_conn,data):
    log.msg("enter echo_1 ",len(data));
    pb = protocol.protocolbuf.protocolbuf();
    chat_msg = pb.c2s_buf2data("chat_msg",data);
    send_buf = pb.s2c_data2buf("chat_msg",chat_msg);
    log.msg("quit echo_1 ",chat_msg["id"],chat_msg["content"],len(send_buf));

    lis = GlobalObject().netfactory.connmanager._connections.keys()     #获取所有在线用户
    lis.remove(_conn.transport.sessionno)                               #移除发言者本身，                      (补充说明：避免和客户端显示重复)
    #GlobalObject().netfactory.pushObject(1, chat_msg.SerializeToString(), [_conn.transport.sessionno])         #向用户群发送当前发言者发言信息
    #GlobalObject().netfactory.pushObject(1, send_buf, [_conn.transport.sessionno])         #向用户群发送当前发言者发言信息
    #return;
    return send_buf;

    


