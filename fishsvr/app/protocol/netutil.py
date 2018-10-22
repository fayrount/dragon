#coding:utf8

import protocolbuf
def c2s_buf2data(desc_name,buf):
    pb = protocolbuf.protocolbuf();
    return pb.c2s_buf2data(desc_name,buf);
def s2c_data2buf(desc_name,d):
    pb = protocolbuf.protocolbuf();
    return pb.s2c_data2buf(desc_name,d);