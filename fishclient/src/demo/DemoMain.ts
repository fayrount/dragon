/**
* Game
*/
class DemoMain {
    private m_game_start:boolean = false;
    private m_game_loading:ui.game.game_loadingUI = null;
    private m_gamemain_ins:game.demo_main = null;

    constructor()
    {
        Laya.init(2560,1440,Laya.WebGL);
        Laya.Stat.show(0,0);

        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        
        Laya.timer.frameLoop(1,this,this.onframeloop);
        core.set_log_module(core.log_module_enum.MODULE_ALL);
        core.set_log_level(core.log_level_enum.LOG_TIPS);
        this.load_loadingres();
    }

    private load_loadingres():void{
        core.game_tiplog("start load_loadingres");
        let assets: Array<any> = [];
        assets.push({ url: "bigpic/LOGO.png", type: Laya.Loader.IMAGE });
        assets.push({ url: "bigpic/防沉迷信息.png", type: Laya.Loader.IMAGE });
        assets.push({ url: "bigpic/background.jpg", type: Laya.Loader.IMAGE });
        assets.push({ url: "res/atlas/loading.atlas", type: Laya.Loader.ATLAS });
        assets.push({ url: "res/atlas/ani_res/uiloading.atlas", type: Laya.Loader.ATLAS });
        for(let i of assets){
            utils.widget_ins().add_preload_res(i["url"]);
        }
        core.myload(assets, laya.utils.Handler.create(this, this.on_load_loadingres));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
    }

    private on_load_loadingres():void{
        core.game_tiplog("start on_load_loadingres");
        Laya.loader.off(Laya.Event.ERROR, this, this.onError);
        
        this.m_game_loading = new ui.game.game_loadingUI();
        Laya.stage.addChild(this.m_game_loading);
        this.start_preload();
    }

    private on_load_loadingresprogress(v:number):void{
        this.m_game_loading.set_progress(v);
    }
    private start_preload():void{
        var assets: Array<any> = [];
        assets.push({ url: "ui.json", type: Laya.Loader.JSON });
        assets.push({ url: "config.json", type: Laya.Loader.JSON });
        //
        for(let i of assets){
            utils.widget_ins().add_preload_res(i["url"]);
        }
        core.myload(assets, laya.utils.Handler.create(this, this.on_preload),laya.utils.Handler.create(this, this.on_load_loadingresprogress,null,false));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
    }

    private on_preload():void{
        this.m_game_loading.removeSelf();
        this.m_game_loading = null;

        Laya.View.uiMap = Laya.loader.getRes("ui.json");
        let config_json:Object = Laya.loader.getRes("config.json");
        config.config_init(config_json);
        Laya.loader.off(Laya.Event.ERROR, this, this.onError);
        //
        protocol_def.register_cmd(protocol_def.C2S_CMD_2_PROTODESC,protocol_def.S2C_CMD_2_PROTODESC);
        protocol_def.register_protocol_desc(protocol_def.Protocol_desc);
        net.my_svr(true);
        //net.net_ins().connect()
        //net.net_ins().send()

        data.init_data_module();
        widget.init_game_widget();
        game.init_game_module();
        this.m_game_start = true;
        this.m_gamemain_ins = game.get_module(module_enum.MODULE_DEMO_MAIN) as game.demo_main;
        this.m_gamemain_ins.start();
    }

    private onError(err: String): void {
        core.game_tiplog("加载失败: ",err);
        console.log("game preload failed! "+err);
        //alert("game preload failed! "+err);
    }

    private onframeloop():void
    {
        if(!this.m_game_start){
            return;
        }
        this.m_gamemain_ins.update(0);
    }
}