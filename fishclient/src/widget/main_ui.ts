module widget {
    export class main_ui extends utils.game_widget {
        private UIins: ui.game.main_uiUI = null;

        constructor() {
            super("res/atlas/mainui.atlas", ui.game.main_uiUI);
            this.append_extrares("res/atlas/ui.atlas", Laya.Loader.ATLAS);
            this.append_extrares("res/atlas/ui/sys.atlas", Laya.Loader.ATLAS);
            this.append_extrares("bigpic/mainuibg.png", Laya.Loader.IMAGE);
            this.m_layer = utils.WIDGET_LAYER.NORMAL;
        }

        public on_init(): void {
        }

        private _init_ui(): void {
            let truew: number = this.m_ui.width;
            let gap: number = truew / 7;
            let uiins: ui.game.main_uiUI = this.m_ui as ui.game.main_uiUI;
            let width: number = 195;
            uiins.btn1.x = gap - (width/ 2);
            uiins.red_1.x = uiins.btn1.x + 125;
            uiins.red_1.visible = false;
            uiins.btn2.x = gap * 2 - (width/ 2);
            uiins.red_2.x = uiins.btn2.x + 125;
            uiins.red_2.visible = false;
            uiins.btn3.x = gap * 3 - (width/ 2);
            uiins.red_3.x = uiins.btn3.x + 125;
            uiins.red_3.visible = false;
            uiins.btn4.x = gap * 4 - (width/ 2);
            uiins.red_4.x = uiins.btn4.x + 125;
            uiins.red_4.visible = false;
            uiins.btn5.x = gap * 5 - (width/ 2);
            uiins.red_5.x = uiins.btn5.x + 125;
            uiins.red_5.visible = false;
            uiins.btn6.x = gap * 6 - (width/ 2);
            uiins.red_6.x = uiins.btn6.x + 125;
            uiins.red_6.visible = false;
        }

        public on_show(flag: boolean): void {
            if (flag) {
                this.UIins = this.m_ui as ui.game.main_uiUI;
                this.UIins.btn1.on(Laya.Event.CLICK, this, this.on_battle);
                this.UIins.btn2.on(Laya.Event.CLICK, this, this.on_maincity);
                this.UIins.btn3.on(Laya.Event.CLICK, this, this.on_mainequip);
                this.UIins.btn4.on(Laya.Event.CLICK, this, this.on_add);
                this.UIins.btn5.on(Laya.Event.CLICK, this, this.on_partner);
                this.UIins.btn6.on(Laya.Event.CLICK, this, this.on_summon);
                this._init_ui();
            }
            else {
                this.UIins.btn1.off(Laya.Event.CLICK, this, this.on_battle);
                this.UIins.btn2.off(Laya.Event.CLICK, this, this.on_maincity);
                this.UIins.btn3.off(Laya.Event.CLICK, this, this.on_mainequip);
                this.UIins.btn4.off(Laya.Event.CLICK, this, this.on_add);
                this.UIins.btn5.off(Laya.Event.CLICK, this, this.on_partner);
                this.UIins.btn6.off(Laya.Event.CLICK, this, this.on_summon);
                this.unregister_allevent();
                this.UIins = null;
            }
        }


        public on_battle(ud: any = null): void {
        }

        public on_maincity(ud: any = null): void {
            this.fire_event_next_frame(game_event.EVENT_TEST);
        }

        public on_mainequip(ud: any = null): void {
            this.fire_event_next_frame(game_event.EVENT_TEST1);
        }

        public on_add(ud: any = null): void {
        }

        public on_partner(ud: any = null): void {
            this.fire_event_next_frame(game_event.EVENT_TEST2);
        }

        public on_summon(ud: any = null): void {
            this.fire_event_next_frame(game_event.EVENT_TEST3);
        }

        

        public on_dispose(): void {
        }

        public dispose() {
            super.dispose();
        }
    }
}