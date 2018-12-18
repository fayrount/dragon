/**
 * 海域场景类
 */
class SeaArea extends Laya.Sprite {
    private pet: Pet;

    private roleBox: Laya.Sprite;

    constructor(public icon: Laya.Animation, public description: string, public backGround: BackGround) {
        super();
        
        this.addChild(backGround);

        //创建角色容器
        this.roleBox = new Laya.Sprite();
        //添加到舞台上
        this.addChild(this.roleBox);
    }
    
    public addPet(pet: Pet){
        this.pet = pet;
        this.roleBox.addChildAt(pet, 0);
        this.pet.pos(50, 300);
    }

    public onLoop() {
        this.backGround.onLoop();
        this.checkHit();
        this.createTreasures();
    }

    public reset() {
        if (this.pet) {
            this.pet.removeSelf();
        }
        
        for (let i: number = this.roleBox.numChildren - 1; i >= 0; i--) {
            //获取角色对象
            let treasure: Treasure = this.roleBox.getChildAt(i) as Treasure;
            treasure.removeSelf();
            treasure.recover();
        }
        this.removeSelf();
    }

    private checkHit() {
        //检测碰撞
        let n: number = this.roleBox.numChildren;
        for (let i: number = this.roleBox.numChildren - 1; i > 0; i--) {
            //获取角色对象
            let treasure: Treasure = this.roleBox.getChildAt(i) as Treasure;

            treasure.x -= treasure.speed;
            
            if (treasure.getBounds().intersects(this.pet.getBounds())) {
                this.onHit(treasure);
            }
        }
    }

    private onHit(treasure: Treasure): void {
        UIManager.getInstance().mainView.addGold(treasure.gold);
        treasure.removeSelf();
        treasure.recover();
    }

    private createTreasures() {
        let numUp = 1;
        let speedUp = 1;

        //生成小珍宝
        if (Laya.timer.currFrame % 80 === 0) {
            this.createTreasuresInternal(0, numUp, speedUp);
        }

        //生成中珍宝
        if (Laya.timer.currFrame % 150 === 0) {
            this.createTreasuresInternal(1, numUp, speedUp);
        }

        //生成大珍宝
        if (Laya.timer.currFrame % 900 === 0) {
            this.createTreasuresInternal(2, 1, speedUp);
        }
    }

    private createTreasuresInternal(type: number, num: number, speed: number) {
        for (let i: number = 0; i < num; i++) {
            //创建珍宝
            let treasure: Treasure = Treasure.createTreasure(type);
            //添加到舞台
            this.roleBox.addChild(treasure);
            //随机位置
            treasure.pos(852, Math.random() * 480);
        }
    }
}