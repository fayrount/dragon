module data{
    export function init_data_module()
    {
        utils.data_ins().register_data(data_enum.DATA_ACCOUNT,data.account_data);
        utils.data_ins().register_data(data_enum.DATA_SEA_AREA_CONFIGS,data.sea_area_configs);
        utils.data_ins().register_data(data_enum.DATA_PET,data.pet_data);
        utils.data_ins().register_data(data_enum.DATA_STRENGTHEN_LEVELS,data.strengthen_levels);
        utils.data_ins().register_data(data_enum.DATA_PLAYER,data.player_data);
    }
    export function get_data(data_name:string):utils.game_data
    {
        return utils.data_ins().get_data(data_name);
    }
}