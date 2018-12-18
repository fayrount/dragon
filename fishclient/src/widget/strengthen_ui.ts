module widget {
    export class strengthen_ui extends utils.game_widget {
        private uiIns: ui.demo.StrengthenUI = null;

        private level_labels: Laya.Label[];
        private level_images: Laya.Image[];

        private strengthen_levels: data.strengthen_levels;

        private selectedIndex: number;

        constructor() {
            super("res/atlas/danyao.atlas", ui.demo.StrengthenUI);
            this.m_layer = utils.WIDGET_LAYER.NORMAL;

            this.strengthen_levels = utils.data_ins().get_data(data_enum.DATA_STRENGTHEN_LEVELS) as data.strengthen_levels;
        }

        public on_show(flag: boolean): void {
            if (flag) {
                this.uiIns = this.m_ui as ui.demo.StrengthenUI;
                this.uiIns.btn_close.on(Laya.Event.CLICK, this, this.onClose);
                this.uiIns.btn_use.on(Laya.Event.CLICK, this, this.onUse);

                this.level_images = [this.uiIns.img_dan1, this.uiIns.img_dan2, this.uiIns.img_dan3, 
                this.uiIns.img_dan4, this.uiIns.img_dan5, this.uiIns.img_dan6, this.uiIns.img_dan7, 
                this.uiIns.img_dan8];
                this.level_labels = [this.uiIns.lab_name1, this.uiIns.lab_name2, this.uiIns.lab_name3, 
                this.uiIns.lab_name4, this.uiIns.lab_name5, this.uiIns.lab_name6, this.uiIns.lab_name7
                , this.uiIns.lab_name8];

                 for (let i = 0; i < this.level_labels.length; i++) {
                     this.level_images[i].on(Laya.Event.CLICK, this, this.onLevelSelelct, [i]);
                     this.level_labels[i].text = this.strengthen_levels.m_levels[i].name;
                 }

                 let pet = (utils.data_ins().get_data(data_enum.DATA_ACCOUNT) as data.account_data).m_pets[0];
                 this.onLevelSelelct(pet.m_strengthen_level);
            }
            else {
                this.uiIns.btn_close.off(Laya.Event.CLICK, this, this.onClose);
                this.uiIns.btn_use.off(Laya.Event.CLICK, this, this.onUse);

                for (let i = 0; i < this.level_labels.length; i++) {
                     this.level_images[i].off(Laya.Event.CLICK, this, this.onLevelSelelct);
                }

                this.unregister_allevent();
                this.uiIns = null;
            }
        }

        onClose(): void {
            this.show(false);
        }

        onLevelSelelct(selectedIndex: number): void {
            if (selectedIndex >= this.strengthen_levels.m_levels.length) {
                selectedIndex = 0;
            }

            this.selectedIndex = selectedIndex;

            this.uiIns.img_select.pos(this.level_images[selectedIndex].x - 65, this.level_images[selectedIndex].y -65);
            this.uiIns.lab_showname.text = this.strengthen_levels.m_levels[selectedIndex].name;
            this.uiIns.lab_showvalue.text = this.strengthen_levels.m_levels[selectedIndex].price.toString();
        }

        onUse(): void {
            this.show(false);

            this.fire_event(game_event.EVENT_UPGRADE_STRENGTHEN, this.strengthen_levels.m_levels[this.selectedIndex]);
        }
    }
}