module game{
    export class strengthen extends utils.game_module {
        public start():void {
            let strengthen_levels = utils.data_ins().get_data(data_enum.DATA_STRENGTHEN_LEVELS) as data.strengthen_levels;
            strengthen_levels.init();

            this.register_event(game_event.EVENT_UPGRADE_STRENGTHEN,this.upgradeStrengthen);
        }

        upgradeStrengthen(strengthenLevel: data.strengthen_level): void {
            let accountData = utils.data_ins().get_data(data_enum.DATA_ACCOUNT) as data.account_data;
            if (accountData.m_gold >= strengthenLevel.price) {
                accountData.m_gold -= strengthenLevel.price;
                let pet = accountData.m_pets[0];
                pet.m_strengthen_level = strengthenLevel.level;
            }
        }
    }
}