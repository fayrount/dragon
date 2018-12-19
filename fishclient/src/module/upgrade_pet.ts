module game{
    export class upgrade_pet extends utils.game_module {
        private m_pdata_ins: data.player_data;

        public start():void {
            this.m_pdata_ins = data.get_data(data_enum.DATA_PLAYER) as data.player_data;

            this.register_event(game_event.EVENT_UPGRADE_PET_CLICK,this.upgrade_pet);

            // listen to the upgrade pet response
            //this.register_net_event(protocol_def.S2C_ITEM_LIST,this.on_upgrade_pet_response);
        }

        upgrade_pet(petObject: Object): void {
            if (this.m_pdata_ins.m_gold >= petObject['cost']) {
                //send pet upgrade cmd to server
                //net.net_ins().send(protocol_def.C2S_ROLE_INFO,{});
                this.on_upgrade_pet_response(petObject);
            }
        }

        on_upgrade_pet_response(petObject:any = null) {
            // what happens when server error or denied?
            this.m_pdata_ins.m_gold -= petObject['cost'];
            if (petObject['level'] === 1) {
                let pet = new data.pet_data();
                pet.m_id = petObject['id'];
                pet.m_level = 1;
                this.m_pdata_ins.m_pets.push(pet);
            } else {
                for (let pet of this.m_pdata_ins.m_pets) {
                    if (pet.m_id === petObject['id']) {
                        pet.m_level = petObject['level'];
                        break;
                    }
                }
            }

            this.fire_event_next_frame(game_event.EVENT_PETS_CHANGED, petObject);
            this.fire_event_next_frame(game_event.EVENT_UI_MAINTOPUPDATE, [this.m_pdata_ins.m_gold,this.m_pdata_ins.m_stamina]);
        }
    }
}