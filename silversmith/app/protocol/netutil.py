#coding:utf8

import protocol.protocolbuf
def c2s_buf2data(desc_name,buf):
    pb = protocol.protocolbuf.protocolbuf();
    return pb.c2s_buf2data(desc_name,buf);
def s2c_data2buf(desc_name,d):
    pb = protocol.protocolbuf.protocolbuf();
    return pb.s2c_data2buf(desc_name,d);