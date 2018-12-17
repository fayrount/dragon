var config;
(function (config) {
    function config_init(config_obj) {
        config.assist_info_map_init(config_obj);
        config.mapinfo_map_init(config_obj);
        config.avatarinfo_map_init(config_obj);
        config.aniinfo_map_init(config_obj);
        config.randomname_map_init(config_obj);
        config.buff_map_init(config_obj);
        config.skill_map_init(config_obj);
        config.skillpassive_map_init(config_obj);
        config.item_map_init(config_obj);
        config.itemmerge_map_init(config_obj);
        config.player_exp_map_init(config_obj);
        config.pet_exp_map_init(config_obj);
        config.partner_exp_map_init(config_obj);
        config.playerskill1_map_init(config_obj);
        config.playerskill2_map_init(config_obj);
        config.petskill1_map_init(config_obj);
        config.petskill2_map_init(config_obj);
        config.partnerskill1_map_init(config_obj);
        config.partnerskill2_map_init(config_obj);
        config.specialskill1_map_init(config_obj);
        config.specialskill2_map_init(config_obj);
        config.specialskill3_map_init(config_obj);
        config.specialskill4_map_init(config_obj);
    }
    config.config_init = config_init;
})(config || (config = {}));
//# sourceMappingURL=config_init.js.map