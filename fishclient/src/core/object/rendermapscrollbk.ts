module core {
    export class rendermapscrollbk extends renderobject {
        public m_mat_list:Array<mapbkmaterial> = new Array<mapbkmaterial>();
        public m_dx:number = 0;
        public m_dy:number = 0;
        constructor(){
            super();
            this.re_init();
        }
        public re_init():void{
            this.m_mat_list.length = 0;
            this.m_dx = 0;
            this.m_dy = 0;
            this.m_rc = utils.getitembycls("mapscrollbkcommand",mapscrollbkcommand);
            this.m_rc.re_init(this);
        }
        public setdeltapos(x:number,y:number):void{
            this.m_dx = x;
            this.m_dy = y;
        }
        public addres(res:string):void
        {
            let mat:mapbkmaterial = mat_mgr().getmapbkres(res);
            this.m_mat_list.push(mat);
            //this.m_mat = mat_mgr().getmapbkres(res);
            //this.removeChildren();
            //this.addChild(this.m_mat.m_graphic);
        }
        public update(delta:number):void
        {
            
        }
        public clearRes():void{
            this.removeChildren();
            for(let i of this.m_mat_list){
                mat_mgr().delmapbkres(i);
            }
            this.m_mat_list.length = 0;
        }
        public project(context:rendercontext):boolean
        {
            context.m_render.addrc(this.m_rc);
            return true;
        }
        //从parent里把自己移除?
        public dispose():void
        {
            this.clearRes();
            if(this.m_rc != null)
            {
                this.m_rc.dispose();
                utils.recover("mapscrollbkcommand",this.m_rc);
                this.m_rc = null;
            }
            super.dispose();
        }
    }
}