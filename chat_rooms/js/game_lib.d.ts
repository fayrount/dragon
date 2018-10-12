declare module core {
    const enum AVATAR_ACTON {
        ACTION_STAND = 0,
        ACTION_RUN = 1,
        ACTION_READY = 2,
        ACTION_ATTACK = 3,
        ACTION_ATTACKED = 4,
        ACTION_DEAD = 5,
        ACTION_DEFEND = 6,
        ACTION_SKILL = 7,
        ACTION_MAX = 8,
    }
}

declare module core {
    class renderagent {
        m_render: renderimpl;
        m_update_follow_tm: number;
        constructor();
        set_avatar_config(conf: any): void;
        set_map_config(conf: any): void;
        set_ani_config(conf: any): void;
        set_eff_config(conf: any): void;
        initstage(sp: laya.display.Sprite): void;
        check_point(x: number, y: number): number;
        blackscene(tm: number): void;
        setcamerapos(x: number, y: number, force?: boolean): void;
        cameralookat(unit: renderavatar): void;
        setviewport(w: number, h: number): void;
        update(delta: number): void;
        render(): void;
        dispose(): void;
        clear(): void;
        check_release(): void;
        clearmap(): void;
        clearmapslotcache(): void;
        set_map_filter(f: Array<any>): void;
        show_map_mask(flag: boolean, alpha?: number): void;
        setmapbk(res: string): void;
        setmapbksp(sp: Laya.Sprite): void;
        clearmapbksp(): void;
        stagepos2worldpos(pos: laya.maths.Point): laya.maths.Point;
        worldpos2stagepos(pos: laya.maths.Point): laya.maths.Point;
        entermap(mapid: number, b_slot?: boolean): void;
        addani(aniid: number, x: number, y: number, underunit?: boolean): number;
        delani(objid: number): void;
        delallani(): void;
        addsprite(sp: renderspcontent, x: number, y: number, b_unit_front?: boolean): number;
        getsprite(objid: number): rendersprite;
        delsprite(objid: number): void;
        delallsprite(): void;
        addeff(aniid: number, x: number, y: number, underunit?: boolean, autodel?: boolean): number;
        deleff(objid: number): void;
        delalleff(): void;
        addunit(name: string, shape: number, x: number, y: number, use_default?: boolean): number;
        delunit(id: number): void;
        set_follow_id(chase_id: number, follow_id: number): void;
        clear_follow_id(chase_id: number): void;
        clear_all_follow(follow_id: number): void;
        private _gen_back_pos(pt, dir);
        update_follow_pos(): void;
        delallunit(): void;
        getunitbyud(ud: any): renderavatar;
        getunit(id: number): renderavatar;
        getmap_gridw(): number;
        getmap_gridh(): number;
        unit_stop(id: any): void;
        is_unit_walk(id: number): boolean;
        get_unit_walk(id: number): path;
        is_scene_block(x: number, y: number): boolean;
        get_map_canvas(w: number, h: number, x: number, y: number): Laya.HTMLCanvas;
        get_camera_x(): number;
        get_view_x(): number;
        get_view_y(): number;
        get_camera_y(): number;
        set_walk_spd(spd: number): void;
        set_run_spd(spd: number): void;
        unit_walk2inspd(id: number, x: number, y: number, b_force: boolean, spd: number): laya.maths.Point;
        unit_walk2(id: number, x: number, y: number, b_force?: boolean, b_run?: boolean): laya.maths.Point;
    }
}

declare module combat {
    class warrior {
        id: number;
        roleid: number;
        pos: number;
        shape: number;
        group: number;
        cls: number;
        lv: number;
        scale: number;
        name: string;
        b_dead: boolean;
        desc: Laya.Byte;
        m_desc: Array<number>;
        constructor();
        clone_data(d: warrior): void;
    }
    class warrior_hp {
        id: number;
        hp: number;
        hpmax: number;
        mp: number;
        mpmax: number;
        constructor();
    }
    class atk_status {
        id: number;
        skillid: number;
        skilllv: number;
        damage: number;
        damagetype: number;
        b_crack: boolean;
        b_dead: boolean;
        b_vanish: boolean;
        b_fly: boolean;
        b_revive: boolean;
        b_defend: boolean;
        b_dodge: boolean;
        constructor();
    }
    class buff_status {
        id: number;
        skillid: number;
        skilllv: number;
        buffid: number;
        buffshape: number;
        buffeffid: number;
        cd: number;
        overlay: number;
        datas: Array<number>;
        constructor();
    }
    class skillatk {
        id: number;
        self_group: number;
        skillid: number;
        skilllv: number;
        dst_list: Array<number>;
        atkstatus_list: Array<atk_status>;
        addbuff_list: Array<buff_status>;
        subbuff_list: Array<buff_status>;
        m_type: number;
        m_config_id: number;
        constructor();
    }
    class combat_turn {
        m_num: number;
        m_action_list: Array<combat_action>;
        m_action_idx: number;
        m_add_list: Array<any>;
        m_sethp_list: Array<any>;
        constructor(num: number);
        is_end(): boolean;
        do(): void;
        dispose(): void;
    }
    class combatimpl extends utils.game_event_dispatcher {
        m_scene: combatscene;
        private m_turn_list;
        private m_turn_idx;
        private m_cur_turn;
        private m_player;
        private m_b_end;
        m_skillperform_config: any;
        m_skill_config: any;
        private m_skill_configmap;
        private m_skillperform_cache;
        constructor(sp: laya.display.Sprite);
        set_tm(tp: number, tm: number): void;
        get_skillperformcryout(skillid: number): string;
        parse_skillcfg_by_s(id: number, s: string): Object;
        set_skillperformcfg_cache(id: number, cfg: Object): void;
        get_skillperformcfg_cache_frompack(id: number): Object;
        private get_skillperformcfg(id);
        get_skillperformconfig(skillid: number, skilllv: number, config_id: number): any;
        set_skill_config(cfg: any): void;
        set_skillperform_config(cfg: any): void;
        addplayernode(node: combat_playernode): void;
        clearplayernode(): void;
        startplayernode(): void;
        isplayerend(): boolean;
        isturnend(): boolean;
        _get_turn_ins(num: number): combat_turn;
        _del_turn_ins(ins: combat_turn): void;
        _get_action_ins(type: number, data: any): combat_action;
        _del_action_ins(ins: combat_action): void;
        _get_player_ins(tm: number, event: string, user_data: any): combat_playernode;
        _del_player_ins(ins: combat_playernode): void;
        get_warrior_ins(): warrior;
        del_warrior_ins(warrior_ins: warrior): void;
        get_skillatk_ins(): skillatk;
        del_skillatk_ins(skillatk_ins: skillatk): void;
        get_atkstatus_ins(): atk_status;
        del_atkstatus_ins(ins: atk_status): void;
        get_buffstatus_ins(): buff_status;
        del_buffstatus_ins(ins: buff_status): void;
        get_warriorhp_ins(): warrior_hp;
        del_warriorhp_ins(ins: warrior_hp): void;
        start(hc?: Laya.HTMLCanvas, w?: number, h?: number, x?: number, y?: number, scene_id?: number, scene_res?: string): void;
        end(): void;
        combatend(): void;
        addwarrior(data: warrior): void;
        change_lineup(res: string, dx: number, dy: number): void;
        changeweapon(wid: number, aid: number): void;
        changewing(wid: number, aid: number): void;
        changeride(wid: number, aid: number, abid: number, ride_h?: number): void;
        changehair(wid: number, aid: number): void;
        changeshape(wid: number, aid: number): void;
        changeaurn(wid: number, aid: number): void;
        changetitle(wid: number, aid: number): void;
        changefairy(wid: number, aid: number): void;
        attack(data: skillatk): void;
        send_event(event: string, user_data: any): void;
        delwarrior(id: number): void;
        addbuff(data: buff_status): void;
        delbuff(data: buff_status): void;
        buffcd(data: buff_status): void;
        buffautocd(): void;
        propchange(data: atk_status): void;
        set_warrior_hp(data: warrior_hp): void;
        turnstart(count: number): void;
        turnend(): void;
        update(delta: number): void;
        render(): void;
        dispose(): void;
    }
}

