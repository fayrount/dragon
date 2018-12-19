class MainView extends ui.demo.MainViewUI{
    public worldMap: WorldMap;

    private selectedSeaArea: SeaArea;
    
    private pet: Pet;

	constructor(){
		super();

        this.refreshGold();

        this.pet = new Pet();
        this.pet.width = 60;
        this.pet.height = 60;
        this.worldMap = new WorldMap();
        this.changeSeaArea(this.worldMap.selectedArea);
        this.mapBtn.on(Laya.Event.CLICK, this, this.onClickMap);
	}

    public onLoop() {
        this.selectedSeaArea.onLoop();
    }

    public addGold(gold: number) {
        DataManager.getInstance().getData().currentGold += gold;
        this.refreshGold();
    }

    public refreshGold() {
        this.goldBox.goldLabel.text = DataManager.getInstance().getData().currentGold.toString();
    }

    onClickMap() {
        this.worldMap.show(false, true);
    }

    public changeSeaArea(area: SeaArea) {
        if (this.selectedSeaArea) {
            this.selectedSeaArea.reset();
        }

        this.selectedSeaArea = area;
        area.addPet(this.pet);
        this.addChildAt(area, 0);
    }
}