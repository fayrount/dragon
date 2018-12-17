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
        var accountinputUI = /** @class */ (function (_super) {
            __extends(accountinputUI, _super);
            function accountinputUI() {
                return _super.call(this) || this;
            }
            accountinputUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/accountinput");
            };
            return accountinputUI;
        }(Dialog));
        game.accountinputUI = accountinputUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var activity_uiUI = /** @class */ (function (_super) {
            __extends(activity_uiUI, _super);
            function activity_uiUI() {
                return _super.call(this) || this;
            }
            activity_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/activity_ui");
            };
            return activity_uiUI;
        }(Dialog));
        game.activity_uiUI = activity_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var answer_uiUI = /** @class */ (function (_super) {
            __extends(answer_uiUI, _super);
            function answer_uiUI() {
                return _super.call(this) || this;
            }
            answer_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/answer_ui");
            };
            return answer_uiUI;
        }(Dialog));
        game.answer_uiUI = answer_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var arena_buyUI = /** @class */ (function (_super) {
            __extends(arena_buyUI, _super);
            function arena_buyUI() {
                return _super.call(this) || this;
            }
            arena_buyUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/arena_buy");
            };
            return arena_buyUI;
        }(Dialog));
        game.arena_buyUI = arena_buyUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var arena_historyUI = /** @class */ (function (_super) {
            __extends(arena_historyUI, _super);
            function arena_historyUI() {
                return _super.call(this) || this;
            }
            arena_historyUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/arena_history");
            };
            return arena_historyUI;
        }(Dialog));
        game.arena_historyUI = arena_historyUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var arena_rankUI = /** @class */ (function (_super) {
            __extends(arena_rankUI, _super);
            function arena_rankUI() {
                return _super.call(this) || this;
            }
            arena_rankUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/arena_rank");
            };
            return arena_rankUI;
        }(Dialog));
        game.arena_rankUI = arena_rankUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var arena_resultUI = /** @class */ (function (_super) {
            __extends(arena_resultUI, _super);
            function arena_resultUI() {
                return _super.call(this) || this;
            }
            arena_resultUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/arena_result");
            };
            return arena_resultUI;
        }(Dialog));
        game.arena_resultUI = arena_resultUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var arena_uiUI = /** @class */ (function (_super) {
            __extends(arena_uiUI, _super);
            function arena_uiUI() {
                return _super.call(this) || this;
            }
            arena_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/arena_ui");
            };
            return arena_uiUI;
        }(Dialog));
        game.arena_uiUI = arena_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var avatar_testUI = /** @class */ (function (_super) {
            __extends(avatar_testUI, _super);
            function avatar_testUI() {
                return _super.call(this) || this;
            }
            avatar_testUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/avatar_test");
            };
            return avatar_testUI;
        }(Dialog));
        game.avatar_testUI = avatar_testUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var bag_testUI = /** @class */ (function (_super) {
            __extends(bag_testUI, _super);
            function bag_testUI() {
                return _super.call(this) || this;
            }
            bag_testUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/bag_test");
            };
            return bag_testUI;
        }(Dialog));
        game.bag_testUI = bag_testUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var bag_uiUI = /** @class */ (function (_super) {
            __extends(bag_uiUI, _super);
            function bag_uiUI() {
                return _super.call(this) || this;
            }
            bag_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/bag_ui");
            };
            return bag_uiUI;
        }(Dialog));
        game.bag_uiUI = bag_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var boon_hallUI = /** @class */ (function (_super) {
            __extends(boon_hallUI, _super);
            function boon_hallUI() {
                return _super.call(this) || this;
            }
            boon_hallUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/boon_hall");
            };
            return boon_hallUI;
        }(Dialog));
        game.boon_hallUI = boon_hallUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var boss_godx_uiUI = /** @class */ (function (_super) {
            __extends(boss_godx_uiUI, _super);
            function boss_godx_uiUI() {
                return _super.call(this) || this;
            }
            boss_godx_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/boss_godx_ui");
            };
            return boss_godx_uiUI;
        }(Dialog));
        game.boss_godx_uiUI = boss_godx_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var boss_remindUI = /** @class */ (function (_super) {
            __extends(boss_remindUI, _super);
            function boss_remindUI() {
                return _super.call(this) || this;
            }
            boss_remindUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/boss_remind");
            };
            return boss_remindUI;
        }(Dialog));
        game.boss_remindUI = boss_remindUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var boss_remind_itemUI = /** @class */ (function (_super) {
            __extends(boss_remind_itemUI, _super);
            function boss_remind_itemUI() {
                return _super.call(this) || this;
            }
            boss_remind_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/boss_remind_item");
            };
            return boss_remind_itemUI;
        }(Dialog));
        game.boss_remind_itemUI = boss_remind_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var boss_uiUI = /** @class */ (function (_super) {
            __extends(boss_uiUI, _super);
            function boss_uiUI() {
                return _super.call(this) || this;
            }
            boss_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/boss_ui");
            };
            return boss_uiUI;
        }(Dialog));
        game.boss_uiUI = boss_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var cb_damage_rankUI = /** @class */ (function (_super) {
            __extends(cb_damage_rankUI, _super);
            function cb_damage_rankUI() {
                return _super.call(this) || this;
            }
            cb_damage_rankUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/cb_damage_rank");
            };
            return cb_damage_rankUI;
        }(Dialog));
        game.cb_damage_rankUI = cb_damage_rankUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var cb_dam_rank_itemUI = /** @class */ (function (_super) {
            __extends(cb_dam_rank_itemUI, _super);
            function cb_dam_rank_itemUI() {
                return _super.call(this) || this;
            }
            cb_dam_rank_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/cb_dam_rank_item");
            };
            return cb_dam_rank_itemUI;
        }(View));
        game.cb_dam_rank_itemUI = cb_dam_rank_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var cb_itemUI = /** @class */ (function (_super) {
            __extends(cb_itemUI, _super);
            function cb_itemUI() {
                return _super.call(this) || this;
            }
            cb_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/cb_item");
            };
            return cb_itemUI;
        }(Dialog));
        game.cb_itemUI = cb_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var cb_kill_recordUI = /** @class */ (function (_super) {
            __extends(cb_kill_recordUI, _super);
            function cb_kill_recordUI() {
                return _super.call(this) || this;
            }
            cb_kill_recordUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/cb_kill_record");
            };
            return cb_kill_recordUI;
        }(Dialog));
        game.cb_kill_recordUI = cb_kill_recordUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var cb_kill_record_itemUI = /** @class */ (function (_super) {
            __extends(cb_kill_record_itemUI, _super);
            function cb_kill_record_itemUI() {
                return _super.call(this) || this;
            }
            cb_kill_record_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/cb_kill_record_item");
            };
            return cb_kill_record_itemUI;
        }(Dialog));
        game.cb_kill_record_itemUI = cb_kill_record_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var cb_tips_boxUI = /** @class */ (function (_super) {
            __extends(cb_tips_boxUI, _super);
            function cb_tips_boxUI() {
                return _super.call(this) || this;
            }
            cb_tips_boxUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/cb_tips_box");
            };
            return cb_tips_boxUI;
        }(Dialog));
        game.cb_tips_boxUI = cb_tips_boxUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var change_nameUI = /** @class */ (function (_super) {
            __extends(change_nameUI, _super);
            function change_nameUI() {
                return _super.call(this) || this;
            }
            change_nameUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/change_name");
            };
            return change_nameUI;
        }(Dialog));
        game.change_nameUI = change_nameUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var channel_achievingUI = /** @class */ (function (_super) {
            __extends(channel_achievingUI, _super);
            function channel_achievingUI() {
                return _super.call(this) || this;
            }
            channel_achievingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/channel_achieving");
            };
            return channel_achievingUI;
        }(Dialog));
        game.channel_achievingUI = channel_achievingUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var chapter_btnuiUI = /** @class */ (function (_super) {
            __extends(chapter_btnuiUI, _super);
            function chapter_btnuiUI() {
                return _super.call(this) || this;
            }
            chapter_btnuiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/chapter_btnui");
            };
            return chapter_btnuiUI;
        }(Dialog));
        game.chapter_btnuiUI = chapter_btnuiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var chapter_helpUI = /** @class */ (function (_super) {
            __extends(chapter_helpUI, _super);
            function chapter_helpUI() {
                return _super.call(this) || this;
            }
            chapter_helpUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/chapter_help");
            };
            return chapter_helpUI;
        }(Dialog));
        game.chapter_helpUI = chapter_helpUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var chapter_rewardUI = /** @class */ (function (_super) {
            __extends(chapter_rewardUI, _super);
            function chapter_rewardUI() {
                return _super.call(this) || this;
            }
            chapter_rewardUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/chapter_reward");
            };
            return chapter_rewardUI;
        }(Dialog));
        game.chapter_rewardUI = chapter_rewardUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var chapter_uiUI = /** @class */ (function (_super) {
            __extends(chapter_uiUI, _super);
            function chapter_uiUI() {
                return _super.call(this) || this;
            }
            chapter_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/chapter_ui");
            };
            return chapter_uiUI;
        }(Dialog));
        game.chapter_uiUI = chapter_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var chat_faceUI = /** @class */ (function (_super) {
            __extends(chat_faceUI, _super);
            function chat_faceUI() {
                return _super.call(this) || this;
            }
            chat_faceUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/chat_face");
            };
            return chat_faceUI;
        }(Dialog));
        game.chat_faceUI = chat_faceUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var chat_uiUI = /** @class */ (function (_super) {
            __extends(chat_uiUI, _super);
            function chat_uiUI() {
                return _super.call(this) || this;
            }
            chat_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/chat_ui");
            };
            return chat_uiUI;
        }(Dialog));
        game.chat_uiUI = chat_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var combat_boss_hpUI = /** @class */ (function (_super) {
            __extends(combat_boss_hpUI, _super);
            function combat_boss_hpUI() {
                return _super.call(this) || this;
            }
            combat_boss_hpUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/combat_boss_hp");
            };
            return combat_boss_hpUI;
        }(Dialog));
        game.combat_boss_hpUI = combat_boss_hpUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var combat_enterUI = /** @class */ (function (_super) {
            __extends(combat_enterUI, _super);
            function combat_enterUI() {
                return _super.call(this) || this;
            }
            combat_enterUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/combat_enter");
            };
            return combat_enterUI;
        }(Dialog));
        game.combat_enterUI = combat_enterUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var combat_loadingUI = /** @class */ (function (_super) {
            __extends(combat_loadingUI, _super);
            function combat_loadingUI() {
                return _super.call(this) || this;
            }
            combat_loadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/combat_loading");
            };
            return combat_loadingUI;
        }(Dialog));
        game.combat_loadingUI = combat_loadingUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var combat_roundDetail_uiUI = /** @class */ (function (_super) {
            __extends(combat_roundDetail_uiUI, _super);
            function combat_roundDetail_uiUI() {
                return _super.call(this) || this;
            }
            combat_roundDetail_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/combat_roundDetail_ui");
            };
            return combat_roundDetail_uiUI;
        }(Dialog));
        game.combat_roundDetail_uiUI = combat_roundDetail_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var combat_round_uiUI = /** @class */ (function (_super) {
            __extends(combat_round_uiUI, _super);
            function combat_round_uiUI() {
                return _super.call(this) || this;
            }
            combat_round_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/combat_round_ui");
            };
            return combat_round_uiUI;
        }(Dialog));
        game.combat_round_uiUI = combat_round_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var combat_skipUI = /** @class */ (function (_super) {
            __extends(combat_skipUI, _super);
            function combat_skipUI() {
                return _super.call(this) || this;
            }
            combat_skipUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/combat_skip");
            };
            return combat_skipUI;
        }(Dialog));
        game.combat_skipUI = combat_skipUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var common_bossUI = /** @class */ (function (_super) {
            __extends(common_bossUI, _super);
            function common_bossUI() {
                return _super.call(this) || this;
            }
            common_bossUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/common_boss");
            };
            return common_bossUI;
        }(Dialog));
        game.common_bossUI = common_bossUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var common_upgradeUI = /** @class */ (function (_super) {
            __extends(common_upgradeUI, _super);
            function common_upgradeUI() {
                return _super.call(this) || this;
            }
            common_upgradeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/common_upgrade");
            };
            return common_upgradeUI;
        }(Dialog));
        game.common_upgradeUI = common_upgradeUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var common_upgrade_itemUI = /** @class */ (function (_super) {
            __extends(common_upgrade_itemUI, _super);
            function common_upgrade_itemUI() {
                return _super.call(this) || this;
            }
            common_upgrade_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/common_upgrade_item");
            };
            return common_upgrade_itemUI;
        }(Dialog));
        game.common_upgrade_itemUI = common_upgrade_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var create_roleUI = /** @class */ (function (_super) {
            __extends(create_roleUI, _super);
            function create_roleUI() {
                return _super.call(this) || this;
            }
            create_roleUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/create_role");
            };
            return create_roleUI;
        }(Dialog));
        game.create_roleUI = create_roleUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var daily_300UI = /** @class */ (function (_super) {
            __extends(daily_300UI, _super);
            function daily_300UI() {
                return _super.call(this) || this;
            }
            daily_300UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/daily_300");
            };
            return daily_300UI;
        }(Dialog));
        game.daily_300UI = daily_300UI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var daily_depositUI = /** @class */ (function (_super) {
            __extends(daily_depositUI, _super);
            function daily_depositUI() {
                return _super.call(this) || this;
            }
            daily_depositUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/daily_deposit");
            };
            return daily_depositUI;
        }(Dialog));
        game.daily_depositUI = daily_depositUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var daily_fumoUI = /** @class */ (function (_super) {
            __extends(daily_fumoUI, _super);
            function daily_fumoUI() {
                return _super.call(this) || this;
            }
            daily_fumoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/daily_fumo");
            };
            return daily_fumoUI;
        }(Dialog));
        game.daily_fumoUI = daily_fumoUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var daily_pnyoUI = /** @class */ (function (_super) {
            __extends(daily_pnyoUI, _super);
            function daily_pnyoUI() {
                return _super.call(this) || this;
            }
            daily_pnyoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/daily_pnyo");
            };
            return daily_pnyoUI;
        }(Dialog));
        game.daily_pnyoUI = daily_pnyoUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var danyao_uiUI = /** @class */ (function (_super) {
            __extends(danyao_uiUI, _super);
            function danyao_uiUI() {
                return _super.call(this) || this;
            }
            danyao_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/danyao_ui");
            };
            return danyao_uiUI;
        }(Dialog));
        game.danyao_uiUI = danyao_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var deposit_rich_giftUI = /** @class */ (function (_super) {
            __extends(deposit_rich_giftUI, _super);
            function deposit_rich_giftUI() {
                return _super.call(this) || this;
            }
            deposit_rich_giftUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/deposit_rich_gift");
            };
            return deposit_rich_giftUI;
        }(Dialog));
        game.deposit_rich_giftUI = deposit_rich_giftUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_dan_uiUI = /** @class */ (function (_super) {
            __extends(develop_dan_uiUI, _super);
            function develop_dan_uiUI() {
                return _super.call(this) || this;
            }
            develop_dan_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_dan_ui");
            };
            return develop_dan_uiUI;
        }(Dialog));
        game.develop_dan_uiUI = develop_dan_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_mainUI = /** @class */ (function (_super) {
            __extends(develop_mainUI, _super);
            function develop_mainUI() {
                return _super.call(this) || this;
            }
            develop_mainUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_main");
            };
            return develop_mainUI;
        }(Dialog));
        game.develop_mainUI = develop_mainUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_prop_uiUI = /** @class */ (function (_super) {
            __extends(develop_prop_uiUI, _super);
            function develop_prop_uiUI() {
                return _super.call(this) || this;
            }
            develop_prop_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_prop_ui");
            };
            return develop_prop_uiUI;
        }(Dialog));
        game.develop_prop_uiUI = develop_prop_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_rankUI = /** @class */ (function (_super) {
            __extends(develop_rankUI, _super);
            function develop_rankUI() {
                return _super.call(this) || this;
            }
            develop_rankUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_rank");
            };
            return develop_rankUI;
        }(Dialog));
        game.develop_rankUI = develop_rankUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_rwdUI = /** @class */ (function (_super) {
            __extends(develop_rwdUI, _super);
            function develop_rwdUI() {
                return _super.call(this) || this;
            }
            develop_rwdUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_rwd");
            };
            return develop_rwdUI;
        }(Dialog));
        game.develop_rwdUI = develop_rwdUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_rwd_itemUI = /** @class */ (function (_super) {
            __extends(develop_rwd_itemUI, _super);
            function develop_rwd_itemUI() {
                return _super.call(this) || this;
            }
            develop_rwd_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_rwd_item");
            };
            return develop_rwd_itemUI;
        }(Dialog));
        game.develop_rwd_itemUI = develop_rwd_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_skillUI = /** @class */ (function (_super) {
            __extends(develop_skillUI, _super);
            function develop_skillUI() {
                return _super.call(this) || this;
            }
            develop_skillUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_skill");
            };
            return develop_skillUI;
        }(Dialog));
        game.develop_skillUI = develop_skillUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var develop_skinUI = /** @class */ (function (_super) {
            __extends(develop_skinUI, _super);
            function develop_skinUI() {
                return _super.call(this) || this;
            }
            develop_skinUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/develop_skin");
            };
            return develop_skinUI;
        }(Dialog));
        game.develop_skinUI = develop_skinUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var discount_shopUI = /** @class */ (function (_super) {
            __extends(discount_shopUI, _super);
            function discount_shopUI() {
                return _super.call(this) || this;
            }
            discount_shopUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/discount_shop");
            };
            return discount_shopUI;
        }(Dialog));
        game.discount_shopUI = discount_shopUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var discount_shop_itemUI = /** @class */ (function (_super) {
            __extends(discount_shop_itemUI, _super);
            function discount_shop_itemUI() {
                return _super.call(this) || this;
            }
            discount_shop_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/discount_shop_item");
            };
            return discount_shop_itemUI;
        }(Dialog));
        game.discount_shop_itemUI = discount_shop_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var equip_forgeUI = /** @class */ (function (_super) {
            __extends(equip_forgeUI, _super);
            function equip_forgeUI() {
                return _super.call(this) || this;
            }
            equip_forgeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/equip_forge");
            };
            return equip_forgeUI;
        }(Dialog));
        game.equip_forgeUI = equip_forgeUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var equip_inlayUI = /** @class */ (function (_super) {
            __extends(equip_inlayUI, _super);
            function equip_inlayUI() {
                return _super.call(this) || this;
            }
            equip_inlayUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/equip_inlay");
            };
            return equip_inlayUI;
        }(Dialog));
        game.equip_inlayUI = equip_inlayUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var equip_intensifyUI = /** @class */ (function (_super) {
            __extends(equip_intensifyUI, _super);
            function equip_intensifyUI() {
                return _super.call(this) || this;
            }
            equip_intensifyUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/equip_intensify");
            };
            return equip_intensifyUI;
        }(Dialog));
        game.equip_intensifyUI = equip_intensifyUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var equip_masterinfoUI = /** @class */ (function (_super) {
            __extends(equip_masterinfoUI, _super);
            function equip_masterinfoUI() {
                return _super.call(this) || this;
            }
            equip_masterinfoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/equip_masterinfo");
            };
            return equip_masterinfoUI;
        }(Dialog));
        game.equip_masterinfoUI = equip_masterinfoUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var equip_redineUI = /** @class */ (function (_super) {
            __extends(equip_redineUI, _super);
            function equip_redineUI() {
                return _super.call(this) || this;
            }
            equip_redineUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/equip_redine");
            };
            return equip_redineUI;
        }(Dialog));
        game.equip_redineUI = equip_redineUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var extend_bagUI = /** @class */ (function (_super) {
            __extends(extend_bagUI, _super);
            function extend_bagUI() {
                return _super.call(this) || this;
            }
            extend_bagUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/extend_bag");
            };
            return extend_bagUI;
        }(Dialog));
        game.extend_bagUI = extend_bagUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var failure_uiUI = /** @class */ (function (_super) {
            __extends(failure_uiUI, _super);
            function failure_uiUI() {
                return _super.call(this) || this;
            }
            failure_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/failure_ui");
            };
            return failure_uiUI;
        }(Dialog));
        game.failure_uiUI = failure_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fb_heavenUI = /** @class */ (function (_super) {
            __extends(fb_heavenUI, _super);
            function fb_heavenUI() {
                return _super.call(this) || this;
            }
            fb_heavenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fb_heaven");
            };
            return fb_heavenUI;
        }(Dialog));
        game.fb_heavenUI = fb_heavenUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fb_stuffUI = /** @class */ (function (_super) {
            __extends(fb_stuffUI, _super);
            function fb_stuffUI() {
                return _super.call(this) || this;
            }
            fb_stuffUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fb_stuff");
            };
            return fb_stuffUI;
        }(Dialog));
        game.fb_stuffUI = fb_stuffUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fb_towerUI = /** @class */ (function (_super) {
            __extends(fb_towerUI, _super);
            function fb_towerUI() {
                return _super.call(this) || this;
            }
            fb_towerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fb_tower");
            };
            return fb_towerUI;
        }(Dialog));
        game.fb_towerUI = fb_towerUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fb_treasureUI = /** @class */ (function (_super) {
            __extends(fb_treasureUI, _super);
            function fb_treasureUI() {
                return _super.call(this) || this;
            }
            fb_treasureUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fb_treasure");
            };
            return fb_treasureUI;
        }(Dialog));
        game.fb_treasureUI = fb_treasureUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fb_treasure_rwdUI = /** @class */ (function (_super) {
            __extends(fb_treasure_rwdUI, _super);
            function fb_treasure_rwdUI() {
                return _super.call(this) || this;
            }
            fb_treasure_rwdUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fb_treasure_rwd");
            };
            return fb_treasure_rwdUI;
        }(Dialog));
        game.fb_treasure_rwdUI = fb_treasure_rwdUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var first_pay_groupUI = /** @class */ (function (_super) {
            __extends(first_pay_groupUI, _super);
            function first_pay_groupUI() {
                return _super.call(this) || this;
            }
            first_pay_groupUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/first_pay_group");
            };
            return first_pay_groupUI;
        }(Dialog));
        game.first_pay_groupUI = first_pay_groupUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var first_player_bet_uiUI = /** @class */ (function (_super) {
            __extends(first_player_bet_uiUI, _super);
            function first_player_bet_uiUI() {
                return _super.call(this) || this;
            }
            first_player_bet_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/first_player_bet_ui");
            };
            return first_player_bet_uiUI;
        }(Dialog));
        game.first_player_bet_uiUI = first_player_bet_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var first_player_bgn_uiUI = /** @class */ (function (_super) {
            __extends(first_player_bgn_uiUI, _super);
            function first_player_bgn_uiUI() {
                return _super.call(this) || this;
            }
            first_player_bgn_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/first_player_bgn_ui");
            };
            return first_player_bgn_uiUI;
        }(Dialog));
        game.first_player_bgn_uiUI = first_player_bgn_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var first_player_end_uiUI = /** @class */ (function (_super) {
            __extends(first_player_end_uiUI, _super);
            function first_player_end_uiUI() {
                return _super.call(this) || this;
            }
            first_player_end_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/first_player_end_ui");
            };
            return first_player_end_uiUI;
        }(Dialog));
        game.first_player_end_uiUI = first_player_end_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var first_player_rpt_uiUI = /** @class */ (function (_super) {
            __extends(first_player_rpt_uiUI, _super);
            function first_player_rpt_uiUI() {
                return _super.call(this) || this;
            }
            first_player_rpt_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/first_player_rpt_ui");
            };
            return first_player_rpt_uiUI;
        }(Dialog));
        game.first_player_rpt_uiUI = first_player_rpt_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var first_player_uiUI = /** @class */ (function (_super) {
            __extends(first_player_uiUI, _super);
            function first_player_uiUI() {
                return _super.call(this) || this;
            }
            first_player_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/first_player_ui");
            };
            return first_player_uiUI;
        }(Dialog));
        game.first_player_uiUI = first_player_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_black_uiUI = /** @class */ (function (_super) {
            __extends(friend_black_uiUI, _super);
            function friend_black_uiUI() {
                return _super.call(this) || this;
            }
            friend_black_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_black_ui");
            };
            return friend_black_uiUI;
        }(Dialog));
        game.friend_black_uiUI = friend_black_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_chat_tipsUI = /** @class */ (function (_super) {
            __extends(friend_chat_tipsUI, _super);
            function friend_chat_tipsUI() {
                return _super.call(this) || this;
            }
            friend_chat_tipsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_chat_tips");
            };
            return friend_chat_tipsUI;
        }(Dialog));
        game.friend_chat_tipsUI = friend_chat_tipsUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_chat_uiUI = /** @class */ (function (_super) {
            __extends(friend_chat_uiUI, _super);
            function friend_chat_uiUI() {
                return _super.call(this) || this;
            }
            friend_chat_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_chat_ui");
            };
            return friend_chat_uiUI;
        }(Dialog));
        game.friend_chat_uiUI = friend_chat_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_coin_uiUI = /** @class */ (function (_super) {
            __extends(friend_coin_uiUI, _super);
            function friend_coin_uiUI() {
                return _super.call(this) || this;
            }
            friend_coin_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_coin_ui");
            };
            return friend_coin_uiUI;
        }(Dialog));
        game.friend_coin_uiUI = friend_coin_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_faceUI = /** @class */ (function (_super) {
            __extends(friend_faceUI, _super);
            function friend_faceUI() {
                return _super.call(this) || this;
            }
            friend_faceUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_face");
            };
            return friend_faceUI;
        }(Dialog));
        game.friend_faceUI = friend_faceUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_list_uiUI = /** @class */ (function (_super) {
            __extends(friend_list_uiUI, _super);
            function friend_list_uiUI() {
                return _super.call(this) || this;
            }
            friend_list_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_list_ui");
            };
            return friend_list_uiUI;
        }(Dialog));
        game.friend_list_uiUI = friend_list_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var friend_req_uiUI = /** @class */ (function (_super) {
            __extends(friend_req_uiUI, _super);
            function friend_req_uiUI() {
                return _super.call(this) || this;
            }
            friend_req_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/friend_req_ui");
            };
            return friend_req_uiUI;
        }(Dialog));
        game.friend_req_uiUI = friend_req_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fubenUI = /** @class */ (function (_super) {
            __extends(fubenUI, _super);
            function fubenUI() {
                return _super.call(this) || this;
            }
            fubenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fuben");
            };
            return fubenUI;
        }(Dialog));
        game.fubenUI = fubenUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fuli_xmdx_uiUI = /** @class */ (function (_super) {
            __extends(fuli_xmdx_uiUI, _super);
            function fuli_xmdx_uiUI() {
                return _super.call(this) || this;
            }
            fuli_xmdx_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fuli_xmdx_ui");
            };
            return fuli_xmdx_uiUI;
        }(Dialog));
        game.fuli_xmdx_uiUI = fuli_xmdx_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var fumo_bossUI = /** @class */ (function (_super) {
            __extends(fumo_bossUI, _super);
            function fumo_bossUI() {
                return _super.call(this) || this;
            }
            fumo_bossUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/fumo_boss");
            };
            return fumo_bossUI;
        }(Dialog));
        game.fumo_bossUI = fumo_bossUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_apply_listUI = /** @class */ (function (_super) {
            __extends(gang_apply_listUI, _super);
            function gang_apply_listUI() {
                return _super.call(this) || this;
            }
            gang_apply_listUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_apply_list");
            };
            return gang_apply_listUI;
        }(Dialog));
        game.gang_apply_listUI = gang_apply_listUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_bossUI = /** @class */ (function (_super) {
            __extends(gang_bossUI, _super);
            function gang_bossUI() {
                return _super.call(this) || this;
            }
            gang_bossUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_boss");
            };
            return gang_bossUI;
        }(Dialog));
        game.gang_bossUI = gang_bossUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_chgNameUI = /** @class */ (function (_super) {
            __extends(gang_chgNameUI, _super);
            function gang_chgNameUI() {
                return _super.call(this) || this;
            }
            gang_chgNameUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_chgName");
            };
            return gang_chgNameUI;
        }(Dialog));
        game.gang_chgNameUI = gang_chgNameUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_createUI = /** @class */ (function (_super) {
            __extends(gang_createUI, _super);
            function gang_createUI() {
                return _super.call(this) || this;
            }
            gang_createUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_create");
            };
            return gang_createUI;
        }(Dialog));
        game.gang_createUI = gang_createUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_fbitemUI = /** @class */ (function (_super) {
            __extends(gang_fbitemUI, _super);
            function gang_fbitemUI() {
                return _super.call(this) || this;
            }
            gang_fbitemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_fbitem");
            };
            return gang_fbitemUI;
        }(Dialog));
        game.gang_fbitemUI = gang_fbitemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_fubenUI = /** @class */ (function (_super) {
            __extends(gang_fubenUI, _super);
            function gang_fubenUI() {
                return _super.call(this) || this;
            }
            gang_fubenUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_fuben");
            };
            return gang_fubenUI;
        }(Dialog));
        game.gang_fubenUI = gang_fubenUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_incenseUI = /** @class */ (function (_super) {
            __extends(gang_incenseUI, _super);
            function gang_incenseUI() {
                return _super.call(this) || this;
            }
            gang_incenseUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_incense");
            };
            return gang_incenseUI;
        }(Dialog));
        game.gang_incenseUI = gang_incenseUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_listUI = /** @class */ (function (_super) {
            __extends(gang_listUI, _super);
            function gang_listUI() {
                return _super.call(this) || this;
            }
            gang_listUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_list");
            };
            return gang_listUI;
        }(Dialog));
        game.gang_listUI = gang_listUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_livelyUI = /** @class */ (function (_super) {
            __extends(gang_livelyUI, _super);
            function gang_livelyUI() {
                return _super.call(this) || this;
            }
            gang_livelyUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_lively");
            };
            return gang_livelyUI;
        }(Dialog));
        game.gang_livelyUI = gang_livelyUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_lively_rwdUI = /** @class */ (function (_super) {
            __extends(gang_lively_rwdUI, _super);
            function gang_lively_rwdUI() {
                return _super.call(this) || this;
            }
            gang_lively_rwdUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_lively_rwd");
            };
            return gang_lively_rwdUI;
        }(Dialog));
        game.gang_lively_rwdUI = gang_lively_rwdUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_lively_rwd_itemUI = /** @class */ (function (_super) {
            __extends(gang_lively_rwd_itemUI, _super);
            function gang_lively_rwd_itemUI() {
                return _super.call(this) || this;
            }
            gang_lively_rwd_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_lively_rwd_item");
            };
            return gang_lively_rwd_itemUI;
        }(Dialog));
        game.gang_lively_rwd_itemUI = gang_lively_rwd_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_mainUI = /** @class */ (function (_super) {
            __extends(gang_mainUI, _super);
            function gang_mainUI() {
                return _super.call(this) || this;
            }
            gang_mainUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_main");
            };
            return gang_mainUI;
        }(Dialog));
        game.gang_mainUI = gang_mainUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_map_back_btn_uiUI = /** @class */ (function (_super) {
            __extends(gang_map_back_btn_uiUI, _super);
            function gang_map_back_btn_uiUI() {
                return _super.call(this) || this;
            }
            gang_map_back_btn_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_map_back_btn_ui");
            };
            return gang_map_back_btn_uiUI;
        }(Dialog));
        game.gang_map_back_btn_uiUI = gang_map_back_btn_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_map_collect_uiUI = /** @class */ (function (_super) {
            __extends(gang_map_collect_uiUI, _super);
            function gang_map_collect_uiUI() {
                return _super.call(this) || this;
            }
            gang_map_collect_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_map_collect_ui");
            };
            return gang_map_collect_uiUI;
        }(Dialog));
        game.gang_map_collect_uiUI = gang_map_collect_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_map_col_btn_uiUI = /** @class */ (function (_super) {
            __extends(gang_map_col_btn_uiUI, _super);
            function gang_map_col_btn_uiUI() {
                return _super.call(this) || this;
            }
            gang_map_col_btn_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_map_col_btn_ui");
            };
            return gang_map_col_btn_uiUI;
        }(Dialog));
        game.gang_map_col_btn_uiUI = gang_map_col_btn_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_map_opera_btn_uiUI = /** @class */ (function (_super) {
            __extends(gang_map_opera_btn_uiUI, _super);
            function gang_map_opera_btn_uiUI() {
                return _super.call(this) || this;
            }
            gang_map_opera_btn_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_map_opera_btn_ui");
            };
            return gang_map_opera_btn_uiUI;
        }(Dialog));
        game.gang_map_opera_btn_uiUI = gang_map_opera_btn_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_map_opera_uiUI = /** @class */ (function (_super) {
            __extends(gang_map_opera_uiUI, _super);
            function gang_map_opera_uiUI() {
                return _super.call(this) || this;
            }
            gang_map_opera_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_map_opera_ui");
            };
            return gang_map_opera_uiUI;
        }(Dialog));
        game.gang_map_opera_uiUI = gang_map_opera_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_memberUI = /** @class */ (function (_super) {
            __extends(gang_memberUI, _super);
            function gang_memberUI() {
                return _super.call(this) || this;
            }
            gang_memberUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_member");
            };
            return gang_memberUI;
        }(Dialog));
        game.gang_memberUI = gang_memberUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_noticeUI = /** @class */ (function (_super) {
            __extends(gang_noticeUI, _super);
            function gang_noticeUI() {
                return _super.call(this) || this;
            }
            gang_noticeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_notice");
            };
            return gang_noticeUI;
        }(Dialog));
        game.gang_noticeUI = gang_noticeUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_positionUI = /** @class */ (function (_super) {
            __extends(gang_positionUI, _super);
            function gang_positionUI() {
                return _super.call(this) || this;
            }
            gang_positionUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_position");
            };
            return gang_positionUI;
        }(Dialog));
        game.gang_positionUI = gang_positionUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_recordUI = /** @class */ (function (_super) {
            __extends(gang_recordUI, _super);
            function gang_recordUI() {
                return _super.call(this) || this;
            }
            gang_recordUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_record");
            };
            return gang_recordUI;
        }(Dialog));
        game.gang_recordUI = gang_recordUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_select_hardUI = /** @class */ (function (_super) {
            __extends(gang_select_hardUI, _super);
            function gang_select_hardUI() {
                return _super.call(this) || this;
            }
            gang_select_hardUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_select_hard");
            };
            return gang_select_hardUI;
        }(Dialog));
        game.gang_select_hardUI = gang_select_hardUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gang_skillUI = /** @class */ (function (_super) {
            __extends(gang_skillUI, _super);
            function gang_skillUI() {
                return _super.call(this) || this;
            }
            gang_skillUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gang_skill");
            };
            return gang_skillUI;
        }(Dialog));
        game.gang_skillUI = gang_skillUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gold_treasure_prize_uiUI = /** @class */ (function (_super) {
            __extends(gold_treasure_prize_uiUI, _super);
            function gold_treasure_prize_uiUI() {
                return _super.call(this) || this;
            }
            gold_treasure_prize_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gold_treasure_prize_ui");
            };
            return gold_treasure_prize_uiUI;
        }(Dialog));
        game.gold_treasure_prize_uiUI = gold_treasure_prize_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var gold_treasure_uiUI = /** @class */ (function (_super) {
            __extends(gold_treasure_uiUI, _super);
            function gold_treasure_uiUI() {
                return _super.call(this) || this;
            }
            gold_treasure_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/gold_treasure_ui");
            };
            return gold_treasure_uiUI;
        }(Dialog));
        game.gold_treasure_uiUI = gold_treasure_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var grow_up_uiUI = /** @class */ (function (_super) {
            __extends(grow_up_uiUI, _super);
            function grow_up_uiUI() {
                return _super.call(this) || this;
            }
            grow_up_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/grow_up_ui");
            };
            return grow_up_uiUI;
        }(Dialog));
        game.grow_up_uiUI = grow_up_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var initial_activityUI = /** @class */ (function (_super) {
            __extends(initial_activityUI, _super);
            function initial_activityUI() {
                return _super.call(this) || this;
            }
            initial_activityUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/initial_activity");
            };
            return initial_activityUI;
        }(Dialog));
        game.initial_activityUI = initial_activityUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var invest_uiUI = /** @class */ (function (_super) {
            __extends(invest_uiUI, _super);
            function invest_uiUI() {
                return _super.call(this) || this;
            }
            invest_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/invest_ui");
            };
            return invest_uiUI;
        }(Dialog));
        game.invest_uiUI = invest_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var item_tipsUI = /** @class */ (function (_super) {
            __extends(item_tipsUI, _super);
            function item_tipsUI() {
                return _super.call(this) || this;
            }
            item_tipsUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/item_tips");
            };
            return item_tipsUI;
        }(Dialog));
        game.item_tipsUI = item_tipsUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var jingmai_uiUI = /** @class */ (function (_super) {
            __extends(jingmai_uiUI, _super);
            function jingmai_uiUI() {
                return _super.call(this) || this;
            }
            jingmai_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/jingmai_ui");
            };
            return jingmai_uiUI;
        }(Dialog));
        game.jingmai_uiUI = jingmai_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var level_giftUI = /** @class */ (function (_super) {
            __extends(level_giftUI, _super);
            function level_giftUI() {
                return _super.call(this) || this;
            }
            level_giftUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/level_gift");
            };
            return level_giftUI;
        }(Dialog));
        game.level_giftUI = level_giftUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var level_gift_itemUI = /** @class */ (function (_super) {
            __extends(level_gift_itemUI, _super);
            function level_gift_itemUI() {
                return _super.call(this) || this;
            }
            level_gift_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/level_gift_item");
            };
            return level_gift_itemUI;
        }(Dialog));
        game.level_gift_itemUI = level_gift_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var life_card_uiUI = /** @class */ (function (_super) {
            __extends(life_card_uiUI, _super);
            function life_card_uiUI() {
                return _super.call(this) || this;
            }
            life_card_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/life_card_ui");
            };
            return life_card_uiUI;
        }(Dialog));
        game.life_card_uiUI = life_card_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var loadingUI = /** @class */ (function (_super) {
            __extends(loadingUI, _super);
            function loadingUI() {
                return _super.call(this) || this;
            }
            loadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/loading");
            };
            return loadingUI;
        }(Dialog));
        game.loadingUI = loadingUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var login_newuiUI = /** @class */ (function (_super) {
            __extends(login_newuiUI, _super);
            function login_newuiUI() {
                return _super.call(this) || this;
            }
            login_newuiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/login_newui");
            };
            return login_newuiUI;
        }(Dialog));
        game.login_newuiUI = login_newuiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var login_uiUI = /** @class */ (function (_super) {
            __extends(login_uiUI, _super);
            function login_uiUI() {
                return _super.call(this) || this;
            }
            login_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/login_ui");
            };
            return login_uiUI;
        }(View));
        game.login_uiUI = login_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var lv_up_rewardUI = /** @class */ (function (_super) {
            __extends(lv_up_rewardUI, _super);
            function lv_up_rewardUI() {
                return _super.call(this) || this;
            }
            lv_up_rewardUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/lv_up_reward");
            };
            return lv_up_rewardUI;
        }(Dialog));
        game.lv_up_rewardUI = lv_up_rewardUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mail_contentUI = /** @class */ (function (_super) {
            __extends(mail_contentUI, _super);
            function mail_contentUI() {
                return _super.call(this) || this;
            }
            mail_contentUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mail_content");
            };
            return mail_contentUI;
        }(Dialog));
        game.mail_contentUI = mail_contentUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mail_uiUI = /** @class */ (function (_super) {
            __extends(mail_uiUI, _super);
            function mail_uiUI() {
                return _super.call(this) || this;
            }
            mail_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mail_ui");
            };
            return mail_uiUI;
        }(Dialog));
        game.mail_uiUI = mail_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mainplayer_infoUI = /** @class */ (function (_super) {
            __extends(mainplayer_infoUI, _super);
            function mainplayer_infoUI() {
                return _super.call(this) || this;
            }
            mainplayer_infoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mainplayer_info");
            };
            return mainplayer_infoUI;
        }(Dialog));
        game.mainplayer_infoUI = mainplayer_infoUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mainplayer_propUI = /** @class */ (function (_super) {
            __extends(mainplayer_propUI, _super);
            function mainplayer_propUI() {
                return _super.call(this) || this;
            }
            mainplayer_propUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mainplayer_prop");
            };
            return mainplayer_propUI;
        }(Dialog));
        game.mainplayer_propUI = mainplayer_propUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_bottom1UI = /** @class */ (function (_super) {
            __extends(main_bottom1UI, _super);
            function main_bottom1UI() {
                return _super.call(this) || this;
            }
            main_bottom1UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_bottom1");
            };
            return main_bottom1UI;
        }(Dialog));
        game.main_bottom1UI = main_bottom1UI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_chapterUI = /** @class */ (function (_super) {
            __extends(main_chapterUI, _super);
            function main_chapterUI() {
                return _super.call(this) || this;
            }
            main_chapterUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_chapter");
            };
            return main_chapterUI;
        }(Dialog));
        game.main_chapterUI = main_chapterUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_cityUI = /** @class */ (function (_super) {
            __extends(main_cityUI, _super);
            function main_cityUI() {
                return _super.call(this) || this;
            }
            main_cityUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_city");
            };
            return main_cityUI;
        }(Dialog));
        game.main_cityUI = main_cityUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_city_leftUI = /** @class */ (function (_super) {
            __extends(main_city_leftUI, _super);
            function main_city_leftUI() {
                return _super.call(this) || this;
            }
            main_city_leftUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_city_left");
            };
            return main_city_leftUI;
        }(Dialog));
        game.main_city_leftUI = main_city_leftUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_equipUI = /** @class */ (function (_super) {
            __extends(main_equipUI, _super);
            function main_equipUI() {
                return _super.call(this) || this;
            }
            main_equipUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_equip");
            };
            return main_equipUI;
        }(Dialog));
        game.main_equipUI = main_equipUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_headUI = /** @class */ (function (_super) {
            __extends(main_headUI, _super);
            function main_headUI() {
                return _super.call(this) || this;
            }
            main_headUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_head");
            };
            return main_headUI;
        }(Dialog));
        game.main_headUI = main_headUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_leftUI = /** @class */ (function (_super) {
            __extends(main_leftUI, _super);
            function main_leftUI() {
                return _super.call(this) || this;
            }
            main_leftUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_left");
            };
            return main_leftUI;
        }(Dialog));
        game.main_leftUI = main_leftUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_skillUI = /** @class */ (function (_super) {
            __extends(main_skillUI, _super);
            function main_skillUI() {
                return _super.call(this) || this;
            }
            main_skillUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_skill");
            };
            return main_skillUI;
        }(Dialog));
        game.main_skillUI = main_skillUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_skill_setUI = /** @class */ (function (_super) {
            __extends(main_skill_setUI, _super);
            function main_skill_setUI() {
                return _super.call(this) || this;
            }
            main_skill_setUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_skill_set");
            };
            return main_skill_setUI;
        }(View));
        game.main_skill_setUI = main_skill_setUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_topbtnUI = /** @class */ (function (_super) {
            __extends(main_topbtnUI, _super);
            function main_topbtnUI() {
                return _super.call(this) || this;
            }
            main_topbtnUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_topbtn");
            };
            return main_topbtnUI;
        }(Dialog));
        game.main_topbtnUI = main_topbtnUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var main_topuiUI = /** @class */ (function (_super) {
            __extends(main_topuiUI, _super);
            function main_topuiUI() {
                return _super.call(this) || this;
            }
            main_topuiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/main_topui");
            };
            return main_topuiUI;
        }(Dialog));
        game.main_topuiUI = main_topuiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
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
(function (ui) {
    var game;
    (function (game) {
        var marryUI = /** @class */ (function (_super) {
            __extends(marryUI, _super);
            function marryUI() {
                return _super.call(this) || this;
            }
            marryUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/marry");
            };
            return marryUI;
        }(Dialog));
        game.marryUI = marryUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var marry_informUI = /** @class */ (function (_super) {
            __extends(marry_informUI, _super);
            function marry_informUI() {
                return _super.call(this) || this;
            }
            marry_informUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/marry_inform");
            };
            return marry_informUI;
        }(Dialog));
        game.marry_informUI = marry_informUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var marry_proposeUI = /** @class */ (function (_super) {
            __extends(marry_proposeUI, _super);
            function marry_proposeUI() {
                return _super.call(this) || this;
            }
            marry_proposeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/marry_propose");
            };
            return marry_proposeUI;
        }(Dialog));
        game.marry_proposeUI = marry_proposeUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var marry_sendUI = /** @class */ (function (_super) {
            __extends(marry_sendUI, _super);
            function marry_sendUI() {
                return _super.call(this) || this;
            }
            marry_sendUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/marry_send");
            };
            return marry_sendUI;
        }(Dialog));
        game.marry_sendUI = marry_sendUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var marry_tipsUI = /** @class */ (function (_super) {
            __extends(marry_tipsUI, _super);
            function marry_tipsUI() {
                return _super.call(this) || this;
            }
            marry_tipsUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/marry_tips");
            };
            return marry_tipsUI;
        }(Dialog));
        game.marry_tipsUI = marry_tipsUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var month_card_uiUI = /** @class */ (function (_super) {
            __extends(month_card_uiUI, _super);
            function month_card_uiUI() {
                return _super.call(this) || this;
            }
            month_card_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/month_card_ui");
            };
            return month_card_uiUI;
        }(Dialog));
        game.month_card_uiUI = month_card_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mryb_car_uiUI = /** @class */ (function (_super) {
            __extends(mryb_car_uiUI, _super);
            function mryb_car_uiUI() {
                return _super.call(this) || this;
            }
            mryb_car_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mryb_car_ui");
            };
            return mryb_car_uiUI;
        }(Dialog));
        game.mryb_car_uiUI = mryb_car_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mryb_escort_uiUI = /** @class */ (function (_super) {
            __extends(mryb_escort_uiUI, _super);
            function mryb_escort_uiUI() {
                return _super.call(this) || this;
            }
            mryb_escort_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mryb_escort_ui");
            };
            return mryb_escort_uiUI;
        }(Dialog));
        game.mryb_escort_uiUI = mryb_escort_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mryb_recordUI = /** @class */ (function (_super) {
            __extends(mryb_recordUI, _super);
            function mryb_recordUI() {
                return _super.call(this) || this;
            }
            mryb_recordUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mryb_record");
            };
            return mryb_recordUI;
        }(Dialog));
        game.mryb_recordUI = mryb_recordUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mryb_revenge_uiUI = /** @class */ (function (_super) {
            __extends(mryb_revenge_uiUI, _super);
            function mryb_revenge_uiUI() {
                return _super.call(this) || this;
            }
            mryb_revenge_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mryb_revenge_ui");
            };
            return mryb_revenge_uiUI;
        }(Dialog));
        game.mryb_revenge_uiUI = mryb_revenge_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mryb_reward_uiUI = /** @class */ (function (_super) {
            __extends(mryb_reward_uiUI, _super);
            function mryb_reward_uiUI() {
                return _super.call(this) || this;
            }
            mryb_reward_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mryb_reward_ui");
            };
            return mryb_reward_uiUI;
        }(Dialog));
        game.mryb_reward_uiUI = mryb_reward_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var mryb_uiUI = /** @class */ (function (_super) {
            __extends(mryb_uiUI, _super);
            function mryb_uiUI() {
                return _super.call(this) || this;
            }
            mryb_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/mryb_ui");
            };
            return mryb_uiUI;
        }(Dialog));
        game.mryb_uiUI = mryb_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var msgboxUI = /** @class */ (function (_super) {
            __extends(msgboxUI, _super);
            function msgboxUI() {
                return _super.call(this) || this;
            }
            msgboxUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/msgbox");
            };
            return msgboxUI;
        }(Dialog));
        game.msgboxUI = msgboxUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var multi_shopUI = /** @class */ (function (_super) {
            __extends(multi_shopUI, _super);
            function multi_shopUI() {
                return _super.call(this) || this;
            }
            multi_shopUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/multi_shop");
            };
            return multi_shopUI;
        }(Dialog));
        game.multi_shopUI = multi_shopUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var multi_shop_itemUI = /** @class */ (function (_super) {
            __extends(multi_shop_itemUI, _super);
            function multi_shop_itemUI() {
                return _super.call(this) || this;
            }
            multi_shop_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/multi_shop_item");
            };
            return multi_shop_itemUI;
        }(Dialog));
        game.multi_shop_itemUI = multi_shop_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var m_fuben_itemUI = /** @class */ (function (_super) {
            __extends(m_fuben_itemUI, _super);
            function m_fuben_itemUI() {
                return _super.call(this) || this;
            }
            m_fuben_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/m_fuben_item");
            };
            return m_fuben_itemUI;
        }(Dialog));
        game.m_fuben_itemUI = m_fuben_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var newbees_uiUI = /** @class */ (function (_super) {
            __extends(newbees_uiUI, _super);
            function newbees_uiUI() {
                return _super.call(this) || this;
            }
            newbees_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/newbees_ui");
            };
            return newbees_uiUI;
        }(Dialog));
        game.newbees_uiUI = newbees_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var number_inputUI = /** @class */ (function (_super) {
            __extends(number_inputUI, _super);
            function number_inputUI() {
                return _super.call(this) || this;
            }
            number_inputUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/number_input");
            };
            return number_inputUI;
        }(Dialog));
        game.number_inputUI = number_inputUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var offline_incomeUI = /** @class */ (function (_super) {
            __extends(offline_incomeUI, _super);
            function offline_incomeUI() {
                return _super.call(this) || this;
            }
            offline_incomeUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/offline_income");
            };
            return offline_incomeUI;
        }(Dialog));
        game.offline_incomeUI = offline_incomeUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var once_taskUI = /** @class */ (function (_super) {
            __extends(once_taskUI, _super);
            function once_taskUI() {
                return _super.call(this) || this;
            }
            once_taskUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/once_task");
            };
            return once_taskUI;
        }(Dialog));
        game.once_taskUI = once_taskUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var otherplayer_infoUI = /** @class */ (function (_super) {
            __extends(otherplayer_infoUI, _super);
            function otherplayer_infoUI() {
                return _super.call(this) || this;
            }
            otherplayer_infoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/otherplayer_info");
            };
            return otherplayer_infoUI;
        }(Dialog));
        game.otherplayer_infoUI = otherplayer_infoUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var partner_combatUI = /** @class */ (function (_super) {
            __extends(partner_combatUI, _super);
            function partner_combatUI() {
                return _super.call(this) || this;
            }
            partner_combatUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/partner_combat");
            };
            return partner_combatUI;
        }(Dialog));
        game.partner_combatUI = partner_combatUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var partner_mainUI = /** @class */ (function (_super) {
            __extends(partner_mainUI, _super);
            function partner_mainUI() {
                return _super.call(this) || this;
            }
            partner_mainUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/partner_main");
            };
            return partner_mainUI;
        }(Dialog));
        game.partner_mainUI = partner_mainUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var partner_prop_uiUI = /** @class */ (function (_super) {
            __extends(partner_prop_uiUI, _super);
            function partner_prop_uiUI() {
                return _super.call(this) || this;
            }
            partner_prop_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/partner_prop_ui");
            };
            return partner_prop_uiUI;
        }(Dialog));
        game.partner_prop_uiUI = partner_prop_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var partner_yuanUI = /** @class */ (function (_super) {
            __extends(partner_yuanUI, _super);
            function partner_yuanUI() {
                return _super.call(this) || this;
            }
            partner_yuanUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/partner_yuan");
            };
            return partner_yuanUI;
        }(Dialog));
        game.partner_yuanUI = partner_yuanUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var pb_item_uiUI = /** @class */ (function (_super) {
            __extends(pb_item_uiUI, _super);
            function pb_item_uiUI() {
                return _super.call(this) || this;
            }
            pb_item_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/pb_item_ui");
            };
            return pb_item_uiUI;
        }(Dialog));
        game.pb_item_uiUI = pb_item_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var personal_bossUI = /** @class */ (function (_super) {
            __extends(personal_bossUI, _super);
            function personal_bossUI() {
                return _super.call(this) || this;
            }
            personal_bossUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/personal_boss");
            };
            return personal_bossUI;
        }(Dialog));
        game.personal_bossUI = personal_bossUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var pnyo_bossUI = /** @class */ (function (_super) {
            __extends(pnyo_bossUI, _super);
            function pnyo_bossUI() {
                return _super.call(this) || this;
            }
            pnyo_bossUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/pnyo_boss");
            };
            return pnyo_bossUI;
        }(Dialog));
        game.pnyo_bossUI = pnyo_bossUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var progress_bar_uiUI = /** @class */ (function (_super) {
            __extends(progress_bar_uiUI, _super);
            function progress_bar_uiUI() {
                return _super.call(this) || this;
            }
            progress_bar_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/progress_bar_ui");
            };
            return progress_bar_uiUI;
        }(Dialog));
        game.progress_bar_uiUI = progress_bar_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var purchase_pageUI = /** @class */ (function (_super) {
            __extends(purchase_pageUI, _super);
            function purchase_pageUI() {
                return _super.call(this) || this;
            }
            purchase_pageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/purchase_page");
            };
            return purchase_pageUI;
        }(Dialog));
        game.purchase_pageUI = purchase_pageUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var rankUI = /** @class */ (function (_super) {
            __extends(rankUI, _super);
            function rankUI() {
                return _super.call(this) || this;
            }
            rankUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/rank");
            };
            return rankUI;
        }(Dialog));
        game.rankUI = rankUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var rank_simpleUI = /** @class */ (function (_super) {
            __extends(rank_simpleUI, _super);
            function rank_simpleUI() {
                return _super.call(this) || this;
            }
            rank_simpleUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/rank_simple");
            };
            return rank_simpleUI;
        }(Dialog));
        game.rank_simpleUI = rank_simpleUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var rech_store_uiUI = /** @class */ (function (_super) {
            __extends(rech_store_uiUI, _super);
            function rech_store_uiUI() {
                return _super.call(this) || this;
            }
            rech_store_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/rech_store_ui");
            };
            return rech_store_uiUI;
        }(Dialog));
        game.rech_store_uiUI = rech_store_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var reward_recvUI = /** @class */ (function (_super) {
            __extends(reward_recvUI, _super);
            function reward_recvUI() {
                return _super.call(this) || this;
            }
            reward_recvUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/reward_recv");
            };
            return reward_recvUI;
        }(Dialog));
        game.reward_recvUI = reward_recvUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var reward_uiUI = /** @class */ (function (_super) {
            __extends(reward_uiUI, _super);
            function reward_uiUI() {
                return _super.call(this) || this;
            }
            reward_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/reward_ui");
            };
            return reward_uiUI;
        }(Dialog));
        game.reward_uiUI = reward_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var reward_viewUI = /** @class */ (function (_super) {
            __extends(reward_viewUI, _super);
            function reward_viewUI() {
                return _super.call(this) || this;
            }
            reward_viewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/reward_view");
            };
            return reward_viewUI;
        }(Dialog));
        game.reward_viewUI = reward_viewUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var ronglian_selectUI = /** @class */ (function (_super) {
            __extends(ronglian_selectUI, _super);
            function ronglian_selectUI() {
                return _super.call(this) || this;
            }
            ronglian_selectUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/ronglian_select");
            };
            return ronglian_selectUI;
        }(Dialog));
        game.ronglian_selectUI = ronglian_selectUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var ronglian_uiUI = /** @class */ (function (_super) {
            __extends(ronglian_uiUI, _super);
            function ronglian_uiUI() {
                return _super.call(this) || this;
            }
            ronglian_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/ronglian_ui");
            };
            return ronglian_uiUI;
        }(Dialog));
        game.ronglian_uiUI = ronglian_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var shop_itemUI = /** @class */ (function (_super) {
            __extends(shop_itemUI, _super);
            function shop_itemUI() {
                return _super.call(this) || this;
            }
            shop_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/shop_item");
            };
            return shop_itemUI;
        }(Dialog));
        game.shop_itemUI = shop_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var sign_8dayUI = /** @class */ (function (_super) {
            __extends(sign_8dayUI, _super);
            function sign_8dayUI() {
                return _super.call(this) || this;
            }
            sign_8dayUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/sign_8day");
            };
            return sign_8dayUI;
        }(Dialog));
        game.sign_8dayUI = sign_8dayUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var sign_8day_itemUI = /** @class */ (function (_super) {
            __extends(sign_8day_itemUI, _super);
            function sign_8day_itemUI() {
                return _super.call(this) || this;
            }
            sign_8day_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/sign_8day_item");
            };
            return sign_8day_itemUI;
        }(Dialog));
        game.sign_8day_itemUI = sign_8day_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var sign_giftUI = /** @class */ (function (_super) {
            __extends(sign_giftUI, _super);
            function sign_giftUI() {
                return _super.call(this) || this;
            }
            sign_giftUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/sign_gift");
            };
            return sign_giftUI;
        }(Dialog));
        game.sign_giftUI = sign_giftUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var sign_gift_itemUI = /** @class */ (function (_super) {
            __extends(sign_gift_itemUI, _super);
            function sign_gift_itemUI() {
                return _super.call(this) || this;
            }
            sign_gift_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/sign_gift_item");
            };
            return sign_gift_itemUI;
        }(Dialog));
        game.sign_gift_itemUI = sign_gift_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var skill_tipsUI = /** @class */ (function (_super) {
            __extends(skill_tipsUI, _super);
            function skill_tipsUI() {
                return _super.call(this) || this;
            }
            skill_tipsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/skill_tips");
            };
            return skill_tipsUI;
        }(View));
        game.skill_tipsUI = skill_tipsUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var slv_exchangeUI = /** @class */ (function (_super) {
            __extends(slv_exchangeUI, _super);
            function slv_exchangeUI() {
                return _super.call(this) || this;
            }
            slv_exchangeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/slv_exchange");
            };
            return slv_exchangeUI;
        }(Dialog));
        game.slv_exchangeUI = slv_exchangeUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var straightfirst_orderUI = /** @class */ (function (_super) {
            __extends(straightfirst_orderUI, _super);
            function straightfirst_orderUI() {
                return _super.call(this) || this;
            }
            straightfirst_orderUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/straightfirst_order");
            };
            return straightfirst_orderUI;
        }(View));
        game.straightfirst_orderUI = straightfirst_orderUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var stuff_itemUI = /** @class */ (function (_super) {
            __extends(stuff_itemUI, _super);
            function stuff_itemUI() {
                return _super.call(this) || this;
            }
            stuff_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/stuff_item");
            };
            return stuff_itemUI;
        }(Dialog));
        game.stuff_itemUI = stuff_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var stuff_shopUI = /** @class */ (function (_super) {
            __extends(stuff_shopUI, _super);
            function stuff_shopUI() {
                return _super.call(this) || this;
            }
            stuff_shopUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/stuff_shop");
            };
            return stuff_shopUI;
        }(Dialog));
        game.stuff_shopUI = stuff_shopUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_apt_uiUI = /** @class */ (function (_super) {
            __extends(summon_apt_uiUI, _super);
            function summon_apt_uiUI() {
                return _super.call(this) || this;
            }
            summon_apt_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_apt_ui");
            };
            return summon_apt_uiUI;
        }(Dialog));
        game.summon_apt_uiUI = summon_apt_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_catchingUI = /** @class */ (function (_super) {
            __extends(summon_catchingUI, _super);
            function summon_catchingUI() {
                return _super.call(this) || this;
            }
            summon_catchingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_catching");
            };
            return summon_catchingUI;
        }(Dialog));
        game.summon_catchingUI = summon_catchingUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_combatUI = /** @class */ (function (_super) {
            __extends(summon_combatUI, _super);
            function summon_combatUI() {
                return _super.call(this) || this;
            }
            summon_combatUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_combat");
            };
            return summon_combatUI;
        }(Dialog));
        game.summon_combatUI = summon_combatUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_mainUI = /** @class */ (function (_super) {
            __extends(summon_mainUI, _super);
            function summon_mainUI() {
                return _super.call(this) || this;
            }
            summon_mainUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_main");
            };
            return summon_mainUI;
        }(Dialog));
        game.summon_mainUI = summon_mainUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_prop_uiUI = /** @class */ (function (_super) {
            __extends(summon_prop_uiUI, _super);
            function summon_prop_uiUI() {
                return _super.call(this) || this;
            }
            summon_prop_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_prop_ui");
            };
            return summon_prop_uiUI;
        }(Dialog));
        game.summon_prop_uiUI = summon_prop_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_ql_infoUI = /** @class */ (function (_super) {
            __extends(summon_ql_infoUI, _super);
            function summon_ql_infoUI() {
                return _super.call(this) || this;
            }
            summon_ql_infoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_ql_info");
            };
            return summon_ql_infoUI;
        }(View));
        game.summon_ql_infoUI = summon_ql_infoUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_qualityUI = /** @class */ (function (_super) {
            __extends(summon_qualityUI, _super);
            function summon_qualityUI() {
                return _super.call(this) || this;
            }
            summon_qualityUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_quality");
            };
            return summon_qualityUI;
        }(View));
        game.summon_qualityUI = summon_qualityUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var summon_skillChgUI = /** @class */ (function (_super) {
            __extends(summon_skillChgUI, _super);
            function summon_skillChgUI() {
                return _super.call(this) || this;
            }
            summon_skillChgUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/summon_skillChg");
            };
            return summon_skillChgUI;
        }(Dialog));
        game.summon_skillChgUI = summon_skillChgUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var svr_listUI = /** @class */ (function (_super) {
            __extends(svr_listUI, _super);
            function svr_listUI() {
                return _super.call(this) || this;
            }
            svr_listUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/svr_list");
            };
            return svr_listUI;
        }(Dialog));
        game.svr_listUI = svr_listUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var sys_setUI = /** @class */ (function (_super) {
            __extends(sys_setUI, _super);
            function sys_setUI() {
                return _super.call(this) || this;
            }
            sys_setUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/sys_set");
            };
            return sys_setUI;
        }(Dialog));
        game.sys_setUI = sys_setUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var text_inputUI = /** @class */ (function (_super) {
            __extends(text_inputUI, _super);
            function text_inputUI() {
                return _super.call(this) || this;
            }
            text_inputUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/text_input");
            };
            return text_inputUI;
        }(Dialog));
        game.text_inputUI = text_inputUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var tips_uiUI = /** @class */ (function (_super) {
            __extends(tips_uiUI, _super);
            function tips_uiUI() {
                return _super.call(this) || this;
            }
            tips_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/tips_ui");
            };
            return tips_uiUI;
        }(Dialog));
        game.tips_uiUI = tips_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var total_payUI = /** @class */ (function (_super) {
            __extends(total_payUI, _super);
            function total_payUI() {
                return _super.call(this) || this;
            }
            total_payUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/total_pay");
            };
            return total_payUI;
        }(Dialog));
        game.total_payUI = total_payUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var total_pay_itemUI = /** @class */ (function (_super) {
            __extends(total_pay_itemUI, _super);
            function total_pay_itemUI() {
                return _super.call(this) || this;
            }
            total_pay_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/total_pay_item");
            };
            return total_pay_itemUI;
        }(Dialog));
        game.total_pay_itemUI = total_pay_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var total_propUI = /** @class */ (function (_super) {
            __extends(total_propUI, _super);
            function total_propUI() {
                return _super.call(this) || this;
            }
            total_propUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/total_prop");
            };
            return total_propUI;
        }(Dialog));
        game.total_propUI = total_propUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var travel_cb_uiUI = /** @class */ (function (_super) {
            __extends(travel_cb_uiUI, _super);
            function travel_cb_uiUI() {
                return _super.call(this) || this;
            }
            travel_cb_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/travel_cb_ui");
            };
            return travel_cb_uiUI;
        }(Dialog));
        game.travel_cb_uiUI = travel_cb_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var travel_dt_cb_uiUI = /** @class */ (function (_super) {
            __extends(travel_dt_cb_uiUI, _super);
            function travel_dt_cb_uiUI() {
                return _super.call(this) || this;
            }
            travel_dt_cb_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/travel_dt_cb_ui");
            };
            return travel_dt_cb_uiUI;
        }(Dialog));
        game.travel_dt_cb_uiUI = travel_dt_cb_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var travel_dt_uiUI = /** @class */ (function (_super) {
            __extends(travel_dt_uiUI, _super);
            function travel_dt_uiUI() {
                return _super.call(this) || this;
            }
            travel_dt_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/travel_dt_ui");
            };
            return travel_dt_uiUI;
        }(Dialog));
        game.travel_dt_uiUI = travel_dt_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var travel_uiUI = /** @class */ (function (_super) {
            __extends(travel_uiUI, _super);
            function travel_uiUI() {
                return _super.call(this) || this;
            }
            travel_uiUI.prototype.createChildren = function () {
                View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
                _super.prototype.createChildren.call(this);
                this.loadUI("game/travel_ui");
            };
            return travel_uiUI;
        }(Dialog));
        game.travel_uiUI = travel_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var ui_loadingUI = /** @class */ (function (_super) {
            __extends(ui_loadingUI, _super);
            function ui_loadingUI() {
                return _super.call(this) || this;
            }
            ui_loadingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/ui_loading");
            };
            return ui_loadingUI;
        }(Dialog));
        game.ui_loadingUI = ui_loadingUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var unit_shopUI = /** @class */ (function (_super) {
            __extends(unit_shopUI, _super);
            function unit_shopUI() {
                return _super.call(this) || this;
            }
            unit_shopUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/unit_shop");
            };
            return unit_shopUI;
        }(Dialog));
        game.unit_shopUI = unit_shopUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var vip_uiUI = /** @class */ (function (_super) {
            __extends(vip_uiUI, _super);
            function vip_uiUI() {
                return _super.call(this) || this;
            }
            vip_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/vip_ui");
            };
            return vip_uiUI;
        }(Dialog));
        game.vip_uiUI = vip_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var wb_detailUI = /** @class */ (function (_super) {
            __extends(wb_detailUI, _super);
            function wb_detailUI() {
                return _super.call(this) || this;
            }
            wb_detailUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/wb_detail");
            };
            return wb_detailUI;
        }(Dialog));
        game.wb_detailUI = wb_detailUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var wb_itemUI = /** @class */ (function (_super) {
            __extends(wb_itemUI, _super);
            function wb_itemUI() {
                return _super.call(this) || this;
            }
            wb_itemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/wb_item");
            };
            return wb_itemUI;
        }(Dialog));
        game.wb_itemUI = wb_itemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var wild_bossUI = /** @class */ (function (_super) {
            __extends(wild_bossUI, _super);
            function wild_bossUI() {
                return _super.call(this) || this;
            }
            wild_bossUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/wild_boss");
            };
            return wild_bossUI;
        }(Dialog));
        game.wild_bossUI = wild_bossUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var world_mapUI = /** @class */ (function (_super) {
            __extends(world_mapUI, _super);
            function world_mapUI() {
                return _super.call(this) || this;
            }
            world_mapUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/world_map");
            };
            return world_mapUI;
        }(Dialog));
        game.world_mapUI = world_mapUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var xy_welfare_uiUI = /** @class */ (function (_super) {
            __extends(xy_welfare_uiUI, _super);
            function xy_welfare_uiUI() {
                return _super.call(this) || this;
            }
            xy_welfare_uiUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/xy_welfare_ui");
            };
            return xy_welfare_uiUI;
        }(Dialog));
        game.xy_welfare_uiUI = xy_welfare_uiUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var zkzgUI = /** @class */ (function (_super) {
            __extends(zkzgUI, _super);
            function zkzgUI() {
                return _super.call(this) || this;
            }
            zkzgUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/zkzg");
            };
            return zkzgUI;
        }(Dialog));
        game.zkzgUI = zkzgUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
(function (ui) {
    var game;
    (function (game) {
        var zkzg_fbitemUI = /** @class */ (function (_super) {
            __extends(zkzg_fbitemUI, _super);
            function zkzg_fbitemUI() {
                return _super.call(this) || this;
            }
            zkzg_fbitemUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game/zkzg_fbitem");
            };
            return zkzg_fbitemUI;
        }(Dialog));
        game.zkzg_fbitemUI = zkzg_fbitemUI;
    })(game = ui.game || (ui.game = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map