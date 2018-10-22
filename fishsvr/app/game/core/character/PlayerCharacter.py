#coding:utf8
'''
Created on 2011-3-23

@author: sean_lan
'''


from app.game.core.character.Character import Character

from app.game.memmode import tb_character_admin


class PlayerCharacter(Character):
    '''玩家角色类'''
    def __init__(self , cid , name = u'城管', dynamicId = -1,status = 1):
        '''构造方法
        @dynamicId （int） 角色登陆的动态ID socket连接产生的id
        '''
        Character.__init__(self, cid, name)
        self.setCharacterType(Character.PLAYERTYPE)#设置角色类型为玩家角色
        self.dynamicId = dynamicId    #角色登陆服务器时的动态id
        self.scene_id = 0;
        self.x = 0;
        self.y = 0;
        self.shape = 0;
        self.lv = 0;
        self.cls = 0;
        self.name = "";
        #--------角色的各个组件类------------
        if status:
            self.initPlayerInfo() #初始化角色
        
    def initPlayerInfo(self):
        '''初始化角色信息'''
        pid = self.baseInfo.id
        pmmode = tb_character_admin.getObj(pid)
        data = pmmode.get("data")
        if not data:
            print "Inint_player _"+str(self.baseInfo.id)
        #------------初始化角色基础信息组件---------
        self.baseInfo.setType(data['viptype'])  #角色VIP类型
        self.baseInfo.setnickName(data['nickname']) #角色昵称
        self.x = data['position_x'];
        self.y = data['position_y'];
        self.scene_id = data['town'];
        self.shape = data['figure'];
        self.lv = data['level'];
        self.name = data['nickname'];
        if isinstance(self.name,unicode):
            self.name = self.name.encode('utf-8');
        self.cls = data['profession'];
    def getDynamicId(self):
        '''获取角色的动态Id'''
        return self.dynamicId
    
    def formatInfo(self):
        '''格式化角色基本信息'''
        characterInfo = {}
        characterInfo['id'] = self.baseInfo.id#角色的ID
        characterInfo['nickname'] = self.baseInfo.getNickName()#角色的昵称
        characterInfo['roletype'] = self.baseInfo.getType()
        return characterInfo
         
    def CheckClient(self,dynamicId):
        '''检测客户端id是否匹配'''
        if self.dynamicId ==dynamicId:
            return True
        return False
        
    def updatePlayerDBInfo(self):
        '''更新角色在数据库中的数据'''
        pid = self.baseInfo.id
        pmmode = tb_character_admin.getObj(pid)
        mapping = {'level':self.lv,'coin':0,'figure':self.shape,'nickname':self.name,'profession':self.cls,
                   'gold':0,'exp':0,
                   'energy':0,'position_x':self.x,'position_y':self.y,'town':self.scene_id}
        pmmode.update_multi(mapping)

    def getFightData(self,preDict = {'extVitper':0,'extStrper':0,
                                 'extDexper':0,'extWisper':0,'extSpiper':0}):
        '''获取战斗数据'''
        fightdata = {}
        fightdata['chaId'] = self.baseInfo.id               #角色的ID
        fightdata['chaName'] = self.baseInfo.getNickName()  #角色的昵称
        return fightdata
        
    def formatInfoForWeiXin(self):
        '''格式化角色信息
        '''
        info = {}
        info['chaid'] = self.baseInfo.id
        info['rolename'] = self.baseInfo.getNickName()
        return info
        
