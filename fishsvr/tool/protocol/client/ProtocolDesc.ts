module protocol_def{

export let Protocol_desc = {
	'version':[['major ', 'int16', ''],['minor', 'int16', ''],['patch', 'int16', ''],],
	'ptyperow':[['tid', 'int16', ''],['name', 'string8', ''],['subtid', 'int16', ''],],
	'protocoltype':[['tid', 'int16', ''],['name', 'string8', ''],['fileds', 'list8', 'ptyperow'],],
	'pdescrow':[['name', 'string8', ''],['tid', 'int16', ''],['subtid', 'int16', ''],],
	'protocoldesc':[['cmd', 'uint16', ''],['fileds', 'list8', 'pdescrow'],],
	'role':[['rid', 'int32', ''],['shape', 'int16', ''],['cls', 'int8', ''],['grade', 'int16', ''],['desc', 'byte8', ''],['flag', 'int8', ''],['newtm', 'int32', ''],['theme', 'int8', ''],['name', 'string8', ''],['offline', 'int32', ''],['logintm', 'int32', ''],['orgsrvid', 'int32', ''],],
	'roleinfo':[['rid', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['desc', 'byte8', ''],['cls', 'int8', ''],['grade', 'int16', ''],['vip', 'int8', ''],['battle', 'int32', ''],],
	'prop8':[['idx', 'uint8', ''],['value', 'int8', ''],],
	'prop16':[['idx', 'uint8', ''],['value', 'int16', ''],],
	'prop32':[['idx', 'uint8', ''],['value', 'int32', ''],],
	'propstr':[['idx', 'uint8', ''],['value', 'string8', ''],],
	'propbyte':[['idx', 'uint8', ''],['value', 'byte8', ''],],
	'battleratio':[['idx', 'uint8', ''],['ratio', 'uint16', ''],],
	'reputedata':[['rtype', 'uint8', ''],['value', 'int32', ''],['total', 'int32', ''],],
	'npctalkopt':[['idx', 'int32', ''],['name', 'string8', ''],],
	'item':[['id', 'int32', ''],['sid', 'int32', ''],['amount', 'int32', ''],['pos', 'int16', ''],['key', 'int8', ''],['quality', 'int8', ''],['extra', 'int8', ''],['battle', 'int32', ''],],
	'reward':[['rtype', 'int8', ''],['value', 'int32', ''],],
	'rewarditem':[['sid', 'int32', ''],['amount', 'int16', ''],['quality', 'int8', ''],],
	'warpropinfo':[['props16', 'list8', 'prop16'],['props32', 'list8', 'prop32'],['battle', 'int32', ''],],
	'equipgrowinfo':[['pos', 'int8', ''],['lvl', 'int16', ''],['props', 'list8', 'warpropinfo'],['nextprops', 'list8', 'warpropinfo'],],
	'skill':[['sid', 'uint16', ''],['lv', 'uint8', ''],],
	'skilllearncost':[['sid', 'uint16', ''],['cost', 'int32', ''],],
	'summon':[['sid', 'int16', ''],['shape', 'int16', ''],['quality', 'int8', ''],['name', 'string8', ''],['grade', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['skills', 'list8', 'skill'],['battle', 'int32', ''],],
	'summonapt':[['sid', 'int16', ''],['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['aptsklv', 'uint8', ''],],
	'mailsimple':[['id', 'int32', ''],['status', 'int8', ''],['title', 'string8', ''],['sendtime', 'int32', ''],['hasattach', 'int8', ''],],
	'mail':[['id', 'int32', ''],['status', 'int8', ''],['rewards', 'list8', 'reward'],['items', 'list8', 'rewarditem'],['content', 'string16', ''],],
	'teammemberinfo':[['pid', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['desc', 'byte8', ''],['cls', 'int8', ''],['grade', 'int16', ''],['vip', 'int8', ''],['battle', 'int32', ''],],
	'teaminfo':[['teamid', 'int32', ''],['leader', 'teammemberinfo', ''],['memcnt', 'int8', ''],],
	'partner':[['sid', 'int16', ''],['shape', 'int16', ''],['quality', 'int8', ''],['name', 'string8', ''],['grade', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['skills', 'list8', 'skill'],['battle', 'int32', ''],],
	's2c_rolelist_info':[['id', 'int32', ''],['shape', 'int16', ''],['class', 'int8', ''],['lv', 'int16', ''],['name', 'string8', ''],],
	'yaoguai':[['id', 'int32', ''],['index', 'int16', ''],['star', 'int8', ''],],
	'qmbossdesc':[['bossid', 'int16', ''],['status', 'int8', ''],['fighter', 'int8', ''],['hprate', 'int8', ''],['rebirthtime', 'int32', ''],],
	'qmbossdmg':[['id', 'int32', ''],['name', 'string8', ''],['damage', 'int32', ''],],
	'qmbosskill':[['second', 'int32', ''],['name', 'string8', ''],['battlevalue', 'int32', ''],],
	'rank_data':[['data16', 'list8', 'int16'],['data32', 'list8', 'int32'],['datastr', 'list8', 'string8'],],
	'shopitem':[['index', 'int32', ''],['exchanged', 'int32', ''],['validcond', 'int8', ''],],
	'scpasssecrwd':[['sceneid', 'int16', ''],['sectionid', 'int16', ''],],
	'mfbinfo':[['fubenid', 'int16', ''],['fighted', 'int8', ''],['saodang', 'int8', ''],],
	'arena_worrior':[['ranking', 'int16', ''],['name', 'string8', ''],['battle', 'int32', ''],['shape', 'int16', ''],['desc', 'byte8', ''],],
	'arena_record':[['win', 'int8', ''],['rise', 'int16', ''],['challenge', 'int8', ''],['name', 'string8', ''],['second', 'int32', ''],],
	'simplerole':[['roleid', 'int32', ''],['shape', 'int16', ''],['name', 'string8', ''],],
	'friendinfo':[['roleid', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['grade', 'int16', ''],['vip', 'int8', ''],['online', 'int8', ''],['battlevalue', 'int32', ''],['gangid', 'int32', ''],['gangname', 'string8', ''],],
	'wildbossstatus':[['bossid', 'int16', ''],['status', 'int8', ''],['nexttime', 'int32', ''],],
	'treasurestar':[['treasureid', 'int16', ''],['star', 'int8', ''],],
	'treasurerwd':[['mapid', 'int16', ''],['stars', 'int8', ''],],
	'tsumeko_progress':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],],
	'tsumeko_puzzle':[['puzzle', 'int8', ''],['roomid', 'int32', ''],['challenge', 'int8', ''],['box', 'int8', ''],],
	'tsumeko_record':[['names', 'list8', 'string8'],['bout', 'int16', ''],['time', 'int32', ''],],
	'traveltime':[['eid', 'int16', ''],['cnt', 'int8', ''],],
	'gangmember':[['id', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['battlevalue', 'int32', ''],['position', 'int8', ''],['gangcontribution', 'int32', ''],['lastoffline', 'int32', ''],],
	'gangrequest':[['id', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['battlevalue', 'int32', ''],],
	'gangdesc':[['id', 'int32', ''],['name', 'string8', ''],['level', 'int8', ''],['member', 'int8', ''],['leadername', 'string8', ''],['autopass', 'int32', ''],],
	'ganginclog':[['time', 'int32', ''],['name', 'string8', ''],['inctype', 'int8', ''],],
	'escort_car':[['rid', 'uint32', ''],['sid', 'uint32', ''],['start', 'uint32', ''],['end', 'uint32', ''],['left', 'uint32', ''],['quality', 'uint8', ''],['battle', 'int32', ''],['name', 'string8', ''],['gang', 'string8', ''],['shape', 'int16', ''],],
	'escort_records':[['id', 'uint16', ''],['attack', 'int8', ''],['rid', 'uint32', ''],['sid', 'uint32', ''],['name', 'string8', ''],['quality', 'uint8', ''],['time', 'uint32', ''],['result', 'int8', ''],['state', 'int8', ''],],
	'ganglog':[['logtype', 'int8', ''],['time', 'int32', ''],['args', 'list8', 'string8'],],
	'gangskillinfo':[['pos', 'int16', ''],['lvl', 'int16', ''],['prop', 'warpropinfo', ''],],
	'gang_boss_damage':[['name', 'string8', ''],['grade', 'int16', ''],['rate', 'int8', ''],],
	'best_player':[['rid', 'uint32', ''],['name', 'string8', ''],['srvid', 'int32', ''],['state', 'int8', ''],],
	'best_winner':[['rid', 'uint32', ''],['name', 'string8', ''],['srvid', 'int32', ''],['win', 'uint8', ''],['lose', 'uint8', ''],['battle', 'int32', ''],['lvl', 'uint16', ''],['shape', 'int16', ''],['desc', 'byte8', ''],],
	'best_fighter':[['rid', 'uint32', ''],['name', 'string8', ''],['srvid', 'int32', ''],['battle', 'int32', ''],['lvl', 'uint16', ''],['shape', 'int16', ''],['desc', 'byte8', ''],],
	'goldtreasure_rare':[['sid', 'int32', ''],['amount', 'int16', ''],['name', 'string8', ''],],
	'growuprwd':[['rewardtype', 'int8', ''],['rewarded', 'list8', 'int8'],],
	'gcexchange':[['index', 'int8', ''],['exchangeid', 'int8', ''],['times', 'int8', ''],],
	'gangflower':[['index', 'int8', ''],['roleid', 'int32', ''],],
	'hegemony_defender':[['rid', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['desc', 'byte8', ''],['cls', 'int8', ''],['grade', 'int16', ''],['battle', 'int32', ''],['hp', 'int16', ''],],
	'hegemony_mine_info':[['mid', 'int16', ''],['camp', 'int8', ''],['name', 'string8', ''],['shape', 'int16', ''],['num', 'int16', ''],],
	'hegemony_role':[['rid', 'uint32', ''],['camp', 'int8', ''],['x', 'int16', ''],['y', 'int16', ''],['name', 'string8', ''],['shape', 'int16', ''],['team', 'int8', ''],],
	'qmjjcount':[['index', 'int8', ''],['count', 'int16', ''],],
	'hegemony_score':[['camp', 'int8', ''],['score', 'int32', ''],],
	'discsgoods':[['goodsid', 'int8', ''],['bought', 'int16', ''],],
	'groupbuyrw':[['cnt', 'int16', ''],['gold', 'int16', ''],],
	'cookbattle_result':[['result_idx', 'int8', ''],['result', 'int8', ''],['subject_style', 'int8', ''],['recipe', 'int8', ''],['rival_style', 'int8', ''],['rival_level', 'int8', ''],],
	'cookbattle_recipe':[['style', 'int8', ''],['recipe', 'int8', ''],['amount', 'int16', ''],],
	'wulin_rank_info':[['rid', 'uint32', ''],['score', 'uint32', ''],['name', 'string8', ''],['srvid', 'int32', ''],],
	'C2S_WEBSOCKET_HELLO':[['msg', 'string16', ''],],
	'S2C_WEBSOCKET_HELLO':[['msg', 'string16', ''],],
	'S2C_MERGE_PACKET':[['packets', 'list8', 'byte8'],],
	'C2S_LOGIN_ASYN_TIME':[['time', 'uint32', ''],['sign', 'string16', ''],],
	'C2S_LOGIN':[['clientver', 'version', ''],['scriptver', 'version', ''],['productver', 'version', ''],['account', 'string8', ''],['pwd', 'string8', ''],['platform', 'int8', ''],['client_type', 'int32', ''],['device', 'string8', ''],['ret_session', 'int8', ''],['token', 'string16', ''],['hwinfo', 'string8', ''],['idfa', 'string8', ''],],
	'C2S_LOGIN_SESSION':[['pid', 'uint32', ''],['session', 'byte16', ''],],
	'C2S_LOGIN_GM':[['account', 'string8', ''],['pwd', 'string8', ''],],
	'C2S_LOGIN_SELECTROLE':[['rid', 'int32', ''],],
	'C2S_LOGIN_CLIENTREADY':[],
	'C2S_LOGIN_CREATEROLE':[['cls', 'int8', ''],['shape', 'int16', ''],['name', 'string8', ''],['rolenum', 'int8', ''],],
	'C2S_LOGIN_DELETEROLE':[['rid', 'int32', ''],],
	'C2S_LOGIN_RESTOREROLE':[['rid', 'int32', ''],],
	'C2S_ACCOUNT_GUEST':[],
	'S2C_SYSTEM_VERSION':[['testtime', 'int8', ''],['clientver', 'version', ''],['scriptver', 'version', ''],['productver', 'version', ''],],
	'S2C_ASYNTIME':[['time', 'uint32', ''],['srvtime', 'uint32', ''],],
	'S2C_LOGIN':[['errcode', 'int8', ''],['errmsg', 'string16', ''],],
	'S2C_LOGIN_OK':[['flag', 'int8', ''],],
	'S2C_LOGIN_ROLEINFO':[['roles', 'list8', 'role'],],
	'S2C_LOGIN_SELECTROLE':[],
	'S2C_LOGIN_DELETEROLE':[['rid', 'int32', ''],],
	'S2C_LOGIN_RELOGIN':[],
	'S2C_LOGIN_SESSION':[['err', 'uint8', ''],],
	'S2C_LOGIN_UPDATESESSION':[['session', 'string16', ''],],
	'S2C_ACCOUNT_GUEST':[['account', 'string8', ''],['pwd', 'string8', ''],],
	'S2C_OPENTIME':[['opentime', 'uint32', ''],],
	'S2C_SERVER_INFO':[['srvid', 'int16', ''],['srvname', 'string8', ''],['opentime', 'uint32', ''],],
	'S2C_ACCOUNT_INFO':[['aid', 'int32', ''],['qudao', 'string8', ''],],
	'S2C_PROTOCOL_DESC':[['ptypes', 'list8', 'ptyperow'],['cusptypes', 'list16', 'protocoltype'],['c2sprotocols', 'list16', 'protocoldesc'],['s2cprotocols', 'list16', 'protocoldesc'],],
	'S2C_CLIENT_COMMAND':[['msg', 'string16', ''],],
	'C2S_CLIENT_SETTING':[['setting', 'byte8', ''],],
	'S2C_CLIENT_SETTING':[['setting', 'byte8', ''],],
	'C2S_SERVER_SETTING':[['autosmelt', 'int8', ''],],
	'S2C_SERVER_SETTING':[['autosmelt', 'int8', ''],],
	'C2S_ROLE_RENAME':[['name', 'string8', ''],],
	'C2S_CHANGE_SIGN':[['sign', 'string8', ''],],
	'S2C_ROLE_FREERENAME':[['freecnt', 'int8', ''],],
	'S2C_SERVER_ONDAY':[['hour', 'int8', ''],],
	'C2S_MAP_MOVE':[['x', 'int16', ''],['y', 'int16', ''],['step', 'list8', 'uint8'],],
	'C2S_MAP_PICK':[['id', 'int32', ''],],
	'S2C_MAP_TRACK':[['id', 'int32', ''],['x', 'int16', ''],['y', 'int16', ''],['dx', 'int8', ''],['dy', 'int8', ''],],
	'S2C_MAP_DEL':[['id', 'byte', ''],],
	'S2C_MAP_ADDPLAYER':[['id', 'int32', ''],['shape', 'int16', ''],['x', 'int16', ''],['y', 'int16', ''],['desc', 'byte8', ''],['name', 'string8', ''],],
	'S2C_MAP_ADDNPC':[['id', 'int32', ''],['sid', 'int32', ''],['shape', 'int16', ''],['x', 'int16', ''],['y', 'int16', ''],['dir', 'int8', ''],['desc', 'byte8', ''],['name', 'string8', ''],],
	'S2C_MAP_ADDGOODS':[['id', 'int32', ''],['shape', 'int16', ''],['x', 'int16', ''],['y', 'int16', ''],['owners', 'list8', 'int32'],['name', 'string8', ''],],
	'S2C_MAP_ADDSUMMON':[['pid', 'int32', ''],['id', 'int16', ''],['shape', 'int16', ''],['quality', 'int8', ''],['desc', 'byte8', ''],['name', 'string8', ''],],
	'S2C_MAP_DELSUMMON':[['pid', 'int32', ''],['id', 'int16', ''],],
	'S2C_MAP_ADDPARTNER':[['pid', 'int32', ''],['id', 'int16', ''],['shape', 'int16', ''],['quality', 'int8', ''],['desc', 'byte8', ''],['name', 'string8', ''],],
	'S2C_MAP_DELPARTNER':[['pid', 'int32', ''],['id', 'int16', ''],],
	'S2C_MAP_ROLESTATE':[['id', 'int32', ''],['state', 'int8', ''],],
	'S2C_MAP_CHANGESHAPE':[['id', 'int32', ''],['shape', 'int16', ''],['desc', 'byte8', ''],],
	'S2C_MAP_CHANGETITLE':[['id', 'int32', ''],['name', 'string8', ''],],
	'S2C_MAP_PLAYANI':[['id', 'int32', ''],['ani', 'int16', ''],['x', 'int16', ''],['y', 'int16', ''],],
	'S2C_MAP_ROLETITLE':[['id', 'int32', ''],['tid', 'int8', ''],],
	'S2C_HANGMAP_INFO':[['scsid', 'int16', ''],],
	'C2S_NPC_LOOK':[['id', 'int32', ''],],
	'C2S_NPC_RESPOND':[['idx', 'int32', ''],],
	'S2C_NPC_CHAT':[['id', 'int32', ''],['icon', 'int16', ''],['name', 'string8', ''],['text', 'string16', ''],['textid', 'int32', ''],['opts', 'list8', 'npctalkopt'],],
	'C2S_ITEM_USE':[['id', 'int32', ''],['amount', 'int32', ''],],
	'C2S_ITEM_BAGEXPAND':[['size', 'int16', ''],],
	'S2C_ITEM_LIST':[['items', 'list16', 'item'],],
	'S2C_ITEM_ADD':[['item', 'item', ''],],
	'S2C_ITEM_UPDATE':[['id', 'int32', ''],['amount', 'int32', ''],['pos', 'int16', ''],['key', 'int8', ''],],
	'S2C_ITEM_DEL':[['id', 'int32', ''],],
	'S2C_ITEM_BAGCOUNT':[['size', 'int16', ''],['goldsize', 'int16', ''],],
	'C2S_CHAT':[['ch', 'int8', ''],['msg', 'string16', ''],],
	'C2S_CHAT_GM':[['msg', 'string16', ''],],
	'S2C_CHAT':[['ch', 'int8', ''],['srvid', 'uint16', ''],['pid', 'int32', ''],['shape', 'int16', ''],['vip', 'int8', ''],['name', 'string8', ''],['msg', 'string16', ''],],
	'S2C_CHAT_SYSTEM':[['ch', 'int8', ''],['msg', 'string16', ''],],
	'S2C_NOTIFY_MESSAGE':[['boxtype', 'uint8', ''],['msg', 'string8', ''],['opt', 'string8', ''],['timeout', 'uint16', ''],],
	'S2C_NOTIFY_FLOAT':[['msg', 'string16', ''],],
	'S2C_NOTIFY_FLYMESSAGE':[['style', 'int8', ''],['msg', 'string16', ''],],
	'S2C_NOTIFY_FLYHINT':[['warid', 'int32', ''],['hint', 'uint8', ''],['sid', 'int32', ''],['num', 'int32', ''],['qua', 'int8', ''],],
	'S2C_NOTIFY_NOENOUGH':[['ctype', 'int8', ''],['sid', 'int32', ''],],
	'S2C_NOTIFY_REWARD':[['warid', 'int32', ''],['showtype', 'int8', ''],['rewards', 'list8', 'reward'],['items', 'list8', 'rewarditem'],],
	'S2C_NOTIFY_OFFLINEREWARD':[['exp', 'int32', ''],['money', 'int32', ''],['equip', 'int16', ''],['mcexp', 'int32', ''],['mcmoney', 'int32', ''],['mcequip', 'int16', ''],['smeltequip', 'int16', ''],['offtime', 'uint32', ''],],
	'C2S_HERO_LEVELUP':[],
	'S2C_HERO_PROP':[['props8', 'list8', 'prop8'],['props16', 'list8', 'prop16'],['props32', 'list8', 'prop32'],['propsstr', 'list8', 'propstr'],['propsbyte', 'list8', 'propbyte'],],
	'S2C_HERO_ENTERSCENE':[['id', 'int32', ''],['scid', 'int16', ''],['scsid', 'int16', ''],['resid', 'int16', ''],['scname', 'string8', ''],['x', 'int16', ''],['y', 'int16', ''],],
	'S2C_HERO_GOTO':[['x', 'int16', ''],['y', 'int16', ''],],
	'S2C_HERO_REPUTE':[['reputes', 'list8', 'reputedata'],],
	'S2C_BATTLE_RATIO':[['ratios', 'list8', 'battleratio'],],
	'C2S_EQUIP_SWITCH':[],
	'C2S_EQUIP_SMELT':[['mode', 'int8', ''],['items', 'list8', 'int32'],],
	'C2S_EQUIP_DECOMPOSE':[['id', 'int32', ''],],
	'C2S_EQUIP_ENHANCE':[['growtype', 'int8', ''],],
	'S2C_EQUIP_GROWINFO':[['growtype', 'int8', ''],['growinfo', 'list8', 'equipgrowinfo'],],
	'S2C_EQUIP_MASTER':[['growtype', 'int8', ''],['lvl', 'int16', ''],['req', 'int16', ''],['step', 'int8', ''],['props', 'warpropinfo', ''],['nextprops', 'warpropinfo', ''],],
	'S2C_EQUIP_ENHANCECOST':[['growtype', 'int8', ''],['uptime', 'int8', ''],['pos', 'int8', ''],['cost', 'int32', ''],],
	'S2C_EQUIP_SMELT':[],
	'C2S_SKILL_LEARN':[['mode', 'int8', ''],['sid', 'uint16', ''],],
	'C2S_SKILL_CONFIG':[['cfg', 'list8', 'uint16'],],
	'S2C_SKILL_LIST':[['skills', 'list8', 'skill'],],
	'S2C_SKILL_ADD':[['skill', 'skill', ''],],
	'S2C_SKILL_DEL':[['sid', 'uint16', ''],],
	'S2C_SKILL_CONFIG':[['cfg', 'list8', 'uint16'],],
	'S2C_LEARN_COST':[['cost', 'list8', 'skilllearncost'],['costonce', 'int32', ''],],
	'C2S_SUMMON_ACTIVE':[['sid', 'int16', ''],],
	'C2S_SUMMON_FIGHT':[['sid', 'int16', ''],['pos', 'int8', ''],],
	'C2S_SUMMON_RENAME':[['sid', 'int16', ''],['name', 'string8', ''],],
	'C2S_SUMMON_FOLLOW':[['sid', 'int16', ''],],
	'C2S_SUMMON_UPGRADE':[['sid', 'int16', ''],['autobuy', 'int8', ''],],
	'C2S_SUMMON_APTUPGRADE':[['sid', 'int16', ''],],
	'C2S_SUMMON_SKILLREFINE':[['sid', 'int16', ''],['mode', 'int8', ''],['locksk', 'list8', 'uint16'],],
	'C2S_SUMMON_SKILLSAVE':[['sid', 'int16', ''],],
	'C2S_SUMMON_SKILLPREVIEW':[['sid', 'int16', ''],],
	'S2C_SUMMON_INFO':[['summons', 'list8', 'summon'],],
	'S2C_SUMMON_UPDATE':[['sid', 'int16', ''],['exp', 'int16', ''],],
	'S2C_SUMMON_FIGHT':[['sid', 'int16', 'int16'],['sida', 'int16', ''],['sidb', 'int16', ''],],
	'S2C_SUMMON_APTINFO':[['apts', 'list8', 'summonapt'],],
	'S2C_SUMMON_SKILLPREVIEW':[['sid', 'int16', ''],['skills', 'list8', 'skill'],],
	'C2S_MOUNT_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_MOUNT_ACTIVE':[['shape', 'uint8', ''],],
	'C2S_MOUNT_CHANGE':[['shape', 'uint8', ''],],
	'C2S_MOUNT_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_MOUNT_EQUIP_SWITCH':[],
	'C2S_MOUNT_DANYAO':[['cnt', 'int16', ''],],
	'S2C_MOUNT_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_MOUNT_SKINLIST':[['skins', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_MOUNT_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_MOUNT_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'C2S_WING_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_WING_ACTIVE':[['shape', 'uint8', ''],],
	'C2S_WING_CHANGE':[['shape', 'uint8', ''],],
	'C2S_WING_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_WING_EQUIP_SWITCH':[],
	'C2S_WING_DANYAO':[['cnt', 'int16', ''],],
	'S2C_WING_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_WING_SKINLIST':[['skins', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_WING_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_WING_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'C2S_SUMMONSOUL_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_SUMMONSOUL_ACTIVE':[['shape', 'uint8', ''],],
	'C2S_SUMMONSOUL_CHANGE':[['shape', 'uint8', ''],],
	'C2S_SUMMONSOUL_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_SUMMONSOUL_EQUIP_SWITCH':[],
	'C2S_SUMMONSOUL_DANYAO':[['cnt', 'int16', ''],],
	'S2C_SUMMONSOUL_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_SUMMONSOUL_SKINLIST':[['skins', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_SUMMONSOUL_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_SUMMONSOUL_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'S2C_SUMMONSOUL_SHAPE':[['shape', 'uint8', ''],],
	'C2S_SUMMONAURA_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_SUMMONAURA_ACTIVE':[['shape', 'uint8', ''],],
	'C2S_SUMMONAURA_CHANGE':[['shape', 'uint8', ''],],
	'C2S_SUMMONAURA_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_SUMMONAURA_EQUIP_SWITCH':[],
	'C2S_SUMMONAURA_DANYAO':[['cnt', 'int16', ''],],
	'S2C_SUMMONAURA_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_SUMMONAURA_SKINLIST':[['skins', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_SUMMONAURA_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_SUMMONAURA_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'S2C_SUMMONAURA_SHAPE':[['shape', 'uint8', ''],],
	'C2S_PARTNER_ACTIVE':[['sid', 'int16', ''],],
	'C2S_PARTNER_FIGHT':[['sid', 'int16', ''],['pos', 'int8', ''],],
	'C2S_PARTNER_UPGRADE':[['sid', 'int16', ''],['autobuy', 'int8', ''],],
	'C2S_PARTNER_UPSTAR':[['sid', 'int16', ''],],
	'S2C_PARTNER_INFO':[['partners', 'list8', 'partner'],],
	'S2C_PARTNER_FIGHT':[['sidl', 'int16', ''],['sidr', 'int16', ''],],
	'S2C_PARTNER_XIANYUAN':[['lvl', 'int16', ''],['props', 'warpropinfo', ''],['exp', 'int16', ''],],
	'C2S_XIANZHEN_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_XIANZHEN_CHANGE':[['shape', 'uint8', ''],],
	'C2S_XIANZHEN_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_XIANZHEN_EQUIP_SWITCH':[],
	'C2S_XIANZHEN_DANYAO':[['cnt', 'int16', ''],],
	'S2C_XIANZHEN_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_XIANZHEN_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_XIANZHEN_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'S2C_XIANZHEN_SHAPE':[['shape', 'uint8', ''],],
	'C2S_JINGJIE_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_JINGJIE_CHANGE':[['shape', 'uint8', ''],],
	'C2S_JINGJIE_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_JINGJIE_EQUIP_SWITCH':[],
	'C2S_JINGJIE_DANYAO':[['cnt', 'int16', ''],],
	'S2C_JINGJIE_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_JINGJIE_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_JINGJIE_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'S2C_JINGJIE_SHAPE':[['shape', 'uint8', ''],],
	'C2S_WEAPON_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_WEAPON_ACTIVE':[['shape', 'uint8', ''],],
	'C2S_WEAPON_CHANGE':[['shape', 'uint8', ''],],
	'C2S_WEAPON_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_WEAPON_EQUIP_SWITCH':[],
	'C2S_WEAPON_DANYAO':[['cnt', 'int16', ''],],
	'S2C_WEAPON_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_WEAPON_SKINLIST':[['skins', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_WEAPON_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_WEAPON_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'C2S_FAIRY_UPGRADE':[['autobuy', 'int8', ''],],
	'C2S_FAIRY_ACTIVE':[['shape', 'uint8', ''],],
	'C2S_FAIRY_CHANGE':[['shape', 'uint8', ''],],
	'C2S_FAIRY_SKILL_UPGRADE':[['idx', 'int8', ''],],
	'C2S_FAIRY_EQUIP_SWITCH':[],
	'C2S_FAIRY_DANYAO':[['cnt', 'int16', ''],],
	'S2C_FAIRY_INFO':[['lvl', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],['equipprops', 'warpropinfo', ''],],
	'S2C_FAIRY_SKINLIST':[['skins', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_FAIRY_SKILLLIST':[['skills', 'list8', 'int8'],['props', 'warpropinfo', ''],],
	'S2C_FAIRY_DANYAO':[['cnt', 'int16', ''],['props', 'warpropinfo', ''],],
	'C2S_TITLE_ACTIVE':[['sid', 'uint8', ''],],
	'C2S_TITLE_CHANGE':[['sid', 'uint8', ''],],
	'C2S_FASHION_ACTIVE':[['sid', 'uint8', ''],],
	'C2S_FASHION_CHANGE':[['sid', 'uint8', ''],],
	'S2C_TITLE_LIST':[['titles', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_TITLE_ADD':[['sid', 'uint8', ''],['props', 'warpropinfo', ''],],
	'S2C_FASHION_LIST':[['fashions', 'list8', 'uint8'],['props', 'warpropinfo', ''],],
	'S2C_FASHION_ADD':[['sid', 'uint8', ''],['props', 'warpropinfo', ''],],
	'C2S_TRAVEL_UPGRADE':[['travel', 'int8', ''],],
	'C2S_TRAVEL_FINDEXP':[['travel', 'int8', ''],['eid', 'int16', ''],],
	'C2S_GET_TOPPLAYERINFO':[],
	'C2S_GET_TRAVELREWARD':[['boxid', 'int8', ''],],
	'S2C_TRAVEL_INFO':[['travel', 'int8', ''],['exp', 'int16', ''],['grade', 'int16', ''],['props', 'warpropinfo', ''],['exptime', 'list8', 'traveltime'],['expfind', 'list8', 'traveltime'],],
	'S2C_TRAVEL_EXP':[['travel', 'int8', ''],['exp', 'int16', ''],['exptime', 'list8', 'traveltime'],],
	'S2C_TOPPLAYER_INFO':[['topgrade', 'int16', ''],['topplayer', 'list8', 'roleinfo'],],
	'S2C_TRAVEL_TODAYEXP':[['exptoday', 'int16', ''],['boxlist', 'list8', 'int8'],],
	'C2S_JINGMAI_UPGRADE':[],
	'C2S_DANYAO_EAT':[['pos', 'int8', ''],['cnt', 'int16', ''],],
	'S2C_JINGMAI_INFO':[['lv', 'int16', ''],['exp', 'int16', ''],['props', 'warpropinfo', ''],],
	'S2C_DANYAO_INFO':[['cnts', 'list8', 'int16'],['props', 'warpropinfo', ''],],
	'S2C_WAR_START':[['id', 'int32', ''],['type', 'int8', ''],['subtype', 'int8', ''],['lineup', 'int8', ''],['playmode', 'int8', ''],['skip', 'int8', ''],['maxbout', 'int8', ''],],
	'S2C_WAR_ADD':[['warid', 'int8', ''],['type', 'int8', ''],['owner', 'int8', ''],['status', 'int16', ''],['shape', 'int16', ''],['desc', 'byte8', ''],['grade', 'int16', ''],['classes', 'int8', ''],['name', 'string8', ''],['zoomlvl', 'int8', ''],],
	'S2C_WAR_LEAVE':[['warid', 'int8', ''],],
	'S2C_WAR_STATUS':[['warid', 'int8', ''],['hprate', 'int16', ''],],
	'S2C_WAR_NEXT':[['bout', 'int8', ''],],
	'S2C_WAR_TURN':[],
	'S2C_WAR_PREEND':[],
	'S2C_WAR_END':[['force', 'int8', ''],],
	'S2C_WAR_REPLY':[],
	'S2C_WAR_ATTACK_NORMAL':[['att', 'int8', ''],['vic', 'int8', ''],],
	'S2C_WAR_ATTACK_END':[],
	'S2C_WAR_PERFORM':[['att', 'int8', ''],['skillid', 'int16', ''],['lv', 'int8', ''],['round', 'int8', ''],['lsvic', 'list8', 'int8'],],
	'S2C_WAR_PERFORM_END':[],
	'S2C_WAR_PARTNER_ATTACK':[['partner', 'int8', ''],['vic', 'int8', ''],],
	'S2C_WAR_BACKATTACK':[['att', 'int8', ''],['skillid', 'int16', ''],['lv', 'int8', ''],['round', 'int8', ''],['lsvic', 'list8', 'int8'],],
	'S2C_WAR_BACKATTACK_END':[],
	'S2C_WAR_SHAKE':[['att', 'int8', ''],['vic', 'int8', ''],],
	'S2C_WAR_PROTECT':[['protector', 'int8', ''],['vic', 'int8', ''],],
	'S2C_WAR_ATTACK_STATUS':[['target', 'int8', ''],['status', 'int16', ''],['value', 'int32', ''],],
	'S2C_WAR_BUFF_ADD':[['warid', 'int8', ''],['bid', 'int16', ''],['overlay', 'int8', ''],['bout', 'int8', ''],['datas', 'list8', 'int32'],],
	'S2C_WAR_BUFF_DEL':[['warid', 'int8', ''],['bid', 'int16', ''],],
	'C2S_WAR_PLAYEND':[['id', 'int32', ''],],
	'S2C_WAR_DEFEAT':[['idx', 'int8', ''],],
	'C2S_MAIL_GETATTACH':[['id', 'int32', ''],],
	'C2S_MAIL_GETALL':[],
	'C2S_MAIL_GETINFO':[['id', 'int32', ''],],
	'S2C_MAIL_LIST':[['mails', 'list16', 'mailsimple'],],
	'S2C_MAIL_ADD':[['mail', 'mailsimple', ''],],
	'S2C_MAIL_DEL':[['id', 'int32', ''],],
	'S2C_MAIL_INFO':[['id', 'int32', ''],['status', 'int8', ''],['rewards', 'list8', 'reward'],['items', 'list8', 'rewarditem'],['content', 'string16', ''],],
	'C2S_TEAM_JOIN':[['teamid', 'int32', ''],],
	'C2S_TEAM_LEAVE':[],
	'C2S_TEAM_KICK':[['pid', 'int32', ''],],
	'S2C_TEAM_MEMBERLIST':[['roomid', 'int32', ''],['teamid', 'int32', ''],['members', 'list8', 'teammemberinfo'],['aways', 'list8', 'teammemberinfo'],['offlines', 'list8', 'teammemberinfo'],],
	'S2C_TEAM_LEAVE':[],
	'S2C_TEAM_DISBAND':[],
	'C2S_TEAMPLAT_CREATE':[['roomid', 'int32', ''],],
	'C2S_TEAMPLAT_ENTERROOM':[['roomid', 'int32', ''],],
	'C2S_TEAMPLAT_ROOMINFO':[['roomid', 'int32', ''],],
	'S2C_TEAMPLAT_ROOMINFO':[['roomid', 'int32', ''],['teams', 'list16', 'teaminfo'],],
	'S2C_TEAMPLAT_ROOMTYPE':[['roomid', 'int32', ''],['roomtype', 'int8', ''],['subtype', 'int8', ''],],
	'C2S_UPGRADEREWARD_GET':[['gidx', 'int8', ''],['lvl', 'int16', ''],],
	'S2C_UPGRADEREWARD_LIST':[['gidx', 'int8', ''],['rewards', 'list8', 'int16'],],
	'C2S_VIPREWARD_GET':[['vip', 'int8', ''],],
	'S2C_VIPREWARD_LIST':[['rewards', 'list8', 'int8'],],
	'C2S_GRADEREWARD_GET':[['grade', 'int16', ''],],
	'S2C_GRADEREWARD_LIST':[['rewards', 'list8', 'int16'],],
	'C2S_SIGNINREWARD_GET':[['idx', 'int8', ''],],
	'S2C_SIGNINREWARD_LIST':[['logindays', 'int16', ''],['rewards', 'list8', 'int8'],['todaypt', 'int32', ''],],
	'C2S_TEST_WEBCHARGE':[['productid', 'int16', ''],],
	'S2C_TEST_WEBCHARGE':[['productid', 'int16', ''],['errno', 'int8', ''],['code', 'int32', ''],['content', 'string16', ''],],
	'S2C_CHARGE_PRODUCTLIST':[['productlist', 'list8', 'int16'],],
	'C2S_FIRSTCHARGE_GET':[['gid', 'int8', ''],],
	'S2C_FIRSTCHARGE_LIST':[['rewards', 'list8', 'int8'],['historys', 'list8', 'int8'],],
	'C2S_TODAYCHARGE_GET':[['gid', 'int8', ''],],
	'S2C_TODAYCHARGE_LIST':[['todaypt', 'int32', ''],['rewards', 'list8', 'int8'],['historys', 'list8', 'int8'],],
	'C2S_GROWTHFUND_BUY':[],
	'C2S_GROWTHFUND_GET':[['grade', 'int16', ''],],
	'S2C_GROWTHFUND_INFO':[['state', 'int8', ''],['historys', 'list8', 'int16'],],
	'C2S_INVESTPLAN_BUY':[],
	'C2S_INVESTPLAN_GET':[],
	'S2C_INVESTPLAN_INFO':[['state', 'int8', ''],['days', 'int8', ''],],
	'C2S_CHARGEGROUPBUY_GET':[['chargecnt', 'int16', ''],['chargegold', 'int8', ''],],
	'S2C_CHARGEGROUPBUY_INFO':[['chargecnt', 'int16', ''],['todaygold', 'int32', ''],['historys', 'list8', 'groupbuyrw'],],
	'C2S_PRIVCARD_GETREWARD':[['cardtype', 'int8', ''],],
	'S2C_PRIVCARD_INFO':[['lifecard', 'int8', ''],['lifecard_rw', 'int8', ''],['monthcard', 'int32', ''],['monthcard_rw', 'int8', ''],],
	'C2S_DIRECTCHARGE_GET':[['rwcid', 'int16', ''],],
	'S2C_DIRECTCHARGE_INFO':[['buycid', 'int16', ''],['rwcid', 'int16', ''],],
	'c2s_login':[['account', 'string8', ''],['pwd', 'string8', ''],['localkey', 'string16', ''],['bpassager', 'int8', ''],],
	'c2s_createrole':[['shape', 'int16', ''],['class', 'int8', ''],['name', 'string8', ''],],
	'c2s_choserole':[['roleid', 'int32', ''],],
	'c2s_move':[['x', 'int16', ''],['y', 'int16', ''],],
	'c2s_getrolelist':[],
	's2c_common_rsp':[['cmdid', 'int8', ''],['result', 'int8', ''],],
	's2c_rolelist':[['rolelist', 'list8', 's2c_rolelist_info'],],
	's2c_enterscene':[['sceneid', 'int32', ''],['x', 'int16', ''],['y', 'int16', ''],],
	's2c_role_move':[['x', 'int16', ''],['y', 'int16', ''],],
	's2c_role_enter':[['id', 'int32', ''],['x', 'int8', ''],['y', 'int8', ''],['shape', 'int16', ''],['class', 'int8', ''],['lv', 'int16', ''],['name', 'string8', ''],],
	's2c_role_out':[['id', 'int32', ''],],
	's2c_localkey':[['key', 'string16', ''],],
	'C2S_MONEY_EXC_INFO':[],
	'C2S_MONEY_EXCHANGE':[],
	'S2C_MONEY_EXC_INFO':[['lasttime', 'int8', ''],['value', 'int32', ''],],
	'C2S_MAINTASK_REPLY':[['taskid', 'int16', ''],],
	'S2C_MAINTASK_INFO':[['taskid', 'int16', ''],['value', 'int16', ''],],
	'C2S_FENGYAO_YAOGUAI':[['id', 'int32', ''],],
	'C2S_FENGYAO_BUYSTAR':[['id', 'int32', ''],],
	'C2S_FENGYAO_COMPLETEALL':[],
	'C2S_FENGYAO_FIGHT':[['id', 'int32', ''],],
	'C2S_FENGYAO_FULLRWD':[],
	'S2C_FENGYAO_MAIN':[['usedtimes', 'int8', ''],['rewardfull', 'int8', ''],['nexttime', 'int32', ''],],
	'S2C_FENGYAO_LIST':[['ygs', 'list8', 'yaoguai'],],
	'S2C_FENGYAO_YG':[['id', 'int32', ''],['star', 'int8', ''],['index', 'int16', ''],],
	'S2C_FENGYAO_ADD':[['id', 'int32', ''],['star', 'int8', ''],['index', 'int16', ''],],
	'S2C_FENGYAO_DEL':[['id', 'int32', ''],],
	'C2S_SHIMEN_QUERY':[],
	'C2S_SHIMEN_REWARD':[],
	'C2S_SHIMEN_BUY':[],
	'S2C_SHIMEN_INFO':[['succeed', 'int16', ''],['rewarded', 'int8', ''],],
	'C2S_PB_FIGHT':[['bossid', 'int16', ''],],
	'S2C_PB_INFO':[['fightedboss', 'list8', 'int16'],],
	'C2S_QMBOSS_LIST':[],
	'C2S_QMBOSS_DAMAGE_LIST':[['bossid', 'int16', ''],],
	'C2S_QMBOSS_PAY_REBIRTH':[['bossid', 'int16', ''],],
	'C2S_QMBOSS_FIGHT':[['bossid', 'int16', ''],],
	'C2S_QMBOSS_SET_CONCERNED':[['concerned', 'list8', 'int16'],],
	'C2S_QMBOSS_PURCHASE_TIMES':[],
	'S2C_QMBOSS_REBIRTH':[['bossid', 'int16', ''],],
	'S2C_QMBOSS_LIST':[['bosslist', 'list8', 'qmbossdesc'],],
	'S2C_QMBOSS_DAMAGE_LIST':[['bossid', 'int16', ''],['damagelist', 'list8', 'qmbossdmg'],],
	'S2C_QMBOSS_KILL_LIST':[['bossid', 'int16', ''],['killlist', 'list8', 'qmbosskill'],],
	'S2C_QMBOSS_TIMES_INFO':[['remain', 'int8', ''],['recovertime', 'int32', ''],],
	'S2C_QMBOSS_PURCHASE_TIMES':[['purtimes', 'int16', ''],],
	'S2C_QMBOSS_CONCERNED':[['concernedlist', 'list8', 'int16'],],
	'S2C_QMBOSS_FIGHT_DAMAGE':[['myrank', 'int8', ''],['mystartdmg', 'int32', ''],['warid', 'int32', ''],['starthp', 'int32', ''],['hpmax', 'int32', ''],['damagelist', 'list8', 'qmbossdmg'],],
	'C2S_SUMCATCH_DETAIL':[],
	'C2S_SUMCATCH_DOCATCH':[],
	'S2C_SUMCATCH_STATUS':[['status', 'int8', ''],],
	'S2C_SUMCATCH_RESULT':[['succeed', 'int8', ''],],
	'S2C_SUMCATCH_SUMMON':[['summonid', 'int16', ''],],
	'C2S_SCFIGHT_TRYFIGHT':[],
	'C2S_SCENEPASS_FIGHT':[],
	'C2S_SCENEPASS_HELP':[['roleid', 'int32', ''],['sceneid', 'int16', ''],['passno', 'int16', ''],],
	'C2S_SCENEPASS_UPSCENE':[],
	'C2S_SCENEPASS_HELPTIMES':[],
	'C2S_SCENEPASS_GET_SECRWD':[['sceneid', 'int16', ''],['sectionid', 'int16', ''],],
	'S2C_SCENEPASS_INFO':[['sceneid', 'int16', ''],['passno', 'int16', ''],['value', 'int8', ''],],
	'S2C_SCENEPASS_NEXT':[['sceneid', 'int16', ''],['nextscene', 'int16', ''],],
	'S2C_SCENEPASS_HELPTIMES':[['offer', 'int8', ''],['accept', 'int8', ''],],
	'S2C_SCENEPASS_SECRWD':[['sections', 'list8', 'scpasssecrwd'],],
	'S2C_SCENEPASS_FAILED':[],
	'C2S_RANK':[['rankid', 'int16', ''],],
	'S2C_RANK':[['rankid', 'int16', ''],['selfrank', 'int16', ''],['selfvalue', 'int32', ''],['desc', 'byte8', ''],['shape', 'int16', ''],['datalist', 'list8', 'rank_data'],],
	'C2S_RANK_SIMPLE':[['rankid', 'int16', ''],],
	'S2C_RANK_SIMPLE':[['rankid', 'int16', ''],['selfrank', 'int16', ''],['selfvalue', 'int32', ''],['desc', 'byte8', ''],['shape', 'int16', ''],['datalist', 'list8', 'rank_data'],],
	'C2S_ITEMEXCH_PURCHASE':[['shopid', 'int16', ''],['index', 'int16', ''],['amount', 'int16', ''],],
	'C2S_ITEMEXCH_SHOP':[['shopid', 'int16', ''],],
	'C2S_ITEMEXCH_AUTO_EXCHANGE':[['itemsid', 'int32', ''],['amount', 'int16', ''],],
	'S2C_ITEMEXCH_UPDATE':[['shopid', 'int16', ''],['curamount', 'int32', ''],['index', 'int16', ''],['exchanged', 'int32', ''],],
	'S2C_ITEMEXCH_SHOP':[['shopid', 'int16', ''],['curamount', 'int32', ''],['condamount', 'int32', ''],['items', 'list8', 'shopitem'],],
	'C2S_MATERFB_TRYFIGHT':[['fubenid', 'int16', ''],],
	'C2S_MATERFB_SAODANG':[['fubenid', 'int16', ''],],
	'C2S_MATERFB_INFO':[],
	'S2C_MATERFB_INFO':[['fbinfo', 'list8', 'mfbinfo'],],
	'C2S_PDYW_FIGHT':[],
	'C2S_PDYW_REWARD':[],
	'C2S_PDYW_BUYFULL':[],
	'C2S_PDYW_STATUS':[],
	'S2C_PDYW_STATUS':[['times', 'int8', ''],['rewarded', 'int8', ''],['status', 'int8', ''],],
	'C2S_FRIEND_FRIENDLIST':[],
	'C2S_FRIEND_RELAOPERA':[['opera', 'int8', ''],['roleid', 'int32', ''],],
	'C2S_FRIEND_SENDCOIN':[['id', 'int32', ''],],
	'C2S_FRIEND_SENDCOIN_ALL':[],
	'C2S_FRIEND_ACCEPTCOIN':[],
	'C2S_FRIEND_SENDCHAT':[['roleid', 'int32', ''],['message', 'string16', ''],],
	'C2S_FRIEND_COIN_INFO':[],
	'C2S_FRIEND_ACC_ONE_COIN':[['index', 'int8', ''],['roleid', 'int32', ''],],
	'C2S_FRIEND_RANDROLE':[],
	'C2S_FRIEND_SEARCH_ROLE':[['key', 'string8', ''],],
	'S2C_FRIEND_LIST':[['rolelist', 'list8', 'friendinfo'],],
	'S2C_FRIEND_REQLIST':[['reqlist', 'list8', 'simplerole'],],
	'S2C_FRIEND_BLACKLIST':[['blacklist', 'list8', 'friendinfo'],],
	'S2C_FRIEND_UPDFRIEND':[['roleinfo', 'friendinfo', ''],],
	'S2C_FRIEND_NEWREQUEST':[['roleinfo', 'simplerole', ''],],
	'S2C_FRIEND_NEWBLACK':[['roleinfo', 'friendinfo', ''],],
	'S2C_FRIEND_RMFRIEND':[['roleid', 'int32', ''],],
	'S2C_FRIEND_RMREQUEST':[['roleid', 'int32', ''],],
	'S2C_FRIEND_RMBLACK':[['roleid', 'int32', ''],],
	'S2C_FRIEND_CHAT':[['senderid', 'int32', ''],['recverid', 'int32', ''],['message', 'string16', ''],],
	'S2C_FRIEND_COINLIST':[['showlist', 'list8', 'simplerole'],],
	'S2C_FRIEND_NEWCOIN':[['roleinfo', 'simplerole', ''],],
	'S2C_FRIEND_COININFO':[['sendlist', 'list8', 'int32'],['recvcoin', 'int8', ''],],
	'S2C_FRIEND_RM_COIN':[['index', 'int8', ''],],
	'S2C_FRIEND_RANDROLE':[['rolelist', 'list8', 'friendinfo'],],
	'C2S_ROLE_INFO':[['id', 'int32', ''],],
	'S2C_ROLE_INFO':[['id', 'int32', ''],['grade', 'int16', ''],['name', 'string8', ''],['shape', 'int16', ''],['desc', 'byte8', ''],['classes', 'int8', ''],['battlevalue', 'int32', ''],['vip', 'int8', ''],['gangid', 'int32', ''],['gangname', 'string8', ''],['sign', 'string8', ''],['isfriend', 'int8', ''],['isblack', 'int8', ''],],
	'C2S_ROLE_DESC':[['id', 'int32', ''],],
	'S2C_ROLE_DESC':[['id', 'int32', ''],['name', 'string8', ''],['shape', 'int16', ''],['gangname', 'string8', ''],['battlevalue', 'int32', ''],],
	'C2S_MARRIAGE_PROPOSE_LIST':[],
	'C2S_MARRIAGE_PROPOSE':[['torid', 'int32', ''],['weddinglevel', 'int8', ''],],
	'C2S_MARRIAGE_RESP_PROPOSE':[['fromrid', 'int32', ''],['isaccept', 'int8', ''],],
	'C2S_MARRIAGE_DIVORCE':[],
	'C2S_MARRIAGE_WISH':[['weddingid', 'int32', ''],['wishtype', 'int8', ''],],
	'S2C_MARRIAGE_PROPOSE_LIST':[['roleinfo', 'list8', 'simplerole'],],
	'S2C_MARRIAGE_RECV_PROPOSE':[['fromrole', 'simplerole', ''],['weddinglevel', 'int8', ''],],
	'S2C_MARRIAGE_WEDDING_START':[['weddingid', 'int32', ''],['weddinglevel', 'int8', ''],['role1', 'simplerole', ''],['role2', 'simplerole', ''],],
	'S2C_MARRIAGE_INFO':[['partnerid', 'int32', ''],['time', 'int32', ''],],
	'C2S_WILDBOSS_LIST':[],
	'C2S_WILDBOSS_DETAIL':[['bossid', 'int16', ''],],
	'C2S_WILDBOSS_FIGHT':[['bossid', 'int16', ''],],
	'S2C_WILDBOSS_LIST':[['bosslist', 'list8', 'wildbossstatus'],],
	'S2C_WILDBOSS_DETAIL':[['bossid', 'int16', ''],['status', 'int8', ''],['hprate', 'int8', ''],['keeperid', 'int32', ''],['keepername', 'string8', ''],['keepend', 'int32', ''],['escapetime', 'int32', ''],['keepshape', 'int16', ''],['keeperrate', 'int8', ''],],
	'C2S_TREASURE_FIGHT':[['treasureid', 'int16', ''],],
	'C2S_TREASURE_REWARD':[['mapid', 'int16', ''],['star', 'int8', ''],],
	'C2S_TREASURE_QEURYRWD':[],
	'C2S_TREASURE_FIGHTALL':[],
	'S2C_TREASURE_STARS':[['treasurestar', 'list8', 'treasurestar'],],
	'S2C_TREASURE_REWARDS':[['treasurerwd', 'list8', 'treasurerwd'],['todayreward', 'list8', 'int16'],],
	'S2C_TREASURE_RESULT':[['result', 'int8', ''],],
	'C2S_TFB_MATCH':[['fbid', 'int16', ''],],
	'C2S_TBF_FIGHT':[],
	'C2S_TBF_ROOM':[['fbid', 'int16', ''],],
	'C2S_TBF_INFO':[],
	'S2C_TBF_INFO':[['fighted', 'int16', ''],],
	'S2C_TBF_ROOM':[['fbid', 'int16', ''],['roomid', 'int32', ''],],
	'S2C_TBF_REWARDED':[['rewarded', 'list8', 'int16'],],
	'C2S_WORLDQUES_QUESTION':[],
	'C2S_WORLDQUES_INFO':[],
	'C2S_WORLDQUES_ANSWER':[['index', 'int8', ''],['answer', 'int8', ''],],
	'C2S_WORLDQUES_REWARD':[['key', 'int8', ''],],
	'S2C_WORLDQUES_QUESTION':[['index', 'int8', ''],['question', 'string8', ''],['anslist', 'list8', 'string8'],],
	'S2C_WORLDQUES_INFO':[['point', 'int16', ''],['passed', 'int8', ''],['rightnum', 'int8', ''],],
	'S2C_WORLDQUES_ANSWER':[['index', 'int8', ''],['rightanswer', 'int8', ''],],
	'S2C_WORLDQUES_REWARDED':[['rewarded', 'list8', 'int8'],],
	'S2C_ACTIVITY_STATUS':[['activityid', 'int16', ''],['status', 'int8', ''],['starttime', 'int32', ''],['endtime', 'int32', ''],],
	'C2S_GOOSETOWER_FIGHT':[],
	'S2C_GOOSETOWER_INFO':[['level', 'int16', ''],],
	'S2C_GOOSETOWER_RESULT':[['result', 'int8', ''],],
	'C2S_TTXY_TODAY':[],
	'C2S_TTXY_FIGHT':[],
	'C2S_TTXY_GETREWARD':[['level', 'int16', ''],],
	'C2S_TTXY_FIGHTALL':[],
	'S2C_TTXY_TODAY':[['level', 'int16', ''],],
	'S2C_TTXY_TOTAL':[['level', 'int16', ''],],
	'S2C_TTXY_REWARDED':[['rewarded', 'list8', 'int16'],],
	'S2C_TTXY_RESULT':[['result', 'int8', ''],],
	'C2S_GANG_DETAIL':[],
	'C2S_GANG_SETNAME':[['name', 'string8', ''],],
	'C2S_GANG_SETNOTICE':[['notice', 'string16', ''],],
	'C2S_GANG_RECRUIT':[],
	'C2S_GANG_MEMBER':[],
	'C2S_GANG_FOUND':[['name', 'string8', ''],['type', 'int8', ''],],
	'C2S_GANG_KICK':[['id', 'int32', ''],],
	'C2S_GANG_QUIT':[],
	'C2S_GANG_SETPOS':[['id', 'int32', ''],['position', 'int8', ''],],
	'C2S_GANG_ABDICATE':[['torid', 'int32', ''],],
	'C2S_GANG_SET_AUTOPASS':[['battlevalue', 'int32', ''],],
	'C2S_GANG_JOIN_LIST':[],
	'C2S_GANG_RESP_JOIN':[['id', 'int32', ''],['ispass', 'int8', ''],],
	'C2S_GANG_JOIN':[['gangid', 'int32', ''],],
	'C2S_GANG_JOIN_ALL':[],
	'C2S_GANG_LIST':[],
	'C2S_GANG_LOG':[],
	'C2S_GANG_DONATE':[['itemsid', 'int32', ''],],
	'S2C_GANG_DETAIL':[['id', 'int32', ''],['name', 'string8', ''],['level', 'int8', ''],['notice', 'string16', ''],['leadername', 'string8', ''],],
	'S2C_GANG_MEMBERS':[['gangid', 'int32', ''],['members', 'list8', 'gangmember'],],
	'S2C_GANG_JOIN_LIST':[['gangid', 'int32', ''],['requests', 'list8', 'gangrequest'],],
	'S2C_GANG_LIST':[['ganglist', 'list8', 'gangdesc'],],
	'S2C_GANG_AUTOPASS':[['battlevalue', 'int32', ''],],
	'S2C_GANG_LOG':[['loglist', 'list8', 'ganglog'],],
	'S2C_GANG_CONTRIBUTION':[['gangid', 'int32', ''],['curcont', 'int32', ''],['totalcont', 'int32', ''],],
	'S2C_GANG_MONEY':[['money', 'int32', ''],],
	'S2C_GANG_MEMBER_COUNT':[['count', 'int8', ''],],
	'S2C_GANG_MY_POSITION':[['position', 'int8', ''],],
	'C2S_GANG_INCENSE_INFO':[],
	'C2S_GANG_INCENSE_REWARD':[['value', 'int8', ''],],
	'C2S_GANG_INCENSE':[['inctype', 'int8', ''],],
	'S2C_GANG_INCENSE_ROLE':[['inctype', 'int8', ''],['rewarded', 'list8', 'int8'],],
	'S2C_GANG_INCENSE_VALUE':[['value', 'int8', ''],['times', 'int16', ''],],
	'S2C_GANG_INCENSE_LOG':[['loglist', 'list8', 'ganginclog'],],
	'C2S_GANG_FUBEN_FIGHT':[],
	'C2S_GANG_FUBEN_TODAY':[],
	'C2S_GANG_FUBEN_QUERYID':[['fubenid', 'int16', ''],],
	'S2C_GANG_FUBEN_REWARDED':[['fubenids', 'list8', 'int16'],],
	'S2C_GANG_FUBEN_TODAY':[['times', 'int8', ''],['offerhelp', 'int8', ''],['accepthelp', 'int8', ''],],
	'S2C_GANG_FUBEN_ROOMID':[['fubenid', 'int16', ''],['roomid', 'int32', ''],],
	'C2S_GANG_SKILL_UPGRADE':[],
	'S2C_GANG_SKILL_INFO':[['growinfo', 'list8', 'gangskillinfo'],['nextgrowinfo', 'gangskillinfo', ''],['cost', 'int16', ''],],
	'S2C_WAR_SERIAL':[['warid', 'int32', ''],],
	'C2S_GANG_BOSS_OPEN':[['hardtype', 'int8', ''],],
	'C2S_GANG_BOSS_FIGHT':[],
	'C2S_GANG_BOSS_GETREWARD':[],
	'C2S_GANG_BOSS_FORCEKILL':[],
	'C2S_GANG_BOSS_DAMAGELIST':[],
	'C2S_GANG_BOSS_REWARDSTATUS':[],
	'C2S_GANG_BOSS_STATUS':[],
	'S2C_GANG_BOSS_STATUS':[['hprate', 'int8', ''],['endtime', 'int32', ''],['hardtype', 'int8', ''],['status', 'int8', ''],],
	'S2C_GANG_BOSS_REWARD':[['killreward', 'int8', ''],['fightreward', 'int8', ''],],
	'S2C_GANG_BOSS_DAMAGE':[['myrate', 'int16', ''],['damagelist', 'list8', 'gang_boss_damage'],],
	'C2S_GANG_SCENE_ENTER':[['reason', 'int8', ''],],
	'C2S_GANG_SCENE_LEAVE':[],
	'C2S_GANG_SCENE_MINING':[],
	'C2S_GANG_SCENE_MINRESET':[],
	'C2S_GANG_SCENE_MINREWARD':[],
	'C2S_GANG_SCENE_MINBUYFULL':[],
	'C2S_GANG_SCENE_PLANT':[['flowerid', 'int8', ''],],
	'C2S_GANG_SCENE_WATER':[['flowerid', 'int8', ''],],
	'C2S_GANG_SCENE_EXCHANGE':[['index', 'int8', ''],],
	'C2S_GANG_SCENE_EXCHREFRESH':[],
	'C2S_GANG_SCENE_PLANTRESET':[],
	'C2S_GANG_SCENE_PLANTREWARD':[],
	'S2C_GANG_SCENE_TRANSFER':[['isin', 'int8', ''],],
	'S2C_GANG_SCENE_MINING_TIMES':[['miningtimes', 'int8', ''],['resettimes', 'int8', ''],['rewarded', 'int8', ''],],
	'S2C_GANG_SCENE_ALL_FLOWER':[['flowerlist', 'list8', 'gangflower'],],
	'S2C_GANG_SCENE_FLOWER_TIMES':[['plant', 'int8', ''],['water', 'int8', ''],['rewarded', 'int8', ''],['resettimes', 'int8', ''],],
	'S2C_GANG_SCENE_FLOWER_CHANGE':[['flowerid', 'gangflower', ''],['isadd', 'int8', ''],],
	'S2C_GANG_SCENE_EXCHINFO':[['endtime', 'int32', ''],['remaintimes', 'int8', ''],['exchangelist', 'list8', 'gcexchange'],],
	'C2S_GANG_TRAVEL_UPGRADE':[],
	'C2S_GANG_TRAVEL_REWARD':[['value', 'int8', ''],],
	'S2C_GANG_TRAVEL_INFO':[['exp', 'int16', ''],['todayexp', 'int16', ''],['level', 'int8', ''],['props', 'warpropinfo', ''],['nextprops', 'warpropinfo', ''],['exptimes', 'list8', 'traveltime'],],
	'S2C_GANG_TRAVEL_EXP':[['totalexp', 'int16', ''],['todayexp', 'int16', ''],['update', 'traveltime', ''],],
	'S2C_GANG_TRAVEL_REWARDED':[['rewarded', 'list8', 'int8'],],
	'C2S_PANDAH_FIGHT':[],
	'S2C_PANDAH_FIGHTED':[['index', 'int16', ''],['hdtype', 'int8', ''],],
	'C2S_ITEM_COMPOSE':[['srcsid', 'int32', ''],],
	'C2S_PERCHARGE_GETREWARD':[['key', 'int32', ''],['actid', 'int16', ''],],
	'S2C_PERCHARGE_CHARGED':[['value', 'int32', ''],['actid', 'int16', ''],],
	'S2C_PERCHARGE_REWARDED':[['keys', 'list8', 'int32'],['actid', 'int16', ''],],
	'C2S_DIRGROWUP_GETREWARD':[],
	'S2C_DIRGROWUP_CHARGED':[['value', 'int32', ''],],
	'S2C_DIRGROWUP_REWARDED':[['rewarded', 'int8', ''],],
	'C2S_GROWUPRWD_GETREWARD':[['rewardtype', 'int8', ''],['level', 'int8', ''],],
	'S2C_GROWUPRWD_REWARDED':[['rewarded', 'list8', 'growuprwd'],],
	'S2C_GROWUPRWD_CYCLE_STATUS':[['cycletype', 'int8', ''],['rewardtypes', 'list8', 'int8'],['endtime', 'int32', ''],],
	'C2S_8SING_GETREWARD':[['day', 'int8', ''],],
	'S2C_8SIGN_INFO':[['daycount', 'int8', ''],['rewarded', 'list8', 'int8'],],
	'S2C_HDGROWUP_RANK':[['rankid', 'int16', ''],['endtime', 'int32', ''],],
	'C2S_HDQMGROWUP_GETREWARD':[['gtype', 'int8', ''],['index', 'int8', ''],],
	'S2C_HDQMGROWUP_COUNT':[['counts', 'list8', 'qmjjcount'],],
	'S2C_HDQMGROWUP_REWARDED':[['rewarded', 'list8', 'int8'],],
	'S2C_HDQMGROWUP_STAGE':[['gtype', 'int8', ''],['endtime', 'int32', ''],],
	'C2S_DISCOUNTSHOP_PURCHASE':[['shopid', 'int16', ''],['goodsid', 'int8', ''],['amount', 'int8', ''],],
	'S2C_DISCOUNTSHOP_SHOPINFO':[['shopid', 'int16', ''],['endtime', 'int32', ''],['order', 'int8', ''],['goodslist', 'list8', 'discsgoods'],],
	'S2C_DISCOUNTSHOP_UPDATE':[['shopid', 'int16', ''],['goods', 'discsgoods', ''],],
	'C2S_HDGRADERWD_GETREWARD':[['grade', 'int16', ''],],
	'S2C_HDGRADERWD_REWARDED':[['rewarded', 'list8', 'int16'],],
	'C2S_OPENPLAY_GETREWARD':[['index', 'int8', ''],],
	'S2C_OPENPLAY_REWARDED':[['rewarded', 'list8', 'int8'],],
	'S2C_OPENPLAY_VALUE':[['value', 'int32', ''],],
	'S2C_OPENPLAY_TODAYDESC':[['playid', 'int8', ''],['endtime', 'int32', ''],],
	'C2S_HAOLI_GETREWARD':[['actid', 'int16', ''],],
	'S2C_HAOLI_CHARGED':[['value', 'int32', ''],['actid', 'int16', ''],],
	'S2C_HAOLI_REWARDED':[['rewarded', 'int8', ''],['actid', 'int16', ''],],
	'C2S_CLIENT_OPERATION':[['operation', 'int8', ''],],
	'C2S_ARENA_INFO':[],
	'S2C_ARENA_INFO':[['worriors', 'list8', 'arena_worrior'],['ranking', 'int16', ''],['battle', 'int32', ''],['uptime', 'uint32', ''],['chance', 'uint8', ''],['hightest', 'int16', ''],['buytimes', 'int8', ''],],
	'C2S_ARENA_RECORD':[],
	'S2C_ARENA_RECORD':[['records', 'list8', 'arena_record'],],
	'C2S_ARENA_FIGHT':[['ranking', 'int16', ''],['myranking', 'int16', ''],['name', 'string8', ''],],
	'S2C_ARENA_WAR_END':[['win', 'int8', ''],['warreward', 'list8', 'reward'],['ranking', 'int16', ''],['hightest', 'int16', ''],['rise', 'int16', ''],['breakreward', 'reward', ''],['uptime', 'uint32', ''],['chance', 'uint8', ''],],
	'C2S_ARENA_BUY':[],
	'S2C_ARENA_CHANCE':[['uptime', 'uint32', ''],['chance', 'uint8', ''],['buytimes', 'int8', ''],],
	'C2S_ARENA_RANK':[],
	'S2C_ARENA_RANK':[['worriors', 'list8', 'arena_worrior'],['ranking', 'int16', ''],['hightest', 'int16', ''],],
	'C2S_ARENA_SECKILL':[['ranking', 'int16', ''],['myranking', 'int16', ''],['name', 'string8', ''],],
	'C2S_ARENA_TIMES':[],
	'C2S_TSUMEKO_PROGRESS':[],
	'S2C_TSUMEKO_PROGRESS':[['progress', 'tsumeko_progress', ''],],
	'C2S_TSUMEKO_INFO':[['kalpa', 'int8', ''],],
	'S2C_TSUMEKO_INFO':[['kalpa', 'int8', ''],['progress', 'tsumeko_progress', ''],['assist', 'int8', ''],['puzzles', 'list8', 'tsumeko_puzzle'],['puzzle', 'int8', ''],],
	'C2S_TSUMEKO_RECORD':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],],
	'S2C_TSUMEKO_RECORD':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],['first', 'tsumeko_record', ''],['fast', 'tsumeko_record', ''],],
	'S2C_TSUMEKO_NO_RECORD':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],],
	'C2S_TSUMEKO_FIGHT':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],],
	'C2S_TSUMEKO_SECKILL':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],],
	'C2S_TSUMEKO_BOX':[['kalpa', 'int8', ''],['puzzle', 'int8', ''],],
	'C2S_TSUMEKO_KILL_ALL':[],
	'S2C_TSUMEKO_BAG':[],
	'S2C_TSUMEKO_RED':[['red', 'list8', 'int8'],],
	'C2S_ESCORT_INFO':[],
	'S2C_ESCORT_INFO':[['cars', 'list8', 'escort_car'],['state', 'int8', ''],['start', 'uint32', ''],['left', 'uint32', ''],['finish', 'uint8', ''],['plunder', 'uint8', ''],],
	'C2S_ESCORT_CAR':[],
	'S2C_ESCORT_CAR':[['quality', 'uint8', ''],['finish', 'uint8', ''],],
	'C2S_ESCORT_RECORD':[],
	'S2C_ESCORT_RECORD':[['records', 'list8', 'escort_records'],],
	'C2S_ESCORT_BEGIN':[],
	'C2S_ESCORT_ORANGE':[],
	'C2S_ESCORT_QUALITY':[],
	'C2S_ESCORT_PLUNDER':[['roleid', 'uint32', ''],['start', 'uint32', ''],],
	'C2S_ESCORT_REVENGE':[['recordid', 'uint16', ''],],
	'C2S_ESCORT_REWARD':[],
	'S2C_ESCORT_REWARD':[['rewards', 'list8', 'reward'],['items', 'list8', 'rewarditem'],['quality', 'uint8', ''],['records', 'list8', 'escort_records'],],
	'C2S_ESCORT_FINISH':[],
	'C2S_ESCORT_RED':[],
	'S2C_ESCORT_RED':[['state', 'int8', ''],['finish', 'uint8', ''],['left', 'uint32', ''],],
	'C2S_BEST_INFO':[],
	'S2C_BEST_INFO':[['state', 'int8', ''],['msg', 'string8', ''],['players', 'list8', 'best_player'],['level', 'int8', ''],['roleid', 'uint32', ''],['myrid', 'uint32', ''],['winner', 'best_winner', ''],],
	'C2S_BEST_APPLY':[],
	'C2S_BEST_DETAIL':[['id', 'uint8', ''],],
	'S2C_BEST_RECORD':[['ridleft', 'uint32', ''],['nameleft', 'string8', ''],['sidleft', 'int32', ''],['ridright', 'uint32', ''],['nameright', 'string8', ''],['sidright', 'int32', ''],['result', 'list8', 'uint8'],['id', 'uint8', ''],],
	'S2C_BEST_BET':[['left', 'best_fighter', ''],['right', 'best_fighter', ''],['price', 'list8', 'uint32'],['bet', 'int8', ''],['rid', 'uint32', ''],['id', 'uint8', ''],],
	'C2S_BEST_LOOK':[['id', 'uint8', ''],['num', 'uint8', ''],],
	'C2S_BEST_BUY':[['id', 'uint8', ''],['rid', 'uint32', ''],['bet', 'int8', ''],],
	'C2S_BEST_RED':[],
	'S2C_BEST_RED':[['red', 'uint8', ''],['lvl', 'uint16', ''],],
	'C2S_HEGEMONY_INFO':[],
	'S2C_HEGEMONY_NIFO':[['stage', 'int8', ''],['left', 'int32', ''],],
	'C2S_HEGEMONY_ENTER':[],
	'S2C_HEGEMONY_ENTER':[['camp', 'int8', ''],['stage', 'int8', ''],['left', 'int32', ''],['roomid', 'int32', ''],['mine_info', 'list16', 'hegemony_mine_info'],['players', 'list16', 'hegemony_role'],['rid', 'uint32', ''],['scores', 'list8', 'hegemony_score'],],
	'C2S_HEGEMONY_MOVE':[['x', 'int16', ''],['y', 'int16', ''],],
	'S2C_HEGEMONY_MOVE':[['rid', 'uint32', ''],['x', 'int16', ''],['y', 'int16', ''],],
	'C2S_HEGEMONY_LOOK':[['mid', 'int16', ''],],
	'S2C_HEGEMONY_LOOK':[['mine_info', 'hegemony_mine_info', ''],['defenders', 'list8', 'hegemony_defender'],],
	'C2S_HEGEMONY_EXPLOIT':[['mid', 'int16', ''],],
	'S2C_HEGEMONY_EXPLOIT':[['mid', 'int16', ''],],
	'C2S_HEGEMONY_EXIT':[],
	'S2C_HEGEMONY_EXIT':[],
	'S2C_HEGEMONY_REWARD':[['left', 'uint32', ''],],
	'C2S_HEGEMONY_REWARD':[],
	'C2S_HEGEMONY_FIGHT':[['mid', 'int16', ''],['rid', 'uint32', ''],],
	'S2C_HEGEMONY_MINE':[['mine_info', 'hegemony_mine_info', ''],],
	'S2C_HEGEMONY_ADD':[['role_info', 'hegemony_role', ''],],
	'S2C_HEGEMONY_REMOVE':[['rid', 'uint32', ''],],
	'S2C_HEGEMONY_SCORE':[['scores', 'list8', 'hegemony_score'],],
	'S2C_HEGEMONY_SELF':[['rid', 'uint32', ''],],
	'S2C_HEGEMONY_RESET':[['rid', 'uint32', ''],['x', 'int16', ''],['y', 'int16', ''],],
	'C2S_WULINHEAD_ENTER':[],
	'S2C_WULINHEAD_ENTER':[['left', 'uint32', ''],['npcs', 'list8', 'uint8'],['layer', 'uint8', ''],],
	'C2S_WULINHEAD_RANK':[],
	'S2C_WULINHEAD_RANK':[['rank', 'list16', 'wulin_rank_info'],['shape', 'int16', ''],['desc', 'byte8', ''],['myranking', 'int16', ''],['score', 'uint32', ''],],
	'C2S_WULINHEAD_RED':[],
	'S2C_WULINHEAD_RED':[['state', 'uint8', ''],],
	'C2S_WULINHEAD_PVE':[['npcid', 'uint8', ''],],
	'C2S_WULINHEAD_PVP':[['rid', 'uint32', ''],],
	'S2C_WULINHEAD_ADD':[['npcid', 'uint8', ''],],
	'S2C_WULINHEAD_REMOVE':[['npcid', 'uint8', ''],],
	'C2S_WULINHEAD_EXIT':[],
	'S2C_WULINHEAD_EXIT':[],
	'S2C_WULINHEAD_TASK':[['taskid', 'uint16', ''],['value', 'uint16', ''],],
	'C2S_WULINHEAD_TASK':[['taskid', 'uint16', ''],],
	'C2S_GOLDTREASURE_PAY':[['type', 'int8', ''],['gc', 'int8', ''],],
	'C2S_GOLDTREASURE_REWARD':[],
	'C2S_GOLDTREASURE_RARERECORD':[],
	'S2C_GOLDTREASURE_RESULT':[['rewards', 'list8', 'int8'],],
	'S2C_GOLDTREASURE_RARERECORD':[['records', 'list8', 'goldtreasure_rare'],],
	'C2S_COOKBATTLE_PAY':[['type', 'int8', ''],['style', 'int8', ''],],
	'C2S_COOKBATTLE_REWARD':[],
	'C2S_COOKBATTLE_RECIPEREWARD':[['style', 'int8', ''],],
	'S2C_COOKBATTLE_RESULT':[['results', 'list8', 'cookbattle_result'],],
	'S2C_COOKBATTLE_RECIPERECORD':[['recipes', 'list8', 'cookbattle_recipe'],['stylerw', 'list8', 'int8'],],
	'C2S_COSTGOLDHOLD_REWARD':[['type', 'int8', ''],],
	'C2S_COSTGOLDHOLD_ADDDAY':[],
	'S2C_COSTGOLDHOLD_INFO':[['holdday', 'int8', ''],['holdrw', 'int8', ''],['todaycost', 'int32', ''],['todayrw', 'int8', ''],],
}
export const C2S_WEBSOCKET_HELLO = 0x100;
export const S2C_WEBSOCKET_HELLO = 0x100;
export const S2C_MERGE_PACKET = 0x101;
export const C2S_LOGIN_ASYN_TIME = 0x111;
export const C2S_LOGIN = 0x113;
export const C2S_LOGIN_SESSION = 0x120;
export const C2S_LOGIN_GM = 0x121;
export const C2S_LOGIN_SELECTROLE = 0x114;
export const C2S_LOGIN_CLIENTREADY = 0x115;
export const C2S_LOGIN_CREATEROLE = 0x116;
export const C2S_LOGIN_DELETEROLE = 0x117;
export const C2S_LOGIN_RESTOREROLE = 0x118;
export const C2S_ACCOUNT_GUEST = 0x11a;
export const S2C_SYSTEM_VERSION = 0x110;
export const S2C_ASYNTIME = 0x111;
export const S2C_LOGIN = 0x112;
export const S2C_LOGIN_OK = 0x113;
export const S2C_LOGIN_ROLEINFO = 0x114;
export const S2C_LOGIN_SELECTROLE = 0x115;
export const S2C_LOGIN_DELETEROLE = 0x116;
export const S2C_LOGIN_RELOGIN = 0x117;
export const S2C_LOGIN_SESSION = 0x118;
export const S2C_LOGIN_UPDATESESSION = 0x119;
export const S2C_ACCOUNT_GUEST = 0x11a;
export const S2C_OPENTIME = 0x120;
export const S2C_SERVER_INFO = 0x128;
export const S2C_ACCOUNT_INFO = 0x129;
export const S2C_PROTOCOL_DESC = 0x121;
export const S2C_CLIENT_COMMAND = 0x122;
export const C2S_CLIENT_SETTING = 0x123;
export const S2C_CLIENT_SETTING = 0x123;
export const C2S_SERVER_SETTING = 0x124;
export const S2C_SERVER_SETTING = 0x124;
export const C2S_ROLE_RENAME = 0x125;
export const C2S_CHANGE_SIGN = 0x126;
export const S2C_ROLE_FREERENAME = 0x125;
export const S2C_SERVER_ONDAY = 0x127;
export const C2S_MAP_MOVE = 0x140;
export const C2S_MAP_PICK = 0x141;
export const S2C_MAP_TRACK = 0x42;
export const S2C_MAP_DEL = 0x43;
export const S2C_MAP_ADDPLAYER = 0x140;
export const S2C_MAP_ADDNPC = 0x141;
export const S2C_MAP_ADDGOODS = 0x142;
export const S2C_MAP_ADDSUMMON = 0x143;
export const S2C_MAP_DELSUMMON = 0x148;
export const S2C_MAP_ADDPARTNER = 0x149;
export const S2C_MAP_DELPARTNER = 0x14a;
export const S2C_MAP_ROLESTATE = 0x144;
export const S2C_MAP_CHANGESHAPE = 0x145;
export const S2C_MAP_CHANGETITLE = 0x146;
export const S2C_MAP_PLAYANI = 0x147;
export const S2C_MAP_ROLETITLE = 0x14b;
export const S2C_HANGMAP_INFO = 0x150;
export const C2S_NPC_LOOK = 0x160;
export const C2S_NPC_RESPOND = 0x161;
export const S2C_NPC_CHAT = 0x160;
export const C2S_ITEM_USE = 0x180;
export const C2S_ITEM_BAGEXPAND = 0x181;
export const S2C_ITEM_LIST = 0x180;
export const S2C_ITEM_ADD = 0x181;
export const S2C_ITEM_UPDATE = 0x182;
export const S2C_ITEM_DEL = 0x183;
export const S2C_ITEM_BAGCOUNT = 0x184;
export const C2S_CHAT = 0x1a0;
export const C2S_CHAT_GM = 0x1a1;
export const S2C_CHAT = 0x1a0;
export const S2C_CHAT_SYSTEM = 0x1a1;
export const S2C_NOTIFY_MESSAGE = 0x1b0;
export const S2C_NOTIFY_FLOAT = 0x1b1;
export const S2C_NOTIFY_FLYMESSAGE = 0x1b2;
export const S2C_NOTIFY_FLYHINT = 0x1b3;
export const S2C_NOTIFY_NOENOUGH = 0x1b4;
export const S2C_NOTIFY_REWARD = 0x1b5;
export const S2C_NOTIFY_OFFLINEREWARD = 0x1b6;
export const C2S_HERO_LEVELUP = 0x201;
export const S2C_HERO_PROP = 0x201;
export const S2C_HERO_ENTERSCENE = 0x202;
export const S2C_HERO_GOTO = 0x203;
export const S2C_HERO_REPUTE = 0x204;
export const S2C_BATTLE_RATIO = 0x205;
export const C2S_EQUIP_SWITCH = 0x210;
export const C2S_EQUIP_SMELT = 0x211;
export const C2S_EQUIP_DECOMPOSE = 0x212;
export const C2S_EQUIP_ENHANCE = 0x213;
export const S2C_EQUIP_GROWINFO = 0x210;
export const S2C_EQUIP_MASTER = 0x211;
export const S2C_EQUIP_ENHANCECOST = 0x212;
export const S2C_EQUIP_SMELT = 0x213;
export const C2S_SKILL_LEARN = 0x220;
export const C2S_SKILL_CONFIG = 0x221;
export const S2C_SKILL_LIST = 0x220;
export const S2C_SKILL_ADD = 0x221;
export const S2C_SKILL_DEL = 0x222;
export const S2C_SKILL_CONFIG = 0x223;
export const S2C_LEARN_COST = 0x224;
export const C2S_SUMMON_ACTIVE = 0x230;
export const C2S_SUMMON_FIGHT = 0x231;
export const C2S_SUMMON_RENAME = 0x232;
export const C2S_SUMMON_FOLLOW = 0x233;
export const C2S_SUMMON_UPGRADE = 0x234;
export const C2S_SUMMON_APTUPGRADE = 0x235;
export const C2S_SUMMON_SKILLREFINE = 0x236;
export const C2S_SUMMON_SKILLSAVE = 0x237;
export const C2S_SUMMON_SKILLPREVIEW = 0x238;
export const S2C_SUMMON_INFO = 0x230;
export const S2C_SUMMON_UPDATE = 0x231;
export const S2C_SUMMON_FIGHT = 0x232;
export const S2C_SUMMON_APTINFO = 0x233;
export const S2C_SUMMON_SKILLPREVIEW = 0x234;
export const C2S_MOUNT_UPGRADE = 0x240;
export const C2S_MOUNT_ACTIVE = 0x241;
export const C2S_MOUNT_CHANGE = 0x242;
export const C2S_MOUNT_SKILL_UPGRADE = 0x243;
export const C2S_MOUNT_EQUIP_SWITCH = 0x244;
export const C2S_MOUNT_DANYAO = 0x245;
export const S2C_MOUNT_INFO = 0x240;
export const S2C_MOUNT_SKINLIST = 0x241;
export const S2C_MOUNT_SKILLLIST = 0x242;
export const S2C_MOUNT_DANYAO = 0x243;
export const C2S_WING_UPGRADE = 0x250;
export const C2S_WING_ACTIVE = 0x251;
export const C2S_WING_CHANGE = 0x252;
export const C2S_WING_SKILL_UPGRADE = 0x253;
export const C2S_WING_EQUIP_SWITCH = 0x254;
export const C2S_WING_DANYAO = 0x255;
export const S2C_WING_INFO = 0x250;
export const S2C_WING_SKINLIST = 0x251;
export const S2C_WING_SKILLLIST = 0x252;
export const S2C_WING_DANYAO = 0x253;
export const C2S_SUMMONSOUL_UPGRADE = 0x260;
export const C2S_SUMMONSOUL_ACTIVE = 0x261;
export const C2S_SUMMONSOUL_CHANGE = 0x262;
export const C2S_SUMMONSOUL_SKILL_UPGRADE = 0x263;
export const C2S_SUMMONSOUL_EQUIP_SWITCH = 0x264;
export const C2S_SUMMONSOUL_DANYAO = 0x265;
export const S2C_SUMMONSOUL_INFO = 0x260;
export const S2C_SUMMONSOUL_SKINLIST = 0x261;
export const S2C_SUMMONSOUL_SKILLLIST = 0x262;
export const S2C_SUMMONSOUL_DANYAO = 0x263;
export const S2C_SUMMONSOUL_SHAPE = 0x264;
export const C2S_SUMMONAURA_UPGRADE = 0x270;
export const C2S_SUMMONAURA_ACTIVE = 0x271;
export const C2S_SUMMONAURA_CHANGE = 0x272;
export const C2S_SUMMONAURA_SKILL_UPGRADE = 0x273;
export const C2S_SUMMONAURA_EQUIP_SWITCH = 0x274;
export const C2S_SUMMONAURA_DANYAO = 0x275;
export const S2C_SUMMONAURA_INFO = 0x270;
export const S2C_SUMMONAURA_SKINLIST = 0x271;
export const S2C_SUMMONAURA_SKILLLIST = 0x272;
export const S2C_SUMMONAURA_DANYAO = 0x273;
export const S2C_SUMMONAURA_SHAPE = 0x274;
export const C2S_PARTNER_ACTIVE = 0x280;
export const C2S_PARTNER_FIGHT = 0x281;
export const C2S_PARTNER_UPGRADE = 0x282;
export const C2S_PARTNER_UPSTAR = 0x283;
export const S2C_PARTNER_INFO = 0x280;
export const S2C_PARTNER_FIGHT = 0x281;
export const S2C_PARTNER_XIANYUAN = 0x282;
export const C2S_XIANZHEN_UPGRADE = 0x290;
export const C2S_XIANZHEN_CHANGE = 0x292;
export const C2S_XIANZHEN_SKILL_UPGRADE = 0x293;
export const C2S_XIANZHEN_EQUIP_SWITCH = 0x294;
export const C2S_XIANZHEN_DANYAO = 0x295;
export const S2C_XIANZHEN_INFO = 0x290;
export const S2C_XIANZHEN_SKILLLIST = 0x292;
export const S2C_XIANZHEN_DANYAO = 0x293;
export const S2C_XIANZHEN_SHAPE = 0x294;
export const C2S_JINGJIE_UPGRADE = 0x2a0;
export const C2S_JINGJIE_CHANGE = 0x2a2;
export const C2S_JINGJIE_SKILL_UPGRADE = 0x2a3;
export const C2S_JINGJIE_EQUIP_SWITCH = 0x2a4;
export const C2S_JINGJIE_DANYAO = 0x2a5;
export const S2C_JINGJIE_INFO = 0x2a0;
export const S2C_JINGJIE_SKILLLIST = 0x2a2;
export const S2C_JINGJIE_DANYAO = 0x2a3;
export const S2C_JINGJIE_SHAPE = 0x2a4;
export const C2S_WEAPON_UPGRADE = 0x2b0;
export const C2S_WEAPON_ACTIVE = 0x2b1;
export const C2S_WEAPON_CHANGE = 0x2b2;
export const C2S_WEAPON_SKILL_UPGRADE = 0x2b3;
export const C2S_WEAPON_EQUIP_SWITCH = 0x2b4;
export const C2S_WEAPON_DANYAO = 0x2b5;
export const S2C_WEAPON_INFO = 0x2b0;
export const S2C_WEAPON_SKINLIST = 0x2b1;
export const S2C_WEAPON_SKILLLIST = 0x2b2;
export const S2C_WEAPON_DANYAO = 0x2b3;
export const C2S_FAIRY_UPGRADE = 0x2c0;
export const C2S_FAIRY_ACTIVE = 0x2c1;
export const C2S_FAIRY_CHANGE = 0x2c2;
export const C2S_FAIRY_SKILL_UPGRADE = 0x2c3;
export const C2S_FAIRY_EQUIP_SWITCH = 0x2c4;
export const C2S_FAIRY_DANYAO = 0x2c5;
export const S2C_FAIRY_INFO = 0x2c0;
export const S2C_FAIRY_SKINLIST = 0x2c1;
export const S2C_FAIRY_SKILLLIST = 0x2c2;
export const S2C_FAIRY_DANYAO = 0x2c3;
export const C2S_TITLE_ACTIVE = 0x2d0;
export const C2S_TITLE_CHANGE = 0x2d1;
export const C2S_FASHION_ACTIVE = 0x2d2;
export const C2S_FASHION_CHANGE = 0x2d3;
export const S2C_TITLE_LIST = 0x2d0;
export const S2C_TITLE_ADD = 0x2d1;
export const S2C_FASHION_LIST = 0x2d2;
export const S2C_FASHION_ADD = 0x2d3;
export const C2S_TRAVEL_UPGRADE = 0x2e0;
export const C2S_TRAVEL_FINDEXP = 0x2e1;
export const C2S_GET_TOPPLAYERINFO = 0x2e2;
export const C2S_GET_TRAVELREWARD = 0x2e3;
export const S2C_TRAVEL_INFO = 0x2e0;
export const S2C_TRAVEL_EXP = 0x2e1;
export const S2C_TOPPLAYER_INFO = 0x2e2;
export const S2C_TRAVEL_TODAYEXP = 0x2e3;
export const C2S_JINGMAI_UPGRADE = 0x2f0;
export const C2S_DANYAO_EAT = 0x2f1;
export const S2C_JINGMAI_INFO = 0x2f0;
export const S2C_DANYAO_INFO = 0x2f1;
export const S2C_WAR_START = 0x300;
export const S2C_WAR_ADD = 0x301;
export const S2C_WAR_LEAVE = 0x302;
export const S2C_WAR_STATUS = 0x303;
export const S2C_WAR_NEXT = 0x305;
export const S2C_WAR_TURN = 0x306;
export const S2C_WAR_PREEND = 0x30e;
export const S2C_WAR_END = 0x30f;
export const S2C_WAR_REPLY = 0x30d;
export const S2C_WAR_ATTACK_NORMAL = 0x311;
export const S2C_WAR_ATTACK_END = 0x312;
export const S2C_WAR_PERFORM = 0x313;
export const S2C_WAR_PERFORM_END = 0x314;
export const S2C_WAR_PARTNER_ATTACK = 0x315;
export const S2C_WAR_BACKATTACK = 0x316;
export const S2C_WAR_BACKATTACK_END = 0x317;
export const S2C_WAR_SHAKE = 0x318;
export const S2C_WAR_PROTECT = 0x319;
export const S2C_WAR_ATTACK_STATUS = 0x31a;
export const S2C_WAR_BUFF_ADD = 0x330;
export const S2C_WAR_BUFF_DEL = 0x331;
export const C2S_WAR_PLAYEND = 0x340;
export const S2C_WAR_DEFEAT = 0x340;
export const C2S_MAIL_GETATTACH = 0x402;
export const C2S_MAIL_GETALL = 0x403;
export const C2S_MAIL_GETINFO = 0x404;
export const S2C_MAIL_LIST = 0x400;
export const S2C_MAIL_ADD = 0x401;
export const S2C_MAIL_DEL = 0x402;
export const S2C_MAIL_INFO = 0x404;
export const C2S_TEAM_JOIN = 0x420;
export const C2S_TEAM_LEAVE = 0x422;
export const C2S_TEAM_KICK = 0x423;
export const S2C_TEAM_MEMBERLIST = 0x420;
export const S2C_TEAM_LEAVE = 0x421;
export const S2C_TEAM_DISBAND = 0x422;
export const C2S_TEAMPLAT_CREATE = 0x440;
export const C2S_TEAMPLAT_ENTERROOM = 0x442;
export const C2S_TEAMPLAT_ROOMINFO = 0x441;
export const S2C_TEAMPLAT_ROOMINFO = 0x440;
export const S2C_TEAMPLAT_ROOMTYPE = 0x441;
export const C2S_UPGRADEREWARD_GET = 0x480;
export const S2C_UPGRADEREWARD_LIST = 0x480;
export const C2S_VIPREWARD_GET = 0x481;
export const S2C_VIPREWARD_LIST = 0x481;
export const C2S_GRADEREWARD_GET = 0x482;
export const S2C_GRADEREWARD_LIST = 0x482;
export const C2S_SIGNINREWARD_GET = 0x483;
export const S2C_SIGNINREWARD_LIST = 0x483;
export const C2S_TEST_WEBCHARGE = 0x484;
export const S2C_TEST_WEBCHARGE = 0x484;
export const S2C_CHARGE_PRODUCTLIST = 0x485;
export const C2S_FIRSTCHARGE_GET = 0x486;
export const S2C_FIRSTCHARGE_LIST = 0x486;
export const C2S_TODAYCHARGE_GET = 0x487;
export const S2C_TODAYCHARGE_LIST = 0x487;
export const C2S_GROWTHFUND_BUY = 0x488;
export const C2S_GROWTHFUND_GET = 0x489;
export const S2C_GROWTHFUND_INFO = 0x488;
export const C2S_INVESTPLAN_BUY = 0x48a;
export const C2S_INVESTPLAN_GET = 0x48b;
export const S2C_INVESTPLAN_INFO = 0x48a;
export const C2S_CHARGEGROUPBUY_GET = 0x48c;
export const S2C_CHARGEGROUPBUY_INFO = 0x48c;
export const C2S_PRIVCARD_GETREWARD = 0x48d;
export const S2C_PRIVCARD_INFO = 0x48d;
export const C2S_DIRECTCHARGE_GET = 0x48e;
export const S2C_DIRECTCHARGE_INFO = 0x48e;
export const c2s_login = 0x1;
export const c2s_createrole = 0x2;
export const c2s_choserole = 0x3;
export const c2s_move = 0x4;
export const c2s_getrolelist = 0x5;
export const s2c_common_rsp = 0x1;
export const s2c_rolelist = 0x2;
export const s2c_enterscene = 0x3;
export const s2c_role_move = 0x4;
export const s2c_role_enter = 0x5;
export const s2c_role_out = 0x6;
export const s2c_localkey = 0x7;
export const C2S_MONEY_EXC_INFO = 0x501;
export const C2S_MONEY_EXCHANGE = 0x502;
export const S2C_MONEY_EXC_INFO = 0x501;
export const C2S_MAINTASK_REPLY = 0x1000;
export const S2C_MAINTASK_INFO = 0x1000;
export const C2S_FENGYAO_YAOGUAI = 0x1100;
export const C2S_FENGYAO_BUYSTAR = 0x1101;
export const C2S_FENGYAO_COMPLETEALL = 0x1102;
export const C2S_FENGYAO_FIGHT = 0x1103;
export const C2S_FENGYAO_FULLRWD = 0x1104;
export const S2C_FENGYAO_MAIN = 0x1100;
export const S2C_FENGYAO_LIST = 0x1104;
export const S2C_FENGYAO_YG = 0x1101;
export const S2C_FENGYAO_ADD = 0x1102;
export const S2C_FENGYAO_DEL = 0x1103;
export const C2S_SHIMEN_QUERY = 0x1106;
export const C2S_SHIMEN_REWARD = 0x1107;
export const C2S_SHIMEN_BUY = 0x1108;
export const S2C_SHIMEN_INFO = 0x1105;
export const C2S_PB_FIGHT = 0x110a;
export const S2C_PB_INFO = 0x1108;
export const C2S_QMBOSS_LIST = 0x1110;
export const C2S_QMBOSS_DAMAGE_LIST = 0x1111;
export const C2S_QMBOSS_PAY_REBIRTH = 0x1112;
export const C2S_QMBOSS_FIGHT = 0x1113;
export const C2S_QMBOSS_SET_CONCERNED = 0x1114;
export const C2S_QMBOSS_PURCHASE_TIMES = 0x1115;
export const S2C_QMBOSS_REBIRTH = 0x110a;
export const S2C_QMBOSS_LIST = 0x110b;
export const S2C_QMBOSS_DAMAGE_LIST = 0x110c;
export const S2C_QMBOSS_KILL_LIST = 0x110d;
export const S2C_QMBOSS_TIMES_INFO = 0x110e;
export const S2C_QMBOSS_PURCHASE_TIMES = 0x1107;
export const S2C_QMBOSS_CONCERNED = 0x110f;
export const S2C_QMBOSS_FIGHT_DAMAGE = 0x1109;
export const C2S_SUMCATCH_DETAIL = 0x1117;
export const C2S_SUMCATCH_DOCATCH = 0x1118;
export const S2C_SUMCATCH_STATUS = 0x1110;
export const S2C_SUMCATCH_RESULT = 0x1111;
export const S2C_SUMCATCH_SUMMON = 0x1112;
export const C2S_SCFIGHT_TRYFIGHT = 0x111a;
export const C2S_SCENEPASS_FIGHT = 0x111c;
export const C2S_SCENEPASS_HELP = 0x111d;
export const C2S_SCENEPASS_UPSCENE = 0x111e;
export const C2S_SCENEPASS_HELPTIMES = 0x111f;
export const C2S_SCENEPASS_GET_SECRWD = 0x111b;
export const S2C_SCENEPASS_INFO = 0x1115;
export const S2C_SCENEPASS_NEXT = 0x1116;
export const S2C_SCENEPASS_HELPTIMES = 0x1117;
export const S2C_SCENEPASS_SECRWD = 0x1118;
export const S2C_SCENEPASS_FAILED = 0x1119;
export const C2S_RANK = 0x1120;
export const S2C_RANK = 0x1120;
export const C2S_RANK_SIMPLE = 0x1121;
export const S2C_RANK_SIMPLE = 0x1121;
export const C2S_ITEMEXCH_PURCHASE = 0x520;
export const C2S_ITEMEXCH_SHOP = 0x521;
export const C2S_ITEMEXCH_AUTO_EXCHANGE = 0x522;
export const S2C_ITEMEXCH_UPDATE = 0x520;
export const S2C_ITEMEXCH_SHOP = 0x521;
export const C2S_MATERFB_TRYFIGHT = 0x1123;
export const C2S_MATERFB_SAODANG = 0x1124;
export const C2S_MATERFB_INFO = 0x1125;
export const S2C_MATERFB_INFO = 0x1123;
export const C2S_PDYW_FIGHT = 0x1128;
export const C2S_PDYW_REWARD = 0x1129;
export const C2S_PDYW_BUYFULL = 0x112a;
export const C2S_PDYW_STATUS = 0x112b;
export const S2C_PDYW_STATUS = 0x1129;
export const C2S_FRIEND_FRIENDLIST = 0x800;
export const C2S_FRIEND_RELAOPERA = 0x801;
export const C2S_FRIEND_SENDCOIN = 0x802;
export const C2S_FRIEND_SENDCOIN_ALL = 0x806;
export const C2S_FRIEND_ACCEPTCOIN = 0x803;
export const C2S_FRIEND_SENDCHAT = 0x804;
export const C2S_FRIEND_COIN_INFO = 0x805;
export const C2S_FRIEND_ACC_ONE_COIN = 0x807;
export const C2S_FRIEND_RANDROLE = 0x808;
export const C2S_FRIEND_SEARCH_ROLE = 0x809;
export const S2C_FRIEND_LIST = 0x800;
export const S2C_FRIEND_REQLIST = 0x801;
export const S2C_FRIEND_BLACKLIST = 0x802;
export const S2C_FRIEND_UPDFRIEND = 0x803;
export const S2C_FRIEND_NEWREQUEST = 0x804;
export const S2C_FRIEND_NEWBLACK = 0x805;
export const S2C_FRIEND_RMFRIEND = 0x806;
export const S2C_FRIEND_RMREQUEST = 0x807;
export const S2C_FRIEND_RMBLACK = 0x808;
export const S2C_FRIEND_CHAT = 0x809;
export const S2C_FRIEND_COINLIST = 0x80a;
export const S2C_FRIEND_NEWCOIN = 0x80b;
export const S2C_FRIEND_COININFO = 0x80c;
export const S2C_FRIEND_RM_COIN = 0x80d;
export const S2C_FRIEND_RANDROLE = 0x80e;
export const C2S_ROLE_INFO = 0x810;
export const S2C_ROLE_INFO = 0x810;
export const C2S_ROLE_DESC = 0x811;
export const S2C_ROLE_DESC = 0x811;
export const C2S_MARRIAGE_PROPOSE_LIST = 0x820;
export const C2S_MARRIAGE_PROPOSE = 0x821;
export const C2S_MARRIAGE_RESP_PROPOSE = 0x822;
export const C2S_MARRIAGE_DIVORCE = 0x823;
export const C2S_MARRIAGE_WISH = 0x824;
export const S2C_MARRIAGE_PROPOSE_LIST = 0x820;
export const S2C_MARRIAGE_RECV_PROPOSE = 0x821;
export const S2C_MARRIAGE_WEDDING_START = 0x822;
export const S2C_MARRIAGE_INFO = 0x823;
export const C2S_WILDBOSS_LIST = 0x1130;
export const C2S_WILDBOSS_DETAIL = 0X1131;
export const C2S_WILDBOSS_FIGHT = 0x1132;
export const S2C_WILDBOSS_LIST = 0x1130;
export const S2C_WILDBOSS_DETAIL = 0x1131;
export const C2S_TREASURE_FIGHT = 0x1135;
export const C2S_TREASURE_REWARD = 0x1136;
export const C2S_TREASURE_QEURYRWD = 0x1137;
export const C2S_TREASURE_FIGHTALL = 0x1138;
export const S2C_TREASURE_STARS = 0x1135;
export const S2C_TREASURE_REWARDS = 0x1136;
export const S2C_TREASURE_RESULT = 0x1137;
export const C2S_TFB_MATCH = 0x113a;
export const C2S_TBF_FIGHT = 0x113b;
export const C2S_TBF_ROOM = 0x113c;
export const C2S_TBF_INFO = 0x113d;
export const S2C_TBF_INFO = 0x113a;
export const S2C_TBF_ROOM = 0x113b;
export const S2C_TBF_REWARDED = 0x113c;
export const C2S_WORLDQUES_QUESTION = 0x1140;
export const C2S_WORLDQUES_INFO = 0x1141;
export const C2S_WORLDQUES_ANSWER = 0x1142;
export const C2S_WORLDQUES_REWARD = 0x1143;
export const S2C_WORLDQUES_QUESTION = 0x1140;
export const S2C_WORLDQUES_INFO = 0x1141;
export const S2C_WORLDQUES_ANSWER = 0x1142;
export const S2C_WORLDQUES_REWARDED = 0x1143;
export const S2C_ACTIVITY_STATUS = 0x1150;
export const C2S_GOOSETOWER_FIGHT = 0x1146;
export const S2C_GOOSETOWER_INFO = 0x1146;
export const S2C_GOOSETOWER_RESULT = 0x1147;
export const C2S_TTXY_TODAY = 0x1150;
export const C2S_TTXY_FIGHT = 0x1151;
export const C2S_TTXY_GETREWARD = 0x1152;
export const C2S_TTXY_FIGHTALL = 0x1153;
export const S2C_TTXY_TODAY = 0x1154;
export const S2C_TTXY_TOTAL = 0x1151;
export const S2C_TTXY_REWARDED = 0x1152;
export const S2C_TTXY_RESULT = 0x1153;
export const C2S_GANG_DETAIL = 0x900;
export const C2S_GANG_SETNAME = 0x901;
export const C2S_GANG_SETNOTICE = 0x902;
export const C2S_GANG_RECRUIT = 0x903;
export const C2S_GANG_MEMBER = 0x904;
export const C2S_GANG_FOUND = 0x905;
export const C2S_GANG_KICK = 0x910;
export const C2S_GANG_QUIT = 0x911;
export const C2S_GANG_SETPOS = 0x912;
export const C2S_GANG_ABDICATE = 0x913;
export const C2S_GANG_SET_AUTOPASS = 0x914;
export const C2S_GANG_JOIN_LIST = 0x915;
export const C2S_GANG_RESP_JOIN = 0x916;
export const C2S_GANG_JOIN = 0x917;
export const C2S_GANG_JOIN_ALL = 0x918;
export const C2S_GANG_LIST = 0x91a;
export const C2S_GANG_LOG = 0x91b;
export const C2S_GANG_DONATE = 0x91c;
export const S2C_GANG_DETAIL = 0x900;
export const S2C_GANG_MEMBERS = 0x901;
export const S2C_GANG_JOIN_LIST = 0x902;
export const S2C_GANG_LIST = 0x903;
export const S2C_GANG_AUTOPASS = 0x904;
export const S2C_GANG_LOG = 0x905;
export const S2C_GANG_CONTRIBUTION = 0x906;
export const S2C_GANG_MONEY = 0x907;
export const S2C_GANG_MEMBER_COUNT = 0x908;
export const S2C_GANG_MY_POSITION = 0x909;
export const C2S_GANG_INCENSE_INFO = 0x920;
export const C2S_GANG_INCENSE_REWARD = 0x921;
export const C2S_GANG_INCENSE = 0x922;
export const S2C_GANG_INCENSE_ROLE = 0x920;
export const S2C_GANG_INCENSE_VALUE = 0x921;
export const S2C_GANG_INCENSE_LOG = 0x922;
export const C2S_GANG_FUBEN_FIGHT = 0x925;
export const C2S_GANG_FUBEN_TODAY = 0x926;
export const C2S_GANG_FUBEN_QUERYID = 0x927;
export const S2C_GANG_FUBEN_REWARDED = 0x925;
export const S2C_GANG_FUBEN_TODAY = 0x926;
export const S2C_GANG_FUBEN_ROOMID = 0x927;
export const C2S_GANG_SKILL_UPGRADE = 0x92a;
export const S2C_GANG_SKILL_INFO = 0x92a;
export const S2C_WAR_SERIAL = 0x350;
export const C2S_GANG_BOSS_OPEN = 0x930;
export const C2S_GANG_BOSS_FIGHT = 0x932;
export const C2S_GANG_BOSS_GETREWARD = 0x933;
export const C2S_GANG_BOSS_FORCEKILL = 0x934;
export const C2S_GANG_BOSS_DAMAGELIST = 0x935;
export const C2S_GANG_BOSS_REWARDSTATUS = 0x936;
export const C2S_GANG_BOSS_STATUS = 0x937;
export const S2C_GANG_BOSS_STATUS = 0x930;
export const S2C_GANG_BOSS_REWARD = 0x932;
export const S2C_GANG_BOSS_DAMAGE = 0x933;
export const C2S_GANG_SCENE_ENTER = 0x940;
export const C2S_GANG_SCENE_LEAVE = 0x941;
export const C2S_GANG_SCENE_MINING = 0x942;
export const C2S_GANG_SCENE_MINRESET = 0x943;
export const C2S_GANG_SCENE_MINREWARD = 0x944;
export const C2S_GANG_SCENE_MINBUYFULL = 0x945;
export const C2S_GANG_SCENE_PLANT = 0x946;
export const C2S_GANG_SCENE_WATER = 0x947;
export const C2S_GANG_SCENE_EXCHANGE = 0x948;
export const C2S_GANG_SCENE_EXCHREFRESH = 0x949;
export const C2S_GANG_SCENE_PLANTRESET = 0x94a;
export const C2S_GANG_SCENE_PLANTREWARD = 0x94b;
export const S2C_GANG_SCENE_TRANSFER = 0x937;
export const S2C_GANG_SCENE_MINING_TIMES = 0x942;
export const S2C_GANG_SCENE_ALL_FLOWER = 0x943;
export const S2C_GANG_SCENE_FLOWER_TIMES = 0x944;
export const S2C_GANG_SCENE_FLOWER_CHANGE = 0x945;
export const S2C_GANG_SCENE_EXCHINFO = 0x947;
export const C2S_GANG_TRAVEL_UPGRADE = 0x950;
export const C2S_GANG_TRAVEL_REWARD = 0x951;
export const S2C_GANG_TRAVEL_INFO = 0x950;
export const S2C_GANG_TRAVEL_EXP = 0x951;
export const S2C_GANG_TRAVEL_REWARDED = 0x952;
export const C2S_PANDAH_FIGHT = 0x1160;
export const S2C_PANDAH_FIGHTED = 0x1160;
export const C2S_ITEM_COMPOSE = 0x186;
export const C2S_PERCHARGE_GETREWARD = 0x1165;
export const S2C_PERCHARGE_CHARGED = 0x1165;
export const S2C_PERCHARGE_REWARDED = 0x1166;
export const C2S_DIRGROWUP_GETREWARD = 0x1168;
export const S2C_DIRGROWUP_CHARGED = 0x1168;
export const S2C_DIRGROWUP_REWARDED = 0x1169;
export const C2S_GROWUPRWD_GETREWARD = 0x116d;
export const S2C_GROWUPRWD_REWARDED = 0x116d;
export const S2C_GROWUPRWD_CYCLE_STATUS = 0x116e;
export const C2S_8SING_GETREWARD = 0x1170;
export const S2C_8SIGN_INFO = 0x1170;
export const S2C_HDGROWUP_RANK = 0x1173;
export const C2S_HDQMGROWUP_GETREWARD = 0x1176;
export const S2C_HDQMGROWUP_COUNT = 0x1176;
export const S2C_HDQMGROWUP_REWARDED = 0x1177;
export const S2C_HDQMGROWUP_STAGE = 0x1178;
export const C2S_DISCOUNTSHOP_PURCHASE = 0x117b;
export const S2C_DISCOUNTSHOP_SHOPINFO = 0x117b;
export const S2C_DISCOUNTSHOP_UPDATE = 0x117c;
export const C2S_HDGRADERWD_GETREWARD = 0x1180;
export const S2C_HDGRADERWD_REWARDED = 0x1180;
export const C2S_OPENPLAY_GETREWARD = 0x1183;
export const S2C_OPENPLAY_REWARDED = 0x1183;
export const S2C_OPENPLAY_VALUE = 0x1185;
export const S2C_OPENPLAY_TODAYDESC = 0x1184;
export const C2S_HAOLI_GETREWARD = 0x1187;
export const S2C_HAOLI_CHARGED = 0x1187;
export const S2C_HAOLI_REWARDED = 0x1188;
export const C2S_CLIENT_OPERATION = 0x118a;
export const C2S_ARENA_INFO = 0x2800;
export const S2C_ARENA_INFO = 0x2800;
export const C2S_ARENA_RECORD = 0x2801;
export const S2C_ARENA_RECORD = 0x2801;
export const C2S_ARENA_FIGHT = 0x2802;
export const S2C_ARENA_WAR_END = 0x2802;
export const C2S_ARENA_BUY = 0x2803;
export const S2C_ARENA_CHANCE = 0x2803;
export const C2S_ARENA_RANK = 0x2804;
export const S2C_ARENA_RANK = 0x2804;
export const C2S_ARENA_SECKILL = 0x2805;
export const C2S_ARENA_TIMES = 0x2806;
export const C2S_TSUMEKO_PROGRESS = 0x2820;
export const S2C_TSUMEKO_PROGRESS = 0x2820;
export const C2S_TSUMEKO_INFO = 0x2821;
export const S2C_TSUMEKO_INFO = 0x2821;
export const C2S_TSUMEKO_RECORD = 0x2822;
export const S2C_TSUMEKO_RECORD = 0x2822;
export const S2C_TSUMEKO_NO_RECORD = 0x2823;
export const C2S_TSUMEKO_FIGHT = 0x2823;
export const C2S_TSUMEKO_SECKILL = 0x2824;
export const C2S_TSUMEKO_BOX = 0x2825;
export const C2S_TSUMEKO_KILL_ALL = 0x2826;
export const S2C_TSUMEKO_BAG = 0x2824;
export const S2C_TSUMEKO_RED = 0x2825;
export const C2S_ESCORT_INFO = 0x2840;
export const S2C_ESCORT_INFO = 0x2840;
export const C2S_ESCORT_CAR = 0x2841;
export const S2C_ESCORT_CAR = 0x2841;
export const C2S_ESCORT_RECORD = 0x2842;
export const S2C_ESCORT_RECORD = 0x2842;
export const C2S_ESCORT_BEGIN = 0x2843;
export const C2S_ESCORT_ORANGE = 0x2844;
export const C2S_ESCORT_QUALITY = 0x2845;
export const C2S_ESCORT_PLUNDER = 0x2846;
export const C2S_ESCORT_REVENGE = 0x2847;
export const C2S_ESCORT_REWARD = 0x2848;
export const S2C_ESCORT_REWARD = 0x2848;
export const C2S_ESCORT_FINISH = 0x2849;
export const C2S_ESCORT_RED = 0x284a;
export const S2C_ESCORT_RED = 0x284a;
export const C2S_BEST_INFO = 0x2860;
export const S2C_BEST_INFO = 0x2860;
export const C2S_BEST_APPLY = 0x2861;
export const C2S_BEST_DETAIL = 0x2862;
export const S2C_BEST_RECORD = 0x2862;
export const S2C_BEST_BET = 0x2863;
export const C2S_BEST_LOOK = 0x2864;
export const C2S_BEST_BUY = 0x2865;
export const C2S_BEST_RED = 0x2866;
export const S2C_BEST_RED = 0x2866;
export const C2S_HEGEMONY_INFO = 0x2870;
export const S2C_HEGEMONY_NIFO = 0x2870;
export const C2S_HEGEMONY_ENTER = 0x2871;
export const S2C_HEGEMONY_ENTER = 0x2871;
export const C2S_HEGEMONY_MOVE = 0x2872;
export const S2C_HEGEMONY_MOVE = 0x2872;
export const C2S_HEGEMONY_LOOK = 0x2873;
export const S2C_HEGEMONY_LOOK = 0x2873;
export const C2S_HEGEMONY_EXPLOIT = 0x2874;
export const S2C_HEGEMONY_EXPLOIT = 0x2874;
export const C2S_HEGEMONY_EXIT = 0x2875;
export const S2C_HEGEMONY_EXIT = 0x2875;
export const S2C_HEGEMONY_REWARD = 0x2876;
export const C2S_HEGEMONY_REWARD = 0x2876;
export const C2S_HEGEMONY_FIGHT = 0x2877;
export const S2C_HEGEMONY_MINE = 0x2878;
export const S2C_HEGEMONY_ADD = 0x2879;
export const S2C_HEGEMONY_REMOVE = 0x287A;
export const S2C_HEGEMONY_SCORE = 0x287B;
export const S2C_HEGEMONY_SELF = 0x287C;
export const S2C_HEGEMONY_RESET = 0x287D;
export const C2S_WULINHEAD_ENTER = 0x2880;
export const S2C_WULINHEAD_ENTER = 0x2880;
export const C2S_WULINHEAD_RANK = 0x2881;
export const S2C_WULINHEAD_RANK = 0x2881;
export const C2S_WULINHEAD_RED = 0x2882;
export const S2C_WULINHEAD_RED = 0x2882;
export const C2S_WULINHEAD_PVE = 0x2883;
export const C2S_WULINHEAD_PVP = 0x2884;
export const S2C_WULINHEAD_ADD = 0x2883;
export const S2C_WULINHEAD_REMOVE = 0x2884;
export const C2S_WULINHEAD_EXIT = 0x2885;
export const S2C_WULINHEAD_EXIT = 0x2885;
export const S2C_WULINHEAD_TASK = 0x2886;
export const C2S_WULINHEAD_TASK = 0x2886;
export const C2S_GOLDTREASURE_PAY = 0x2000;
export const C2S_GOLDTREASURE_REWARD = 0x2001;
export const C2S_GOLDTREASURE_RARERECORD = 0x2003;
export const S2C_GOLDTREASURE_RESULT = 0x2001;
export const S2C_GOLDTREASURE_RARERECORD = 0x2002;
export const C2S_COOKBATTLE_PAY = 0x2010;
export const C2S_COOKBATTLE_REWARD = 0x2011;
export const C2S_COOKBATTLE_RECIPEREWARD = 0x2012;
export const S2C_COOKBATTLE_RESULT = 0x2010;
export const S2C_COOKBATTLE_RECIPERECORD = 0x2011;
export const C2S_COSTGOLDHOLD_REWARD = 0x2020;
export const C2S_COSTGOLDHOLD_ADDDAY = 0x2021;
export const S2C_COSTGOLDHOLD_INFO = 0x2020;

export const S2C_CMD_2_PROTODESC:{[key:number]:string;} = {}
S2C_CMD_2_PROTODESC[S2C_WEBSOCKET_HELLO]='S2C_WEBSOCKET_HELLO';
S2C_CMD_2_PROTODESC[S2C_MERGE_PACKET]='S2C_MERGE_PACKET';
S2C_CMD_2_PROTODESC[S2C_SYSTEM_VERSION]='S2C_SYSTEM_VERSION';
S2C_CMD_2_PROTODESC[S2C_ASYNTIME]='S2C_ASYNTIME';
S2C_CMD_2_PROTODESC[S2C_LOGIN]='S2C_LOGIN';
S2C_CMD_2_PROTODESC[S2C_LOGIN_OK]='S2C_LOGIN_OK';
S2C_CMD_2_PROTODESC[S2C_LOGIN_ROLEINFO]='S2C_LOGIN_ROLEINFO';
S2C_CMD_2_PROTODESC[S2C_LOGIN_SELECTROLE]='S2C_LOGIN_SELECTROLE';
S2C_CMD_2_PROTODESC[S2C_LOGIN_DELETEROLE]='S2C_LOGIN_DELETEROLE';
S2C_CMD_2_PROTODESC[S2C_LOGIN_RELOGIN]='S2C_LOGIN_RELOGIN';
S2C_CMD_2_PROTODESC[S2C_LOGIN_SESSION]='S2C_LOGIN_SESSION';
S2C_CMD_2_PROTODESC[S2C_LOGIN_UPDATESESSION]='S2C_LOGIN_UPDATESESSION';
S2C_CMD_2_PROTODESC[S2C_ACCOUNT_GUEST]='S2C_ACCOUNT_GUEST';
S2C_CMD_2_PROTODESC[S2C_OPENTIME]='S2C_OPENTIME';
S2C_CMD_2_PROTODESC[S2C_SERVER_INFO]='S2C_SERVER_INFO';
S2C_CMD_2_PROTODESC[S2C_ACCOUNT_INFO]='S2C_ACCOUNT_INFO';
S2C_CMD_2_PROTODESC[S2C_PROTOCOL_DESC]='S2C_PROTOCOL_DESC';
S2C_CMD_2_PROTODESC[S2C_CLIENT_COMMAND]='S2C_CLIENT_COMMAND';
S2C_CMD_2_PROTODESC[S2C_CLIENT_SETTING]='S2C_CLIENT_SETTING';
S2C_CMD_2_PROTODESC[S2C_SERVER_SETTING]='S2C_SERVER_SETTING';
S2C_CMD_2_PROTODESC[S2C_ROLE_FREERENAME]='S2C_ROLE_FREERENAME';
S2C_CMD_2_PROTODESC[S2C_SERVER_ONDAY]='S2C_SERVER_ONDAY';
S2C_CMD_2_PROTODESC[S2C_MAP_TRACK]='S2C_MAP_TRACK';
S2C_CMD_2_PROTODESC[S2C_MAP_DEL]='S2C_MAP_DEL';
S2C_CMD_2_PROTODESC[S2C_MAP_ADDPLAYER]='S2C_MAP_ADDPLAYER';
S2C_CMD_2_PROTODESC[S2C_MAP_ADDNPC]='S2C_MAP_ADDNPC';
S2C_CMD_2_PROTODESC[S2C_MAP_ADDGOODS]='S2C_MAP_ADDGOODS';
S2C_CMD_2_PROTODESC[S2C_MAP_ADDSUMMON]='S2C_MAP_ADDSUMMON';
S2C_CMD_2_PROTODESC[S2C_MAP_DELSUMMON]='S2C_MAP_DELSUMMON';
S2C_CMD_2_PROTODESC[S2C_MAP_ADDPARTNER]='S2C_MAP_ADDPARTNER';
S2C_CMD_2_PROTODESC[S2C_MAP_DELPARTNER]='S2C_MAP_DELPARTNER';
S2C_CMD_2_PROTODESC[S2C_MAP_ROLESTATE]='S2C_MAP_ROLESTATE';
S2C_CMD_2_PROTODESC[S2C_MAP_CHANGESHAPE]='S2C_MAP_CHANGESHAPE';
S2C_CMD_2_PROTODESC[S2C_MAP_CHANGETITLE]='S2C_MAP_CHANGETITLE';
S2C_CMD_2_PROTODESC[S2C_MAP_PLAYANI]='S2C_MAP_PLAYANI';
S2C_CMD_2_PROTODESC[S2C_MAP_ROLETITLE]='S2C_MAP_ROLETITLE';
S2C_CMD_2_PROTODESC[S2C_HANGMAP_INFO]='S2C_HANGMAP_INFO';
S2C_CMD_2_PROTODESC[S2C_NPC_CHAT]='S2C_NPC_CHAT';
S2C_CMD_2_PROTODESC[S2C_ITEM_LIST]='S2C_ITEM_LIST';
S2C_CMD_2_PROTODESC[S2C_ITEM_ADD]='S2C_ITEM_ADD';
S2C_CMD_2_PROTODESC[S2C_ITEM_UPDATE]='S2C_ITEM_UPDATE';
S2C_CMD_2_PROTODESC[S2C_ITEM_DEL]='S2C_ITEM_DEL';
S2C_CMD_2_PROTODESC[S2C_ITEM_BAGCOUNT]='S2C_ITEM_BAGCOUNT';
S2C_CMD_2_PROTODESC[S2C_CHAT]='S2C_CHAT';
S2C_CMD_2_PROTODESC[S2C_CHAT_SYSTEM]='S2C_CHAT_SYSTEM';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_MESSAGE]='S2C_NOTIFY_MESSAGE';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_FLOAT]='S2C_NOTIFY_FLOAT';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_FLYMESSAGE]='S2C_NOTIFY_FLYMESSAGE';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_FLYHINT]='S2C_NOTIFY_FLYHINT';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_NOENOUGH]='S2C_NOTIFY_NOENOUGH';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_REWARD]='S2C_NOTIFY_REWARD';
S2C_CMD_2_PROTODESC[S2C_NOTIFY_OFFLINEREWARD]='S2C_NOTIFY_OFFLINEREWARD';
S2C_CMD_2_PROTODESC[S2C_HERO_PROP]='S2C_HERO_PROP';
S2C_CMD_2_PROTODESC[S2C_HERO_ENTERSCENE]='S2C_HERO_ENTERSCENE';
S2C_CMD_2_PROTODESC[S2C_HERO_GOTO]='S2C_HERO_GOTO';
S2C_CMD_2_PROTODESC[S2C_HERO_REPUTE]='S2C_HERO_REPUTE';
S2C_CMD_2_PROTODESC[S2C_BATTLE_RATIO]='S2C_BATTLE_RATIO';
S2C_CMD_2_PROTODESC[S2C_EQUIP_GROWINFO]='S2C_EQUIP_GROWINFO';
S2C_CMD_2_PROTODESC[S2C_EQUIP_MASTER]='S2C_EQUIP_MASTER';
S2C_CMD_2_PROTODESC[S2C_EQUIP_ENHANCECOST]='S2C_EQUIP_ENHANCECOST';
S2C_CMD_2_PROTODESC[S2C_EQUIP_SMELT]='S2C_EQUIP_SMELT';
S2C_CMD_2_PROTODESC[S2C_SKILL_LIST]='S2C_SKILL_LIST';
S2C_CMD_2_PROTODESC[S2C_SKILL_ADD]='S2C_SKILL_ADD';
S2C_CMD_2_PROTODESC[S2C_SKILL_DEL]='S2C_SKILL_DEL';
S2C_CMD_2_PROTODESC[S2C_SKILL_CONFIG]='S2C_SKILL_CONFIG';
S2C_CMD_2_PROTODESC[S2C_LEARN_COST]='S2C_LEARN_COST';
S2C_CMD_2_PROTODESC[S2C_SUMMON_INFO]='S2C_SUMMON_INFO';
S2C_CMD_2_PROTODESC[S2C_SUMMON_UPDATE]='S2C_SUMMON_UPDATE';
S2C_CMD_2_PROTODESC[S2C_SUMMON_FIGHT]='S2C_SUMMON_FIGHT';
S2C_CMD_2_PROTODESC[S2C_SUMMON_APTINFO]='S2C_SUMMON_APTINFO';
S2C_CMD_2_PROTODESC[S2C_SUMMON_SKILLPREVIEW]='S2C_SUMMON_SKILLPREVIEW';
S2C_CMD_2_PROTODESC[S2C_MOUNT_INFO]='S2C_MOUNT_INFO';
S2C_CMD_2_PROTODESC[S2C_MOUNT_SKINLIST]='S2C_MOUNT_SKINLIST';
S2C_CMD_2_PROTODESC[S2C_MOUNT_SKILLLIST]='S2C_MOUNT_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_MOUNT_DANYAO]='S2C_MOUNT_DANYAO';
S2C_CMD_2_PROTODESC[S2C_WING_INFO]='S2C_WING_INFO';
S2C_CMD_2_PROTODESC[S2C_WING_SKINLIST]='S2C_WING_SKINLIST';
S2C_CMD_2_PROTODESC[S2C_WING_SKILLLIST]='S2C_WING_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_WING_DANYAO]='S2C_WING_DANYAO';
S2C_CMD_2_PROTODESC[S2C_SUMMONSOUL_INFO]='S2C_SUMMONSOUL_INFO';
S2C_CMD_2_PROTODESC[S2C_SUMMONSOUL_SKINLIST]='S2C_SUMMONSOUL_SKINLIST';
S2C_CMD_2_PROTODESC[S2C_SUMMONSOUL_SKILLLIST]='S2C_SUMMONSOUL_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_SUMMONSOUL_DANYAO]='S2C_SUMMONSOUL_DANYAO';
S2C_CMD_2_PROTODESC[S2C_SUMMONSOUL_SHAPE]='S2C_SUMMONSOUL_SHAPE';
S2C_CMD_2_PROTODESC[S2C_SUMMONAURA_INFO]='S2C_SUMMONAURA_INFO';
S2C_CMD_2_PROTODESC[S2C_SUMMONAURA_SKINLIST]='S2C_SUMMONAURA_SKINLIST';
S2C_CMD_2_PROTODESC[S2C_SUMMONAURA_SKILLLIST]='S2C_SUMMONAURA_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_SUMMONAURA_DANYAO]='S2C_SUMMONAURA_DANYAO';
S2C_CMD_2_PROTODESC[S2C_SUMMONAURA_SHAPE]='S2C_SUMMONAURA_SHAPE';
S2C_CMD_2_PROTODESC[S2C_PARTNER_INFO]='S2C_PARTNER_INFO';
S2C_CMD_2_PROTODESC[S2C_PARTNER_FIGHT]='S2C_PARTNER_FIGHT';
S2C_CMD_2_PROTODESC[S2C_PARTNER_XIANYUAN]='S2C_PARTNER_XIANYUAN';
S2C_CMD_2_PROTODESC[S2C_XIANZHEN_INFO]='S2C_XIANZHEN_INFO';
S2C_CMD_2_PROTODESC[S2C_XIANZHEN_SKILLLIST]='S2C_XIANZHEN_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_XIANZHEN_DANYAO]='S2C_XIANZHEN_DANYAO';
S2C_CMD_2_PROTODESC[S2C_XIANZHEN_SHAPE]='S2C_XIANZHEN_SHAPE';
S2C_CMD_2_PROTODESC[S2C_JINGJIE_INFO]='S2C_JINGJIE_INFO';
S2C_CMD_2_PROTODESC[S2C_JINGJIE_SKILLLIST]='S2C_JINGJIE_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_JINGJIE_DANYAO]='S2C_JINGJIE_DANYAO';
S2C_CMD_2_PROTODESC[S2C_JINGJIE_SHAPE]='S2C_JINGJIE_SHAPE';
S2C_CMD_2_PROTODESC[S2C_WEAPON_INFO]='S2C_WEAPON_INFO';
S2C_CMD_2_PROTODESC[S2C_WEAPON_SKINLIST]='S2C_WEAPON_SKINLIST';
S2C_CMD_2_PROTODESC[S2C_WEAPON_SKILLLIST]='S2C_WEAPON_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_WEAPON_DANYAO]='S2C_WEAPON_DANYAO';
S2C_CMD_2_PROTODESC[S2C_FAIRY_INFO]='S2C_FAIRY_INFO';
S2C_CMD_2_PROTODESC[S2C_FAIRY_SKINLIST]='S2C_FAIRY_SKINLIST';
S2C_CMD_2_PROTODESC[S2C_FAIRY_SKILLLIST]='S2C_FAIRY_SKILLLIST';
S2C_CMD_2_PROTODESC[S2C_FAIRY_DANYAO]='S2C_FAIRY_DANYAO';
S2C_CMD_2_PROTODESC[S2C_TITLE_LIST]='S2C_TITLE_LIST';
S2C_CMD_2_PROTODESC[S2C_TITLE_ADD]='S2C_TITLE_ADD';
S2C_CMD_2_PROTODESC[S2C_FASHION_LIST]='S2C_FASHION_LIST';
S2C_CMD_2_PROTODESC[S2C_FASHION_ADD]='S2C_FASHION_ADD';
S2C_CMD_2_PROTODESC[S2C_TRAVEL_INFO]='S2C_TRAVEL_INFO';
S2C_CMD_2_PROTODESC[S2C_TRAVEL_EXP]='S2C_TRAVEL_EXP';
S2C_CMD_2_PROTODESC[S2C_TOPPLAYER_INFO]='S2C_TOPPLAYER_INFO';
S2C_CMD_2_PROTODESC[S2C_TRAVEL_TODAYEXP]='S2C_TRAVEL_TODAYEXP';
S2C_CMD_2_PROTODESC[S2C_JINGMAI_INFO]='S2C_JINGMAI_INFO';
S2C_CMD_2_PROTODESC[S2C_DANYAO_INFO]='S2C_DANYAO_INFO';
S2C_CMD_2_PROTODESC[S2C_WAR_START]='S2C_WAR_START';
S2C_CMD_2_PROTODESC[S2C_WAR_ADD]='S2C_WAR_ADD';
S2C_CMD_2_PROTODESC[S2C_WAR_LEAVE]='S2C_WAR_LEAVE';
S2C_CMD_2_PROTODESC[S2C_WAR_STATUS]='S2C_WAR_STATUS';
S2C_CMD_2_PROTODESC[S2C_WAR_NEXT]='S2C_WAR_NEXT';
S2C_CMD_2_PROTODESC[S2C_WAR_TURN]='S2C_WAR_TURN';
S2C_CMD_2_PROTODESC[S2C_WAR_PREEND]='S2C_WAR_PREEND';
S2C_CMD_2_PROTODESC[S2C_WAR_END]='S2C_WAR_END';
S2C_CMD_2_PROTODESC[S2C_WAR_REPLY]='S2C_WAR_REPLY';
S2C_CMD_2_PROTODESC[S2C_WAR_ATTACK_NORMAL]='S2C_WAR_ATTACK_NORMAL';
S2C_CMD_2_PROTODESC[S2C_WAR_ATTACK_END]='S2C_WAR_ATTACK_END';
S2C_CMD_2_PROTODESC[S2C_WAR_PERFORM]='S2C_WAR_PERFORM';
S2C_CMD_2_PROTODESC[S2C_WAR_PERFORM_END]='S2C_WAR_PERFORM_END';
S2C_CMD_2_PROTODESC[S2C_WAR_PARTNER_ATTACK]='S2C_WAR_PARTNER_ATTACK';
S2C_CMD_2_PROTODESC[S2C_WAR_BACKATTACK]='S2C_WAR_BACKATTACK';
S2C_CMD_2_PROTODESC[S2C_WAR_BACKATTACK_END]='S2C_WAR_BACKATTACK_END';
S2C_CMD_2_PROTODESC[S2C_WAR_SHAKE]='S2C_WAR_SHAKE';
S2C_CMD_2_PROTODESC[S2C_WAR_PROTECT]='S2C_WAR_PROTECT';
S2C_CMD_2_PROTODESC[S2C_WAR_ATTACK_STATUS]='S2C_WAR_ATTACK_STATUS';
S2C_CMD_2_PROTODESC[S2C_WAR_BUFF_ADD]='S2C_WAR_BUFF_ADD';
S2C_CMD_2_PROTODESC[S2C_WAR_BUFF_DEL]='S2C_WAR_BUFF_DEL';
S2C_CMD_2_PROTODESC[S2C_WAR_DEFEAT]='S2C_WAR_DEFEAT';
S2C_CMD_2_PROTODESC[S2C_MAIL_LIST]='S2C_MAIL_LIST';
S2C_CMD_2_PROTODESC[S2C_MAIL_ADD]='S2C_MAIL_ADD';
S2C_CMD_2_PROTODESC[S2C_MAIL_DEL]='S2C_MAIL_DEL';
S2C_CMD_2_PROTODESC[S2C_MAIL_INFO]='S2C_MAIL_INFO';
S2C_CMD_2_PROTODESC[S2C_TEAM_MEMBERLIST]='S2C_TEAM_MEMBERLIST';
S2C_CMD_2_PROTODESC[S2C_TEAM_LEAVE]='S2C_TEAM_LEAVE';
S2C_CMD_2_PROTODESC[S2C_TEAM_DISBAND]='S2C_TEAM_DISBAND';
S2C_CMD_2_PROTODESC[S2C_TEAMPLAT_ROOMINFO]='S2C_TEAMPLAT_ROOMINFO';
S2C_CMD_2_PROTODESC[S2C_TEAMPLAT_ROOMTYPE]='S2C_TEAMPLAT_ROOMTYPE';
S2C_CMD_2_PROTODESC[S2C_UPGRADEREWARD_LIST]='S2C_UPGRADEREWARD_LIST';
S2C_CMD_2_PROTODESC[S2C_VIPREWARD_LIST]='S2C_VIPREWARD_LIST';
S2C_CMD_2_PROTODESC[S2C_GRADEREWARD_LIST]='S2C_GRADEREWARD_LIST';
S2C_CMD_2_PROTODESC[S2C_SIGNINREWARD_LIST]='S2C_SIGNINREWARD_LIST';
S2C_CMD_2_PROTODESC[S2C_TEST_WEBCHARGE]='S2C_TEST_WEBCHARGE';
S2C_CMD_2_PROTODESC[S2C_CHARGE_PRODUCTLIST]='S2C_CHARGE_PRODUCTLIST';
S2C_CMD_2_PROTODESC[S2C_FIRSTCHARGE_LIST]='S2C_FIRSTCHARGE_LIST';
S2C_CMD_2_PROTODESC[S2C_TODAYCHARGE_LIST]='S2C_TODAYCHARGE_LIST';
S2C_CMD_2_PROTODESC[S2C_GROWTHFUND_INFO]='S2C_GROWTHFUND_INFO';
S2C_CMD_2_PROTODESC[S2C_INVESTPLAN_INFO]='S2C_INVESTPLAN_INFO';
S2C_CMD_2_PROTODESC[S2C_CHARGEGROUPBUY_INFO]='S2C_CHARGEGROUPBUY_INFO';
S2C_CMD_2_PROTODESC[S2C_PRIVCARD_INFO]='S2C_PRIVCARD_INFO';
S2C_CMD_2_PROTODESC[S2C_DIRECTCHARGE_INFO]='S2C_DIRECTCHARGE_INFO';
S2C_CMD_2_PROTODESC[s2c_common_rsp]='s2c_common_rsp';
S2C_CMD_2_PROTODESC[s2c_rolelist]='s2c_rolelist';
S2C_CMD_2_PROTODESC[s2c_enterscene]='s2c_enterscene';
S2C_CMD_2_PROTODESC[s2c_role_move]='s2c_role_move';
S2C_CMD_2_PROTODESC[s2c_role_enter]='s2c_role_enter';
S2C_CMD_2_PROTODESC[s2c_role_out]='s2c_role_out';
S2C_CMD_2_PROTODESC[s2c_localkey]='s2c_localkey';
S2C_CMD_2_PROTODESC[S2C_MONEY_EXC_INFO]='S2C_MONEY_EXC_INFO';
S2C_CMD_2_PROTODESC[S2C_MAINTASK_INFO]='S2C_MAINTASK_INFO';
S2C_CMD_2_PROTODESC[S2C_FENGYAO_MAIN]='S2C_FENGYAO_MAIN';
S2C_CMD_2_PROTODESC[S2C_FENGYAO_LIST]='S2C_FENGYAO_LIST';
S2C_CMD_2_PROTODESC[S2C_FENGYAO_YG]='S2C_FENGYAO_YG';
S2C_CMD_2_PROTODESC[S2C_FENGYAO_ADD]='S2C_FENGYAO_ADD';
S2C_CMD_2_PROTODESC[S2C_FENGYAO_DEL]='S2C_FENGYAO_DEL';
S2C_CMD_2_PROTODESC[S2C_SHIMEN_INFO]='S2C_SHIMEN_INFO';
S2C_CMD_2_PROTODESC[S2C_PB_INFO]='S2C_PB_INFO';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_REBIRTH]='S2C_QMBOSS_REBIRTH';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_LIST]='S2C_QMBOSS_LIST';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_DAMAGE_LIST]='S2C_QMBOSS_DAMAGE_LIST';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_KILL_LIST]='S2C_QMBOSS_KILL_LIST';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_TIMES_INFO]='S2C_QMBOSS_TIMES_INFO';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_PURCHASE_TIMES]='S2C_QMBOSS_PURCHASE_TIMES';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_CONCERNED]='S2C_QMBOSS_CONCERNED';
S2C_CMD_2_PROTODESC[S2C_QMBOSS_FIGHT_DAMAGE]='S2C_QMBOSS_FIGHT_DAMAGE';
S2C_CMD_2_PROTODESC[S2C_SUMCATCH_STATUS]='S2C_SUMCATCH_STATUS';
S2C_CMD_2_PROTODESC[S2C_SUMCATCH_RESULT]='S2C_SUMCATCH_RESULT';
S2C_CMD_2_PROTODESC[S2C_SUMCATCH_SUMMON]='S2C_SUMCATCH_SUMMON';
S2C_CMD_2_PROTODESC[S2C_SCENEPASS_INFO]='S2C_SCENEPASS_INFO';
S2C_CMD_2_PROTODESC[S2C_SCENEPASS_NEXT]='S2C_SCENEPASS_NEXT';
S2C_CMD_2_PROTODESC[S2C_SCENEPASS_HELPTIMES]='S2C_SCENEPASS_HELPTIMES';
S2C_CMD_2_PROTODESC[S2C_SCENEPASS_SECRWD]='S2C_SCENEPASS_SECRWD';
S2C_CMD_2_PROTODESC[S2C_SCENEPASS_FAILED]='S2C_SCENEPASS_FAILED';
S2C_CMD_2_PROTODESC[S2C_RANK]='S2C_RANK';
S2C_CMD_2_PROTODESC[S2C_RANK_SIMPLE]='S2C_RANK_SIMPLE';
S2C_CMD_2_PROTODESC[S2C_ITEMEXCH_UPDATE]='S2C_ITEMEXCH_UPDATE';
S2C_CMD_2_PROTODESC[S2C_ITEMEXCH_SHOP]='S2C_ITEMEXCH_SHOP';
S2C_CMD_2_PROTODESC[S2C_MATERFB_INFO]='S2C_MATERFB_INFO';
S2C_CMD_2_PROTODESC[S2C_PDYW_STATUS]='S2C_PDYW_STATUS';
S2C_CMD_2_PROTODESC[S2C_FRIEND_LIST]='S2C_FRIEND_LIST';
S2C_CMD_2_PROTODESC[S2C_FRIEND_REQLIST]='S2C_FRIEND_REQLIST';
S2C_CMD_2_PROTODESC[S2C_FRIEND_BLACKLIST]='S2C_FRIEND_BLACKLIST';
S2C_CMD_2_PROTODESC[S2C_FRIEND_UPDFRIEND]='S2C_FRIEND_UPDFRIEND';
S2C_CMD_2_PROTODESC[S2C_FRIEND_NEWREQUEST]='S2C_FRIEND_NEWREQUEST';
S2C_CMD_2_PROTODESC[S2C_FRIEND_NEWBLACK]='S2C_FRIEND_NEWBLACK';
S2C_CMD_2_PROTODESC[S2C_FRIEND_RMFRIEND]='S2C_FRIEND_RMFRIEND';
S2C_CMD_2_PROTODESC[S2C_FRIEND_RMREQUEST]='S2C_FRIEND_RMREQUEST';
S2C_CMD_2_PROTODESC[S2C_FRIEND_RMBLACK]='S2C_FRIEND_RMBLACK';
S2C_CMD_2_PROTODESC[S2C_FRIEND_CHAT]='S2C_FRIEND_CHAT';
S2C_CMD_2_PROTODESC[S2C_FRIEND_COINLIST]='S2C_FRIEND_COINLIST';
S2C_CMD_2_PROTODESC[S2C_FRIEND_NEWCOIN]='S2C_FRIEND_NEWCOIN';
S2C_CMD_2_PROTODESC[S2C_FRIEND_COININFO]='S2C_FRIEND_COININFO';
S2C_CMD_2_PROTODESC[S2C_FRIEND_RM_COIN]='S2C_FRIEND_RM_COIN';
S2C_CMD_2_PROTODESC[S2C_FRIEND_RANDROLE]='S2C_FRIEND_RANDROLE';
S2C_CMD_2_PROTODESC[S2C_ROLE_INFO]='S2C_ROLE_INFO';
S2C_CMD_2_PROTODESC[S2C_ROLE_DESC]='S2C_ROLE_DESC';
S2C_CMD_2_PROTODESC[S2C_MARRIAGE_PROPOSE_LIST]='S2C_MARRIAGE_PROPOSE_LIST';
S2C_CMD_2_PROTODESC[S2C_MARRIAGE_RECV_PROPOSE]='S2C_MARRIAGE_RECV_PROPOSE';
S2C_CMD_2_PROTODESC[S2C_MARRIAGE_WEDDING_START]='S2C_MARRIAGE_WEDDING_START';
S2C_CMD_2_PROTODESC[S2C_MARRIAGE_INFO]='S2C_MARRIAGE_INFO';
S2C_CMD_2_PROTODESC[S2C_WILDBOSS_LIST]='S2C_WILDBOSS_LIST';
S2C_CMD_2_PROTODESC[S2C_WILDBOSS_DETAIL]='S2C_WILDBOSS_DETAIL';
S2C_CMD_2_PROTODESC[S2C_TREASURE_STARS]='S2C_TREASURE_STARS';
S2C_CMD_2_PROTODESC[S2C_TREASURE_REWARDS]='S2C_TREASURE_REWARDS';
S2C_CMD_2_PROTODESC[S2C_TREASURE_RESULT]='S2C_TREASURE_RESULT';
S2C_CMD_2_PROTODESC[S2C_TBF_INFO]='S2C_TBF_INFO';
S2C_CMD_2_PROTODESC[S2C_TBF_ROOM]='S2C_TBF_ROOM';
S2C_CMD_2_PROTODESC[S2C_TBF_REWARDED]='S2C_TBF_REWARDED';
S2C_CMD_2_PROTODESC[S2C_WORLDQUES_QUESTION]='S2C_WORLDQUES_QUESTION';
S2C_CMD_2_PROTODESC[S2C_WORLDQUES_INFO]='S2C_WORLDQUES_INFO';
S2C_CMD_2_PROTODESC[S2C_WORLDQUES_ANSWER]='S2C_WORLDQUES_ANSWER';
S2C_CMD_2_PROTODESC[S2C_WORLDQUES_REWARDED]='S2C_WORLDQUES_REWARDED';
S2C_CMD_2_PROTODESC[S2C_ACTIVITY_STATUS]='S2C_ACTIVITY_STATUS';
S2C_CMD_2_PROTODESC[S2C_GOOSETOWER_INFO]='S2C_GOOSETOWER_INFO';
S2C_CMD_2_PROTODESC[S2C_GOOSETOWER_RESULT]='S2C_GOOSETOWER_RESULT';
S2C_CMD_2_PROTODESC[S2C_TTXY_TODAY]='S2C_TTXY_TODAY';
S2C_CMD_2_PROTODESC[S2C_TTXY_TOTAL]='S2C_TTXY_TOTAL';
S2C_CMD_2_PROTODESC[S2C_TTXY_REWARDED]='S2C_TTXY_REWARDED';
S2C_CMD_2_PROTODESC[S2C_TTXY_RESULT]='S2C_TTXY_RESULT';
S2C_CMD_2_PROTODESC[S2C_GANG_DETAIL]='S2C_GANG_DETAIL';
S2C_CMD_2_PROTODESC[S2C_GANG_MEMBERS]='S2C_GANG_MEMBERS';
S2C_CMD_2_PROTODESC[S2C_GANG_JOIN_LIST]='S2C_GANG_JOIN_LIST';
S2C_CMD_2_PROTODESC[S2C_GANG_LIST]='S2C_GANG_LIST';
S2C_CMD_2_PROTODESC[S2C_GANG_AUTOPASS]='S2C_GANG_AUTOPASS';
S2C_CMD_2_PROTODESC[S2C_GANG_LOG]='S2C_GANG_LOG';
S2C_CMD_2_PROTODESC[S2C_GANG_CONTRIBUTION]='S2C_GANG_CONTRIBUTION';
S2C_CMD_2_PROTODESC[S2C_GANG_MONEY]='S2C_GANG_MONEY';
S2C_CMD_2_PROTODESC[S2C_GANG_MEMBER_COUNT]='S2C_GANG_MEMBER_COUNT';
S2C_CMD_2_PROTODESC[S2C_GANG_MY_POSITION]='S2C_GANG_MY_POSITION';
S2C_CMD_2_PROTODESC[S2C_GANG_INCENSE_ROLE]='S2C_GANG_INCENSE_ROLE';
S2C_CMD_2_PROTODESC[S2C_GANG_INCENSE_VALUE]='S2C_GANG_INCENSE_VALUE';
S2C_CMD_2_PROTODESC[S2C_GANG_INCENSE_LOG]='S2C_GANG_INCENSE_LOG';
S2C_CMD_2_PROTODESC[S2C_GANG_FUBEN_REWARDED]='S2C_GANG_FUBEN_REWARDED';
S2C_CMD_2_PROTODESC[S2C_GANG_FUBEN_TODAY]='S2C_GANG_FUBEN_TODAY';
S2C_CMD_2_PROTODESC[S2C_GANG_FUBEN_ROOMID]='S2C_GANG_FUBEN_ROOMID';
S2C_CMD_2_PROTODESC[S2C_GANG_SKILL_INFO]='S2C_GANG_SKILL_INFO';
S2C_CMD_2_PROTODESC[S2C_WAR_SERIAL]='S2C_WAR_SERIAL';
S2C_CMD_2_PROTODESC[S2C_GANG_BOSS_STATUS]='S2C_GANG_BOSS_STATUS';
S2C_CMD_2_PROTODESC[S2C_GANG_BOSS_REWARD]='S2C_GANG_BOSS_REWARD';
S2C_CMD_2_PROTODESC[S2C_GANG_BOSS_DAMAGE]='S2C_GANG_BOSS_DAMAGE';
S2C_CMD_2_PROTODESC[S2C_GANG_SCENE_TRANSFER]='S2C_GANG_SCENE_TRANSFER';
S2C_CMD_2_PROTODESC[S2C_GANG_SCENE_MINING_TIMES]='S2C_GANG_SCENE_MINING_TIMES';
S2C_CMD_2_PROTODESC[S2C_GANG_SCENE_ALL_FLOWER]='S2C_GANG_SCENE_ALL_FLOWER';
S2C_CMD_2_PROTODESC[S2C_GANG_SCENE_FLOWER_TIMES]='S2C_GANG_SCENE_FLOWER_TIMES';
S2C_CMD_2_PROTODESC[S2C_GANG_SCENE_FLOWER_CHANGE]='S2C_GANG_SCENE_FLOWER_CHANGE';
S2C_CMD_2_PROTODESC[S2C_GANG_SCENE_EXCHINFO]='S2C_GANG_SCENE_EXCHINFO';
S2C_CMD_2_PROTODESC[S2C_GANG_TRAVEL_INFO]='S2C_GANG_TRAVEL_INFO';
S2C_CMD_2_PROTODESC[S2C_GANG_TRAVEL_EXP]='S2C_GANG_TRAVEL_EXP';
S2C_CMD_2_PROTODESC[S2C_GANG_TRAVEL_REWARDED]='S2C_GANG_TRAVEL_REWARDED';
S2C_CMD_2_PROTODESC[S2C_PANDAH_FIGHTED]='S2C_PANDAH_FIGHTED';
S2C_CMD_2_PROTODESC[S2C_PERCHARGE_CHARGED]='S2C_PERCHARGE_CHARGED';
S2C_CMD_2_PROTODESC[S2C_PERCHARGE_REWARDED]='S2C_PERCHARGE_REWARDED';
S2C_CMD_2_PROTODESC[S2C_DIRGROWUP_CHARGED]='S2C_DIRGROWUP_CHARGED';
S2C_CMD_2_PROTODESC[S2C_DIRGROWUP_REWARDED]='S2C_DIRGROWUP_REWARDED';
S2C_CMD_2_PROTODESC[S2C_GROWUPRWD_REWARDED]='S2C_GROWUPRWD_REWARDED';
S2C_CMD_2_PROTODESC[S2C_GROWUPRWD_CYCLE_STATUS]='S2C_GROWUPRWD_CYCLE_STATUS';
S2C_CMD_2_PROTODESC[S2C_8SIGN_INFO]='S2C_8SIGN_INFO';
S2C_CMD_2_PROTODESC[S2C_HDGROWUP_RANK]='S2C_HDGROWUP_RANK';
S2C_CMD_2_PROTODESC[S2C_HDQMGROWUP_COUNT]='S2C_HDQMGROWUP_COUNT';
S2C_CMD_2_PROTODESC[S2C_HDQMGROWUP_REWARDED]='S2C_HDQMGROWUP_REWARDED';
S2C_CMD_2_PROTODESC[S2C_HDQMGROWUP_STAGE]='S2C_HDQMGROWUP_STAGE';
S2C_CMD_2_PROTODESC[S2C_DISCOUNTSHOP_SHOPINFO]='S2C_DISCOUNTSHOP_SHOPINFO';
S2C_CMD_2_PROTODESC[S2C_DISCOUNTSHOP_UPDATE]='S2C_DISCOUNTSHOP_UPDATE';
S2C_CMD_2_PROTODESC[S2C_HDGRADERWD_REWARDED]='S2C_HDGRADERWD_REWARDED';
S2C_CMD_2_PROTODESC[S2C_OPENPLAY_REWARDED]='S2C_OPENPLAY_REWARDED';
S2C_CMD_2_PROTODESC[S2C_OPENPLAY_VALUE]='S2C_OPENPLAY_VALUE';
S2C_CMD_2_PROTODESC[S2C_OPENPLAY_TODAYDESC]='S2C_OPENPLAY_TODAYDESC';
S2C_CMD_2_PROTODESC[S2C_HAOLI_CHARGED]='S2C_HAOLI_CHARGED';
S2C_CMD_2_PROTODESC[S2C_HAOLI_REWARDED]='S2C_HAOLI_REWARDED';
S2C_CMD_2_PROTODESC[S2C_ARENA_INFO]='S2C_ARENA_INFO';
S2C_CMD_2_PROTODESC[S2C_ARENA_RECORD]='S2C_ARENA_RECORD';
S2C_CMD_2_PROTODESC[S2C_ARENA_WAR_END]='S2C_ARENA_WAR_END';
S2C_CMD_2_PROTODESC[S2C_ARENA_CHANCE]='S2C_ARENA_CHANCE';
S2C_CMD_2_PROTODESC[S2C_ARENA_RANK]='S2C_ARENA_RANK';
S2C_CMD_2_PROTODESC[S2C_TSUMEKO_PROGRESS]='S2C_TSUMEKO_PROGRESS';
S2C_CMD_2_PROTODESC[S2C_TSUMEKO_INFO]='S2C_TSUMEKO_INFO';
S2C_CMD_2_PROTODESC[S2C_TSUMEKO_RECORD]='S2C_TSUMEKO_RECORD';
S2C_CMD_2_PROTODESC[S2C_TSUMEKO_NO_RECORD]='S2C_TSUMEKO_NO_RECORD';
S2C_CMD_2_PROTODESC[S2C_TSUMEKO_BAG]='S2C_TSUMEKO_BAG';
S2C_CMD_2_PROTODESC[S2C_TSUMEKO_RED]='S2C_TSUMEKO_RED';
S2C_CMD_2_PROTODESC[S2C_ESCORT_INFO]='S2C_ESCORT_INFO';
S2C_CMD_2_PROTODESC[S2C_ESCORT_CAR]='S2C_ESCORT_CAR';
S2C_CMD_2_PROTODESC[S2C_ESCORT_RECORD]='S2C_ESCORT_RECORD';
S2C_CMD_2_PROTODESC[S2C_ESCORT_REWARD]='S2C_ESCORT_REWARD';
S2C_CMD_2_PROTODESC[S2C_ESCORT_RED]='S2C_ESCORT_RED';
S2C_CMD_2_PROTODESC[S2C_BEST_INFO]='S2C_BEST_INFO';
S2C_CMD_2_PROTODESC[S2C_BEST_RECORD]='S2C_BEST_RECORD';
S2C_CMD_2_PROTODESC[S2C_BEST_BET]='S2C_BEST_BET';
S2C_CMD_2_PROTODESC[S2C_BEST_RED]='S2C_BEST_RED';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_NIFO]='S2C_HEGEMONY_NIFO';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_ENTER]='S2C_HEGEMONY_ENTER';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_MOVE]='S2C_HEGEMONY_MOVE';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_LOOK]='S2C_HEGEMONY_LOOK';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_EXPLOIT]='S2C_HEGEMONY_EXPLOIT';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_EXIT]='S2C_HEGEMONY_EXIT';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_REWARD]='S2C_HEGEMONY_REWARD';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_MINE]='S2C_HEGEMONY_MINE';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_ADD]='S2C_HEGEMONY_ADD';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_REMOVE]='S2C_HEGEMONY_REMOVE';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_SCORE]='S2C_HEGEMONY_SCORE';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_SELF]='S2C_HEGEMONY_SELF';
S2C_CMD_2_PROTODESC[S2C_HEGEMONY_RESET]='S2C_HEGEMONY_RESET';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_ENTER]='S2C_WULINHEAD_ENTER';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_RANK]='S2C_WULINHEAD_RANK';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_RED]='S2C_WULINHEAD_RED';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_ADD]='S2C_WULINHEAD_ADD';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_REMOVE]='S2C_WULINHEAD_REMOVE';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_EXIT]='S2C_WULINHEAD_EXIT';
S2C_CMD_2_PROTODESC[S2C_WULINHEAD_TASK]='S2C_WULINHEAD_TASK';
S2C_CMD_2_PROTODESC[S2C_GOLDTREASURE_RESULT]='S2C_GOLDTREASURE_RESULT';
S2C_CMD_2_PROTODESC[S2C_GOLDTREASURE_RARERECORD]='S2C_GOLDTREASURE_RARERECORD';
S2C_CMD_2_PROTODESC[S2C_COOKBATTLE_RESULT]='S2C_COOKBATTLE_RESULT';
S2C_CMD_2_PROTODESC[S2C_COOKBATTLE_RECIPERECORD]='S2C_COOKBATTLE_RECIPERECORD';
S2C_CMD_2_PROTODESC[S2C_COSTGOLDHOLD_INFO]='S2C_COSTGOLDHOLD_INFO';

