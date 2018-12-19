module widget {
    export class upgrade_pet_ui extends utils.game_widget {
        private uiIns: ui.game.upgrade_petUI = null;
        private m_pdata_ins: data.player_data;

        constructor() {
            super("res/atlas/demo/pets.atlas", ui.game.upgrade_petUI);
            this.m_layer = utils.WIDGET_LAYER.NORMAL;
        }

        public on_show(flag: boolean): void {
            if (flag) {
                this.m_pdata_ins = data.get_data(data_enum.DATA_PLAYER) as data.player_data;

                this.uiIns = this.m_ui as ui.game.upgrade_petUI;
                this.uiIns.btn_close.on(Laya.Event.CLICK, this, this.onClose);

                this.register_event(game_event.EVENT_PETS_CHANGED, this.onPetsChanged);

                this.initList();
            }
            else {
                this.uiIns.btn_close.off(Laya.Event.CLICK, this, this.onClose);
                this.unregister_allevent();
            }
        }

        private initList(): void {
            let list = this.uiIns.petList;
            list.itemRender = ui.game.upgrade_pet_boxUI;
            // 使用但隐藏滚动条
            list.vScrollBarSkin = "";
            list.renderHandler = new Laya.Handler(this, this.updateItem);

            this.updateListData();
        }
        
        private updateListData(): void {
            // 暂定系统总共有7个宠物
            let listData: any[] = new Array(7);
            for (let index = 0; index < listData.length; index++) {
                listData[index] = "100" + (index + 1);
            }
            this.uiIns.petList.array = listData;
        }

        private updateItem(cell: ui.game.upgrade_pet_boxUI, index: any): void {
            let petId: string = cell.dataSource;

            let petLevel: number = 0;
            let ownThisPet = false;
            for (let pet of this.m_pdata_ins.m_pets) {
                if (pet.m_id === petId) {
                    ownThisPet = true;
                    petLevel = pet.m_level;
                    break;
                }
            }

            cell.petLevel.text = "等级：" + petLevel.toString();
            let exp_obj:Object = config.Pet_exp.get_Pet_exp(petLevel + 1);;
            if(exp_obj != null){
                cell.petCost.text = "升级花费：" + exp_obj['exp'].toString();
            }
            
            //cell.petImage.skin = data.pet_data.getPetIcon(exp_obj['shape']);
            cell.petImage.skin = data.pet_data.getPetIcon(petId);

            if (!ownThisPet) {
                cell.btn_use.label = "购    买";
            } else {
                cell.btn_use.label = "升    级";
            }

            cell.btn_use.on(Laya.Event.CLICK, this, this.clickOnPet, [{"id": petId, "level": petLevel + 1, "cost": exp_obj['exp']}]);
        }

        clickOnPet(petObject: Object) {
            this.findCellInPetList(petObject).btn_use.disabled = true;

            this.fire_event_next_frame(game_event.EVENT_UPGRADE_PET_CLICK, petObject);
        }

        onPetsChanged(petObject: Object) {
            this.updateListData();

            this.findCellInPetList(petObject).btn_use.disabled = false;
        }
        
        disbaleButtonWhenNoGold(button: Laya.Button, price: number) {
            if (this.m_pdata_ins.m_gold < price) {
                button.disabled = true;
            }
        }

        onClose(): void {
            this.show(false);
        }

        private findCellInPetList(petObject: Object): ui.game.upgrade_pet_boxUI {
            let petIndex = -1;
            let listData = this.uiIns.petList.array;
            for (let i=0; i < listData.length; i++) {
                 if (listData[i] === petObject["id"]) {
                     petIndex = i;
                     break;
                 }
            }

            if (petIndex >= 0) {
                return this.uiIns.petList.getCell(petIndex) as ui.game.upgrade_pet_boxUI;
            }
            return null;
        }
    }
}