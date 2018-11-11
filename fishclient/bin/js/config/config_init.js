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
    }
    config.config_init = config_init;
})(config || (config = {}));
//# sourceMappingURL=config_init.js.map