/**
* name 飞禽走兽剧情
*/
module gamezoo.story {
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

	export class ZooStory extends gamecomponent.story.StoryBaiRenBase {
		private _winnerIndex: number;
		private _curStatus: number;
		private _zooMapInfo: ZooMapInfo;
		private _isReconnect: boolean = true;

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		get isReconnect() {
			return this._isReconnect;
		}

		set isReconnect(v) {
			this._isReconnect = v;
		}

		init() {
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this.onIntoNewMap();
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;
			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(ZooPageDef.PAGE_ZOO_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._zooMapInfo = mapinfo as ZooMapInfo;
			if (mapinfo) {
				this.onUpdateState();
			}
		}

		private onUpdateState(): void {
			if (!this._zooMapInfo) return;
			let mapStatus = this._zooMapInfo.GetMapState();
			if (this._curStatus == mapStatus) return;
			this._curStatus = mapStatus;
			switch (this._curStatus) {
				case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
					this.serverClose();
					break;
			}
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			if (this._game.sceneObjectMgr.mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
		}

		enterMap() {
			//各种判断
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this._zooMapInfo = null;
		}

		update(diff: number) {

		}
	}
}