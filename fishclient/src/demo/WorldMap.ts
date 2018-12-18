class WorldMap extends ui.demo.WorldMapUI{
    private areas: SeaArea[];

    private areaBoxs: Laya.Box[];

    public selectedArea: SeaArea;

    constructor(){
		super();
        
        let areaIcons = [this.a1, this.a2, this.a3, this.a4, this.a5];
        this.areaBoxs = [this.b1, this.b2, this.b3, this.b4, this.b5];

        this.areas = new Array<SeaArea>(areaIcons.length);
        for (let i = 0; i < areaIcons.length; i++) {
            this.areas[i] = new SeaArea(areaIcons[i], "South Pacific", new BackGround("demo/seafloor" + (i + 1) + ".jpg"));
            areaIcons[i].interval = 200;
            areaIcons[i].play(1, true);
            this.areaBoxs[i].on(Laya.Event.CLICK, this, this.onAreaClick, [i]);
        }
        this.areas[1].description = "North Atlantic";
        this.areas[2].description = "South Atlantic";
        this.areas[3].description = "Indian Ocean";
        this.areas[4].description = "North Pacific";

        this.closeBtn.on(Laya.Event.CLICK, this, this.closeMap);
        this.btnGo.on(Laya.Event.CLICK, this, this.goSeaArea);

        this.selectedArea = this.areas[0];

        this.desBox.visible = false;
    }

    onAreaClick(index: number) {
        this.selectedArea = this.areas[index];
        this.desBox.pos(Math.max(10, this.areaBoxs[index].x - this.desBox.width/2), this.areaBoxs[index].y - this.desBox.height/2);
        this.desLabel.text = this.areas[index].description;
        this.desBox.visible = true;
    }

    goSeaArea() {
        UIManager.getInstance().mainView.changeSeaArea(this.selectedArea);
        this.closeMap();
    }

    closeMap() {
        this.desBox.visible = false;
        this.close(null, true);
    }
} 