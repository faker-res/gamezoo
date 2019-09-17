/**
* name 
*/
module gamezoo.page {
	export class ZooRulePage extends game.gui.base.Page {
		static readonly TYPE_WANFA_JIESHAO: number = 0;
		static readonly TYPE_CARD_LEIXING: number = 1;
		static readonly TYPE_CARD_DAXIAO: number = 2;
		static readonly TYPE_CARD_BEISHU: number = 3;
		static readonly TYPE_GUANYU_WOMEN: number = 4;

		private _viewUI: ui.nqp.game_ui.feiqinzoushou.FeiQinZouShou_GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.feiqinzoushou.FeiQinZouShou_GuiZeUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.panel_rule.vScrollBarSkin = "";
			this._viewUI.panel_rule.vScrollBar.autoHide = true;
			this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
		}

		public close(): void {
			super.close();
		}
	}
}