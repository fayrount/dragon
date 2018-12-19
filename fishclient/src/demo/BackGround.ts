/**
 * 循环滚动的游戏背景
 */
class BackGround extends ui.demo.BackGroundUI {
    constructor(img: string) {
        super();

        this.bg.skin = img;
    }

    onLoop(): void {
        //背景容器每帧向下移动1像素
        this.x -= 1;

        //如果背景图到了下面不可见，立即调整位置到上面循环显示
        if (this.x <= -852) {
            this.x = 0;
        }
    }
}