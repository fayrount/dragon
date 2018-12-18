/**
 * 玩家控制的宠物精灵类
 */
class Pet extends Laya.Sprite {
    //定义宠物的身体
    private body: Laya.Image;
    //定义宠物类型
    public petKind: number;
    //速度
    public speed: number;

    constructor() {
        super();
        
        this.body = new Laya.Image();
        this.body.skin = "demo/pet.png";

        this.body.width = 60;
        this.body.height = 60;

        this.addChild(this.body);
        
        this.autoSize = true;
    }

    public init(petKind: number, speed: number): void {
        //初始化角色属性
        this.petKind = petKind;
        this.speed = speed;
    }
}