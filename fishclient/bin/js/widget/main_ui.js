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
var widget;
(function (widget) {
    var main_ui = /** @class */ (function (_super) {
        __extends(main_ui, _super);
        function main_ui() {
            var _this = _super.call(this, "res/atlas/mainui.atlas", ui.game.main_uiUI) || this;
            _this.UIins = null;
            _this.append_extrares("res/atlas/ui.atlas", Laya.Loader.ATLAS);
            _this.append_extrares("res/atlas/ui/sys.atlas", Laya.Loader.ATLAS);
            _this.append_extrares("bigpic/mainuibg.png", Laya.Loader.IMAGE);
            _this.m_layer = utils.WIDGET_LAYER.NORMAL;
            return _this;
        }
        main_ui.prototype.on_init = function () {
        };
        main_ui.prototype.on_show = function (flag) {
            if (flag) {
                this.UIins = this.m_ui;
                this.UIins.btn1.on(Laya.Event.CLICK, this, this.on_battle);
                this.UIins.btn2.on(Laya.Event.CLICK, this, this.on_maincity);
                this.UIins.btn3.on(Laya.Event.CLICK, this, this.on_mainequip);
                this.UIins.btn4.on(Laya.Event.CLICK, this, this.on_add);
                this.UIins.btn5.on(Laya.Event.CLICK, this, this.on_partner);
                this.UIins.btn6.on(Laya.Event.CLICK, this, this.on_summon);
                this.UIins.y = Laya.stage.designHeight - this.UIins.height;
                this.register_event(game_event.EVENT_UI_MAINUPDATE, this.on_update_data);
            }
            else {
                this.UIins.btn1.off(Laya.Event.CLICK, this, this.on_battle);
                this.UIins.btn2.off(Laya.Event.CLICK, this, this.on_maincity);
                this.UIins.btn3.off(Laya.Event.CLICK, this, this.on_mainequip);
                this.UIins.btn4.off(Laya.Event.CLICK, this, this.on_add);
                this.UIins.btn5.off(Laya.Event.CLICK, this, this.on_partner);
                this.UIins.btn6.off(Laya.Event.CLICK, this, this.on_summon);
                this.unregister_allevent();
                this.UIins = null;
            }
        };
        main_ui.prototype.on_update_data = function (ud) {
            if (ud === void 0) { ud = null; }
            var exp = ud[0];
            var expmax = ud[1];
            var rate = exp / expmax;
            this.UIins.pgbar.value = rate;
            this.UIins.lab_exp.changeText((rate * 100).toFixed(2) + "%");
        };
        main_ui.prototype.on_battle = function (ud) {
            if (ud === void 0) { ud = null; }
        };
        main_ui.prototype.on_maincity = function (ud) {
            if (ud === void 0) { ud = null; }
            console.log("hahahaha");
            this.fire_event_next_frame(game_event.EVENT_TEST);
        };
        main_ui.prototype.on_mainequip = function (ud) {
            if (ud === void 0) { ud = null; }
            this.fire_event_next_frame(game_event.EVENT_TEST1);
        };
        main_ui.prototype.on_add = function (ud) {
            if (ud === void 0) { ud = null; }
        };
        main_ui.prototype.on_partner = function (ud) {
            if (ud === void 0) { ud = null; }
            this.fire_event_next_frame(game_event.EVENT_TEST2);
        };
        main_ui.prototype.on_summon = function (ud) {
            if (ud === void 0) { ud = null; }
            this.fire_event_next_frame(game_event.EVENT_TEST3);
        };
        main_ui.prototype.on_dispose = function () {
        };
        main_ui.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return main_ui;
    }(utils.game_widget));
    widget.main_ui = main_ui;
})(widget || (widget = {}));
//# sourceMappingURL=main_ui.js.map