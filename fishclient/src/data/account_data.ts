module data{
    export class account_data extends utils.game_data{
        public m_account:string = "";
        public m_role_num:number = 0;
        public m_role_id:number = 0;
        
        public m_gold:number = 5000;
        
        public m_pets:pet_data[];

        constructor()
        {
            super();
            this.m_pets = [utils.data_ins().get_data(data_enum.DATA_PET) as data.pet_data];
        }
        
        public dispose()
        {
            super.dispose();
        }
    }
}