module config{
export function config_init(config_obj:Object):void{
	assist_info_map_init(config_obj);
	mapinfo_map_init(config_obj);
	avatarinfo_map_init(config_obj);
	aniinfo_map_init(config_obj);
	randomname_map_init(config_obj);
	buff_map_init(config_obj);
	skill_map_init(config_obj);
	skillpassive_map_init(config_obj);
}
}
