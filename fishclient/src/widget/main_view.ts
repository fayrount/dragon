module widget {
    export class main_view extends utils.game_widget {
        private uiIns: ui.demo.MainViewUI = null;

        constructor() {
            super("res/atlas/demo.atlas", ui.demo.MainViewUI);
            this.append_extrares("res/atlas/mainui.atlas", Laya.Loader.ATLAS);
            this.append_extrares("res/atlas/ui.atlas", Laya.Loader.ATLAS);
            this.append_extrares("res/atlas/ui/sys.atlas", Laya.Loader.ATLAS);
            this.append_extrares("bigpic/mainuibg.png", Laya.Loader.IMAGE);
            this.append_extrares("demo/seafloor.jpg", Laya.Loader.IMAGE);
            this.m_layer = utils.WIDGET_LAYER.NORMAL;
        }

        public on_init(): void {
            this.uiIns = this.m_ui as ui.demo.MainViewUI;

            this.fire_event(game_event.EVENT_MAIN_VIEW_INIT);
        }

        public on_show(flag: boolean): void {
            if (flag) {
                this.uiIns = this.m_ui as ui.demo.MainViewUI;
                this.uiIns.btn1.on(Laya.Event.CLICK, this, this.showWorldMap);
                this.uiIns.btn2.on(Laya.Event.CLICK, this, this.on_partner);
                this.uiIns.btn3.on(Laya.Event.CLICK, this, this.showStrengthen);
                this.uiIns.btn4.on(Laya.Event.CLICK, this, this.on_partner);

                let accountData: data.account_data = utils.data_ins().get_data(data_enum.DATA_ACCOUNT) as data.account_data;
                this.uiIns.goldLabel.text = accountData.m_gold.toString();
            }
            else {
                this.uiIns.btn1.off(Laya.Event.CLICK, this, this.showWorldMap);
                this.uiIns.btn2.off(Laya.Event.CLICK, this, this.on_partner);
                this.uiIns.btn3.off(Laya.Event.CLICK, this, this.showStrengthen);
                this.uiIns.btn4.off(Laya.Event.CLICK, this, this.on_partner);
                this.unregister_allevent();
            }
        }

        public showWorldMap(ud: any = null): void {
            this.fire_event(game_event.EVENT_WORLD_MAP_CLICK);
        }

        public on_partner(ud: any = null): void {
        }

        public showStrengthen(ud: any = null): void {
            this.fire_event(game_event.EVENT_STRENGTHEN_CLICK);
        }

        public on_dispose(): void {
        }

        public dispose() {
            super.dispose();
        }
    }
}