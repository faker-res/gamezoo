/**
* 飞禽走兽
*/
module gamezoo.page {
	export class ZooPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.feiqinzoushou.FeiQinZouShou_HUDUI;
		private _player: any;
		private _xianhongTmep: any = [5000, 8000, 25000, 50000];
		private _xianhongClipList: ClipUtil[] = [];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.feiqinzoushou.FeiQinZouShou_HUDUI');
			this.addChild(this._viewUI);
			this._game.playMusic(Path.music + "blackjack/black_bgm.mp3");

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let index = 0; index < 4; index++) {
				if (!this._xianhongClipList[index]) {
					this._xianhongClipList[index] = new ClipUtil(ClipUtil.HUD_FONT);
					this._xianhongClipList[index].x = this._viewUI["clip_xianhong" + index].x;
					this._xianhongClipList[index].y = this._viewUI["clip_xianhong" + index].y;
					this._viewUI["clip_xianhong" + index].parent && this._viewUI["clip_xianhong" + index].parent.addChild(this._xianhongClipList[index]);
					this._viewUI["clip_xianhong" + index].removeSelf();
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, ZooPageDef.GAME_NAME);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}

			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			switch (target) {
				case this._viewUI.img_room0:
					this._game.sceneObjectMgr.intoStory(ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_1).toString(), true);
					break;
				case this._viewUI.img_room1:
					this._game.sceneObjectMgr.intoStory(ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_2).toString(), true);
					break;
				case this._viewUI.img_room2:
					this._game.sceneObjectMgr.intoStory(ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_3).toString(), true);
					break;
				case this._viewUI.img_room3:
					this._game.sceneObjectMgr.intoStory(ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_4).toString(), true);
					break;
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < this._xianhongClipList.length; index++) {
				this._xianhongClipList[index].setText(this._xianhongTmep[index], true);
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);

				for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
					Laya.timer.clearAll(this._viewUI.box_right._childs[index]);
				}
			}
			this._player = null;
			this._game.stopMusic();

			super.close();
		}
	}
}