declare module combat {
    class combat_warrior_action {
        m_id: number;
        m_warrior: core.renderavatar;
        m_is_end: boolean;
        m_start_tm: number;
        constructor();
        re_init(): void;
        start(tm: number): void;
        update(delta: number): void;
        is_end(): boolean;
        clear(): void;
        dispose(): void;
    }
    class dead_action extends combat_warrior_action {
        private m_b_open;
        private m_fade_max;
        private m_fade_tm;
        private m_cur_fadeidx;
        private m_cur_tm;
        private m_fadeout;
        constructor();
        start(tm: number): void;
        update(delta: number): void;
        is_end(): boolean;
        dispose(): void;
    }
    class fly_action extends combat_warrior_action {
        m_start_pt: Laya.Point;
        m_from_pt: Laya.Point;
        m_lt_pt: Laya.Point;
        m_rb_pt: Laya.Point;
        private m_collision_max;
        m_collision_num: number;
        private m_a;
        private m_b;
        private m_cur_tm;
        private m_cur_rtm;
        private m_start_rtm;
        private m_rspeed;
        private m_speed;
        private m_bsign;
        constructor();
        start(tm: number): void;
        private _cal_param();
        private _rotate(delta);
        private _is_out(x, y);
        private _collision();
        update(delta: number): void;
        is_end(): boolean;
        dispose(): void;
    }
    class combatscene extends utils.game_event_receiver {
        private m_combat_mgr;
        m_render: core.renderagent;
        private m_pos_map;
        private m_warrior_map;
        private m_mw;
        private m_mh;
        private m_map;
        private m_camera_x;
        private m_camera_y;
        private m_pos_centerx;
        private m_pos_centerdx;
        private m_pos_centerdy;
        private m_pos_centery;
        private m_view_w;
        private m_view_h;
        m_pos_dx: number;
        m_pos_dy: number;
        private m_pos_c2dx;
        private m_pos_c2dy;
        private m_numpic_list;
        private m_tempnumpic_list;
        private m_cryout_list;
        private m_tempcryout_list;
        private m_waction_list;
        private m_bk_htmlcanvas;
        private m_bk_htmltexture;
        private m_bk_sp;
        private m_lineupsp;
        constructor(mgr: combatimpl, sp: laya.display.Sprite);
        private _init_pos_map();
        get_pos(id: number): laya.maths.Point;
        get_dir(id: number): number;
        get_warrior(id: number): warrior;
        get_warrior_avatar(id: number): core.renderavatar;
        get_warrior_avatarid(id: number): number;
        private onClick(e);
        private _init_event();
        private on_actionend(user_data);
        private on_actionbegin(user_data);
        private clearallwarrior();
        private init_bk_htmlcanvas(hc, w, h);
        private clear_bk_htmlcanvas();
        private on_change_lineup(user_data);
        private clear_lineupsp();
        private on_enter(user_data);
        private on_quit(user_data);
        private on_setadorn(user_data);
        private get_posid_bywid(wid);
        private on_initwarrior(user_data);
        private on_addclonewarrior(user_data);
        private _add_warrior_ins(wdata, x, y);
        private on_addwarrior(user_data);
        private on_delninja(user_data);
        private on_delwarrior(user_data);
        private _add_waction_obj(obj);
        private _del_waction_obj(id);
        private on_warrioraction(user_data);
        private on_addbuff(user_data);
        private on_delbuff(user_data);
        private on_buffcd(user_data);
        private on_buffautocd(user_data);
        private on_cryout(user_data);
        private clearallcryout();
        private on_popnumber(user_data);
        private on_warriorfly(user_data);
        private on_warriordeadvanish(user_data);
        private on_warriordead(user_data);
        private on_warriorrevive(user_data);
        private on_warriordodge(user_data);
        private clearallnumpic();
        private on_warriorsetpos(user_data);
        private on_warriorbackmove(user_data);
        private on_warriorattacked(user_data);
        private on_warriordefend(user_data);
        private on_warriorready(user_data);
        private on_sethp(user_data);
        private on_warriormove(user_data);
        private on_warriormoveback(user_data);
        private on_warriormove2warrior(user_data);
        private on_warriordir2w(user_data);
        private on_warriordir(user_data);
        private on_effect_screenpos(user_data);
        private on_effect(user_data);
        private on_effect2w(user_data);
        private on_customevent(user_data);
        private on_blackscene(user_data);
        is_downteambywid(wid: number, self_group: number): boolean;
        is_downteam(id: number): boolean;
        private mgr();
        register_event(event: string, func: Function): void;
        unregister_event(event: string): void;
        fire_event(event: string, user_data?: any): void;
        unregister_allevent(): void;
        fire_event_next_frame(event: string, user_data?: any): void;
        start(): void;
        private _get_combatnum(v, tp, content?);
        private _get_combatcrack(v, tp, content?);
        private _get_combatcryout(content?);
        clear(): void;
        update(delta: number): void;
        render(): void;
        dispose(): void;
    }
}

declare module combat {
    class combat_action {
        m_type: number;
        m_data: any;
        m_mgr: combatimpl;
        static ATTACKED_TM: number;
        static DEAD_ATTACKED_TM: number;
        static DEAD_TM: number;
        static FLY_ATTACKED_TM: number;
        static FLY_TM: number;
        static DODGE_TM: number;
        static DEFEND_TM: number;
        static REVIVE_TM: number;
        constructor(tp: number, data: any, mgr: combatimpl);
        do(): void;
        private _get_skill_unitid(param);
        private _pop_skill_dst();
        private _parse_skill_move(tm, data);
        private _parse_skill_move2(tm, data);
        private _is_downteam(id, self_group);
        private _parse_skill_blacks(tm, data);
        private _parse_skill_dir(tm, data, self_group);
        private _parse_skill_act(tm, data);
        private _get_skill_atkstatus(data, id);
        private _parse_ninjaatk(tm, data, self_group);
        private _parse_clearninja(tm, data);
        private _parse_skill_attacked(tm, data);
        private _parse_skill_effect(tm, data, self_group);
        private _parse_skill_moveback(tm, data, self_group);
        private _add_node(tm, node_type, user_data);
        private _parse_skill_end(tm, data);
        private _parse_skill_action(tm, action, data, self_group);
        private _gen_propchange(i, tm, atkstatus);
        private do_propchange();
        private do_skill();
        private do_enter();
        private do_changelineup();
        private do_customevent();
        private do_addwarrior();
        private do_initwarrior();
        private do_setadorn();
        private do_delwarrior();
        private do_sethp();
        private do_initwarriorhps();
        private do_addbuff();
        private do_delbuff();
        private do_buffcd();
        private do_buffautocd();
    }
}

declare module combat {
    const COMBATSCENE_ENTER: string;
    const COMBATSCENE_CHANGELINEUP: string;
    const COMBATSCENE_QUIT: string;
    const COMBATSCENE_POPNUMBER: string;
    const COMBATSCENE_ADDWARRIOR: string;
    const COMBATSCENE_ADDCLONEWARRIOR: string;
    const COMBATSCENE_INITWARRIOR: string;
    const COMBATSCENE_SETADORN: string;
    const COMBATSCENE_DELWARRIOR: string;
    const COMBATSCENE_DELNINJA: string;
    const COMBATSCENE_ADDBUFF: string;
    const COMBATSCENE_DELBUFF: string;
    const COMBATSCENE_BUFFCD: string;
    const COMBATSCENE_BUFFAUTOCD: string;
    const COMBATSCENE_WARRIORACTION: string;
    const COMBATSCENE_WARRIORDEAD: string;
    const COMBATSCENE_WARRIORDEADVANISH: string;
    const COMBATSCENE_WARRIORFLY: string;
    const COMBATSCENE_WARRIORREVIVE: string;
    const COMBATSCENE_WARRIORDODGE: string;
    const COMBATSCENE_WARRIORDEFEND: string;
    const COMBATSCENE_WARRIORATTACKED: string;
    const COMBATSCENE_WARRIORBACKMOVE: string;
    const COMBATSCENE_WARRIORMOVE: string;
    const COMBATSCENE_WARRIORSETPOS: string;
    const COMBATSCENE_WARRIORMOVEBACK: string;
    const COMBATSCENE_WARRIORMOVE2WARRIOR: string;
    const COMBATSCENE_WARRIORDIR: string;
    const COMBATSCENE_WARRIORDIR2W: string;
    const COMBATSCENE_EFFECT: string;
    const COMBATSCENE_EFFECT_SCREENPOS: string;
    const COMBATSCENE_EFFECT2W: string;
    const COMBATSCENE_WARRIORREADY: string;
    const COMBATSCENE_ACTIONBEGIN: string;
    const COMBATSCENE_ACTIONEND: string;
    const COMBATSCENE_EMPTY: string;
    const COMBATSCENE_SETHP: string;
    const COMBATSCENE_CRYOUT: string;
    const COMBATSCENE_BLACKSCENE: string;
    const COMBATSCENE_CUSTOMEVENT: string;
    const ACTION_INVALID: number;
    const ACTION_ADDWARRIOR: number;
    const ACTION_DELWARRIOR: number;
    const ACTION_SKILL: number;
    const ACTION_ADDBUFF: number;
    const ACTION_DELBUFF: number;
    const ACTION_BUFFCD: number;
    const ACTION_BUFFAUTOCD: number;
    const ACTION_PROPCHANGE: number;
    const ACTION_END: number;
    const ACTION_ENTER: number;
    const ACTION_SETHP: number;
    const ACTION_SETWARRIORADORN: number;
    const ACTION_CUSTOMEVENT: number;
    const ACTION_INITWARRIORS: number;
    const ACTION_INITWARRIORHPS: number;
    const ACTION_CHANGELINEUP: number;
    const DAMAGETYPE_HP_SUB: number;
    const DAMAGETYPE_HP_ADD: number;
    const DAMAGETYPE_CRACK: number;
    const DAMAGETYPE_DODGE: number;
    const DAMAGETYPE_SHAKE: number;
    const DAMAGETYPE_COUNTERATK: number;
    const DAMAGETYPE_CRYOUT: number;
}

