module game{
    export class demo_main extends utils.game_module{
        public m_ui_sp:laya.display.Sprite;

        private sea_area: utils.game_module = null;

        private world_map: utils.game_module = null;
        private strengthen: utils.game_module = null;
        private pets: utils.game_module = null;

        constructor()
        {
            super();
        }

        public start(){
            super.start();
            core.game_tiplog('demo_main start');
            this.m_ui_sp = new laya.display.Sprite();

            utils.widget_ins().set_root(this.m_ui_sp);

            Laya.stage.addChild(this.m_ui_sp);
            
            utils.widget_ins().show_widget(widget_enum.WIDGET_MAIN_VIEW,true);

            this.register_event(game_event.EVENT_MAIN_VIEW_INIT,this.onMainViewInit);
            this.register_event(game_event.EVENT_WORLD_MAP_CLICK,this.showWorldMap);
            this.register_event(game_event.EVENT_STRENGTHEN_CLICK,this.showStrengthen);
            this.register_event(game_event.EVENT_PETS_CLICK,this.showPets);
            this.register_event(game_event.EVENT_HIT_TREASURE,this.hitTreasure);
            
            this.sea_area = utils.module_ins().get_module(module_enum.MODULE_SEA_AREA);
            this.sea_area.start();
        }
        
        onMainViewInit() {
            let uiIns: utils.game_widget = utils.widget_ins().get_module(widget_enum.WIDGET_MAIN_VIEW);
        }

        showWorldMap() {
            if (this.world_map === null) {
                this.world_map = utils.module_ins().get_module(module_enum.MODULE_WORLD_MAP);
                this.world_map.start();
            }
            utils.widget_ins().show_widget(widget_enum.WIDGET_WORLD_MAP, true);
        }

        showStrengthen() {
            if (this.strengthen === null) {
                this.strengthen = utils.module_ins().get_module(module_enum.MODULE_STRENGTHEN);
                this.strengthen.start();
            }
            utils.widget_ins().show_widget(widget_enum.WIDGET_STRENGTHEN, true);
        }

        showPets() {
            if (this.pets === null) {
                this.pets = utils.module_ins().get_module(module_enum.MODULE_UPGRADE_PET);
                this.pets.start();
            }
            utils.widget_ins().show_widget(widget_enum.WIDGET_UPGRADE_PET, true);
        }

        hitTreasure(treasure: Treasure) {
            let accountData: data.account_data = utils.data_ins().get_data(data_enum.DATA_ACCOUNT) as data.account_data;
            accountData.m_gold += treasure.gold;

            this.fire_event_next_frame(game_event.EVENT_UPDATE_GOLD);
        }

        public update(delta:number):void
        {
            if (this.sea_area !== null) {
                this.sea_area.update(delta);
            }

            utils.event_ins().dispatch_all_delay_event();
        }
    }
}