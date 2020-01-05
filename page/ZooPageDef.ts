/**
* name 
*/
module gamezoo.page {
	export class ZooPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//飞禽走兽界面
		static PAGE_ZOO: string = "1";
		//飞禽走兽地图UI
		static PAGE_ZOO_MAP: string = "2";
		//飞禽走兽开始下注界面
		static PAGE_ZOO_BEGIN: string = "3";
		//飞禽走兽停止下注界面
		static PAGE_ZOO_END: string = "5";
		//飞禽走兽游戏规则界面
		static PAGE_ZOO_RULE: string = "101";


		static myinit(str: string) {
			super.myinit(str);
			ZooClip.init();
			PageDef._pageClassMap[ZooPageDef.PAGE_ZOO] = ZooPage;
			PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_MAP] = ZooMapPage;
			PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_BEGIN] = ZooBeginPage;
			PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_RULE] = ZooRulePage;
			PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_END] = ZooEndPage;

			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
				Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
				Path_game_zoo.ui_zoo_sk + "fqzs_0.png",
				Path_game_zoo.ui_zoo_sk + "fqzs_1.png",
				Path_game_zoo.ui_zoo_sk + "fqzs_2.png",
				Path_game_zoo.ui_zoo_sk + "fqzs_3.png",
				Path.custom_atlas_scene + 'chip.atlas',

				Path.map + 'pz_zoo.png',
				Path.map_far + 'bg_zoo.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_zoo.music_zoo + "animal_1.mp3",
					Path_game_zoo.music_zoo + "animal_2.mp3",
					Path_game_zoo.music_zoo + "animal_5.mp3",
					Path_game_zoo.music_zoo + "animal_6.mp3",
					Path_game_zoo.music_zoo + "animal_7.mp3",
					Path_game_zoo.music_zoo + "animal_8.mp3",
					Path_game_zoo.music_zoo + "animal_10.mp3",
					Path_game_zoo.music_zoo + "animal_11.mp3",
					Path_game_zoo.music_zoo + "animal_99.mp3",
					Path_game_zoo.music_zoo + "animal_100.mp3",
					Path_game_zoo.music_zoo + "call_start.mp3",
					Path_game_zoo.music_zoo + "chouma.mp3",
					Path_game_zoo.music_zoo + "chouma_fly.mp3",
					Path_game_zoo.music_zoo + "dingding_end.mp3",
					Path_game_zoo.music_zoo + "xiazhu_end.mp3",
					Path_game_zoo.music_zoo + "xiazhu_start.mp3",
				])
			}
		}
	}
}