declare module combat {
    class combat_number_sp extends laya.display.Sprite {
        protected m_value: number;
        private m_root;
        protected m_prex: string;
        m_w: number;
        m_h: number;
        m_type: number;
        private m_text;
        constructor();
        re_init(tp: number): void;
        set_content(c: string): void;
        set_value(v: number): void;
        _init_cryout_wh(): void;
        _init_counteratk_wh(): void;
        _init_shake_wh(): void;
        _init_dodge_wh(): void;
        _init_sub_wh(): void;
        init_add_wh(): void;
        _init_countdown_wh(): void;
        _init_crack_wh(): void;
        init_wh(): void;
        release_pic(): void;
        dispose(): void;
    }
    class combat_number extends core.renderspcontent {
        m_value: number;
        m_type: number;
        m_sp_list: Array<combat_number_sp>;
        m_life: number;
        m_obj_id: number;
        m_text: string;
        constructor();
        re_init(v: number, tp: number, content?: string): void;
        release_allsp(): void;
        protected _get_sp(tp: number): combat_number_sp;
        protected _del_sp(ins: combat_number_sp): void;
        start(): void;
        tick(delta: number): void;
        is_end(): boolean;
        dispose(): void;
        selfremove(): void;
    }
    class combat_cryout extends core.renderspcontent {
        m_graphic: laya.display.Animation;
        m_life: number;
        m_obj_id: number;
        m_text: Laya.Label;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        m_framecurrenttm: number;
        constructor();
        re_init(content?: string): void;
        start(): void;
        tick(delta: number): void;
        is_end(): boolean;
        dispose(): void;
        selfremove(): void;
    }
    class combat_crack extends combat_number {
        m_graphic: laya.display.Animation;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        m_framecurrenttm: number;
        constructor();
        re_init(v: number, tp: number, content?: string): void;
        start(): void;
        tick(delta: number): void;
        is_end(): boolean;
        dispose(): void;
        selfremove(): void;
    }
    class combat_lineup extends core.renderspcontent {
        m_graphic: Laya.Sprite;
        m_obj_id: number;
        constructor();
        re_init(): void;
        set_respath(path: string, x: number, y: number): void;
        dispose(): void;
        selfremove(): void;
    }
}

declare module combat {
    class combat_playernode {
        m_tm: number;
        m_idx: number;
        m_sortnum: number;
        m_event: string;
        m_ud: any;
        m_mgr: combatimpl;
        constructor(tm: number, event: string, user_data: any, mgr: combatimpl);
        set_idx(idx: number): void;
        do(tm: number): boolean;
    }
    class combat_player {
        m_arr: Array<combat_playernode>;
        private m_b_end;
        private m_cur_tm;
        private m_cur_idx;
        private m_max_idx;
        constructor();
        addnode(node: combat_playernode): void;
        start(): void;
        clear(): void;
        is_end(): boolean;
        update(delta: number): void;
    }
}

declare module core {
    class avatardirlink {
        m_dir: number;
        m_framecount: number;
        m_ptcount: number;
        m_pt_arr: Array<Array<Laya.Point>>;
        private m_pt_max;
        private m_invalid_pt;
        constructor();
        init(): void;
        dispose(): void;
        add_pt(idx: number, x: number, y: number): void;
        get_pt(pt_idx: number, idx: number): Laya.Point;
        print_data(): void;
    }
    class avatarlink {
        m_id: number;
        m_action: number;
        m_sign: number;
        m_sign_txt: string;
        m_version: number;
        m_dircount: number;
        m_dir_max: number;
        m_dir_arr: Array<avatardirlink>;
        constructor();
        print_data(): void;
        dispose(): void;
        get_pt(dir: number, pt_idx: number, idx: number): Laya.Point;
        init(): void;
        set_txt_buff(buf: Laya.Byte, buf_len: number): void;
        set_buff(buf: Laya.Byte, buf_len: number): void;
    }
}

declare module core {
    class avatarname extends Laya.Sprite {
        private m_bk;
        m_text: Laya.Text;
        private m_bk_w;
        private m_bk_h;
        constructor();
        re_init(): void;
        dispose(): void;
    }
    class avatarhp extends Laya.Sprite {
        private m_progress;
        m_w: number;
        m_h: number;
        constructor();
        re_init(): void;
        set_v(v: number, m: number): void;
        clear(): void;
        dispose(): void;
    }
    class avatarbuff extends Laya.Sprite {
        m_id: number;
        m_shape: number;
        m_cd: number;
        m_overlap: number;
        m_datas: any;
        m_icon: Laya.Sprite;
        m_cd_label: Laya.Label;
        m_w: number;
        m_h: number;
        m_cd_label_h: number;
        m_effid: number;
        constructor();
        re_init(): void;
        set_id(id: number, shape: number): void;
        set_data(cd: number, overlap: number, datas: any): void;
        set_cd(cd: number): void;
        set_effid(id: number): void;
        dispose(): void;
    }
    class avatarbuffui extends Laya.Sprite {
        m_list: Array<avatarbuff>;
        m_num_per_row: number;
        m_buffw: number;
        m_buffh: number;
        constructor();
        private _re_arrange();
        addbuff(bid: number, shape: number, cd: number, overlap: number, datas: any, effid?: number): void;
        getbuff(bid: number): avatarbuff;
        delbuff(bid: number): boolean;
        buffautocd(): void;
        delallbuff(): void;
        re_init(): void;
        clear(): void;
        dispose(): void;
    }
}

declare module blowfish {
    class CBlowFish {
        private m_index;
        private m_PArray;
        private m_SBoxes;
        constructor();
        _print_array(msg?: string, b_force?: boolean): void;
        private _bf_F(v);
        private ROUND(a, b, idx);
        private Blowfish_encipher(xl, xr);
        private Blowfish_decipher(xl, xr);
        testfunc(): void;
        InitializeKey(buff: Laya.Byte): void;
        Initialize(seed: number): void;
        Encode(buff: Laya.Byte): boolean;
        Decode(buff: Laya.Byte): boolean;
    }
}

declare module core {
    class avatar_ani_struct {
        m_anchorX: number;
        m_anchorY: number;
        m_dx: number;
        m_dy: number;
        m_frameRate: number;
        m_frames: Array<string>;
        constructor();
        set_data(o: Object): void;
        static parse(o: Object): avatar_ani_struct;
    }
    class avatar_atlas_img_struct {
        m_name: string;
        m_w: number;
        m_h: number;
        m_source_w: number;
        m_source_h: number;
        constructor();
    }
    class avatar_atlas_struct {
        m_prefix: string;
        m_frames: Array<avatar_atlas_img_struct>;
        constructor();
        set_data(o: Object): void;
        static parse(o: Object): avatar_atlas_struct;
    }
    class material {
        m_ref: number;
        m_mat_res: string;
        static s_mat_id: number;
        m_mat_id: number;
        constructor();
        dispose(): void;
        update(delta: number): void;
        load_res(): void;
        addref(): void;
        delref(): void;
    }
    class material_loader {
        m_mat_res: string;
        m_loaded: boolean;
        m_loading: boolean;
        m_ref: number;
        m_unload_mat: Object;
        m_ref_tm: number;
        m_res_release: boolean;
        m_extra_res: Array<any>;
        constructor(res: string);
        re_init(res: string): void;
        add_unload_mat(mat: material): void;
        del_unload_mat(mat: material): void;
        on_load(): void;
        addextrares(res: string, types: string): void;
        load_res(line: number): void;
        addref(): void;
        delref(): void;
        check_release(): boolean;
        dispose(): void;
    }
}

declare module core {
    class materialinfomgr {
        m_map_grid_w: number;
        m_map_grid_h: number;
        private m_map_info_dict;
        private m_ani_info_dict;
        private m_eff_info_dict;
        private m_avatar_action_mat_dict;
        private m_avatar_config;
        private m_map_config;
        private m_ani_config;
        private m_eff_config;
        constructor();
        set_avatar_config(conf: any): void;
        set_map_config(conf: any): void;
        set_ani_config(conf: any): void;
        set_eff_config(conf: any): void;
        _get_avatar_info(avatarid: number, actionid: number): any;
        _get_map_info(mapid: number): any;
        _get_eff_info(aniid: number): any;
        _get_ani_info(aniid: number): any;
        dispose(): void;
        getmapw(mapid: number): number;
        getmaph(mapid: number): number;
        genmappath(mapid: number): string;
        geteffw(aniid: number): number;
        geteffh(aniid: number): number;
        geteffframecount(aniid: number): number;
        geteffframespeed(aniid: number): number;
        geteffname(aniid: number): string;
        geteffcycle(aniid: number): boolean;
        getaniw(aniid: number): number;
        getanih(aniid: number): number;
        getaniframecount(aniid: number): number;
        getaniframespeed(aniid: number): number;
        getanitexprefix(aniid: number): string;
        genavatarmatkey(shape: number, action: number): number;
        getavataractionw(shape: number, action: number): number;
        getavataractionh(shape: number, action: number): number;
        getavataractionframecount(shape: number, action: number): number;
        getavataractionframespeed(shape: number, action: number): number;
        getavataractiontexprefix(shape: number, action: number): string;
        _gen_avatarlink_key(shape: number, action: number): string;
        _gen_avatarlink_filename(shape: number, action: number): string;
        get_backride_shape(ride: number): number;
    }
    function matinfo_mgr(): materialinfomgr;
}

