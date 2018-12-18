module data{
    export class pet_data extends utils.game_data{
        public m_icon:string = "";
        public m_level:number = 0;
        public m_strengthen_level:number = 0;

        constructor()
        {
            super();
        }
        
        public dispose()
        {
            super.dispose();
        }
    }
}