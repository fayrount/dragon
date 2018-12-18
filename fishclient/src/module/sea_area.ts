module game{
    export class sea_area extends utils.game_module{
        private pet: Laya.Sprite;
        private treasureBox: Laya.Sprite;
        private background: Laya.Image;

        public start():void {
            this.register_event(game_event.EVENT_MAIN_VIEW_INIT,this.onMainViewInit);
            this.register_event(game_event.EVENT_CHANGE_SEAARE, this.changeSeaArea);
        }

        onMainViewInit() {
            let uiIns: utils.game_widget = utils.widget_ins().get_module(widget_enum.WIDGET_MAIN_VIEW);

            this.pet = uiIns.get_con("pet");
            this.treasureBox = uiIns.get_con("treasureBox");
            this.background = uiIns.get_con("bg") as Laya.Image;
        }

        changeSeaArea(seaAreaConfig: data.sea_area_config) {
            this.background.skin = seaAreaConfig.background;
            this.reset();
        }
        
        public dispose()
        {
            super.dispose();
            this.reset();
        }

        public update(delta: number) {
            if (this.treasureBox) {
                this.checkHit();
                this.createTreasures();
                this.moveBackground();
            }
        }

        public reset() {
            for (let i=0; i < this.treasureBox.numChildren; i++) {
                //获取角色对象
                let treasure: Treasure = this.treasureBox.getChildAt(i) as Treasure;
                treasure.recover();
            }
            this.treasureBox.removeChildren(0, this.treasureBox.numChildren);
        }

        private moveBackground(): void {
            this.background.x -=2;

            //如果背景图到了下面不可见，立即调整位置到上面循环显示
            if (this.background.x <= -2560) {
                this.background.x = 0;
            }
        }

        private checkHit() {
            //检测碰撞
            let hitTreasures:Treasure[] = [];

            for (let i=0; i < this.treasureBox.numChildren; i++) {
                //获取对象
                let treasure: Treasure = this.treasureBox.getChildAt(i) as Treasure;

                treasure.x -= treasure.speed;
                
                if (treasure.getBounds().intersects(this.pet.getBounds())) {
                    hitTreasures.push(treasure);
                    this.onHit(treasure);
                }
            }

            for (let i=0; i < hitTreasures.length; i++) {
                hitTreasures[i].removeSelf();
                hitTreasures[i].recover();
            }
        }

        private onHit(treasure: Treasure): void {
            this.fire_event(game_event.EVENT_HIT_TREASURE, treasure);
        }

        private createTreasures() {
            let numUp = 1;
            let speedUp = 2;

            //生成小珍宝
            if (Laya.timer.currFrame % 200 === 0) {
                this.createTreasuresInternal(0, numUp, speedUp);
            }

            //生成中珍宝
            if (Laya.timer.currFrame % 500 === 0) {
                this.createTreasuresInternal(1, numUp, speedUp);
            }

            //生成大珍宝
            if (Laya.timer.currFrame % 1200 === 0) {
                this.createTreasuresInternal(2, 1, speedUp);
            }
        }

        private createTreasuresInternal(type: number, num: number, speed: number) {
            for (let i: number = 0; i < num; i++) {
                //创建珍宝
                let treasure: Treasure = Treasure.createTreasure(type);
                //添加到舞台
                this.treasureBox.addChild(treasure);
                //随机位置
                treasure.pos(2560, Math.random() * 1000);
            }
        }
    }
}