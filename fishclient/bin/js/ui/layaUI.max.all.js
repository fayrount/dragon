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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var game;
    (function (game) {
        var main_uiUI = /** @class */ (function (_super) {
            __extends(main_uiUI, _super);
            function main_uiUI() {
                return _super.call(this) || this;
            }
            main_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_ui");
            };
            return main_uiUI;
        }(Dialog));
        game.main_uiUI = main_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map