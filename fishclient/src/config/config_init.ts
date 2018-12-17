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
	item_map_init(config_obj);
	itemmerge_map_init(config_obj);
	player_exp_map_init(config_obj);
	pet_exp_map_init(config_obj);
	partner_exp_map_init(config_obj);
	playerskill1_map_init(config_obj);
	playerskill2_map_init(config_obj);
	petskill1_map_init(config_obj);
	petskill2_map_init(config_obj);
	partnerskill1_map_init(config_obj);
	partnerskill2_map_init(config_obj);
	specialskill1_map_init(config_obj);
	specialskill2_map_init(config_obj);
	specialskill3_map_init(config_obj);
	specialskill4_map_init(config_obj);
}
}
