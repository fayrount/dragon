# -*- coding: utf-8 -*-

#protocol_desc start

Protocol_desc = {
	'chat_msg':[['id', 'int32', ''],['channel', 'int8', ''],['content', 'string16', ''],],
	'item':[['id', 'int32', ''],['shape', 'int16', ''],['name', 'string8', ''],['icon', 'string16', ''],['desc', 'string32', ''],],
	'itemlist':[['max', 'int8', ''],['data', 'list8', 'item'],['min', 'int8', ''],],
	'mail':[['id', 'int32', ''],['content', 'string32', ''],],
	'maillist':[['data', 'list16', 'mail'],],
	'bigmaillist':[['data', 'list32', 'mail'],],
}


#protocol_desc end
