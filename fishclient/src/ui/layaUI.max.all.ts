
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
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
