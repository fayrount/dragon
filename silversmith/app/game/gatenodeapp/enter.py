#coding:utf8
'''
Created on 2013-8-14

@author: lan
'''
from app.game.gatenodeservice import remoteserviceHandle
from app.game.core.character.PlayerCharacter import PlayerCharacter
from app.game.core.PlayersManager import PlayersManager
import app.protocol.netutil as netutil
import app.protocol.protocol_def as protocol_def
from twisted.python import log
from firefly.server.globalobject import GlobalObject

@remoteserviceHandle
def enterPlace_601(dynamicId, characterId,force,player):
    '''进入场景'''
    log.msg('enterPlace_601 %s %s %s %s ' % (dynamicId,characterId,force,player));
    if not player:
        player = PlayerCharacter(characterId,dynamicId = dynamicId)
    PlayersManager().addPlayer(player)
    ret = {};
    ret['sceneid'] = player.scene_id;
    ret['x'] = player.x;
    ret['y'] = player.y;
    log.msg('player sceneid x y ',ret);
    buf = netutil.s2c_data2buf("s2c_enterscene",ret)
    GlobalObject().remote['gate'].callRemote("pushObject",protocol_def.s2c_enterscene,buf, [dynamicId])

    id = characterId;
    shape = player.shape;
    lv = player.lv;
    cls = player.cls;
    name = player.name;
    log.msg("role enter ",id,shape,lv,cls,name);
    buf = netutil.s2c_data2buf("s2c_role_enter",{'id':id,'shape':shape,'class':cls,'lv':lv,'name':name,'x':player.x,'y':player.y});
    GlobalObject().remote['gate'].callRemote("pushObjectOthers",protocol_def.s2c_role_enter,buf, [dynamicId])

    allothers = PlayersManager().getAll();
    log.msg("role list ",len(allothers));
    for i in allothers:
        player = i;
        id = player.getBaseID();
        log.msg("other roles id ",id,characterId);
        if id != characterId:
            shape = player.shape;
            lv = player.lv;
            cls = player.cls;
            name = player.name;
            x = player.x;
            y = player.y;
            log.msg("other roles ",id,shape,lv,cls,name,x,y);
            buf = netutil.s2c_data2buf("s2c_role_enter",{'id':id,'shape':shape,'class':cls,'lv':lv,'name':name,'x':x,'y':y});
            GlobalObject().remote['gate'].callRemote("pushObject",protocol_def.s2c_role_enter,buf, [dynamicId])
    return

                    
