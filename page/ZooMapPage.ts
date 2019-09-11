/**
* 飞禽走兽
*/
module gamezoo.page {
    import TextFieldU = utils.TextFieldU;
    import Path_game_zoo = gamezoo.data.Path;
    const enum MAP_STATUS {
        PLAY_STATUS_NONE = 0, // 准备阶段
        PLAY_STATUS_GAMESTART = 1, // 游戏开始
        PLAY_STATUS_WASH_CARD = 2, // 洗牌阶段
        PLAY_STATUS_BET = 3,// 下注阶段
        PLAY_STATUS_STOP_BET = 4,// 停止下注阶段
        PLAY_STATUS_PUSH_CARD = 5, // 发牌阶段
        PLAY_STATUS_SHOW_CARD = 6, // 开牌阶段
        PLAY_STATUS_SETTLE = 7, // 结算阶段
        PLAY_STATUS_SHOW_INFO = 8, // 显示结算框阶段
        PLAY_STATUS_RELAX = 9, // 休息阶段
    }
    const CHIP_TYPE_NUM = 5; // 筹码类型种类
    const BET_AREA_NUM = 11; // 下注区域数
    const ALL_GAME_ROOM_CONFIG_ID = [202, 203, 204, 205];// 可进入的maplv
    const MONEY_LIMIT_CONFIG = {
        "202": 5000,    //新手投注限额
        "203": 8000,  //小资投注限额
        "204": 25000,  //老板投注限额
        "205": 50000,    //富豪投注限额
    };
    const ROOM_CHIP_CONFIG = {
        "202": [1, 10, 50, 100, 1000],     //新手
        "203": [10, 50, 100, 500, 1000],   //小资
        "204": [50, 100, 500, 1000, 5000],  //老板
        "205": [100, 500, 1000, 5000, 10000],  //富豪
    };
    const enum ANIMAL_TYPE {
        TYPE_KQ = 1,         //孔雀
        TYPE_GZ = 2,         //鸽子
        TYPE_HZ = 5,         //猴子
        TYPE_XM = 6,         //熊猫
        TYPE_YZ = 7,         //燕子
        TYPE_LY = 8,         //老鹰
        TYPE_TZ = 10,        //兔子
        TYPE_SZ = 11,        //狮子
        TYPE_TC = 12,        //通吃
        TYPE_TP = 13,        //通赔
        TYPE_JS = 99,        //金鲨
        TYPE_YS = 100,       //银鲨
    }
    const ALL_ANIMAL: number[] = [
        ANIMAL_TYPE.TYPE_YZ, ANIMAL_TYPE.TYPE_YZ, ANIMAL_TYPE.TYPE_YZ, ANIMAL_TYPE.TYPE_JS, ANIMAL_TYPE.TYPE_TZ,
        ANIMAL_TYPE.TYPE_TZ, ANIMAL_TYPE.TYPE_TZ, ANIMAL_TYPE.TYPE_HZ, ANIMAL_TYPE.TYPE_HZ, ANIMAL_TYPE.TYPE_HZ,
        ANIMAL_TYPE.TYPE_TC, ANIMAL_TYPE.TYPE_XM, ANIMAL_TYPE.TYPE_XM, ANIMAL_TYPE.TYPE_XM, ANIMAL_TYPE.TYPE_SZ,
        ANIMAL_TYPE.TYPE_SZ, ANIMAL_TYPE.TYPE_SZ, ANIMAL_TYPE.TYPE_YS, ANIMAL_TYPE.TYPE_LY, ANIMAL_TYPE.TYPE_LY,
        ANIMAL_TYPE.TYPE_LY, ANIMAL_TYPE.TYPE_KQ, ANIMAL_TYPE.TYPE_KQ, ANIMAL_TYPE.TYPE_KQ, ANIMAL_TYPE.TYPE_TP,
        ANIMAL_TYPE.TYPE_GZ, ANIMAL_TYPE.TYPE_GZ, ANIMAL_TYPE.TYPE_GZ,
    ];
    const ANIMAL_NAME: any = {
        1: "孔雀、飞禽",
        2: "鸽子、飞禽",
        5: "猴子、走兽",
        6: "熊猫、走兽",
        7: "燕子、飞禽",
        8: "老鹰、飞禽",
        10: "兔子、走兽",
        11: "狮子、走兽",
        12: "通吃",
        13: "通赔",
        99: "金鲨",
        100: "银鲨",
    }