declare module core {
    function get_file_key(file_name: string): number;
}

declare module myrandom {
    class CRandBase {
        protected m_nSeed: number;
        constructor();
        GetSeed(): number;
        SetSeed(seed: number): void;
        Random_01(): number;
        RandomInt(): number;
        Random(Max: number, Min?: number): number;
    }
    class CLcg1_Rand extends CRandBase {
        constructor();
        Random_01(): number;
        RandomInt(): number;
    }
    class CLcg2_Rand extends CRandBase {
        constructor();
        Random_01(): number;
        RandomInt(): number;
    }
}
declare module myencode {
    class MyEncode {
        private m_rand;
        private m_remain;
        private m_flag;
        constructor();
        Encode(buff: Laya.Byte): boolean;
        Decode(buff: Laya.Byte): boolean;
    }
}

declare module core {
    enum log_level_enum {
        LOG_ERROR = 0,
        LOG_WARNNING = 1,
        LOG_TIPS = 2,
        LOG_MAX = 3,
    }
    enum log_module_enum {
        MODULE_CORE = 0,
        MODULE_RES = 1,
        MODULE_COMBAT = 2,
        MODULE_NET = 3,
        MODULE_UI = 4,
        MODULE_GAME = 5,
        MODULE_OTHER = 6,
        MODULE_LOADING = 7,
        MODULE_ALL = 8,
    }
    function set_log_level(v: log_level_enum): void;
    function set_log_module(v: log_module_enum): void;
    function log(level: log_level_enum, module: log_module_enum, ...args: any[]): void;
    function res_errlog(...args: any[]): void;
    function res_warnlog(...args: any[]): void;
    function res_tiplog(...args: any[]): void;
    function core_errlog(...args: any[]): void;
    function core_warnlog(...args: any[]): void;
    function core_tiplog(...args: any[]): void;
    function net_errlog(...args: any[]): void;
    function net_warnlog(...args: any[]): void;
    function net_tiplog(...args: any[]): void;
    function combat_errlog(...args: any[]): void;
    function combat_warnlog(...args: any[]): void;
    function combat_tiplog(...args: any[]): void;
    function ui_errlog(...args: any[]): void;
    function ui_warnlog(...args: any[]): void;
    function ui_tiplog(...args: any[]): void;
    function game_errlog(...args: any[]): void;
    function game_warnlog(...args: any[]): void;
    function game_tiplog(...args: any[]): void;
    function game_log(...args: any[]): void;
    function loading_tiplog(...args: any[]): void;
    let g_b_open_loadinglog: boolean;
    function open_loading_log(flag: boolean): void;
    function myload(url: any, complete?: Laya.Handler, progress?: Laya.Handler, type?: string, priority?: number, cache?: boolean, group?: string, ignoreCache?: boolean): Laya.LoaderManager;
}

declare module processencode {
    function RC4_InitCode(): void;
    class CProcessEncode {
        private m_SBox;
        private m_x;
        private m_y;
        private m_seed;
        constructor();
        Create(seed: number): void;
        Encode(buff: Laya.Byte): void;
        Encode2(buff: Laya.Byte): void;
    }
}

declare module game_event {
    const EVENT_NET_PACKET: string;
    const EVENT_NET_CONNECTED: string;
    const EVENT_NET_CLOSED: string;
    const EVENT_NET_ERROR: string;
    const EVENT_WIDGET_ONSHOW: string;
    const EVENT_WIDGET_ONHIDE: string;
    const EVENT_WIDGET_ONDISPOSE: string;
    const EVENT_WIDGET_ALLDISPOSE: string;
    const EVENT_TESTCOMBAT: string;
    const EVENT_TESTCOMBATPROTO: string;
    function gen_netcmd_event(cmd: number): string;
}
declare module protocol_def {
    const C2S_CMD_2_TYPE: {
        [key: number]: string;
    };
    const S2C_CMD_2_TYPE: {
        [key: number]: string;
    };
    let C2S_CMD_2_PROTO: {
        [key: number]: string;
    };
    let S2C_CMD_2_PROTO: {
        [key: number]: string;
    };
    function register_cmd(c2s_map: {
        [key: number]: string;
    }, s2c_map: {
        [key: number]: string;
    }): void;
    let Protocol_desc_map: {};
    function register_protocol_desc(desc_map: {}): void;
}
declare module protocolbuf {
    class protocolbuf {
        private m_temp;
        constructor();
        get_desc_byname(name: string): Array<Array<string>>;
        pack_uint8(buf: Laya.Byte, v: number): void;
        unpack_uint8(buf: Laya.Byte): number;
        pack_uint16(buf: Laya.Byte, v: number): void;
        unpack_uint16(buf: Laya.Byte): number;
        pack_uint32(buf: Laya.Byte, v: number): void;
        unpack_uint32(buf: Laya.Byte): number;
        pack_int8(buf: Laya.Byte, v: number): void;
        unpack_int8(buf: Laya.Byte): number;
        pack_int16(buf: Laya.Byte, v: number): void;
        unpack_int16(buf: Laya.Byte): number;
        pack_int32(buf: Laya.Byte, v: number): void;
        unpack_int32(buf: Laya.Byte): number;
        pack_byte(buf: Laya.Byte, v: Laya.Byte): void;
        unpack_byte(buf: Laya.Byte, blen: number): Laya.Byte;
        pack_byte8(buf: Laya.Byte, v: Laya.Byte): void;
        unpack_byte8(buf: Laya.Byte): Laya.Byte;
        pack_byte16(buf: Laya.Byte, v: Laya.Byte): void;
        unpack_byte16(buf: Laya.Byte): Laya.Byte;
        pack_byte32(buf: Laya.Byte, v: Laya.Byte): void;
        unpack_byte32(buf: Laya.Byte): Laya.Byte;
        pack_string8(buf: Laya.Byte, v: string): void;
        unpack_string8(buf: Laya.Byte): string;
        pack_string16(buf: Laya.Byte, v: string): void;
        unpack_string16(buf: Laya.Byte): string;
        pack_string32(buf: Laya.Byte, v: string): void;
        unpack_string32(buf: Laya.Byte): string;
        pack_int_data(ret: Laya.Byte, type: string, v: number): void;
        unpack_int_data(ret: Laya.Byte, type: string): number;
        pack_string_data(ret: Laya.Byte, type: string, v: string): void;
        unpack_string_data(ret: Laya.Byte, type: string): string;
        pack_data(ret: Laya.Byte, type: string, value: string, data: any): void;
        unpack_data(type: string, value: string, buf: Laya.Byte, max_len?: number): any;
        c2s_rawbuff2buf(cmd: number, buff: Laya.Byte): Laya.Byte;
        c2s_data2buf(cmd: number, data: {}): Laya.Byte;
        s2c_buf2data(buf: Laya.Byte): {};
        c2s_rawbuff2buf_tl(cmd: number, sbuff: Laya.Byte, sendbuff: Laya.Byte): Laya.Byte;
        c2s_data2buf_tl(cmd: number, data: {}, sendbuff: laya.utils.Byte): Laya.Byte;
        s2c_buf2data_tl(buf: Laya.Byte): {};
    }
}

declare module core {
    class rendercommand {
        m_obj: renderobject;
        m_screen_z: number;
        constructor(obj: renderobject);
        re_init(obj: renderobject): void;
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
        is_contain(x: number, y: number): boolean;
    }
}

declare module core {
    class renderobject extends laya.display.Sprite {
        private static S_RO_IDMAX;
        m_rc: rendercommand;
        m_box: laya.maths.Rectangle;
        m_obj_id: number;
        m_data: any;
        constructor();
        set_id(): void;
        set_pos(x: number, y: number): void;
        set_x: number;
        set_y: number;
        set_scale(sx: number, sy: number): void;
        private get_obj_id();
        dispose(): void;
        update(delta: number): void;
        is_contain(x: number, y: number): boolean;
        project(context: rendercontext): boolean;
    }
}

declare module core {
    class anicommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
    }
}

declare module core {
    class avatarcommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
        is_contain(x: number, y: number): boolean;
    }
    class avatarcommand_new extends rendercommand {
        private m_a;
        constructor(obj?: renderobject);
        re_init(obj: renderobject): void;
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
        is_contain(x: number, y: number): boolean;
    }
}

declare module core {
    class effcommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
    }
}

declare module core {
    class mapbkcommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
    }
}

declare module core {
    class mapblockcommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
    }
}

declare module core {
    class mapslotcommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
    }
}

declare module core {
    class spritecommand extends rendercommand {
        constructor(obj?: renderobject);
        update_z(): void;
        dispose(): void;
        render(context: rendercontext): void;
    }
}