export const C2S_CMD_2_PROTODESC:{[key:number]:string;} = {}
C2S_CMD_2_PROTODESC[C2S_WEBSOCKET_HELLO]='C2S_WEBSOCKET_HELLO';
C2S_CMD_2_PROTODESC[C2S_LOGIN_ASYN_TIME]='C2S_LOGIN_ASYN_TIME';
C2S_CMD_2_PROTODESC[C2S_LOGIN]='C2S_LOGIN';
C2S_CMD_2_PROTODESC[C2S_LOGIN_SESSION]='C2S_LOGIN_SESSION';
C2S_CMD_2_PROTODESC[C2S_LOGIN_GM]='C2S_LOGIN_GM';
C2S_CMD_2_PROTODESC[C2S_LOGIN_SELECTROLE]='C2S_LOGIN_SELECTROLE';
C2S_CMD_2_PROTODESC[C2S_LOGIN_CLIENTREADY]='C2S_LOGIN_CLIENTREADY';
C2S_CMD_2_PROTODESC[C2S_LOGIN_CREATEROLE]='C2S_LOGIN_CREATEROLE';
C2S_CMD_2_PROTODESC[C2S_LOGIN_DELETEROLE]='C2S_LOGIN_DELETEROLE';
C2S_CMD_2_PROTODESC[C2S_LOGIN_RESTOREROLE]='C2S_LOGIN_RESTOREROLE';
C2S_CMD_2_PROTODESC[C2S_ACCOUNT_GUEST]='C2S_ACCOUNT_GUEST';
C2S_CMD_2_PROTODESC[C2S_CLIENT_SETTING]='C2S_CLIENT_SETTING';
C2S_CMD_2_PROTODESC[C2S_SERVER_SETTING]='C2S_SERVER_SETTING';
C2S_CMD_2_PROTODESC[C2S_ROLE_RENAME]='C2S_ROLE_RENAME';
C2S_CMD_2_PROTODESC[C2S_CHANGE_SIGN]='C2S_CHANGE_SIGN';
C2S_CMD_2_PROTODESC[C2S_MAP_MOVE]='C2S_MAP_MOVE';
C2S_CMD_2_PROTODESC[C2S_MAP_PICK]='C2S_MAP_PICK';
C2S_CMD_2_PROTODESC[C2S_NPC_LOOK]='C2S_NPC_LOOK';
C2S_CMD_2_PROTODESC[C2S_NPC_RESPOND]='C2S_NPC_RESPOND';
C2S_CMD_2_PROTODESC[C2S_ITEM_USE]='C2S_ITEM_USE';
C2S_CMD_2_PROTODESC[C2S_ITEM_BAGEXPAND]='C2S_ITEM_BAGEXPAND';
C2S_CMD_2_PROTODESC[C2S_CHAT]='C2S_CHAT';
C2S_CMD_2_PROTODESC[C2S_CHAT_GM]='C2S_CHAT_GM';
C2S_CMD_2_PROTODESC[C2S_HERO_LEVELUP]='C2S_HERO_LEVELUP';
C2S_CMD_2_PROTODESC[C2S_EQUIP_SWITCH]='C2S_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_EQUIP_SMELT]='C2S_EQUIP_SMELT';
C2S_CMD_2_PROTODESC[C2S_EQUIP_DECOMPOSE]='C2S_EQUIP_DECOMPOSE';
C2S_CMD_2_PROTODESC[C2S_EQUIP_ENHANCE]='C2S_EQUIP_ENHANCE';
C2S_CMD_2_PROTODESC[C2S_SKILL_LEARN]='C2S_SKILL_LEARN';
C2S_CMD_2_PROTODESC[C2S_SKILL_CONFIG]='C2S_SKILL_CONFIG';
C2S_CMD_2_PROTODESC[C2S_SUMMON_ACTIVE]='C2S_SUMMON_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_SUMMON_FIGHT]='C2S_SUMMON_FIGHT';
C2S_CMD_2_PROTODESC[C2S_SUMMON_RENAME]='C2S_SUMMON_RENAME';
C2S_CMD_2_PROTODESC[C2S_SUMMON_FOLLOW]='C2S_SUMMON_FOLLOW';
C2S_CMD_2_PROTODESC[C2S_SUMMON_UPGRADE]='C2S_SUMMON_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_SUMMON_APTUPGRADE]='C2S_SUMMON_APTUPGRADE';
C2S_CMD_2_PROTODESC[C2S_SUMMON_SKILLREFINE]='C2S_SUMMON_SKILLREFINE';
C2S_CMD_2_PROTODESC[C2S_SUMMON_SKILLSAVE]='C2S_SUMMON_SKILLSAVE';
C2S_CMD_2_PROTODESC[C2S_SUMMON_SKILLPREVIEW]='C2S_SUMMON_SKILLPREVIEW';
C2S_CMD_2_PROTODESC[C2S_MOUNT_UPGRADE]='C2S_MOUNT_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_MOUNT_ACTIVE]='C2S_MOUNT_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_MOUNT_CHANGE]='C2S_MOUNT_CHANGE';
C2S_CMD_2_PROTODESC[C2S_MOUNT_SKILL_UPGRADE]='C2S_MOUNT_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_MOUNT_EQUIP_SWITCH]='C2S_MOUNT_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_MOUNT_DANYAO]='C2S_MOUNT_DANYAO';
C2S_CMD_2_PROTODESC[C2S_WING_UPGRADE]='C2S_WING_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_WING_ACTIVE]='C2S_WING_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_WING_CHANGE]='C2S_WING_CHANGE';
C2S_CMD_2_PROTODESC[C2S_WING_SKILL_UPGRADE]='C2S_WING_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_WING_EQUIP_SWITCH]='C2S_WING_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_WING_DANYAO]='C2S_WING_DANYAO';
C2S_CMD_2_PROTODESC[C2S_SUMMONSOUL_UPGRADE]='C2S_SUMMONSOUL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_SUMMONSOUL_ACTIVE]='C2S_SUMMONSOUL_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_SUMMONSOUL_CHANGE]='C2S_SUMMONSOUL_CHANGE';
C2S_CMD_2_PROTODESC[C2S_SUMMONSOUL_SKILL_UPGRADE]='C2S_SUMMONSOUL_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_SUMMONSOUL_EQUIP_SWITCH]='C2S_SUMMONSOUL_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_SUMMONSOUL_DANYAO]='C2S_SUMMONSOUL_DANYAO';
C2S_CMD_2_PROTODESC[C2S_SUMMONAURA_UPGRADE]='C2S_SUMMONAURA_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_SUMMONAURA_ACTIVE]='C2S_SUMMONAURA_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_SUMMONAURA_CHANGE]='C2S_SUMMONAURA_CHANGE';
C2S_CMD_2_PROTODESC[C2S_SUMMONAURA_SKILL_UPGRADE]='C2S_SUMMONAURA_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_SUMMONAURA_EQUIP_SWITCH]='C2S_SUMMONAURA_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_SUMMONAURA_DANYAO]='C2S_SUMMONAURA_DANYAO';
C2S_CMD_2_PROTODESC[C2S_PARTNER_ACTIVE]='C2S_PARTNER_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_PARTNER_FIGHT]='C2S_PARTNER_FIGHT';
C2S_CMD_2_PROTODESC[C2S_PARTNER_UPGRADE]='C2S_PARTNER_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_PARTNER_UPSTAR]='C2S_PARTNER_UPSTAR';
C2S_CMD_2_PROTODESC[C2S_XIANZHEN_UPGRADE]='C2S_XIANZHEN_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_XIANZHEN_CHANGE]='C2S_XIANZHEN_CHANGE';
C2S_CMD_2_PROTODESC[C2S_XIANZHEN_SKILL_UPGRADE]='C2S_XIANZHEN_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_XIANZHEN_EQUIP_SWITCH]='C2S_XIANZHEN_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_XIANZHEN_DANYAO]='C2S_XIANZHEN_DANYAO';
C2S_CMD_2_PROTODESC[C2S_JINGJIE_UPGRADE]='C2S_JINGJIE_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_JINGJIE_CHANGE]='C2S_JINGJIE_CHANGE';
C2S_CMD_2_PROTODESC[C2S_JINGJIE_SKILL_UPGRADE]='C2S_JINGJIE_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_JINGJIE_EQUIP_SWITCH]='C2S_JINGJIE_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_JINGJIE_DANYAO]='C2S_JINGJIE_DANYAO';
C2S_CMD_2_PROTODESC[C2S_WEAPON_UPGRADE]='C2S_WEAPON_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_WEAPON_ACTIVE]='C2S_WEAPON_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_WEAPON_CHANGE]='C2S_WEAPON_CHANGE';
C2S_CMD_2_PROTODESC[C2S_WEAPON_SKILL_UPGRADE]='C2S_WEAPON_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_WEAPON_EQUIP_SWITCH]='C2S_WEAPON_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_WEAPON_DANYAO]='C2S_WEAPON_DANYAO';
C2S_CMD_2_PROTODESC[C2S_FAIRY_UPGRADE]='C2S_FAIRY_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_FAIRY_ACTIVE]='C2S_FAIRY_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_FAIRY_CHANGE]='C2S_FAIRY_CHANGE';
C2S_CMD_2_PROTODESC[C2S_FAIRY_SKILL_UPGRADE]='C2S_FAIRY_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_FAIRY_EQUIP_SWITCH]='C2S_FAIRY_EQUIP_SWITCH';
C2S_CMD_2_PROTODESC[C2S_FAIRY_DANYAO]='C2S_FAIRY_DANYAO';
C2S_CMD_2_PROTODESC[C2S_TITLE_ACTIVE]='C2S_TITLE_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_TITLE_CHANGE]='C2S_TITLE_CHANGE';
C2S_CMD_2_PROTODESC[C2S_FASHION_ACTIVE]='C2S_FASHION_ACTIVE';
C2S_CMD_2_PROTODESC[C2S_FASHION_CHANGE]='C2S_FASHION_CHANGE';
C2S_CMD_2_PROTODESC[C2S_TRAVEL_UPGRADE]='C2S_TRAVEL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_TRAVEL_FINDEXP]='C2S_TRAVEL_FINDEXP';
C2S_CMD_2_PROTODESC[C2S_GET_TOPPLAYERINFO]='C2S_GET_TOPPLAYERINFO';
C2S_CMD_2_PROTODESC[C2S_GET_TRAVELREWARD]='C2S_GET_TRAVELREWARD';
C2S_CMD_2_PROTODESC[C2S_JINGMAI_UPGRADE]='C2S_JINGMAI_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_DANYAO_EAT]='C2S_DANYAO_EAT';
C2S_CMD_2_PROTODESC[C2S_WAR_PLAYEND]='C2S_WAR_PLAYEND';
C2S_CMD_2_PROTODESC[C2S_MAIL_GETATTACH]='C2S_MAIL_GETATTACH';
C2S_CMD_2_PROTODESC[C2S_MAIL_GETALL]='C2S_MAIL_GETALL';
C2S_CMD_2_PROTODESC[C2S_MAIL_GETINFO]='C2S_MAIL_GETINFO';
C2S_CMD_2_PROTODESC[C2S_TEAM_JOIN]='C2S_TEAM_JOIN';
C2S_CMD_2_PROTODESC[C2S_TEAM_LEAVE]='C2S_TEAM_LEAVE';
C2S_CMD_2_PROTODESC[C2S_TEAM_KICK]='C2S_TEAM_KICK';
C2S_CMD_2_PROTODESC[C2S_TEAMPLAT_CREATE]='C2S_TEAMPLAT_CREATE';
C2S_CMD_2_PROTODESC[C2S_TEAMPLAT_ENTERROOM]='C2S_TEAMPLAT_ENTERROOM';
C2S_CMD_2_PROTODESC[C2S_TEAMPLAT_ROOMINFO]='C2S_TEAMPLAT_ROOMINFO';
C2S_CMD_2_PROTODESC[C2S_UPGRADEREWARD_GET]='C2S_UPGRADEREWARD_GET';
C2S_CMD_2_PROTODESC[C2S_VIPREWARD_GET]='C2S_VIPREWARD_GET';
C2S_CMD_2_PROTODESC[C2S_GRADEREWARD_GET]='C2S_GRADEREWARD_GET';
C2S_CMD_2_PROTODESC[C2S_SIGNINREWARD_GET]='C2S_SIGNINREWARD_GET';
C2S_CMD_2_PROTODESC[C2S_TEST_WEBCHARGE]='C2S_TEST_WEBCHARGE';
C2S_CMD_2_PROTODESC[C2S_FIRSTCHARGE_GET]='C2S_FIRSTCHARGE_GET';
C2S_CMD_2_PROTODESC[C2S_TODAYCHARGE_GET]='C2S_TODAYCHARGE_GET';
C2S_CMD_2_PROTODESC[C2S_GROWTHFUND_BUY]='C2S_GROWTHFUND_BUY';
C2S_CMD_2_PROTODESC[C2S_GROWTHFUND_GET]='C2S_GROWTHFUND_GET';
C2S_CMD_2_PROTODESC[C2S_INVESTPLAN_BUY]='C2S_INVESTPLAN_BUY';
C2S_CMD_2_PROTODESC[C2S_INVESTPLAN_GET]='C2S_INVESTPLAN_GET';
C2S_CMD_2_PROTODESC[C2S_CHARGEGROUPBUY_GET]='C2S_CHARGEGROUPBUY_GET';
C2S_CMD_2_PROTODESC[C2S_PRIVCARD_GETREWARD]='C2S_PRIVCARD_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_DIRECTCHARGE_GET]='C2S_DIRECTCHARGE_GET';
C2S_CMD_2_PROTODESC[c2s_login]='c2s_login';
C2S_CMD_2_PROTODESC[c2s_createrole]='c2s_createrole';
C2S_CMD_2_PROTODESC[c2s_choserole]='c2s_choserole';
C2S_CMD_2_PROTODESC[c2s_move]='c2s_move';
C2S_CMD_2_PROTODESC[c2s_getrolelist]='c2s_getrolelist';
C2S_CMD_2_PROTODESC[C2S_MONEY_EXC_INFO]='C2S_MONEY_EXC_INFO';
C2S_CMD_2_PROTODESC[C2S_MONEY_EXCHANGE]='C2S_MONEY_EXCHANGE';
C2S_CMD_2_PROTODESC[C2S_MAINTASK_REPLY]='C2S_MAINTASK_REPLY';
C2S_CMD_2_PROTODESC[C2S_FENGYAO_YAOGUAI]='C2S_FENGYAO_YAOGUAI';
C2S_CMD_2_PROTODESC[C2S_FENGYAO_BUYSTAR]='C2S_FENGYAO_BUYSTAR';
C2S_CMD_2_PROTODESC[C2S_FENGYAO_COMPLETEALL]='C2S_FENGYAO_COMPLETEALL';
C2S_CMD_2_PROTODESC[C2S_FENGYAO_FIGHT]='C2S_FENGYAO_FIGHT';
C2S_CMD_2_PROTODESC[C2S_FENGYAO_FULLRWD]='C2S_FENGYAO_FULLRWD';
C2S_CMD_2_PROTODESC[C2S_SHIMEN_QUERY]='C2S_SHIMEN_QUERY';
C2S_CMD_2_PROTODESC[C2S_SHIMEN_REWARD]='C2S_SHIMEN_REWARD';
C2S_CMD_2_PROTODESC[C2S_SHIMEN_BUY]='C2S_SHIMEN_BUY';
C2S_CMD_2_PROTODESC[C2S_PB_FIGHT]='C2S_PB_FIGHT';
C2S_CMD_2_PROTODESC[C2S_QMBOSS_LIST]='C2S_QMBOSS_LIST';
C2S_CMD_2_PROTODESC[C2S_QMBOSS_DAMAGE_LIST]='C2S_QMBOSS_DAMAGE_LIST';
C2S_CMD_2_PROTODESC[C2S_QMBOSS_PAY_REBIRTH]='C2S_QMBOSS_PAY_REBIRTH';
C2S_CMD_2_PROTODESC[C2S_QMBOSS_FIGHT]='C2S_QMBOSS_FIGHT';
C2S_CMD_2_PROTODESC[C2S_QMBOSS_SET_CONCERNED]='C2S_QMBOSS_SET_CONCERNED';
C2S_CMD_2_PROTODESC[C2S_QMBOSS_PURCHASE_TIMES]='C2S_QMBOSS_PURCHASE_TIMES';
C2S_CMD_2_PROTODESC[C2S_SUMCATCH_DETAIL]='C2S_SUMCATCH_DETAIL';
C2S_CMD_2_PROTODESC[C2S_SUMCATCH_DOCATCH]='C2S_SUMCATCH_DOCATCH';
C2S_CMD_2_PROTODESC[C2S_SCFIGHT_TRYFIGHT]='C2S_SCFIGHT_TRYFIGHT';
C2S_CMD_2_PROTODESC[C2S_SCENEPASS_FIGHT]='C2S_SCENEPASS_FIGHT';
C2S_CMD_2_PROTODESC[C2S_SCENEPASS_HELP]='C2S_SCENEPASS_HELP';
C2S_CMD_2_PROTODESC[C2S_SCENEPASS_UPSCENE]='C2S_SCENEPASS_UPSCENE';
C2S_CMD_2_PROTODESC[C2S_SCENEPASS_HELPTIMES]='C2S_SCENEPASS_HELPTIMES';
C2S_CMD_2_PROTODESC[C2S_SCENEPASS_GET_SECRWD]='C2S_SCENEPASS_GET_SECRWD';
C2S_CMD_2_PROTODESC[C2S_RANK]='C2S_RANK';
C2S_CMD_2_PROTODESC[C2S_RANK_SIMPLE]='C2S_RANK_SIMPLE';
C2S_CMD_2_PROTODESC[C2S_ITEMEXCH_PURCHASE]='C2S_ITEMEXCH_PURCHASE';
C2S_CMD_2_PROTODESC[C2S_ITEMEXCH_SHOP]='C2S_ITEMEXCH_SHOP';
C2S_CMD_2_PROTODESC[C2S_ITEMEXCH_AUTO_EXCHANGE]='C2S_ITEMEXCH_AUTO_EXCHANGE';
C2S_CMD_2_PROTODESC[C2S_MATERFB_TRYFIGHT]='C2S_MATERFB_TRYFIGHT';
C2S_CMD_2_PROTODESC[C2S_MATERFB_SAODANG]='C2S_MATERFB_SAODANG';
C2S_CMD_2_PROTODESC[C2S_MATERFB_INFO]='C2S_MATERFB_INFO';
C2S_CMD_2_PROTODESC[C2S_PDYW_FIGHT]='C2S_PDYW_FIGHT';
C2S_CMD_2_PROTODESC[C2S_PDYW_REWARD]='C2S_PDYW_REWARD';
C2S_CMD_2_PROTODESC[C2S_PDYW_BUYFULL]='C2S_PDYW_BUYFULL';
C2S_CMD_2_PROTODESC[C2S_PDYW_STATUS]='C2S_PDYW_STATUS';
C2S_CMD_2_PROTODESC[C2S_FRIEND_FRIENDLIST]='C2S_FRIEND_FRIENDLIST';
C2S_CMD_2_PROTODESC[C2S_FRIEND_RELAOPERA]='C2S_FRIEND_RELAOPERA';
C2S_CMD_2_PROTODESC[C2S_FRIEND_SENDCOIN]='C2S_FRIEND_SENDCOIN';
C2S_CMD_2_PROTODESC[C2S_FRIEND_SENDCOIN_ALL]='C2S_FRIEND_SENDCOIN_ALL';
C2S_CMD_2_PROTODESC[C2S_FRIEND_ACCEPTCOIN]='C2S_FRIEND_ACCEPTCOIN';
C2S_CMD_2_PROTODESC[C2S_FRIEND_SENDCHAT]='C2S_FRIEND_SENDCHAT';
C2S_CMD_2_PROTODESC[C2S_FRIEND_COIN_INFO]='C2S_FRIEND_COIN_INFO';
C2S_CMD_2_PROTODESC[C2S_FRIEND_ACC_ONE_COIN]='C2S_FRIEND_ACC_ONE_COIN';
C2S_CMD_2_PROTODESC[C2S_FRIEND_RANDROLE]='C2S_FRIEND_RANDROLE';
C2S_CMD_2_PROTODESC[C2S_FRIEND_SEARCH_ROLE]='C2S_FRIEND_SEARCH_ROLE';
C2S_CMD_2_PROTODESC[C2S_ROLE_INFO]='C2S_ROLE_INFO';
C2S_CMD_2_PROTODESC[C2S_ROLE_DESC]='C2S_ROLE_DESC';
C2S_CMD_2_PROTODESC[C2S_MARRIAGE_PROPOSE_LIST]='C2S_MARRIAGE_PROPOSE_LIST';
C2S_CMD_2_PROTODESC[C2S_MARRIAGE_PROPOSE]='C2S_MARRIAGE_PROPOSE';
C2S_CMD_2_PROTODESC[C2S_MARRIAGE_RESP_PROPOSE]='C2S_MARRIAGE_RESP_PROPOSE';
C2S_CMD_2_PROTODESC[C2S_MARRIAGE_DIVORCE]='C2S_MARRIAGE_DIVORCE';
C2S_CMD_2_PROTODESC[C2S_MARRIAGE_WISH]='C2S_MARRIAGE_WISH';
C2S_CMD_2_PROTODESC[C2S_WILDBOSS_LIST]='C2S_WILDBOSS_LIST';
C2S_CMD_2_PROTODESC[C2S_WILDBOSS_DETAIL]='C2S_WILDBOSS_DETAIL';
C2S_CMD_2_PROTODESC[C2S_WILDBOSS_FIGHT]='C2S_WILDBOSS_FIGHT';
C2S_CMD_2_PROTODESC[C2S_TREASURE_FIGHT]='C2S_TREASURE_FIGHT';
C2S_CMD_2_PROTODESC[C2S_TREASURE_REWARD]='C2S_TREASURE_REWARD';
C2S_CMD_2_PROTODESC[C2S_TREASURE_QEURYRWD]='C2S_TREASURE_QEURYRWD';
C2S_CMD_2_PROTODESC[C2S_TREASURE_FIGHTALL]='C2S_TREASURE_FIGHTALL';
C2S_CMD_2_PROTODESC[C2S_TFB_MATCH]='C2S_TFB_MATCH';
C2S_CMD_2_PROTODESC[C2S_TBF_FIGHT]='C2S_TBF_FIGHT';
C2S_CMD_2_PROTODESC[C2S_TBF_ROOM]='C2S_TBF_ROOM';
C2S_CMD_2_PROTODESC[C2S_TBF_INFO]='C2S_TBF_INFO';
C2S_CMD_2_PROTODESC[C2S_WORLDQUES_QUESTION]='C2S_WORLDQUES_QUESTION';
C2S_CMD_2_PROTODESC[C2S_WORLDQUES_INFO]='C2S_WORLDQUES_INFO';
C2S_CMD_2_PROTODESC[C2S_WORLDQUES_ANSWER]='C2S_WORLDQUES_ANSWER';
C2S_CMD_2_PROTODESC[C2S_WORLDQUES_REWARD]='C2S_WORLDQUES_REWARD';
C2S_CMD_2_PROTODESC[C2S_GOOSETOWER_FIGHT]='C2S_GOOSETOWER_FIGHT';
C2S_CMD_2_PROTODESC[C2S_TTXY_TODAY]='C2S_TTXY_TODAY';
C2S_CMD_2_PROTODESC[C2S_TTXY_FIGHT]='C2S_TTXY_FIGHT';
C2S_CMD_2_PROTODESC[C2S_TTXY_GETREWARD]='C2S_TTXY_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_TTXY_FIGHTALL]='C2S_TTXY_FIGHTALL';
C2S_CMD_2_PROTODESC[C2S_GANG_DETAIL]='C2S_GANG_DETAIL';
C2S_CMD_2_PROTODESC[C2S_GANG_SETNAME]='C2S_GANG_SETNAME';
C2S_CMD_2_PROTODESC[C2S_GANG_SETNOTICE]='C2S_GANG_SETNOTICE';
C2S_CMD_2_PROTODESC[C2S_GANG_RECRUIT]='C2S_GANG_RECRUIT';
C2S_CMD_2_PROTODESC[C2S_GANG_MEMBER]='C2S_GANG_MEMBER';
C2S_CMD_2_PROTODESC[C2S_GANG_FOUND]='C2S_GANG_FOUND';
C2S_CMD_2_PROTODESC[C2S_GANG_KICK]='C2S_GANG_KICK';
C2S_CMD_2_PROTODESC[C2S_GANG_QUIT]='C2S_GANG_QUIT';
C2S_CMD_2_PROTODESC[C2S_GANG_SETPOS]='C2S_GANG_SETPOS';
C2S_CMD_2_PROTODESC[C2S_GANG_ABDICATE]='C2S_GANG_ABDICATE';
C2S_CMD_2_PROTODESC[C2S_GANG_SET_AUTOPASS]='C2S_GANG_SET_AUTOPASS';
C2S_CMD_2_PROTODESC[C2S_GANG_JOIN_LIST]='C2S_GANG_JOIN_LIST';
C2S_CMD_2_PROTODESC[C2S_GANG_RESP_JOIN]='C2S_GANG_RESP_JOIN';
C2S_CMD_2_PROTODESC[C2S_GANG_JOIN]='C2S_GANG_JOIN';
C2S_CMD_2_PROTODESC[C2S_GANG_JOIN_ALL]='C2S_GANG_JOIN_ALL';
C2S_CMD_2_PROTODESC[C2S_GANG_LIST]='C2S_GANG_LIST';
C2S_CMD_2_PROTODESC[C2S_GANG_LOG]='C2S_GANG_LOG';
C2S_CMD_2_PROTODESC[C2S_GANG_DONATE]='C2S_GANG_DONATE';
C2S_CMD_2_PROTODESC[C2S_GANG_INCENSE_INFO]='C2S_GANG_INCENSE_INFO';
C2S_CMD_2_PROTODESC[C2S_GANG_INCENSE_REWARD]='C2S_GANG_INCENSE_REWARD';
C2S_CMD_2_PROTODESC[C2S_GANG_INCENSE]='C2S_GANG_INCENSE';
C2S_CMD_2_PROTODESC[C2S_GANG_FUBEN_FIGHT]='C2S_GANG_FUBEN_FIGHT';
C2S_CMD_2_PROTODESC[C2S_GANG_FUBEN_TODAY]='C2S_GANG_FUBEN_TODAY';
C2S_CMD_2_PROTODESC[C2S_GANG_FUBEN_QUERYID]='C2S_GANG_FUBEN_QUERYID';
C2S_CMD_2_PROTODESC[C2S_GANG_SKILL_UPGRADE]='C2S_GANG_SKILL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_OPEN]='C2S_GANG_BOSS_OPEN';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_FIGHT]='C2S_GANG_BOSS_FIGHT';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_GETREWARD]='C2S_GANG_BOSS_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_FORCEKILL]='C2S_GANG_BOSS_FORCEKILL';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_DAMAGELIST]='C2S_GANG_BOSS_DAMAGELIST';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_REWARDSTATUS]='C2S_GANG_BOSS_REWARDSTATUS';
C2S_CMD_2_PROTODESC[C2S_GANG_BOSS_STATUS]='C2S_GANG_BOSS_STATUS';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_ENTER]='C2S_GANG_SCENE_ENTER';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_LEAVE]='C2S_GANG_SCENE_LEAVE';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_MINING]='C2S_GANG_SCENE_MINING';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_MINRESET]='C2S_GANG_SCENE_MINRESET';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_MINREWARD]='C2S_GANG_SCENE_MINREWARD';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_MINBUYFULL]='C2S_GANG_SCENE_MINBUYFULL';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_PLANT]='C2S_GANG_SCENE_PLANT';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_WATER]='C2S_GANG_SCENE_WATER';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_EXCHANGE]='C2S_GANG_SCENE_EXCHANGE';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_EXCHREFRESH]='C2S_GANG_SCENE_EXCHREFRESH';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_PLANTRESET]='C2S_GANG_SCENE_PLANTRESET';
C2S_CMD_2_PROTODESC[C2S_GANG_SCENE_PLANTREWARD]='C2S_GANG_SCENE_PLANTREWARD';
C2S_CMD_2_PROTODESC[C2S_GANG_TRAVEL_UPGRADE]='C2S_GANG_TRAVEL_UPGRADE';
C2S_CMD_2_PROTODESC[C2S_GANG_TRAVEL_REWARD]='C2S_GANG_TRAVEL_REWARD';
C2S_CMD_2_PROTODESC[C2S_PANDAH_FIGHT]='C2S_PANDAH_FIGHT';
C2S_CMD_2_PROTODESC[C2S_ITEM_COMPOSE]='C2S_ITEM_COMPOSE';
C2S_CMD_2_PROTODESC[C2S_PERCHARGE_GETREWARD]='C2S_PERCHARGE_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_DIRGROWUP_GETREWARD]='C2S_DIRGROWUP_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_GROWUPRWD_GETREWARD]='C2S_GROWUPRWD_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_8SING_GETREWARD]='C2S_8SING_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_HDQMGROWUP_GETREWARD]='C2S_HDQMGROWUP_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_DISCOUNTSHOP_PURCHASE]='C2S_DISCOUNTSHOP_PURCHASE';
C2S_CMD_2_PROTODESC[C2S_HDGRADERWD_GETREWARD]='C2S_HDGRADERWD_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_OPENPLAY_GETREWARD]='C2S_OPENPLAY_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_HAOLI_GETREWARD]='C2S_HAOLI_GETREWARD';
C2S_CMD_2_PROTODESC[C2S_CLIENT_OPERATION]='C2S_CLIENT_OPERATION';
C2S_CMD_2_PROTODESC[C2S_ARENA_INFO]='C2S_ARENA_INFO';
C2S_CMD_2_PROTODESC[C2S_ARENA_RECORD]='C2S_ARENA_RECORD';
C2S_CMD_2_PROTODESC[C2S_ARENA_FIGHT]='C2S_ARENA_FIGHT';
C2S_CMD_2_PROTODESC[C2S_ARENA_BUY]='C2S_ARENA_BUY';
C2S_CMD_2_PROTODESC[C2S_ARENA_RANK]='C2S_ARENA_RANK';
C2S_CMD_2_PROTODESC[C2S_ARENA_SECKILL]='C2S_ARENA_SECKILL';
C2S_CMD_2_PROTODESC[C2S_ARENA_TIMES]='C2S_ARENA_TIMES';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_PROGRESS]='C2S_TSUMEKO_PROGRESS';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_INFO]='C2S_TSUMEKO_INFO';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_RECORD]='C2S_TSUMEKO_RECORD';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_FIGHT]='C2S_TSUMEKO_FIGHT';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_SECKILL]='C2S_TSUMEKO_SECKILL';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_BOX]='C2S_TSUMEKO_BOX';
C2S_CMD_2_PROTODESC[C2S_TSUMEKO_KILL_ALL]='C2S_TSUMEKO_KILL_ALL';
C2S_CMD_2_PROTODESC[C2S_ESCORT_INFO]='C2S_ESCORT_INFO';
C2S_CMD_2_PROTODESC[C2S_ESCORT_CAR]='C2S_ESCORT_CAR';
C2S_CMD_2_PROTODESC[C2S_ESCORT_RECORD]='C2S_ESCORT_RECORD';
C2S_CMD_2_PROTODESC[C2S_ESCORT_BEGIN]='C2S_ESCORT_BEGIN';
C2S_CMD_2_PROTODESC[C2S_ESCORT_ORANGE]='C2S_ESCORT_ORANGE';
C2S_CMD_2_PROTODESC[C2S_ESCORT_QUALITY]='C2S_ESCORT_QUALITY';
C2S_CMD_2_PROTODESC[C2S_ESCORT_PLUNDER]='C2S_ESCORT_PLUNDER';
C2S_CMD_2_PROTODESC[C2S_ESCORT_REVENGE]='C2S_ESCORT_REVENGE';
C2S_CMD_2_PROTODESC[C2S_ESCORT_REWARD]='C2S_ESCORT_REWARD';
C2S_CMD_2_PROTODESC[C2S_ESCORT_FINISH]='C2S_ESCORT_FINISH';
C2S_CMD_2_PROTODESC[C2S_ESCORT_RED]='C2S_ESCORT_RED';
C2S_CMD_2_PROTODESC[C2S_BEST_INFO]='C2S_BEST_INFO';
C2S_CMD_2_PROTODESC[C2S_BEST_APPLY]='C2S_BEST_APPLY';
C2S_CMD_2_PROTODESC[C2S_BEST_DETAIL]='C2S_BEST_DETAIL';
C2S_CMD_2_PROTODESC[C2S_BEST_LOOK]='C2S_BEST_LOOK';
C2S_CMD_2_PROTODESC[C2S_BEST_BUY]='C2S_BEST_BUY';
C2S_CMD_2_PROTODESC[C2S_BEST_RED]='C2S_BEST_RED';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_INFO]='C2S_HEGEMONY_INFO';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_ENTER]='C2S_HEGEMONY_ENTER';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_MOVE]='C2S_HEGEMONY_MOVE';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_LOOK]='C2S_HEGEMONY_LOOK';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_EXPLOIT]='C2S_HEGEMONY_EXPLOIT';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_EXIT]='C2S_HEGEMONY_EXIT';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_REWARD]='C2S_HEGEMONY_REWARD';
C2S_CMD_2_PROTODESC[C2S_HEGEMONY_FIGHT]='C2S_HEGEMONY_FIGHT';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_ENTER]='C2S_WULINHEAD_ENTER';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_RANK]='C2S_WULINHEAD_RANK';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_RED]='C2S_WULINHEAD_RED';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_PVE]='C2S_WULINHEAD_PVE';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_PVP]='C2S_WULINHEAD_PVP';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_EXIT]='C2S_WULINHEAD_EXIT';
C2S_CMD_2_PROTODESC[C2S_WULINHEAD_TASK]='C2S_WULINHEAD_TASK';
C2S_CMD_2_PROTODESC[C2S_GOLDTREASURE_PAY]='C2S_GOLDTREASURE_PAY';
C2S_CMD_2_PROTODESC[C2S_GOLDTREASURE_REWARD]='C2S_GOLDTREASURE_REWARD';
C2S_CMD_2_PROTODESC[C2S_GOLDTREASURE_RARERECORD]='C2S_GOLDTREASURE_RARERECORD';
C2S_CMD_2_PROTODESC[C2S_COOKBATTLE_PAY]='C2S_COOKBATTLE_PAY';
C2S_CMD_2_PROTODESC[C2S_COOKBATTLE_REWARD]='C2S_COOKBATTLE_REWARD';
C2S_CMD_2_PROTODESC[C2S_COOKBATTLE_RECIPEREWARD]='C2S_COOKBATTLE_RECIPEREWARD';
C2S_CMD_2_PROTODESC[C2S_COSTGOLDHOLD_REWARD]='C2S_COSTGOLDHOLD_REWARD';
C2S_CMD_2_PROTODESC[C2S_COSTGOLDHOLD_ADDDAY]='C2S_COSTGOLDHOLD_ADDDAY';


}
