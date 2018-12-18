module game{
    export function init_game_module()
    {
        utils.module_ins().register_module(module_enum.MODULE_MAIN,game.game_main);

        utils.module_ins().register_module(module_enum.MODULE_DEMO_MAIN,game.demo_main);
        utils.module_ins().register_module(module_enum.MODULE_SEA_AREA,game.sea_area);
        utils.module_ins().register_module(module_enum.MODULE_WORLD_MAP,game.world_map);
        utils.module_ins().register_module(module_enum.MODULE_STRENGTHEN,game.strengthen);
    }

    export function get_module(module_name:string):utils.game_module
    {
        return utils.module_ins().get_module(module_name);
    }
}