declare module net {
    class protocol_item {
        m_cmd: number;
        m_data: any;
        constructor(cmd: number, data: any);
    }
    class game_net_mgr {
        protected m_socket: Laya.Socket;
        protected m_byte: Laya.Byte;
        protected m_b_connect: boolean;
        protected m_recv_list: Array<protocol_item>;
        protected m_protocol_map: Object;
        protected m_s2c_protocol_map: Object;
        m_protobuf_root: any;
        protected m_tmp_buf: Laya.Byte;
        protected m_buf_handle: protocolbuf.protocolbuf;
        constructor();
        init(): void;
        private on_protobuf_loaded(err, root);
        protected get_s2c_protocol_cls(cmd: number): any;
        protected get_protocol_cls(cmd: number): any;
        protected openHandler(event?: any): void;
        protected receiveHandler(msg?: any): void;
        protected closeHandler(e?: any): void;
        protected errorHandler(e?: any): void;
        connect(host: string, port: number, svrid?: number): void;
        close(): void;
        send_raw_buff(cmd: number, buff: Laya.Byte): void;
        send(cmd: number, data?: Object): void;
        update(): void;
        dispose(): void;
    }
    class CLoginEncode {
        private m_seed;
        private m_bfish;
        private m_buff;
        constructor();
        print_data(): void;
        MixKey(buff: Laya.Byte): void;
        Create(key: number): void;
        Encode(buff: Laya.Byte): void;
        Decode(buff: Laya.Byte): void;
        GetSeed(): number;
    }
    class CLoginDecode {
        private m_seed;
        private m_bfish;
        private m_buff;
        constructor();
        MixKey(buff: Laya.Byte): void;
        Create(key: number): void;
        Encode(buff: Laya.Byte): void;
        Decode(buff: Laya.Byte): void;
        GetSeed(): number;
    }
    class TL_Login_net extends game_net_mgr {
        private m_buff;
        private m_svrid;
        private m_host;
        private m_port;
        private m_loginstep;
        private m_b_connected;
        private m_loginencode;
        private m_logindecode;
        private m_sendencode;
        private m_recvdecode;
        private m_loginIdx;
        private m_decodebuff;
        private m_sendbuff;
        m_parent: any;
        private m_testsendcount;
        constructor();
        connect(host: string, port: number, svrid?: number): void;
        private _getbuffuint8(buff, pos);
        private _setbuffuint8(buff, pos, v);
        testfunc2(): void;
        testfunc(): void;
        _print_pkg(buff: laya.utils.Byte, pre?: string): void;
        private _gen_firstpkg();
        private send_firstpkg();
        private send_secondpkg(seed);
        private get_first_seed(msg?);
        private get_second_seed(msg?);
        _testsend(count: number): void;
        protected openHandler(event?: any): void;
        private _decrypt_buff(buff);
        private _on_split_netpack();
        protected receiveHandler(msg?: any): void;
        send_raw_buff(cmd: number, buff: Laya.Byte): void;
        send(cmd: number, data?: Object): void;
        testlogin(account: string, pwd: string): void;
        close(): void;
        dispose(): void;
    }
    function net_ins(): game_net_mgr;
    function my_svr(flag: boolean): void;
    function is_mysvr(): boolean;
    function clear(): void;
}

