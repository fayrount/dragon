module data{
    export class sea_area_config {
        public description: string;
        public background: string;
    }

    export class sea_area_configs extends utils.game_data {
        public m_configs: sea_area_config[];

        public init() {
            this.m_configs = new Array<data.sea_area_config>(5);
            for (let i = 0; i < this.m_configs.length; i++) {
                this.m_configs[i] = new data.sea_area_config();
                this.m_configs[i].background = "demo/seafloor" + (i + 1) + ".jpg";
            }
            this.m_configs[0].description = "South Pacific";
            this.m_configs[1].description = "North Atlantic";
            this.m_configs[2].description = "South Atlantic";
            this.m_configs[3].description = "Indian Ocean";
            this.m_configs[4].description = "North Pacific";
        }
    }
}