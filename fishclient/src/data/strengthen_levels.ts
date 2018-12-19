module data{
    export class strengthen_level {
        public name: string;
        public level: number;
        public price: number;
    }

    export class strengthen_levels extends utils.game_data {
        public m_levels: strengthen_level[];

        public init() {
            this.m_levels = new Array<data.strengthen_level>(8);
            for (let i = 0; i < this.m_levels.length; i++) {
                this.m_levels[i] = new data.strengthen_level();
                this.m_levels[i].level = i+1;
                this.m_levels[i].price = 100 * (i+1);
            }
            this.m_levels[0].name = "黑铁";
            this.m_levels[1].name = "青铜";
            this.m_levels[2].name = "白银";
            this.m_levels[3].name = "黄金";
            this.m_levels[4].name = "暗金";
            this.m_levels[5].name = "红玉";
            this.m_levels[6].name = "玄铁";
            this.m_levels[7].name = "秘银";
        }
    }
}