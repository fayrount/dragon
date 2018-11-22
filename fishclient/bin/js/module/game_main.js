var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var game_main = /** @class */ (function (_super) {
        __extends(game_main, _super);
        function game_main() {
            var _this = _super.call(this) || this;
            _this.m_curtime = 0;
            _this.m_roleid = 0;
            _this.m_itemlist = new Array();
            return _this;
        }
        game_main.prototype.start = function () {
            _super.prototype.start.call(this);
            core.game_tiplog('game_main start');
            this.m_ui_sp = new laya.display.Sprite();
            utils.widget_ins().set_root(this.m_ui_sp);
            Laya.stage.addChild(this.m_ui_sp);
            this.register_net_event(protocol_def.S2C_NOTIFY_MESSAGE, this.on_svr_messagebox);
            this.register_net_event(protocol_def.S2C_WEBSOCKET_HELLO, this.on_svr_notify);
            this.register_net_event(protocol_def.S2C_LOGIN, this.on_login_err);
            this.register_net_event(protocol_def.S2C_LOGIN_OK, this.on_login_ok);
            this.register_net_event(protocol_def.S2C_LOGIN_RELOGIN, this.on_relogin);
            this.register_net_event(protocol_def.S2C_NOTIFY_FLOAT, this.on_notifyfloat);
            this.register_net_event(protocol_def.S2C_LOGIN_SELECTROLE, this.on_selectrole);
            this.register_net_event(protocol_def.S2C_LOGIN_ROLEINFO, this.on_roleid);
            this.register_net_event(protocol_def.S2C_ROLE_INFO, this.on_get_roleinfo);
            this.register_net_event(protocol_def.S2C_ITEM_LIST, this.on_get_itemlist);
            utils.widget_ins().show_widget(widget_enum.WIDGET_MAINUI, true);
            this.register_event(game_event.EVENT_NET_CONNECTED, this.on_net_connected);
            this.register_event(game_event.EVENT_NET_CLOSED, this.on_net_closed);
            this.register_event(game_event.EVENT_NET_ERROR, this.on_net_error);
            this.register_event(game_event.EVENT_TEST, this.on_testfunc);
            this.register_event(game_event.EVENT_TEST1, this.on_testfunc1);
            this.register_event(game_event.EVENT_TEST2, this.on_testfunc2);
            this.register_event(game_event.EVENT_TEST3, this.on_testfunc3);
            net.net_ins().connect("123.207.239.21", 11009);
            var i = config.Item.get_Item(1001);
            var shape = i["shape"];
        };
        game_main.prototype.on_net_error = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_net_error");
        };
        game_main.prototype.on_net_closed = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_net_closed");
        };
        game_main.prototype.on_net_connected = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_net_connected");
            var ld = {};
            ld["clientver"] = { "major": 0, "minor": 0, "patch": 0 };
            ld["scriptver"] = { "major": 0, "minor": 0, "patch": 0 };
            ld["productver"] = { "major": 0, "minor": 0, "patch": 0 };
            ld["account"] = "mytesta";
            ld["pwd"] = "112233";
            ld["platform"] = 0;
            ld["client_type"] = 0;
            ld["device"] = "";
            ld["ret_session"] = 0;
            ld["token"] = "";
            ld["hwinfo"] = "";
            ld["idfa"] = "";
            net.net_ins().send(protocol_def.C2S_LOGIN, ld);
        };
        game_main.prototype.on_notifyfloat = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_notifyfloat ", ud);
        };
        game_main.prototype.on_relogin = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_relogin ", ud);
        };
        game_main.prototype.on_login_ok = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_login_ok ", ud);
        };
        game_main.prototype.on_testfunc2 = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_testfunc2 move item", ud);
            if (this.m_itemlist.length > 1) {
                var item = this.m_itemlist[1];
                var dstpos = 2;
                net.net_ins().send(protocol_def.C2S_ITEM_MOVE, { "id": item['id'], "dstpos": dstpos });
            }
        };
        game_main.prototype.on_testfunc3 = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_testfunc3 buyitem", ud);
            net.net_ins().send(protocol_def.C2S_ITEM_BUY, { "id": 1001 });
        };
        game_main.prototype.on_testfunc1 = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_testfunc1 refresh", ud);
            net.net_ins().send(protocol_def.C2S_ROLE_INFO, {});
            net.net_ins().send(protocol_def.C2S_ITEM_GETLIST, {});
        };
        game_main.prototype.on_testfunc = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("haha,i get event from main_ui");
            console.log("on_testfunc useitem", ud);
            //net.net_ins().send(protocol_def.C2S_CHAT_GM,{"msg":"addgold 10000"});
            if (this.m_itemlist.length > 0) {
                var item = this.m_itemlist[0];
                net.net_ins().send(protocol_def.C2S_ITEM_USE, { "id": item['id'], "amount": 1 });
            }
        };
        game_main.prototype.on_roleid = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_roleinfo ", ud);
            var roleid = ud["roles"][0]["rid"];
            console.log("request select ", roleid);
            net.net_ins().send(protocol_def.C2S_LOGIN_SELECTROLE, { "rid": roleid });
            this.m_roleid = roleid;
        };
        game_main.prototype.on_get_itemlist = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_get_itemlist ", ud);
            var items = ud['items'];
            this.m_itemlist = new Array();
            var idx = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var i = items_1[_i];
                var id = i['id'];
                var shape = i['sid'];
                var pos = i['pos'];
                var used = i['key'];
                console.log("item:", idx, id, shape, pos, used);
                idx += 1;
                this.m_itemlist.push(i);
            }
        };
        game_main.prototype.on_get_roleinfo = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_get_roleinfo ", ud);
            var lv = ud['lv'];
            var gold = ud['gold'];
            var goldspd = ud['goldspd'];
            var tm = ud['tm'];
            console.log("info:", lv, gold, goldspd, tm);
        };
        game_main.prototype.on_selectrole = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_selectrole ", ud);
            net.net_ins().send(protocol_def.C2S_ROLE_INFO, {});
            net.net_ins().send(protocol_def.C2S_ITEM_GETLIST, {});
        };
        game_main.prototype.on_login_err = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_login_err ", ud);
        };
        game_main.prototype.on_svr_notify = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("on_svr_notify ", ud);
        };
        game_main.prototype.on_svr_messagebox = function (ud) {
            if (ud === void 0) { ud = null; }
        };
        game_main.prototype.update10 = function () {
            utils.event_ins().dispatch_all_delay_event();
            net.net_ins().update();
        };
        game_main.prototype.update1 = function () {
            //utils.widget_ins().check_release();
        };
        game_main.prototype.update = function (d) {
            this.update10();
            //
        };
        game_main.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return game_main;
    }(utils.game_module));
    game.game_main = game_main;
})(game || (game = {}));
//# sourceMappingURL=game_main.js.map