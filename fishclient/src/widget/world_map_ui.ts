module widget {
    export class world_map_ui extends utils.game_widget {
        private uiIns: ui.demo.WorldMapUI = null;

        private areaIcons: Laya.Animation[];
        private areaBoxs: Laya.Sprite[];

        private seaAreaConfigs: data.sea_area_config[];
        
        private selectedSeaArea: data.sea_area_config;

        constructor() {
            super("res/atlas/demo.atlas", ui.demo.WorldMapUI);
            this.m_layer = utils.WIDGET_LAYER.NORMAL;
        }

        public on_show(flag: boolean): void {
            if (flag) {
                this.uiIns = this.m_ui as ui.demo.WorldMapUI;
                this.uiIns.closeBtn.on(Laya.Event.CLICK, this, this.onClose);
                this.uiIns.btnGo.on(Laya.Event.CLICK, this, this.goSeaArea);

                this.areaBoxs = [this.uiIns.b1, this.uiIns.b2, this.uiIns.b3, this.uiIns.b4, this.uiIns.b5];
                this.areaIcons = [this.uiIns.a1, this.uiIns.a2, this.uiIns.a3, this.uiIns.a4, this.uiIns.a5];
                for (let i = 0; i < this.areaIcons.length; i++) {
                    this.areaIcons[i].interval = 200;
                    this.areaIcons[i].play(1, true);
                    this.areaBoxs[i].on(Laya.Event.CLICK, this, this.onAreaClick, [i]);
                }
                this.uiIns.desBox.visible = false;

                let sea_area_configs = utils.data_ins().get_data(data_enum.DATA_SEA_AREA_CONFIGS) as data.sea_area_configs;
                this.seaAreaConfigs = sea_area_configs.m_configs;
            }
            else {
                this.uiIns.closeBtn.off(Laya.Event.CLICK, this, this.onClose);
                this.uiIns.btnGo.off(Laya.Event.CLICK, this, this.goSeaArea);

                for (let i = 0; i < this.areaIcons.length; i++) {
                    this.areaIcons[i].stop();
                    this.areaBoxs[i].on(Laya.Event.CLICK, this, this.onAreaClick, [i]);
                }

                this.unregister_allevent();
                this.uiIns = null;
                this.seaAreaConfigs = null;
            }
        }

        onClose(): void {
            this.show(false);
        }

        goSeaArea(): void {
            this.fire_event(game_event.EVENT_CHANGE_SEAARE, this.selectedSeaArea);
            this.show(false);
        }

        onAreaClick(selectedIndex:number): void {
            this.selectedSeaArea = this.seaAreaConfigs[selectedIndex];

            this.uiIns.desBox.pos(Math.max(10, this.areaBoxs[selectedIndex].x - this.uiIns.desBox.width/2), this.areaBoxs[selectedIndex].y - this.uiIns.desBox.height/2);
            this.uiIns.desLabel.text = this.selectedSeaArea.description;
            this.uiIns.desBox.visible = true;
        }
    }
}