    export class ZooMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.feiqinzoushou.FeiQinZouShouUI;
        private _zooStory: ZooStory;
        private _zooMapInfo: ZooMapInfo;
        private _curChip: number;//当前选择筹码
        private _curChipY: number;//当前选择筹码y轴位置
        private _chipList: Array<Button> = [];//筹码UI集合
        private _chipGuangList: Array<LImage> = [];//筹码光效UI集合
        private _chipArr: Array<number> = [];//筹码大小类型
        private _chipSortScore: number = 0;//筹码层级
        private _allChips: Array<Array<any>> = [];//所有筹码
        private _areaList: Array<any> = [];//下注区域UI集合
        private _areaKuangList: Array<any> = [];//下注区域边框集合
        private _allTotalBetUI: Label[] = [];//下注文本
        private _allMainBetUI: Label[] = [];//自己下注文本
        private _allTotalBet: Array<number> = [];//所有玩家总下注
        private _allMainBet: Array<number> = [];//所有主玩家下注
        private _rebetList: Array<number> = [];//重复下注列表
        private _lottery: string = "";//中奖区域
        private _betMainTotal: number = 0;//玩家总下注
        private _mainPlayerBenefit: number;//玩家收益
        private _clipList: Array<ZooClip> = [];//飘字集合
        private _betlimit: number;//投注限额
        private _curStatus: number;//当前地图状态
        private _countDown: number;//倒计时时间戳
        private _lotteryIndex: number = 0;
        private _effPage: ZooEffectPage;
        private _htmlText: laya.html.dom.HTMLDivElement;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + 'dating.atlas',
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.feiqinzoushou.FeiQinZouShouUI');
            this.addChild(this._viewUI);
            this._viewUI.txt_status.visible = false;
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("BcbmMapPage");//额外界面控制器
            }

            this._effPage = new ZooEffectPage(this._game, this._viewUI.box_zoo, this._viewUI);

            this._chipList = [];
            this._chipGuangList = [];
            for (let i: number = 0; i < CHIP_TYPE_NUM; i++) {
                this._chipList.push(this._viewUI["btn_chip" + i]);
                this._chipGuangList.push(this._viewUI["guang" + i]);
                if (i == 0) {
                    this._curChipY = this._chipList[i].y;
                }
            }

            this._allChips = [];
            this._allTotalBet = [];
            this._allMainBet = [];
            this._rebetList = [];
            for (let i: number = 0; i < BET_AREA_NUM; i++) {
                this._allChips[i] = [];
                this._allTotalBet[i] = 0;
                this._allMainBet[i] = 0;
                this._rebetList[i] = 0;
            }

            this._areaList = [];
            this._areaKuangList = [];
            this._allMainBetUI = [];
            this._allTotalBetUI = [];
            for (let i: number = 0; i < BET_AREA_NUM; i++) {
                this._areaList.push(this._viewUI["area" + i]);
                this._areaKuangList.push(this._viewUI["kuang" + i]);
                this._areaKuangList[i].visible = false;
                this._allMainBetUI[i] = this._viewUI["txt_main_" + i];
                this._allTotalBetUI[i] = this._viewUI["txt_total_" + i];
            }

            this._viewUI.list_record.itemRender = this.createChildren("game_ui.feiqinzoushou.component.RecordItemUI", MapRecordRender);
            this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);

            if (!this._htmlText) {
                this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
            }
            this._viewUI.mouseThrough = true;
            this._game.playMusic(Path_game_zoo.music_zoo + "zoo_bgm.mp3");
            this._viewUI.btn_repeat.disabled = true;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._zooStory = this._game.sceneObjectMgr.story as ZooStory;

            this._game.sceneObjectMgr.on(ZooMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.on(ZooMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.on(ZooMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
            this._game.sceneObjectMgr.on(ZooMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.sceneObjectMgr.on(ZooMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig);//地图传送参数
            this._game.sceneObjectMgr.on(ZooMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

            this.SetListen();

            this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
            this._viewUI.box_menu.zOrder = 99;
            this._viewUI.box_menu.visible = false;

            this.onSelectChip(0);
            this.onUpdateUnit();
            this.onUpdateUnitOffline();
            this.onUpdateMapInfo();
            this.updateBetNum();
            this.resetUI();
            this.onUpdateRecord();
        }



        private SetListen(): void {
            this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);

            for (let i: number = 0; i < this._chipList.length; i++) {
                this._chipList[i] && this._chipList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
            }

            for (let i: number = 0; i < this._areaList.length; i++) {
                this._areaList[i] && this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
            }

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_spread) {
                this.showMenu(false);
            }
        }

        showMenu(isShow: boolean) {
            if (isShow) {
                this._viewUI.box_menu.visible = true;
                this._viewUI.btn_spread.visible = false;
                this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn)
            } else {
                if (this._viewUI.box_menu.y >= 0) {
                    Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, () => {
                        this._viewUI.btn_spread.visible = true;
                        this._viewUI.box_menu.visible = false;
                    }));
                }
            }
        }

        //按钮缓动回调
        protected onBtnTweenEnd(e: any, target: any): void {
            switch (target) {
                case this._viewUI.btn_spread:
                    this.showMenu(true);
                    break;
                case this._viewUI.btn_rule:
                    this._game.uiRoot.general.open(ZooPageDef.PAGE_ZOO_RULE);
                    break;
                case this._viewUI.btn_set:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING)
                    break;
                case this._viewUI.btn_qifu:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU)
                    break;
                case this._viewUI.btn_zhanji:
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = ZooPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_back:
                    let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
                    let totalBet = 0;
                    for (let i: number = 0; i < this._allMainBet.length; i++) {
                        totalBet += this._allMainBet[i];
                    }
                    if (totalBet && mapinfo && mapinfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }

                    TongyongPageDef.ins.alertClose("zoo", this, this.onClickCancle);
                    break;
                case this._viewUI.btn_playerList://玩家列表
                    this._game.uiRoot.general.open(ZooPageDef.PAGE_ZOO_PLAYER_LIST);
                    break;
                case this._viewUI.btn_repeat:
                    if (this.showIsGuest()) return;
                    this.repeatBet();
                    break;
                case this._viewUI.btn_chong:
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        //确定退出回调
        private onClickCancle(): void {
            this._game.sceneObjectMgr.leaveStory(true);
        }

        //选择筹码
        private onSelectChip(index: number): void {
            this._curChip = this._chipArr[index];
            for (let i: number = 0; i < this._chipList.length; i++) {
                this._chipGuangList[i].visible = i == index;
                this._chipList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
            }
        }

        //重复下注
        private repeatBet(): void {
            if (this.showIsGuest()) return;
            let betArr = [];
            let total = 0;
            for (let i = 0; i < this._rebetList.length; i++) {
                total += this._rebetList[i];
            }
            if (total > this._game.sceneObjectMgr.mainUnit.GetMoney()) {
                this._game.uiRoot.topUnder.showTips("老板,您的金币不够重复下注啦~");
                return;
            }
            for (let i = 0; i < this._rebetList.length; i++) {
                let antes = this._rebetList[i]//之前区域i下注总额
                if (antes) {
                    //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                    for (let j = this._chipArr.length - 1; j >= 0; j--) {
                        if (!antes) break;
                        let num = Math.floor(antes / this._chipArr[j]);
                        if (num) {
                            antes = antes - this._chipArr[j] * num;
                            for (let k = 0; k < num; k++) {
                                this._game.network.call_zoo_bet(this._chipArr[j], i + 1);
                            }
                        }
                    }
                }
            }
        }

        //下注
        private _betWait: boolean = false;
        private onAreaBetClick(index: number, e: LEvent): void {
            if (this.showIsGuest()) return;
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                return;
            }
            if (this._betWait) return;//投注间隔
            let total = this._allMainBet[index];
            if (this._curChip + total > this._betlimit) {
                this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                return;
            }
            let money = this._game.sceneObjectMgr.mainUnit.GetMoney();
            if (!this._curChip) {
                TongyongPageDef.ins.alertRecharge("老板，您的金币不足哦~\n补充点金币去大杀四方吧~", () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, false, TongyongPageDef.TIPS_SKIN_STR['cz']);
                return;
            }
            if (this._curChip > money) {
                this._game.uiRoot.topUnder.showTips("老板，您的金币不足哦~");
                return;
            }
            this._betWait = true;
            this._areaKuangList[index].visible = true;
            Laya.timer.once(500, this, () => {
                this._betWait = false;
                this._areaKuangList[index].visible = false;
            })
            this._game.network.call_zoo_bet(this._curChip, index + 1)
        }

        //帧心跳
        update(diff: number) {
            super.update(diff);
            if (this._effPage) {
                this._effPage.Update(diff);
            }
        }

        //帧间隔心跳
        deltaUpdate() {
            let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
            if (!mapinfo) return;
            if (!this._viewUI) return;
            let bool = this._curStatus == MAP_STATUS.PLAY_STATUS_BET;
            if (!bool) {
                this._viewUI.box_time.visible = false;
                return;
            }
            if (!this._countDown) {
                this._countDown = mapinfo.GetCountDown();
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime);
            this._viewUI.box_time.visible = time > 0;
            this._viewUI.box_time.txt_time.text = time.toString();
            if (time <= 3 && !this._viewUI.box_time.ani1.isPlaying) {
                this._viewUI.box_time.ani1.play(1, true);
            }
            if (time > 3) {
                this._viewUI.box_time.ani1.gotoAndStop(24);
            }

            if (time == 1) {
                this._game.playSound(PathGameTongyong.music_tongyong + "time2.mp3", false);
            } else if (time == 2 || time == 3) {
                this._game.playSound(PathGameTongyong.music_tongyong + "time1.mp3", false);
            }
        }

        //玩家进来了
        private onUnitAdd(u: Unit) {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
        }

        private onUpdateUnit(qifu_index?: number) {
            let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
            if (!mapinfo) return;
            let battleInfoMgr = mapinfo.battleInfoMgr;
            //主玩家的座位
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let headImg = mainUnit.GetHeadImg();
                this._viewUI.lab_name.text = getMainPlayerName(mainUnit.GetName());
                if (headImg) {
                    this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                }
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                money && (this._viewUI.lab_money.text = money.toString());
                let mainIdx = mainUnit.GetIndex();
                this._viewUI.img_txk.visible = mainUnit.GetVipLevel() > 0;
                if (this._viewUI.img_txk.visible) {
                    this._viewUI.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainUnit.GetVipLevel() + ".png";
                }
                //祈福成功 头像上就有动画
                if (qifu_index && mainIdx == qifu_index) {
                    this._viewUI.qifu_type.visible = true;
                    this._viewUI.qifu_type.skin = this._qifuTypeImgUrl;
                    this.playTween(this._viewUI.qifu_type, qifu_index);
                }
                //时间戳变化 才加上祈福标志
                if (mainUnit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                    if (qifu_index && mainIdx == qifu_index) {
                        Laya.timer.once(2500, this, () => {
                            this._viewUI.img_qifu.visible = true;
                            if (mainUnit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                                this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        })
                    } else {
                        this._viewUI.img_qifu.visible = true;
                        if (mainUnit.GetQiFuType()) {
                            let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                            this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                        }
                    }
                } else {
                    this._viewUI.img_qifu.visible = false;
                }
            }
            let onlineNum = 0;
            for (let key in this._game.sceneObjectMgr.unitDic) {
                if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                    let unit = this._game.sceneObjectMgr.unitDic[key];
                    if (unit) {
                        onlineNum++;
                    }
                }
            }
            let maplv = mapinfo.GetMapLevel();
            if (maplv == Web_operation_fields.GAME_ROOM_CONFIG_ZOO_1) {
                let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
                if (curHour >= 1 && curHour < 13) {
                    onlineNum += 50
                } else {
                    onlineNum += 150
                }
            } else if (maplv == Web_operation_fields.GAME_ROOM_CONFIG_ZOO_2) {
                let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
                if (curHour >= 19 || curHour < 1) {
                    onlineNum += 100
                }
            }
            let innerHtml = StringU.substitute("在线<span style='color:#18ff00'>{0}</span>人", onlineNum);
            this._htmlText.innerHTML = innerHtml;
            this.onUpdateChipGrey();
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }
        private _timeList1: { [key: number]: number } = {};
        private _firstList1: { [key: number]: number } = {};
        private playTween1(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList1[index]) {
                this._timeList1[index] = 0;
            }
            if (this._timeList1[index] >= 2500) {
                this._timeList1[index] = 0;
                this._firstList1[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween1, [img, index, !isTween]), this._firstList1[index] ? this._diff : 0);
            this._timeList1[index] += this._diff;
            this._firstList1[index] = 1;
        }

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        let dataInfo = JSON.parse(msg.data);
                        //打开祈福动画界面
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                            page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        });
                        //相对应的玩家精灵做出反应
                        this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
        }

        //更新地图信息
        private onUpdateMapInfo(): void {
            let mapinfo = this._game.sceneObjectMgr.mapInfo;
            this._zooMapInfo = mapinfo as ZooMapInfo;
            if (mapinfo) {
                this.initRoomConfig();
                this.onUpdateBattle();
                this.onUpdateStatus();
                this.onUpdateRecord();
            }
        }

        private initRoomConfig(): void {
            let maplv = this._zooMapInfo.GetMapLevel();
            if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                this._chipArr = ROOM_CHIP_CONFIG[maplv];
                this._betlimit = MONEY_LIMIT_CONFIG[maplv];

                if (!this._chipArr) return;
                for (let i = 0; i < this._chipArr.length; i++) {
                    this._chipList[i].label = this._chipArr[i].toString();
                }
                if (!this._curChip) this.onSelectChip(0);
            }
        }

        private onUpdateCountDown(): void {
            let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
            if (!mapinfo) return;
            this._countDown = mapinfo.GetCountDown();
        }

        private onUpdateChipGrey() {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let money: number = this._game.sceneObjectMgr.mainUnit.GetMoney();
            for (let i = 0; i < this._chipList.length; i++) {
                let index = this._chipList.length - 1 - i;
                if (money < this._chipArr[index]) {
                    this._chipList[index].disabled = true;
                    this._chipList[index].y = this._curChipY;
                    if (this._curChip == this._chipArr[index]) {

                    }
                } else {
                    this._chipList[index].disabled = false;
                }
            }
        }

        private isPlayingEff(): boolean {
            return this._effPage && this._effPage.isPlaying;
        }

        private onUpdateUnitOffline() {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
            this._viewUI.lab_name.text = getMainPlayerName(mainPlayerInfo.nickname);
            this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
            let money = EnumToString.getPointBackNum(mainPlayerInfo.money, 2);
            this._viewUI.lab_money.text = money.toString();
            this._viewUI.img_qifu.visible = mainPlayerInfo.qifu_endtime > this._game.sync.serverTimeBys;
            if (this._viewUI.img_qifu.visible) {
                this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
            }
        }

        private updateMoney(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                this._viewUI.lab_money.text = money.toString();
            }
        }

        //战斗结构体更新
        private _battleIndex: number = -1;
        private _lotteryInfo: gamecomponent.object.BattleInfoBCBMLottery;
        private onUpdateBattle() {
            let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
            if (!mapinfo) return;
            let battleInfoMgr = mapinfo.battleInfoMgr;
            if (!battleInfoMgr) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let info = battleInfoMgr.info[i];
                if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleBet(info, i);
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoBCBMLottery) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this._lotteryInfo = info;
                        this._lotteryIndex = info.lotteryIndex;
                        if (this._lotteryIndex == 99 || this._lotteryIndex == 100) {
                            this._lotteryIndex = 9;
                        }
                        this._lottery = ANIMAL_NAME[info.lotteryIndex];
                        console.log("飞禽走兽开奖索引：" + info.lotteryIndex);
                        let index: number = info.lotteryPos - 1;
                        if (this._effPage) {
                            this._effPage.playEff(index, info.startTime, Handler.create(this, this.onEffComplete, null, false));
                            if (!this._zooStory.isReconnect) {
                                // this._game.playSound(Path.music_benchibaoma + "paoche.mp3");
                            }
                        }
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoSettle) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleSettle(info);
                    }
                }

            }
        }

        private onEffComplete(callType: number, type: number, index: number, isFirst: boolean, totalIdx: number = 0, startIdx: number = 0, endIdx: number = 0): void {
            if (callType == 1) {    //奖励
                let animalType: number = ALL_ANIMAL[index];
                //没有通吃通赔音效，先不放了
                if (animalType != 12 && animalType != 13)
                    this._game.playSound(Path_game_zoo.music_zoo + "animal_" + animalType + ".mp3");
            }
        }


        //战斗日志来更新桌面上的筹码
        private onBattleBet(info: any, index: number): void {
            //主玩家的座位
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let startIdx: number;
            let targetIdx: number;
            let isMainPlayer: boolean = info.SeatIndex == mainIdx;
            if (isMainPlayer) {//主玩家
                startIdx = 0;
                let startX = this._viewUI.img_head.x;
                let startY = this._viewUI.img_head.y;
                let endX = this._viewUI.img_head.x;
                let endY = this._viewUI.img_head.y + 10;
                this.moveHead(this._viewUI.img_head, startX, startY, endX, endY);
            } else {//其他玩家
                startIdx = 1;
                this.moveHead(this._viewUI.btn_playerList, 49, 580, 67, 562);
            }
            targetIdx = info.BetIndex;
            let type = this._chipArr.indexOf(info.BetVal) + 1;
            this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
            this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
        }

        //头像出筹码动态效果
        private moveHead(view, startX, startY, endX, endY): void {
            Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, () => {
                Laya.Tween.to(view, { x: startX, y: startY }, 150);
            }))
        }

        private updateChipOnTable(index: number, bet: number, isMainPlayer: boolean) {
            if (index < 0 || index >= this._allTotalBet.length) return;
            this._allTotalBet[index] += bet;
            if (isMainPlayer) {
                this._allMainBet[index] += bet;
                this._betMainTotal += bet;
            }
            this.updateBetNum();
        }

        private updateBetNum(): void {
            for (let i: number = 0; i < this._allMainBet.length; i++) {
                this._allMainBetUI[i].text = this._allMainBet[i] + "";
                this._allTotalBetUI[i].text = this._allTotalBet[i] + "";
            }
        }

        private onBattleSettle(info: any): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                this._mainPlayerBenefit = parseFloat(info.SettleVal);
            }
            if (info.SettleVal == 0) return;
            this.addMoneyClip(info.SeatIndex, info.SettleVal);
        }

        //更新地图状态
        private onUpdateStatus() {
            let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
            if (!mapinfo) return;
            if (this._curStatus == mapinfo.GetMapState()) return;
            this._curStatus = mapinfo.GetMapState();
            this._viewUI.btn_repeat.disabled = this._curStatus != MAP_STATUS.PLAY_STATUS_BET;
            if (this._game.uiRoot.HUD.isOpened(ZooPageDef.PAGE_ZOO_TONGSHA) && this._curStatus >= MAP_STATUS.PLAY_STATUS_WASH_CARD) {
                this._game.uiRoot.HUD.close(ZooPageDef.PAGE_ZOO_TONGSHA)
            }
            this._viewUI.box_tip.visible = false;
            switch (this._curStatus) {
                case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
                    this._viewUI.box_tip.visible = true;
                    this.resetUI();
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                    break;
                case MAP_STATUS.PLAY_STATUS_WASH_CARD:// 游戏开始
                    this.resetUI();
                    this._pageHandle.pushOpen({ id: ZooPageDef.PAGE_ZOO_BEGIN, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_zoo.music_zoo + "call_start.mp3");
                    this._game.playSound(Path_game_zoo.music_zoo + "xiazhu_start.mp3");
                    break;
                case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
                    this._pageHandle.pushClose({ id: ZooPageDef.PAGE_ZOO_BEGIN, parent: this._game.uiRoot.HUD });
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.clip_status.index = 0;
                    let bool = false;
                    for (let i = 0; i < this._rebetList.length; i++) {
                        if (this._rebetList[i] > 0) {
                            bool = true;
                            break;
                        }
                    }
                    this._viewUI.btn_repeat.disabled = !bool;
                    break;
                case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注阶段
                    this._pageHandle.pushOpen({ id: ZooPageDef.PAGE_ZOO_END, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_zoo.music_zoo + "dingding_end.mp3");
                    this._game.playSound(Path_game_zoo.music_zoo + "xiazhu_end.mp3");
                    break;
                case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
                    this._pageHandle.pushClose({ id: ZooPageDef.PAGE_ZOO_END, parent: this._game.uiRoot.HUD });
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.txt_status.text = "";
                    this._viewUI.clip_status.index = 1;
                    let betAllTotal = 0;
                    for (let i = 0; i < this._allMainBet.length; i++) {
                        betAllTotal += this._allMainBet[i];
                    }
                    if (betAllTotal > 0) {
                        for (let i = 0; i < this._allMainBet.length; i++) {
                            this._rebetList[i] = this._allMainBet[i];
                        }
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_CARD:// 停止下注（开牌）阶段
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.clip_status.index = 1;
                    for (let i: number = 0; i < this._allMainBet.length; i++) {
                        if (this._allMainBet[i]) this._rebetList[i] = this._allMainBet[i];
                    }
                    this._zooStory.isReconnect = false;
                    break;
                case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
                    this._viewUI.box_tip.visible = true;
                    this._viewUI.clip_status.index = 2;
                    this.flyChipEffect();
                    this.updateMoney();
                    Laya.timer.once(1000, this, () => {
                        if (this._mainPlayerBenefit >= 0) {
                            let rand = MathU.randomRange(1, 3);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                        } else if (this._mainPlayerBenefit < 0) {
                            let rand = MathU.randomRange(1, 4);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                        }
                    });
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_INFO:// 显示结算框阶段
                    //打开结算界面
                    this._viewUI.clip_status.index = 2;
                    this._pageHandle.pushOpen({
                        id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                        dataSource: { myBet: this._betMainTotal, myBenefit: this._mainPlayerBenefit, lottery: this._lottery },
                        parent: this._game.uiRoot.HUD
                    });
                    break;
                case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this.resetUI();
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                    this._viewUI.box_tip.visible = true;
                    this._zooStory.isReconnect = false;
                    break;

            }
            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        private onUpdateRecord(): void {
            let mapinfo: ZooMapInfo = this._game.sceneObjectMgr.mapInfo as ZooMapInfo;
            if (!mapinfo) return;
            let recordArr = [];
            if (mapinfo.GetGameRecord() != "") {
                recordArr = JSON.parse(mapinfo.GetGameRecord());
                //倒序
                for (let i = 0; i < recordArr.length / 2; i++) {
                    let val = recordArr[i];
                    recordArr[i] = recordArr[recordArr.length - 1 - i];
                    recordArr[recordArr.length - 1 - i] = val;
                }
            }
            this._viewUI.list_record.dataSource = recordArr;
        }

        private renderHandler(cell: MapRecordRender, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }



        //重置UI
        private resetUI(): void {
            this._battleIndex = -1;
            this.clearClips();
            this.clearChip();
            this._betMainTotal = 0;
            this._mainPlayerBenefit = 0;
            this._lottery = "";
            for (let i: number = 0; i < this._allMainBet.length; i++) {
                this._allMainBet[i] = 0;
                this._allTotalBet[i] = 0;
                this._allMainBetUI[i].text = "0";
                this._allTotalBetUI[i].text = "0";
            }
            if (this._effPage) {
                this._effPage.clear();
            }
        }

        private showIsGuest(): boolean {
            if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                TongyongPageDef.ins.alertRecharge("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空！对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全，我们强烈建议您先绑定手机！",
                    () => { }, () => { }, true,TongyongPageDef.TIPS_SKIN_STR['qd']);
                return true;
            }
            return false;
        }

        //金币变化 飘字clip
        public addMoneyClip(index: number, value: number): void {
            let valueClip = value >= 0 ? new ZooClip(ZooClip.ADD_MONEY_FONT) : new ZooClip(ZooClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            valueClip.setText(Math.abs(value) + "", true, false, preSkin);
            if (index == this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                let playerIcon = this._viewUI.img_head;
                valueClip.x = playerIcon.x;
                valueClip.y = playerIcon.y;
                playerIcon.parent.addChild(valueClip);
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: valueClip.y - 25 }, 1500);
            }
        }

        //清理飘字clip
        private clearClips(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._clipList = [];
        }

        //判断是飞禽还是走兽
        private checkAniamlType(val: number): number {
            let animal: number = 0;
            if (val == 1 || val == 2 || val == 7 || val == 8) {
                animal = 3;
            } else if (val == 5 || val == 6 || val == 10 || val == 11) {
                animal = 4;
            }
            return animal
        }

        //创建筹码
        private createChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            if (targetIdx < 1 || targetIdx > this._allChips.length) return;

            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ZooChip) as ZooChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._allChips[targetIdx - 1].push(chip);
            let status = this._game.sceneObjectMgr.mapInfo.GetMapState();
            if (status != MAP_STATUS.PLAY_STATUS_BET) {
                chip.drawChip();
            }
            else {
                Laya.timer.once(350, this, () => {
                    chip.sendChip();
                    this._game.playSound(Path_game_zoo.music_zoo + "chouma.mp3", false);
                })
            }
            this._chipSortScore = index;//存下来最后一个筹码层级
        }

        //结算飘筹码
        private flyChipEffect(): void {
            //遍历四个区域的游戏结果
            for (let i = 0; i < this._allChips.length; i++) {
                let chipArr = this._allChips[i];
                if (this._lotteryIndex == 12) { //通吃
                    this._game.playSound(Path_game_zoo.music_zoo + "chouma_fly.mp3", false);
                    for (let j = 0; j < chipArr.length; j++) {
                        let chip: ZooChip = chipArr[j];
                        chip.flyChip(2, false, j);//庄家先收筹码
                    }
                } else if (this._lotteryIndex == 13) {  //通赔
                    this._game.playSound(Path_game_zoo.music_zoo + "chouma_fly.mp3", false);
                    for (let j = 0; j < 20; j++) {
                        if (chipArr.length > 0) {
                            let ranType = MathU.randomRange(1, 5);
                            let ranVal = this._chipArr[ranType - 1];
                            this._chipSortScore++;
                            this.bankerFlyChip(2, i + 1, ranType, ranVal, this._chipSortScore, -1);
                        }
                    }
                    Laya.timer.once(2000, this, () => {
                        this._game.playSound(Path_game_zoo.music_zoo + "chouma_fly.mp3", false);
                        for (let j = 0; j < chipArr.length; j++) {
                            let chip: ZooChip = chipArr[j];
                            let mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                            if (chip._seatIndex == mainIndex) {
                                chip.flyChip(0, false, j);//主玩家收筹码
                            } else {
                                chip.flyChip(1, false, j);//其他玩家收筹码
                            }
                        }
                    })
                } else {
                    let animal = this.checkAniamlType(this._lotteryIndex);
                    if (i + 1 != this._lotteryIndex && i + 1 != animal) {
                        this._game.playSound(Path_game_zoo.music_zoo + "chouma_fly.mp3", false);
                        for (let j = 0; j < chipArr.length; j++) {
                            let chip: ZooChip = chipArr[j];
                            chip.flyChip(2, false, j);//庄家先收筹码
                        }
                    } else {
                        Laya.timer.once(1100, this, () => {
                            this._game.playSound(Path_game_zoo.music_zoo + "chouma_fly.mp3", false);
                            for (let j = 0; j < 20; j++) {
                                if (chipArr.length > 0) {
                                    let ranType = MathU.randomRange(1, 5);
                                    let ranVal = this._chipArr[ranType - 1];
                                    this._chipSortScore++;
                                    this.bankerFlyChip(2, i + 1, ranType, ranVal, this._chipSortScore, -1);
                                }
                            }
                        })
                        Laya.timer.once(3000, this, () => {
                            this._game.playSound(Path_game_zoo.music_zoo + "chouma_fly.mp3", false);
                            for (let j = 0; j < chipArr.length; j++) {
                                let chip: ZooChip = chipArr[j];
                                let mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                                if (chip._seatIndex == mainIndex) {
                                    chip.flyChip(0, false, j);//主玩家收筹码
                                } else {
                                    chip.flyChip(1, false, j);//其他玩家收筹码
                                }
                            }
                        })
                    }
                }
            }
        }

        //庄家飞筹码去输的区域
        private bankerFlyChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            if (targetIdx < 1 || targetIdx > this._allChips.length) return;
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ZooChip) as ZooChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._allChips[targetIdx - 1].push(chip);
            Laya.timer.once(350, this, () => {
                chip.sendChip();
            })
        }

        //清除筹码
        private clearChip(): void {
            if (this._allChips) {
                for (let i: number = 0; i < this._allChips.length; i++) {
                    this._allChips[i] = [];
                }
            }
            this._game.sceneObjectMgr.clearOfflineObject();
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chong.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
            }

            if (this._chipList) {
                for (let i: number = 0; i < this._chipList.length; i++) {
                    this._chipList[i].off(LEvent.CLICK, this, this.onSelectChip);
                    this._chipList[i] = null;
                    this._chipGuangList[i] = null;
                }
                this._chipList.length = 0;
                this._chipGuangList.length = 0;
            }

            this._allChips = [];
            if (this._areaKuangList) {
                for (let i: number = 0; i < this._areaList.length; i++) {
                    this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                    this._areaKuangList[i] = null;
                    this._areaList[i] = null;
                    this._allMainBetUI[i] = null;
                    this._allTotalBetUI[i] = null;
                }
                this._areaKuangList.length = 0;
                this._areaList.length = 0;
                this._allMainBetUI.length = 0;
                this._allTotalBetUI.length = 0;
            }

            this.clearChip();
            this.clearClips();

            if (this._effPage) {
                this._effPage.clear();
                this._effPage.destroy();
                this._effPage = null;
            }

            if (this._htmlText) {
                this._htmlText = null;
            }
            if (this._zooStory) {
                this._zooStory.clear();
                this._zooStory = null;
            }

            this._game.sceneObjectMgr.off(ZooMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.off(ZooMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            this._game.sceneObjectMgr.off(ZooMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit);//继续游戏状态改变后
            this._game.sceneObjectMgr.off(ZooMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.sceneObjectMgr.off(ZooMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig);//地图传送参数
            this._game.sceneObjectMgr.off(ZooMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._zooMapInfo = null;


            this._game.uiRoot.HUD.close(ZooPageDef.PAGE_ZOO_BEGIN);
            this._game.uiRoot.HUD.close(ZooPageDef.PAGE_ZOO_END);
            this._game.stopAllSound();
            this._game.stopMusic();
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
            super.close();
        }
    }

    const ZOO_SKIN: any = {
        1: Path_game_zoo.ui_zoo + "fq_2.png",
        2: Path_game_zoo.ui_zoo + "fq_3.png",
        5: Path_game_zoo.ui_zoo + "zs_2.png",
        6: Path_game_zoo.ui_zoo + "zs_3.png",
        7: Path_game_zoo.ui_zoo + "fq_1.png",
        8: Path_game_zoo.ui_zoo + "fq_4.png",
        10: Path_game_zoo.ui_zoo + "zs_1.png",
        11: Path_game_zoo.ui_zoo + "zs_4.png",
        12: Path_game_zoo.ui_zoo + "tu_tongc.png",
        13: Path_game_zoo.ui_zoo + "tu_tongp.png",
        99: Path_game_zoo.ui_zoo + "sy_1.png",
        100: Path_game_zoo.ui_zoo + "sy_1.png",
    };

    class MapRecordRender extends ui.nqp.game_ui.feiqinzoushou.component.RecordItemUI {
        private _game: Game;
        private _data: any;
        constructor() {
            super();
        }
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            if (!this._data) {
                this.visible = false;
                return;
            }
            this.visible = true;
            this.img_icon.skin = ZOO_SKIN[this._data];
        }
        destroy() {
            super.destroy();
        }
    }
}