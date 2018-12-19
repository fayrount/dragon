module widget {
    export class main_view extends utils.game_widget {
        private uiIns: ui.demo.MainViewUI = null;
        private accountData: data.account_data;

        constructor() {
            super("res/atlas/demo.atlas", ui.demo.MainViewUI);
            this.append_extrares("res/atlas/mainui.atlas", Laya.Loader.ATLAS);
            this.append_extrares("res/atlas/ui.atlas", Laya.Loader.ATLAS);
            this.append_extrares("res/atlas/ui/sys.atlas", Laya.Loader.ATLAS);
            this.append_extrares("res/atlas/demo/pets.atlas", Laya.Loader.ATLAS);
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
                this.accountData = utils.data_ins().get_data(data_enum.DATA_ACCOUNT) as data.account_data;

                this.uiIns = this.m_ui as ui.demo.MainViewUI;
                this.uiIns.btn1.on(Laya.Event.CLICK, this, this.showWorldMap);
                this.uiIns.btn2.on(Laya.Event.CLICK, this, this.on_partner);
                this.uiIns.btn3.on(Laya.Event.CLICK, this, this.showStrengthen);
                this.uiIns.btn4.on(Laya.Event.CLICK, this, this.on_partner);
                this.uiIns.btn5.on(Laya.Event.CLICK, this, this.showPets);

                this.register_event(game_event.EVENT_UPGRADE_STRENGTHEN, this.upgradeStrengthen);
                this.register_event(game_event.EVENT_UPDATE_GOLD,this.updateGoldLabel);
                this.register_event(game_event.EVENT_PETS_CHANGED, this.createPetImages);

                this.updateGoldLabel();
                this.createPetImages();
            }
            else {
                this.uiIns.btn1.off(Laya.Event.CLICK, this, this.showWorldMap);
                this.uiIns.btn2.off(Laya.Event.CLICK, this, this.on_partner);
                this.uiIns.btn3.off(Laya.Event.CLICK, this, this.showStrengthen);
                this.uiIns.btn4.off(Laya.Event.CLICK, this, this.on_partner);
                this.uiIns.btn5.off(Laya.Event.CLICK, this, this.showPets);

                this.unregister_allevent();
            }
        }

        upgradeStrengthen(strengthenLevel: data.strengthen_level): void {
            this.uiIns.strengthenLabel.text = strengthenLevel.name;

            this.updateGoldLabel();
        }

        updateGoldLabel(): void {
            this.uiIns.goldLabel.text = this.accountData.m_gold.toString();
        }

        createPetImages(): void {
            this.uiIns.petsZone.removeChildren();

            let pets: data.pet_data[] = this.accountData.m_pets;
            let x = 200;
            let y = 200;
            for (let pet of this.accountData.m_pets) {
                let label = new Laya.Label();
                label.text = "等级：" + pet.m_level;
                label.color = "#e2e200";
                label.fontSize = 35;
                label.pos(x, y);
                this.uiIns.petsZone.addChild(label);

                let image = new Laya.Image;
                image.skin = data.pet_data.getPetIcon(pet.m_id);
                image.pos(x, y + 60);
                image.name = pet.m_id;
                this.uiIns.petsZone.addChild(image);
                y += 200;
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

        public showPets(ud: any = null): void {
            this.fire_event(game_event.EVENT_PETS_CLICK);
        }

        public on_dispose(): void {
        }

        public dispose() {
            super.dispose();
        }
    }
}