declare module core {
    class animaterial extends material {
        m_graphic: laya.display.Animation;
        m_res_path: string;
        m_ani_id: number;
        m_ready: boolean;
        constructor();
        re_init(): void;
        private ani_index_pad(index, pad_num);
        private aniUrls(aniName, pre, pad_num, length);
        load_res(): void;
        loadres(anipre: string, pre: string, pad_num: number, length: number): void;
        goto_frame(frame: number): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class avataractiondirmaterial extends material {
        m_graphic: laya.display.Animation;
        m_ready: boolean;
        m_dir: number;
        constructor();
        re_init(): void;
        get_rect(): Laya.Rectangle;
        private ani_index_pad(index, pad_num);
        private aniUrls(aniName, pre, pad_num, length);
        loadres(anipre: string, pre: string, pad_num: number, length: number): void;
        goto_frame(frame: number): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class avataractionmaterial extends material {
        m_graphic: laya.display.Sprite;
        m_shape: number;
        m_action: number;
        m_curdir: number;
        m_curdirmat: avataractiondirmaterial;
        m_dir_list: Object;
        m_width: number;
        m_height: number;
        m_b_mirrior: boolean;
        m_b_dir4: boolean;
        m_alink: avatarlink;
        m_cur_link: Laya.Point;
        m_b_loaded: boolean;
        m_cur_mirrior: boolean;
        m_link_sp: Laya.Sprite;
        constructor();
        re_init(): void;
        get_link(dir: number, pt_idx: number, frame: number): Laya.Point;
        goto_frame(frame: number): void;
        is_dir_loaded(dir: number): boolean;
        load_res(): void;
        adddirmat(anipre: string, dir: number, use_dir: number, pad_num: number, length: number): void;
        changedir(dir: number): void;
        get_rect(): Laya.Rectangle;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class effmaterial extends material {
        m_graphic: laya.display.Animation;
        m_ani_path: string;
        m_res_path: string;
        m_ani_id: number;
        m_ready: boolean;
        constructor();
        re_init(): void;
        load_res(): void;
        loadres(name: string, cycle: boolean): void;
        goto_frame(frame: number): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class avatar_ani_frame {
        m_tex: Laya.Texture;
        m_path: string;
        m_dx: number;
        m_dy: number;
        constructor();
        re_init(): void;
        load_res(): void;
        clear(): void;
        dispose(): void;
    }
    class avatar_ani_mat extends material {
        m_atlas_path: string;
        m_ani_path: string;
        m_atlas_data: avatar_atlas_struct;
        m_ani_data: avatar_ani_struct;
        m_frames: Array<avatar_ani_frame>;
        m_b_loaded: boolean;
        m_aniid: number;
        m_aw: number;
        m_ah: number;
        m_framecount: number;
        m_framespeed: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        constructor();
        re_init(): void;
        load_res(): void;
        clear(): void;
        dispose(): void;
    }
    class lavatartexture {
        m_tex: Laya.Texture;
        constructor();
        re_init(): void;
        dispose(): void;
    }
    class lavatartextureframes {
        m_frames: Array<lavatartexture>;
        m_use_dir: number;
        m_dir: number;
        m_b_mirror: boolean;
        m_m: Laya.Matrix;
        m_mm: Laya.Matrix;
        m_matrix: Laya.Matrix;
        constructor();
        set_mirror(flag: boolean): void;
        matrix(): Laya.Matrix;
        re_init(): void;
        clear(): void;
        dispose(): void;
    }
    class lavataractionmat extends material {
        m_shape: number;
        m_action: number;
        m_b_loaded: boolean;
        m_dir_tex: Array<lavatartextureframes>;
        m_texture_map: Object;
        m_alink: avatarlink;
        m_width: number;
        m_height: number;
        m_cur_link: Laya.Point;
        constructor();
        re_init(): void;
        get_link(dir: number, pt_idx: number, frame: number): Laya.Point;
        private _gen_res_path(pre, dir, frame);
        private _gen_tex_key(dir, frame);
        load_res(): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class mapbkmaterial extends material {
        m_graphic: laya.display.Sprite;
        constructor();
        re_init(respath: string): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class mapblock extends material {
        m_graphic: laya.display.Sprite;
        m_res_path: string;
        m_map_id: number;
        m_grid_w: number;
        m_grid_h: number;
        m_buf: laya.utils.Byte;
        m_block_array: Uint8Array;
        m_block_w_num: number;
        m_block_h_num: number;
        m_b_n_per_byte: number;
        m_init_sp: boolean;
        m_block_cache: Uint8Array;
        constructor();
        re_init(): void;
        load(mapid: number): void;
        setbuff(buf: any): void;
        _is_block(v: number, pos: number): boolean;
        is_block(x: number, y: number): boolean;
        is_block_cache(x: number, y: number): boolean;
        get_block_sp(): laya.display.Sprite;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class mapslotmaterial extends material {
        m_graphic: laya.display.Sprite;
        m_tex: Laya.Texture;
        m_res_path: string;
        m_map_id: number;
        m_grid_w: number;
        m_grid_h: number;
        constructor();
        init(): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
    }
}

declare module core {
    class materialmgr {
        private m_map_slot_dict;
        private m_ani_mat_dict;
        private m_eff_mat_dict;
        private m_avatar_link_dict;
        private m_lavatar_mat_dict;
        private m_lavatar_animat_dict;
        private m_lavatar_anidata_dict;
        private m_lavatar_aniatlasdata_dict;
        private m_mat_loader;
        private m_avatar_shadow_mat;
        constructor();
        dispose(): void;
        get_avatar_shadow_mat(): Laya.Texture;
        check_release(): void;
        get_avatar_anidata(res: string): avatar_ani_struct;
        get_avatar_anitalasdata(res: string): avatar_atlas_struct;
        get_mat_loader(res: string): material_loader;
        add_mat_ref(res: string): void;
        del_mat_ref(res: string): void;
        update(delta: number): void;
        private onLoadmapslot(key, path);
        getmapslot(mapid: number, x: number, y: number): mapslotmaterial;
        clearallmapslot(): void;
        private onLoadmapblock(mat, path);
        getmapblock(mb: mapblock, mapid: number): mapblock;
        getmapbkres(respath: string): mapbkmaterial;
        delmapbkres(mat: mapbkmaterial): void;
        geteffmat(aniid: number): effmaterial;
        deleffmat(mat: effmaterial): void;
        getanimat(aniid: number): animaterial;
        delanimat(mat: animaterial): void;
        private onLoadavatar(mat);
        getavataractionmat(shape: number, action: number): avataractionmaterial;
        delavataractionmaterial(mat: avataractionmaterial): void;
        getlavatarmat(shape: number, action: number): lavataractionmat;
        dellavatarmaterial(mat: lavataractionmat): void;
        getlavataranimat(aniid: number): avatar_ani_mat;
        dellavataranimat(mat: avatar_ani_mat): void;
        setavatarlinkdata(shape: number, action: number, buff: Laya.Byte, bufflen: number, b_txt: boolean): void;
        clearavatarlinkdata(shape: number, action: number): void;
        private getavatarlinkdata(shape, action);
    }
    function mat_mgr(): materialmgr;
}

declare module core {
    class renderani extends renderobject {
        m_aniid: number;
        m_mat: animaterial;
        m_aw: number;
        m_ah: number;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_framecurrenttm: number;
        constructor();
        re_init(aniid: number, x: number, y: number, underunit?: boolean): void;
        project(context: rendercontext): boolean;
        update(delta: number): void;
        dispose(): void;
    }
}

declare module core {
    class renderavatar_default extends Laya.Sprite {
        constructor();
    }
    class renderavatar_shadow extends Laya.Sprite {
        constructor();
    }
    class renderavatar_adorn extends Laya.Sprite {
        private static S_ADORN_IDMAX;
        m_id: number;
        m_front: boolean;
        m_dx: number;
        m_dy: number;
        constructor();
        protected _gen_id(): number;
        draw2sp(sp: Laya.Sprite, x: number, y: number, b_front?: boolean): void;
        update(delta: number): void;
        dispose(): void;
    }
    class avatar_aura extends renderavatar_adorn {
        m_aniid: number;
        m_mat: effmaterial;
        m_aw: number;
        m_ah: number;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        m_framecurrenttm: number;
        m_b_loop: boolean;
        m_b_end: boolean;
        m_b_autodel: boolean;
        m_b_loaded: boolean;
        constructor();
        re_init(aura_id: number): void;
        load_res(): boolean;
        update(delta: number): void;
        dispose(): void;
    }
    class avatar_aura_new extends renderavatar_adorn {
        m_aniid: number;
        m_mat: avatar_ani_mat;
        m_framecurrent: number;
        m_framecurrenttm: number;
        m_b_loaded: boolean;
        constructor();
        re_init(aura_id: number): void;
        load_res(): boolean;
        draw2sp(sp: Laya.Sprite, x: number, y: number, b_front?: boolean): void;
        update(delta: number): void;
        dispose(): void;
    }
    class renderavatar_old extends renderobject {
        m_shape: number;
        m_shape_weapon: number;
        m_shape_wing: number;
        m_shape_ride: number;
        m_shape_backride: number;
        m_shape_hair: number;
        m_aura_id: number;
        m_aura_adorn: avatar_aura;
        m_title_id: number;
        m_title_adorn: avatar_aura;
        m_action: number;
        m_lastaction: number;
        m_dir: number;
        m_mat: avataractionmaterial;
        m_mat_weapon: avataractionmaterial;
        m_mat_wing: avataractionmaterial;
        m_mat_ride: avataractionmaterial;
        m_mat_backride: avataractionmaterial;
        m_mat_hair: avataractionmaterial;
        m_aw: number;
        m_ah: number;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        m_framecurrenttm: number;
        m_mat_dx: number;
        m_mat_dy: number;
        m_ride_h: number;
        m_user_data: any;
        m_name: string;
        m_name_dx: number;
        m_name_dy: number;
        m_name_sp: avatarname;
        m_hp: avatarhp;
        m_buff: avatarbuffui;
        m_b_cycle: boolean;
        m_b_stop_frame: number;
        m_sp_front: Laya.Sprite;
        m_sp_back: Laya.Sprite;
        m_sp_center: Laya.Sprite;
        m_sp_center_f: Laya.Sprite;
        m_sp_center_b: Laya.Sprite;
        m_sp_center_c: Laya.Sprite;
        m_sp_center_rf: Laya.Sprite;
        m_sp_center_rb: Laya.Sprite;
        m_adorn_list: Array<renderavatar_adorn>;
        m_dx: number;
        m_dy: number;
        m_org_pt: Laya.Point;
        private m_shadow_sp;
        private m_default_sp;
        private m_draw_avatar;
        private m_use_default;
        m_draw_link: boolean;
        constructor();
        re_init(shape: number, x: number, y: number, use_default?: boolean): void;
        show_shadow(flag: boolean): void;
        set_dxy(x: number, y: number): void;
        change_shape(shape: number): void;
        change_weapon(shape: number): void;
        change_wing(shape: number): void;
        change_ride(shape: number, backshape: number): void;
        set_ride_h(v: number): void;
        change_hair(shape: number): void;
        change_aura(shape: number): void;
        change_title(shape: number): void;
        private reset_data();
        set_name(name: any): void;
        set_name_dxy(x: number, y: number): void;
        set_dy(dy: number): void;
        get_buffui(): avatarbuffui;
        del_buffui(): void;
        add_buffeff(eff_id: number): number;
        del_buffeff(buff_eff_id: number): void;
        clearall_buffeff(): void;
        set_hp(v: number, m: number): void;
        del_hp(): void;
        add_adorn(sp: renderavatar_adorn, b_back: boolean): number;
        get_adorn(id: number): renderavatar_adorn;
        del_adorn(id: number): void;
        change_action(action: number, b_cycle?: boolean, stop_f?: number): void;
        change_dir(dir: number): void;
        private _project_mat(mat, mtype, shape, sp, b_create?);
        set_scale(sx: number, sy: number): void;
        private _get_mat_dx();
        private _get_mat_dy();
        private _get_weapon_sp(dir, b_mirror?);
        private _get_wing_sp(dir, b_mirror?);
        project(context: rendercontext): boolean;
        private _update_mat(mat, frame);
        update(delta: number): void;
        is_contain(x: number, y: number): boolean;
        private create_default_sp();
        private del_default_sp();
        dispose(): void;
    }
    class renderavatar_new extends renderobject {
        m_shape: number;
        m_shape_weapon: number;
        m_shape_wing: number;
        m_shape_ride: number;
        m_shape_backride: number;
        m_shape_hair: number;
        m_aura_id: number;
        m_aura_adorn: avatar_aura_new;
        m_title_id: number;
        m_title_adorn: avatar_aura_new;
        m_action: number;
        m_lastaction: number;
        m_dir: number;
        m_aw: number;
        m_ah: number;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        m_framecurrenttm: number;
        m_mat_dx: number;
        m_mat_dy: number;
        m_ride_h: number;
        m_user_data: any;
        m_name: string;
        m_name_dx: number;
        m_name_dy: number;
        m_name_sp: avatarname;
        m_hp: avatarhp;
        m_buff: avatarbuffui;
        m_buffeff_list: Array<avatar_aura_new>;
        m_eff_list: Array<avatar_aura_new>;
        m_b_cycle: boolean;
        m_b_stop_frame: number;
        m_sp_front: Laya.Sprite;
        m_sp_back: Laya.Sprite;
        m_sp_center: Laya.Sprite;
        m_adorn_list: Array<renderavatar_adorn>;
        m_dx: number;
        m_dy: number;
        m_org_pt: Laya.Point;
        m_shadow_sp: Laya.Texture;
        private m_default_sp;
        m_draw_avatar: boolean;
        private m_use_default;
        m_b_projected: boolean;
        m_draw_link: boolean;
        m_mat: lavataractionmat;
        m_mat_rt: Laya.Rectangle;
        m_mat_weapon: lavataractionmat;
        m_mat_weapon_rt: Laya.Rectangle;
        m_mat_wing: lavataractionmat;
        m_mat_wing_rt: Laya.Rectangle;
        m_mat_ride: lavataractionmat;
        m_mat_ride_rt: Laya.Rectangle;
        m_mat_backride: lavataractionmat;
        m_mat_backeride_rt: Laya.Rectangle;
        m_mat_hair: lavataractionmat;
        m_mat_hair_rt: Laya.Rectangle;
        constructor();
        re_init(shape: number, x: number, y: number, use_default?: boolean): void;
        show_shadow(flag: boolean): void;
        set_dxy(x: number, y: number): void;
        change_shape(shape: number): void;
        change_weapon(shape: number): void;
        change_wing(shape: number): void;
        change_ride(shape: number, backshape: number): void;
        set_ride_h(v: number): void;
        change_hair(shape: number): void;
        change_aura(shape: number): void;
        change_title(shape: number): void;
        private reset_data();
        set_name(name: any): void;
        set_name_dxy(x: number, y: number): void;
        set_dy(dy: number): void;
        get_buffui(): avatarbuffui;
        del_buffui(): void;
        addeff(eff_id: number, b_front?: boolean, dx?: number, dy?: number): number;
        del_eff(eff_id: number): void;
        clearall_eff(): void;
        add_buffeff(eff_id: number): number;
        del_buffeff(buff_eff_id: number): void;
        clearall_buffeff(): void;
        set_hp(v: number, m: number): void;
        del_hp(): void;
        add_adorn(sp: renderavatar_adorn, b_back: boolean): number;
        get_adorn(id: number): renderavatar_adorn;
        del_adorn(id: number): void;
        change_action(action: number, b_cycle?: boolean, stop_f?: number): void;
        change_dir(dir: number): void;
        private _project_mat(mat, cur_shape);
        set_scale(sx: number, sy: number): void;
        private _get_mat_dx();
        private _get_mat_dy();
        project(context: rendercontext): boolean;
        private _draw_mat(mat, link_idx, rt, dx, dy, b_body_mirrior, body_link_dir);
        update(delta: number): void;
        is_contain(x: number, y: number): boolean;
        private create_default_sp();
        private del_default_sp();
        dispose(): void;
    }
    class renderavatar extends renderavatar_new {
    }
}

declare module core {
    class rendereff extends renderobject {
        m_aniid: number;
        m_mat: effmaterial;
        m_aw: number;
        m_ah: number;
        m_framecount: number;
        m_framespeed: number;
        m_framecurrent: number;
        m_framemillsec: number;
        m_frametotalmillsec: number;
        m_framecurrenttm: number;
        m_b_loop: boolean;
        m_b_end: boolean;
        m_b_autodel: boolean;
        constructor();
        re_init(aniid: number, x: number, y: number, underunit?: boolean, autodel?: boolean): void;
        project(context: rendercontext): boolean;
        update(delta: number): void;
        dispose(): void;
    }
}

declare module core {
    class rendermap {
        m_bk: rendermapbk;
        m_slots: Array<rendermapslot>;
        m_mapid: number;
        m_mapw: number;
        m_maph: number;
        m_block: rendermapblock;
        m_pathfind: pathfind;
        constructor();
        setmapid(mapid: number, b_create_slot?: boolean): void;
        delallslot(): void;
        clear(): void;
        is_block(sx: number, sy: number): boolean;
        findpath(sx: number, sy: number, dx: number, dy: number, bclosest: boolean, spd: number): path;
        setbk(res: string): void;
        setsp(sp: Laya.Sprite): void;
        removesp(): void;
        dispose(): void;
        update(delta: number): void;
        project(context: rendercontext): boolean;
    }
}

declare module core {
    class rendermapbk extends renderobject {
        m_mat: mapbkmaterial;
        constructor();
        re_init(): void;
        setres(res: string): void;
        setsp(sp: Laya.Sprite): void;
        clearsp(): void;
        project(context: rendercontext): boolean;
        dispose(): void;
    }
}

declare module core {
    class rendermapblock extends renderobject {
        m_mat: mapblock;
        constructor();
        re_init(): void;
        setmapid(mapid: number): void;
        project(context: rendercontext): boolean;
        dispose(): void;
    }
}

declare module core {
    class rendermapslot extends renderobject {
        m_mapid: number;
        m_colnum: number;
        m_rownum: number;
        m_mat: mapslotmaterial;
        constructor();
        re_init(mapid: number, x: number, y: number, colnum: number, rownum: number): void;
        project(context: rendercontext): boolean;
        dispose(): void;
    }
}

declare module core {
    class renderspcontent extends laya.display.Sprite {
        m_w: number;
        m_h: number;
        constructor();
        update(delta: number): void;
        dispose(): void;
        selfremove(): void;
    }
}

declare module core {
    class rendersprite extends renderobject {
        m_sprite: renderspcontent;
        m_b_upon_unit: boolean;
        constructor();
        re_init(sp: renderspcontent, x: number, y: number, b_upon?: boolean): void;
        project(context: rendercontext): boolean;
        update(delta: number): void;
        dispose(): void;
    }
}

declare module core {
    class path {
        m_nodes: Array<pathnode>;
        m_dir_count: number;
        m_speed: number;
        m_cur_tm: number;
        m_cur_node_idx: number;
        m_ret_node: pathnode;
        m_unit_id: number;
        constructor(spd: number);
        init(spd: number): void;
        push_pt(sx: number, sy: number, dx: number, dy: number): void;
        start(): void;
        update(delta: number): void;
        get_end(): laya.maths.Point;
        is_end(): boolean;
        get_cur_pt(): pathnode;
        dispose(): void;
    }
}

declare module core {
    class pathfindnode extends laya.maths.Point {
        m_g: number;
        m_h: number;
        m_f: number;
        m_key: number;
        m_parent_x: number;
        m_parent_y: number;
        constructor(x?: number, y?: number);
        static _genkey(x: number, y: number): number;
        init(x: number, y: number): void;
        calc(dx: number, dy: number): number;
    }
    class pathfind {
        m_g_h: number;
        m_g_c: number;
        m_map_block_ref: mapblock;
        m_block_w_num: number;
        m_block_h_num: number;
        m_open_heap: utils.small_heap;
        m_open_flag: Object;
        m_close_flag: Object;
        constructor(mb: mapblock, w: number, h: number);
        set_block(mb: mapblock, w: number, h: number): void;
        private _get_pfd(x, y);
        private _del_pfd(nd);
        private _clear_pfd_cache();
        private _clear_openclose_flag();
        _add_node(x: number, y: number, cx: number, cy: number, cur_g: number, dx: number, dy: number): boolean;
        findpath(sx: number, sy: number, dx: number, dy: number, bclostest: boolean): Array<laya.maths.Point>;
        has_ptline_block(pt_line: Array<laya.maths.Point>): boolean;
        delsurpluspoint(path: Array<laya.maths.Point>): Array<laya.maths.Point>;
        has_block_between_2pt(sx: number, sy: number, dx: number, dy: number): boolean;
        dispose(): void;
    }
}

declare module core {
    class pathnode extends laya.maths.Point {
        m_end_pt: laya.maths.Point;
        m_start_tm: number;
        m_total_tm: number;
        m_dir: number;
        m_cur_pt: laya.maths.Point;
        m_dir_count: number;
        m_angle: number;
        m_dx: number;
        m_dy: number;
        m_dx_idis: number;
        m_dy_idis: number;
        m_idis_sec: number;
        m_idis_millsec: number;
        constructor(sx: number, sy: number, dx: number, dy: number, dircount?: number);
        init(sx: number, sy: number, dx: number, dy: number, dircount?: number): void;
        cal_total_tm(speed: number): void;
        is_end(tm: number): boolean;
        get_pos(tm: number): laya.maths.Point;
        dispose(): void;
    }
}

declare module utils {
    function getitembycls(sign: string, cls: any): any;
    function recover(sign: string, item: any): void;
    function clearbysign(sign: string): void;
}

declare module core {
    class rendercamera extends laya.maths.Rectangle {
        private m_tween;
        private m_dst;
        m_viewport: laya.maths.Rectangle;
        constructor();
        dispose(): void;
        update(delta: number): void;
        project(context: rendercontext): void;
        is_project(rt: laya.maths.Rectangle): boolean;
        set_pos(dx: number, dy: number, force?: boolean): void;
    }
}

declare module core {
    class rendercontext {
        m_render: renderimpl;
        m_camera: rendercamera;
        m_view: renderview;
        m_walk_speed: number;
        m_run_speed: number;
        constructor();
        get_move_spd(b_run: boolean): number;
        dispose(): void;
    }
}

declare module core {
    class renderimpl {
        m_camera: rendercamera;
        m_view: renderview;
        m_scene: renderscene;
        m_renderrcs: Array<rendercommand>;
        m_context: rendercontext;
        m_world_rect: laya.maths.Rectangle;
        m_eye: renderavatar;
        m_eye_tm: number;
        constructor();
        initstage(sp: laya.display.Sprite): void;
        setworldwh(w: number, h: number): void;
        getworldw(): number;
        getworldh(): number;
        set_eye(unit: renderavatar): void;
        _get_renderavatar_ins(shape: number, x: number, y: number, use_default?: boolean): renderavatar;
        _del_renderavatar_ins(ins: renderavatar): void;
        _get_rendereff_ins(aniid: number, x: number, y: number, underunit: boolean, autodel: boolean): rendereff;
        _del_rendereff_ins(ins: rendereff): void;
        _get_renderani_ins(aniid: number, x: number, y: number, underunit: boolean): renderani;
        _del_renderani_ins(ins: renderani): void;
        _get_rendersprite_ins(sp: renderspcontent, x: number, y: number, b_unit_front?: boolean): rendersprite;
        _del_rendersprite_ins(ins: rendersprite): void;
        update_camera_pos(delta: number): void;
        setcamerapos(x: number, y: number, force?: boolean): void;
        setviewport(w: number, h: number): void;
        getviewportw(): number;
        getviewporth(): number;
        dispose(): void;
        addrc(rc: rendercommand): void;
        update(delta: number): void;
        render(): void;
        check_click(x: number, y: number): number;
    }
}

declare module core {
    class renderscene {
        m_units: Array<renderavatar>;
        m_units_dict: Object;
        m_anis: Array<renderani>;
        m_effs: Array<rendereff>;
        m_tempeffs: Array<rendereff>;
        m_sprites: Array<rendersprite>;
        m_map: rendermap;
        m_unitpath: Array<path>;
        m_follow_list: Object;
        constructor();
        findpath(sx: number, sy: number, dx: number, dy: number, bclosest: boolean, spd: number): path;
        addpath(unit_path: path, unit_id: number): void;
        get_unitpath(unit_id: number): path;
        delpath(unit_id: number): path;
        addunit(name: string, unit: renderavatar): number;
        delunit(id: number): renderavatar;
        getunitbyud(ud: any): renderavatar;
        getunit(id: number): renderavatar;
        setunit_pos(id: number, x: number, y: number): void;
        setunit_dir(id: number, dir: number): void;
        setunit_action(id: number, action_id: number): void;
        clear(): void;
        dispose(): void;
        update(delta: number): void;
        project(context: rendercontext): void;
    }
}

declare module core {
    class renderview extends laya.display.Sprite {
        m_map_mask: Laya.Sprite;
        m_mapView: laya.display.Sprite;
        m_ani_underunit_View: laya.display.Sprite;
        m_unitshadow_View: Laya.Sprite;
        m_unitname_View: Laya.Sprite;
        m_unitground_View: Laya.Sprite;
        m_unitView: laya.display.Sprite;
        m_unitfront_View: Laya.Sprite;
        m_ani_uponunit_view: laya.display.Sprite;
        m_screeneffect_view: Laya.Sprite;
        constructor();
        renderbefore(): void;
        blackscreen(tm: number): void;
        blackreset(tm: number): void;
        resetscreenview(): void;
        renderafter(): void;
        update(delta: number): void;
        show_map_mask(flag: boolean, alpha?: number): void;
        project(context: rendercontext): void;
        get_mapviewport_canvas(context: rendercontext, w: number, h: number): Laya.HTMLCanvas;
        dispose(): void;
    }
}

declare module core {
    class filepackmgr {
        private m_pack_dict;
        constructor();
        delpack(pack_name: string): void;
        addpack(pack_name: string, buff: Laya.Byte): void;
        get_file(pack_name: string, file_name: string): Laya.Byte;
        get_file_len(pack_name: string, file_name: string): number;
    }
    function filepack_ins(): filepackmgr;
}

declare module utils {
    class game_data {
        constructor();
        dispose(): void;
    }
}

declare module utils {
    class game_data_mgr {
        private m_data_class_map;
        private m_data_map;
        constructor();
        register_data(name: string, module_cls: any): void;
        get_data(name: string): game_data;
        dispose(): void;
    }
    function data_ins(): game_data_mgr;
}

declare module utils {
    class game_event_receiver {
        protected m_event_func: Object;
        constructor();
        protected register_event_func(event: string, func: Function): void;
        protected unregister_event_func(event: string): void;
        protected unregister_all_event_func(): void;
        on_event(event: string, user_data?: any): void;
        dispose(): void;
    }
    class game_event_dispatcher {
        private m_pause;
        private m_handler_map;
        private m_handler_next_frame_map;
        constructor();
        pause(): void;
        resume(): void;
        register_event(event: string, hander: game_event_receiver): void;
        unregister_event(event: string, hander: game_event_receiver): void;
        unregister_allevent(hander: game_event_receiver): void;
        fire_event(event: string, user_data?: any): void;
        fire_event_next_frame(event: string, user_data?: any): void;
        dispatch_all_delay_event(): void;
        dispose(): void;
    }
    function event_ins(): game_event_dispatcher;
}

declare module utils {
    class game_module extends game_event_receiver {
        constructor();
        protected register_net_event(cmd: number, func: Function): void;
        protected unregister_net_event(cmd: number): void;
        register_event(event: string, func: Function): void;
        unregister_event(event: string): void;
        fire_event(event: string, user_data?: any): void;
        unregister_allevent(): void;
        fire_event_next_frame(event: string, user_data?: any): void;
        start(): void;
        update(delta: number): void;
        dispose(): void;
    }
}

declare module utils {
    class game_module_mgr {
        private m_module_class_map;
        private m_module_map;
        constructor();
        register_module(name: string, module_cls: any): void;
        get_module(name: string): game_module;
        dispose(): void;
    }
    function module_ins(): game_module_mgr;
}

declare module utils {
    class game_widget extends game_event_receiver {
        static m_start_id: number;
        private m_res_path;
        private m_extra_res_list;
        private m_ui_cls;
        m_ui: laya.ui.View;
        m_b_loaded: boolean;
        m_b_loading: boolean;
        m_b_show: boolean;
        private m_b_disposed;
        m_layer: WIDGET_LAYER;
        static s_res_dict: Object;
        static s_loaded_dict: Object;
        m_id: number;
        m_widget_name: string;
        m_ud: any;
        constructor(res_path: string, view_cls: any);
        protected append_extrares(res_url: string, res_type: string): void;
        move_center(): void;
        register_event(event: string, func: Function): void;
        unregister_event(event: string): void;
        unregister_allevent(): void;
        fire_event(event: string, user_data?: any): void;
        fire_event_next_frame(event: string, user_data?: any): void;
        protected register_btn_click(con_name: string, func: Function): void;
        protected unregister_btn_click(con_name: string, func: Function): void;
        private _get_con(node, name);
        get_con(con_name: string): any;
        load(): void;
        private init_uiins();
        private on_load_complete();
        private on_load_error(err);
        on_init(): void;
        on_show(flag: boolean): void;
        on_dispose(): void;
        show(flag: boolean): void;
        dispose(): void;
    }
}

declare module utils {
    class ui_loadingUI extends laya.ui.Dialog {
        m_logo: Laya.Image;
        m_progress: Laya.Label;
        m_logo_grey: Laya.Image;
        m_ani: Laya.Animation;
        m_mask: Laya.Sprite;
        private m_b_use_ani;
        static uiView: any;
        constructor();
        createChildren(): void;
        init(): void;
        start(): void;
        update(): void;
    }
    class game_widget_mgr {
        private m_widget_class_map;
        private m_widget_group_map;
        private m_widget_map;
        private m_root_view;
        private m_view_ins;
        private m_release_dict;
        private m_loading_ui;
        private m_loadingui_dict;
        private m_loadingui_refs;
        constructor();
        show_loadingui(): void;
        hide_loadingui(): void;
        update_loadingui(): void;
        del_loadingui(): void;
        start_load(uiins: game_widget): void;
        end_load(uiins: game_widget): void;
        add_preload_res(path: string): void;
        set_root(sp: laya.display.Sprite): void;
        get_view(layer: WIDGET_LAYER): laya.display.Sprite;
        register_widget(name: string, widget_cls: any, w_group?: WIDGET_GROUP): void;
        set_widget_group(name: string, w_group: WIDGET_GROUP): void;
        get_module(name: string): game_widget;
        show_widget(widget_name: string, flag: boolean, ud?: any): void;
        call_widget_hide(w: game_widget): void;
        check_release(): void;
        show_widget_bygroup(v: WIDGET_GROUP, flag: boolean, ud?: any): void;
        is_widget_show(widget_name: string): boolean;
        dispose(): void;
    }
    function widget_ins(): game_widget_mgr;
}

declare module utils {
    class game_widget_view extends laya.display.Sprite {
        m_view_scene: laya.display.Sprite;
        m_view_bk: laya.display.Sprite;
        m_view_bottom: laya.display.Sprite;
        m_view_normal: laya.display.Sprite;
        m_view_tips: laya.display.Sprite;
        m_view_popup: laya.display.Sprite;
        m_view_top: laya.display.Sprite;
        m_view_topmost: laya.display.Sprite;
        constructor();
        get_view(layer: WIDGET_LAYER): laya.display.Sprite;
        dispose(): void;
    }
}

declare module utils {
    enum WIDGET_LAYER {
        SCENE = 0,
        BACKGROUND = 1,
        BOTTOM = 2,
        NORMAL = 3,
        POPUP = 4,
        TIPS = 5,
        TOP = 6,
        TOPMOST = 7,
    }
    enum WIDGET_GROUP {
        GROUP_DEFAULT = 0,
        GROUP_0 = 1,
        GROUP_1 = 2,
        GROUP_2 = 3,
        GROUP_3 = 4,
        GROUP_4 = 5,
    }
}

declare module utils {
    class heap_node {
        m_value: number;
        m_user_data: Object;
        m_user_id: number;
        constructor(v?: number, uid?: number, ud?: Object);
        init(v: number, uid: number, ud: Object): void;
    }
    class small_heap {
        private m_array;
        constructor();
        private _get_nd(v, uid?, ud?);
        private _del_nd(nd);
        private _clear_nd();
        private _cmp_v(v1, v2);
        private _filter_up(start);
        private _filter_down(start);
        push(v: number, uid?: number, ud?: Object): heap_node;
        pop(): void;
        get_idx(id: number): number;
        modify(idx: number, v: number): void;
        clear(): void;
        top(): heap_node;
        is_empty(): boolean;
        print_data(pre?: string): void;
    }
}

declare module utils {
    function get_view_wh(): {};
    function get_render_milltm(): number;
    function getRandom(n: any, m: any): number;
    function genangle(dx: number, dy: number): number;
    function gendir(dx: number, dy: number, dircount?: number, ale?: number): number;
    function genafrom2point(sx: number, sy: number, dx: number, dy: number): number;
    function genbfrom2point(sx: number, sy: number, a: number): number;
    function genpointlinefrom2point(sx: number, sy: number, dx: number, dy: number, gridw?: number, gridh?: number): Array<laya.maths.Point>;
}
