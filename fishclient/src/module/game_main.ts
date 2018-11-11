module game{
    export class game_main extends utils.game_module{
        public m_ui_sp:laya.display.Sprite;
        private m_curtime:number = 0;
        private m_roleid:number = 0;
        private m_itemlist:Array<Object> = new Array<Object>();
        constructor()
        {
            super();
            
        }
        public start(){
            super.start();
            core.game_tiplog('game_main start');
            this.m_ui_sp = new laya.display.Sprite();

            utils.widget_ins().set_root(this.m_ui_sp);

            Laya.stage.addChild(this.m_ui_sp);

            this.register_net_event(protocol_def.S2C_NOTIFY_MESSAGE,this.on_svr_messagebox);
            this.register_net_event(protocol_def.S2C_WEBSOCKET_HELLO,this.on_svr_notify);
            this.register_net_event(protocol_def.S2C_LOGIN,this.on_login_err);
            this.register_net_event(protocol_def.S2C_LOGIN_OK,this.on_login_ok);
            this.register_net_event(protocol_def.S2C_LOGIN_RELOGIN,this.on_relogin);
            this.register_net_event(protocol_def.S2C_NOTIFY_FLOAT,this.on_notifyfloat);
            this.register_net_event(protocol_def.S2C_LOGIN_SELECTROLE,this.on_selectrole);
            this.register_net_event(protocol_def.S2C_LOGIN_ROLEINFO,this.on_roleid);
            this.register_net_event(protocol_def.S2C_ROLE_INFO,this.on_get_roleinfo);
            this.register_net_event(protocol_def.S2C_ITEM_LIST,this.on_get_itemlist);
            utils.widget_ins().show_widget(widget_enum.WIDGET_MAINUI,true);
            this.register_event(game_event.EVENT_NET_CONNECTED,this.on_net_connected);
            this.register_event(game_event.EVENT_NET_CLOSED,this.on_net_closed);
            this.register_event(game_event.EVENT_NET_ERROR,this.on_net_error);
            this.register_event(game_event.EVENT_TEST,this.on_testfunc);
            this.register_event(game_event.EVENT_TEST1,this.on_testfunc1);
            this.register_event(game_event.EVENT_TEST2,this.on_testfunc2);
            this.register_event(game_event.EVENT_TEST3,this.on_testfunc3);


            net.net_ins().connect("123.207.239.21",11009);
        }
        private on_net_error(ud:any = null):void{
            console.log("on_net_error");
        }
        private on_net_closed(ud:any = null):void{
            console.log("on_net_closed");
        }
        private on_net_connected(ud:any = null):void{
            console.log("on_net_connected");
            let ld:Object = {};
            ld["clientver"] = {"major":0,"minor":0,"patch":0};
            ld["scriptver"] = {"major":0,"minor":0,"patch":0};
            ld["productver"] = {"major":0,"minor":0,"patch":0};
            ld["account"] = "mytesta";
            ld["pwd"] = "112233";
            ld["platform"] = 0;
            ld["client_type"] = 0;
            ld["device"] = "";
            ld["ret_session"] = 0;
            ld["token"] = "";
            ld["hwinfo"] = "";
            ld["idfa"] = "";
            net.net_ins().send(protocol_def.C2S_LOGIN,ld);
        }
        private on_notifyfloat(ud:any = null):void{
            console.log("on_notifyfloat ",ud);
        }
        private on_relogin(ud:any = null):void
        {
            console.log("on_relogin ",ud);
        }
        private on_login_ok(ud:any = null):void{
            console.log("on_login_ok ",ud);
        }
        private on_testfunc2(ud:any = null):void{
            console.log("on_testfunc2 move item",ud);
            if(this.m_itemlist.length > 1){
                let item:Object = this.m_itemlist[1];
                let dstpos:number = 2;
                net.net_ins().send(protocol_def.C2S_ITEM_MOVE,{"id":item['id'],"dstpos":dstpos});
            }
        }
        private on_testfunc3(ud:any = null):void{
            console.log("on_testfunc3 buyitem",ud);
            net.net_ins().send(protocol_def.C2S_ITEM_BUY,{"id":1001});
        }
        private on_testfunc1(ud:any = null):void{
            console.log("on_testfunc1 refresh",ud);
            net.net_ins().send(protocol_def.C2S_ROLE_INFO,{});
            net.net_ins().send(protocol_def.C2S_ITEM_GETLIST,{});
        }
        private on_testfunc(ud:any = null):void{
            console.log("on_testfunc useitem",ud);
            //net.net_ins().send(protocol_def.C2S_CHAT_GM,{"msg":"addgold 10000"});
            if(this.m_itemlist.length > 0){
                let item:Object = this.m_itemlist[0];
                net.net_ins().send(protocol_def.C2S_ITEM_USE,{"id":item['id'],"amount":1});
            }
        }
        private on_roleid(ud:any = null):void{
            console.log("on_roleinfo ",ud);
            let roleid:number = ud["roles"][0]["rid"];
            console.log("request select ",roleid);
            net.net_ins().send(protocol_def.C2S_LOGIN_SELECTROLE,{"rid":roleid});
            this.m_roleid = roleid;
        }
        private on_get_itemlist(ud:any = null):void{
            console.log("on_get_itemlist ",ud);
            let items:Array<Object> = ud['items'];
            this.m_itemlist = new Array<Object>();
            let idx:number = 0;
            for(let i of items){
                let id:number = i['id'];
                let shape:number = i['sid'];
                let pos:number = i['pos'];
                let used:number = i['key'];
                console.log("item:",idx,id,shape,pos,used);
                idx += 1;
                this.m_itemlist.push(i);
            }
        }
        private on_get_roleinfo(ud:any = null):void{
            console.log("on_get_roleinfo ",ud);
            let lv:number = ud['lv'];
            let gold:number = ud['gold'];
            let goldspd:number = ud['goldspd'];
            let tm:number = ud['tm'];
            console.log("info:",lv,gold,goldspd,tm);
        }
        private on_selectrole(ud:any = null):void{
            console.log("on_selectrole ",ud);
            net.net_ins().send(protocol_def.C2S_ROLE_INFO,{});
            net.net_ins().send(protocol_def.C2S_ITEM_GETLIST,{});
        }
        private on_login_err(ud:any = null):void{
            console.log("on_login_err ",ud);
        }
        private on_svr_notify(ud:any = null):void{
            console.log("on_svr_notify ",ud);
        }
        private on_svr_messagebox(ud:any = null):void{

        }

        public update10():void{
            utils.event_ins().dispatch_all_delay_event();
            net.net_ins().update();
        }
        public update1():void{
            //utils.widget_ins().check_release();
        }
        public update(d:number):void
        {
            this.update10();
            //
            
        }
        public dispose()
        {
            super.dispose();
        }
    }
}