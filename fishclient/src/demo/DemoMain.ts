/**
* Game
*/
class DemoMain {
    constructor() {
        //初始化引擎，设置游戏设计宽高，并且打开WebGL模式
        Laya.init(852, 480, Laya.WebGL);
        //加载资源
        var assets: Array<any> = [];
		assets.push({ url: "res/atlas/demo.atlas", type: Laya.Loader.ATLAS });
		assets.push({ url: "ui.json", type: Laya.Loader.JSON });

        Laya.loader.load(assets, Laya.Handler.create(this, this.onLoaded));

        //设置适配模式
        Laya.stage.scaleMode = "showall";
        //设置剧中对齐
        Laya.stage.alignH = "center";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
    }

    onLoaded(): void {
        Laya.View.uiMap = Laya.loader.getRes("ui.json");

        DataManager.getInstance();
        Laya.stage.addChild(UIManager.getInstance().mainView);

        //开始
        this.restart();
    }

    onLoop(): void {
        UIManager.getInstance().mainView.onLoop();
    }

    restart(): void {
        //重置游戏数据
        this.resume();
    }

    /**暂停 */
    public pause(): void {
        //停止游戏主循环
        Laya.timer.clear(this, this.onLoop);
    }

    /**恢复 */
    public resume(): void {
        //创建游戏主循环
        Laya.timer.frameLoop(1, this, this.onLoop);
    }
}