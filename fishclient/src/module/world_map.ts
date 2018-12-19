module game{
    export class world_map extends utils.game_module {
        public start():void {
            let sea_area_configs = utils.data_ins().get_data(data_enum.DATA_SEA_AREA_CONFIGS) as data.sea_area_configs;
            sea_area_configs.init();
        }
    }
}