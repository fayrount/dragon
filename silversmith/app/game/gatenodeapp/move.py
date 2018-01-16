#coding:utf8
'''
Created on 2018-1-16
'''
from app.game.gatenodeservice import remoteserviceHandle
from app.game.core.character.PlayerCharacter import PlayerCharacter
from app.game.core.PlayersManager import PlayersManager
import app.protocol.netutil as netutil
import app.protocol.protocol_def as protocol_def
from twisted.python import log
from firefly.server.globalobject import GlobalObject

@remoteserviceHandle
def roleMove_4(dynamicId,request_proto):
    log.msg('roleMove_4 %s ' % (dynamicId));
    argument = netutil.c2s_buf2data("c2s_role_move",request_proto);
    dynamicId = dynamicId
    x = argument['x']
    y = argument['y']
    log.msg('roleMove x y ',x,y);
    player = PlayersManager().getPlayerBydynamicId(dynamicId);
    if not player:
        log.msg('move error!have not this role ',dynamicId);
        return;
    player.x = x;
    player.y = y;
    ret = {};
    ret['id'] = player.getBaseID();
    ret['x'] = x;
    ret['y'] = y;
    #log.msg('player id x y ',ret);
    buf = netutil.s2c_data2buf("s2c_role_move",ret)

    GlobalObject().remote['gate'].callRemote("pushObjectOthers",protocol_def.s2c_role_move,buf, [dynamicId])
    return

                    
