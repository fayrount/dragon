
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.demo {
    export class BackGroundUI extends View {
		public b1:Laya.Image;
		public b2:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("demo/BackGround");

        }

    }
}

module ui.demo {
    export class GoldBoxUI extends View {
		public goldLabel:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("demo/GoldBox");

        }

    }
}

module ui.demo {
    export class MainViewUI extends View {
		public goldBox:ui.demo.GoldBoxUI;
		public mapBtn:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.demo.GoldBoxUI",ui.demo.GoldBoxUI);

            super.createChildren();
            this.loadUI("demo/MainView");

        }

    }
}

module ui.demo {
    export class WorldMapUI extends Dialog {
		public closeBtn:Laya.Image;
		public b1:Laya.Box;
		public a1:Laya.Animation;
		public b2:Laya.Box;
		public a2:Laya.Animation;
		public b3:Laya.Box;
		public a3:Laya.Animation;
		public b4:Laya.Box;
		public a4:Laya.Animation;
		public b5:Laya.Box;
		public a5:Laya.Animation;
		public desBox:Laya.Box;
		public desLabel:Laya.Label;
		public btnGo:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("demo/WorldMap");

        }

    }
}

module ui.game {
    export class main_uiUI extends Dialog {
		public btn1:Laya.Button;
		public btn2:Laya.Button;
		public btn3:Laya.Button;
		public btn4:Laya.Button;
		public btn5:Laya.Button;
		public btn6:Laya.Button;
		public red_2:Laya.Image;
		public red_3:Laya.Image;
		public red_4:Laya.Image;
		public red_5:Laya.Image;
		public red_6:Laya.Image;
		public red_1:Laya.Image;
		public pgbar:Laya.ProgressBar;
		public lab_exp:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("game/main_ui");

        }

    }
}
