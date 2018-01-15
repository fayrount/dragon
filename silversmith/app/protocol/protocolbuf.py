#coding:utf8
import ProtocolDesc
import struct
from twisted.python import log
class protocolbuf:
    def __init__(self):
        return
    def has_desc(self,name):
        return ProtocolDesc.Protocol_desc.has_key(name);
    def get_desc_byname(self,name):
        return ProtocolDesc.Protocol_desc[name];
    def pack_int8(self,v):
        return struct.pack("B",v);
    def unpack_int8(self,buf,start):
        #log.msg("unpack_int8 ",len(buf),start) 
        subbuf = buf[start:start+1]
        start += 1;
        ret = struct.unpack("!B",subbuf)[0]
        #log.msg("unpack_int8 ret ",ret)
        return ret,start;
    def pack_int16(self,v):
        return struct.pack("!H",v);
    def unpack_int16(self,buf,start):
        #log.msg("unpack_int16 ",len(buf),start) 
        subbuf = buf[start:start+2]
        start += 2;
        ret = struct.unpack("!H",subbuf)[0]
        #log.msg("unpack_int16 ret ",ret)
        return ret,start;
    def pack_int32(self,v):
        return struct.pack("!I",v);
    def unpack_int32(self,buf,start):
        #log.msg("unpack_int32 ",len(buf),start) 
        subbuf = buf[start:start+4]
        start += 4;
        ret = struct.unpack("!I",subbuf)[0]
        #log.msg("unpack_int32 ret ",ret)
        return ret,start;
    def pack_string8(self,v):
        ret = self.pack_int32(len(v));
        sret = struct.pack("!%ds"%(len(v)),v);
        return ret+sret;
    def unpack_string8(self,buf,start):
        #log.msg("unpack_string8 ",len(buf),start) 
        count,start = self.unpack_int32(buf,start);
        subbuf = buf[start:start+count]
        start += count;
        sret = struct.unpack("!%ds"%(count),subbuf)[0];
        return sret,start;
    def pack_string16(self,v):
        ret = self.pack_int32(len(v));
        sret = struct.pack("!%ds"%(len(v)),v);
        return ret+sret;
    def unpack_string16(self,buf,start):
        #log.msg("unpack_string16 ",len(buf),start) 
        count,start = self.unpack_int32(buf,start);
        #log.msg("unpack_string161 ",len(buf),start,count)
        subbuf = buf[start:start+count]
        start += count;
        sret = struct.unpack("!%ds"%(count),subbuf)[0];
        return sret,start;
    def pack_string32(self,v):
        ret = self.pack_int32(len(v));
        sret = struct.pack("!%ds"%(len(v)),v);
        return ret+sret;
    def unpack_string32(self,buf,start):
        #log.msg("unpack_string32 ",len(buf),start) 
        count,start = self.unpack_int32(buf,start);
        subbuf = buf[start:start+count]
        start += count;
        sret = struct.unpack("!%ds"%(count),subbuf)[0];
        return sret,start;
    def pack_int_data(self,t,v):
        if t == 'int8':
            return self.pack_int8(v);
        elif t == 'int16':
            return self.pack_int16(v);
        elif t == 'int32':
            return self.pack_int32(v);
        return
    def unpack_int_data(self,t,buf,start):
        if t == 'int8':
            return self.unpack_int8(buf,start);
        elif t == 'int16':
            return self.unpack_int16(buf,start);
        elif t == 'int32':
            return self.unpack_int32(buf,start);
        return
    def pack_string_data(self,t,v):
        if t == 'string8':
            return self.pack_string8(v);
        elif t == 'string16':
            return self.pack_string16(v);
        elif t == 'string32':
            return self.pack_string32(v);
        return
    def unpack_string_data(self,t,buf,start):
        if t == 'string8':
            return self.unpack_string8(buf,start);
        elif t == 'string16':
            return self.unpack_string16(buf,start);
        elif t == 'string32':
            return self.unpack_string32(buf,start);
        return
    def pack_data(self,t,v,d):
        if t == "int8" or t == "int16" or t == "int32":
            return self.pack_int_data(t,d);
        elif t == "string8" or t == "string16" or t == "string32":
            return self.pack_string_data(t,d);
        elif t == "list8" or t == "list16" or t == "list32":
            count = len(d);
            ret = ""
            if t == "list8":
                ret = self.pack_int8(count);
            elif t == "list16":
                ret = self.pack_int16(count);
            elif t == "list32":
                ret = self.pack_int32(count);
            st = v;
            for i in d:
                if st == "int8" or st == "int16" or st == "int32":
                    ret += self.pack_int_data(st,i);
                elif st == "string8" or st == "string16" or st == "string32":
                    ret += self.pack_string_data(st,i);
                else:
                    desc = self.get_desc_byname(st);
                    for j in desc:
                        p = j[0]
                        sst = j[1]
                        ssv = j[2];
                        ret += self.pack_data(sst,ssv,i[p]);
            return ret;
    def unpack_data(self,t,v,buf,start):
        if t == "int8" or t == "int16" or t == "int32":
            return self.unpack_int_data(t,buf,start);
        elif t == "string8" or t == "string16" or t == "string32":
            return self.unpack_string_data(t,buf,start);
        elif t == "list8" or t == "list16" or t == "list32":
            count = 0;
            if t == "list8":
                count,start = self.unpack_int8(buf,start);
            elif t == "list16":
                count,start = self.unpack_int16(buf,start);
            elif t == "list32":
                count,start = self.unpack_int32(buf,start);
            st = v;
            ret = [];
            for i in xrange(0,count):
                if st == "int8" or st == "int16" or st == "int32":
                    sv,start = self.unpack_int_data(st,buf,start);
                    ret.append(sv);
                elif st == "string8" or st == "string16" or st == "string32":
                    sv,start = self.unpack_string_data(st,buf,start);
                    ret.append(sv);
                else:
                    desc = self.get_desc_byname(st);
                    iret = {};
                    for j in desc:
                        ssp = j[0];
                        sst = j[1];
                        ssv = j[2];
                        iret[ssp],start = self.unpack_data(sst,ssv,buf,start);
                    ret.append(iret);
            return ret,start;
    def c2s_buf2data(self,desc_name,buf):
        ret = {};
        if self.has_desc(desc_name):
            start = 0;
            desc = self.get_desc_byname(desc_name);
            for i in desc:
                p = i[0];
                t = i[1];
                v = i[2];
                ret[p],start = self.unpack_data(t,v,buf,start);
        return ret;
    def s2c_data2buf(self,desc_name,d):
        ret = "";
        if self.has_desc(desc_name):
            desc = self.get_desc_byname(desc_name);
            for i in desc:
                p = i[0]
                t = i[1]
                v = i[2]
                ret += self.pack_data(t,v,d[p]);
        return ret;
    


