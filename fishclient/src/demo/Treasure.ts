/**
 * 珍宝类
 */
class Treasure extends Laya.Sprite {
    public static Treasure_Pool_Sign = "treasure";

    // 珍宝种类
    public treasureKind: number;

    // 移动速度
    public speed: number;

    // 珍宝价值
    public gold: number;

    // 图像
    public image: Laya.Image;

    constructor() {
        super();

        this.image = new Laya.Image;

        this.addChild(this.image);

        this.autoSize = true;

        this.image.width = 120;
        this.image.height = 120;
    }

    // 根据珍宝种类创建实例
    public static createTreasure(treasureKind: number): Treasure {
        let treasure: Treasure = Laya.Pool.getItemByClass(Treasure.Treasure_Pool_Sign, Treasure);
        
        treasure.gold = (treasureKind + 1) * 10;
        treasure.speed = 1;
        treasure.image.skin = "demo/t" + treasureKind + ".png";
        return treasure;
    }

    // 回归对象池
    public recover(): void {
        Laya.Pool.recover(Treasure.Treasure_Pool_Sign, this);
    }
}