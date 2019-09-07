
module ui.game_ui.feiqinzoushou.component {
    export class RecordItemUI extends View {
		public img_icon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":78,"height":54},"child":[{"type":"Image","props":{"y":26.95,"x":38.849999999999994,"skin":"zoo_ui/game_ui/feiqinzoushou/tu_1.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":26.95,"x":38.849999999999994,"var":"img_icon","skin":"zoo_ui/game_ui/feiqinzoushou/zs_1.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.component.RecordItemUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou.component {
    export class TouXiangUI extends View {
		public img_icon:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":64,"x":49,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":6,"x":-2,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":109,"x":-7,"wordWrap":true,"width":110,"var":"txt_money","text":"000000.00","leading":6,"height":22,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Clip","props":{"y":1,"x":37,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.component.TouXiangUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou.component {
    export class TouXiangWzUI extends View {
		public img_icon:Laya.Image;
		public txt_money:laya.display.Text;
		public txt_name:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":58,"x":50,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/general/tu_weizi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":109,"x":-1,"wordWrap":true,"width":99,"var":"txt_money","text":"点击入座","leading":6,"height":21,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Text","props":{"y":3,"x":-2,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Clip","props":{"y":0,"x":36,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.component.TouXiangWzUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou {
    export class FeiQinZouShouUI extends View {
		public kuang0:Laya.Image;
		public kuang1:Laya.Image;
		public kuang2:Laya.Image;
		public kuang3:Laya.Image;
		public kuang4:Laya.Image;
		public kuang5:Laya.Image;
		public kuang6:Laya.Image;
		public kuang7:Laya.Image;
		public kuang8:Laya.Image;
		public kuang9:Laya.Image;
		public kuang10:Laya.Image;
		public area0:Laya.Box;
		public area1:Laya.Box;
		public area2:Laya.Box;
		public area3:Laya.Box;
		public area4:Laya.Box;
		public area5:Laya.Box;
		public area6:Laya.Box;
		public area7:Laya.Box;
		public area8:Laya.Box;
		public area9:Laya.Box;
		public area10:Laya.Box;
		public box_info:Laya.Box;
		public box_time:ui.game_ui.tongyong.DaoJiShiUI;
		public box_tip:Laya.Box;
		public clip_status:Laya.Clip;
		public txt_status:laya.display.Text;
		public txt_main_0:laya.display.Text;
		public txt_total_0:laya.display.Text;
		public txt_main_1:laya.display.Text;
		public txt_total_1:laya.display.Text;
		public txt_main_2:laya.display.Text;
		public txt_total_2:laya.display.Text;
		public txt_main_3:laya.display.Text;
		public txt_total_3:laya.display.Text;
		public txt_main_4:laya.display.Text;
		public txt_total_4:laya.display.Text;
		public txt_main_5:laya.display.Text;
		public txt_total_5:laya.display.Text;
		public txt_main_6:laya.display.Text;
		public txt_total_6:laya.display.Text;
		public txt_main_7:laya.display.Text;
		public txt_total_7:laya.display.Text;
		public txt_main_8:laya.display.Text;
		public txt_total_8:laya.display.Text;
		public txt_main_9:laya.display.Text;
		public txt_total_9:laya.display.Text;
		public txt_main_10:laya.display.Text;
		public txt_total_10:laya.display.Text;
		public box_zoo:Laya.Box;
		public box_zoo27:Laya.Box;
		public box_zoo26:Laya.Box;
		public box_zoo25:Laya.Box;
		public box_zoo24:Laya.Box;
		public box_zoo23:Laya.Box;
		public box_zoo22:Laya.Box;
		public box_zoo21:Laya.Box;
		public box_zoo7:Laya.Box;
		public box_zoo8:Laya.Box;
		public box_zoo9:Laya.Box;
		public box_zoo10:Laya.Box;
		public box_zoo11:Laya.Box;
		public box_zoo12:Laya.Box;
		public box_zoo13:Laya.Box;
		public box_zoo0:Laya.Box;
		public box_zoo1:Laya.Box;
		public box_zoo2:Laya.Box;
		public box_zoo3:Laya.Box;
		public box_zoo4:Laya.Box;
		public box_zoo6:Laya.Box;
		public box_zoo5:Laya.Box;
		public box_zoo20:Laya.Box;
		public box_zoo19:Laya.Box;
		public box_zoo18:Laya.Box;
		public box_zoo17:Laya.Box;
		public box_zoo16:Laya.Box;
		public box_zoo14:Laya.Box;
		public box_zoo15:Laya.Box;
		public btn_playerList:Laya.Button;
		public txt_online:laya.display.Text;
		public btn_chip0:Laya.Button;
		public guang0:Laya.Image;
		public btn_chip1:Laya.Button;
		public guang1:Laya.Image;
		public btn_chip2:Laya.Button;
		public guang2:Laya.Image;
		public btn_chip3:Laya.Button;
		public guang3:Laya.Image;
		public btn_chip4:Laya.Button;
		public guang4:Laya.Image;
		public btn_repeat:Laya.Button;
		public list_record:Laya.List;
		public box_head:Laya.Box;
		public img_money:Laya.Image;
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public lab_name:Laya.Label;
		public lab_money:Laya.Label;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;
		public btn_chong:Laya.Button;
		public btn_back:Laya.Button;
		public btn_spread:Laya.Button;
		public btn_qifu:Laya.Button;
		public box_menu:Laya.Image;
		public btn_rule:Laya.Button;
		public btn_set:Laya.Button;
		public btn_zhanji:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":107,"x":244,"width":775,"height":402},"child":[{"type":"Image","props":{"y":45,"x":7,"width":116,"var":"kuang0","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":45,"x":128,"width":116,"var":"kuang1","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":45,"x":249,"width":116,"var":"kuang2","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":45,"x":369,"width":116,"var":"kuang3","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":45,"x":490,"width":116,"var":"kuang4","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":45,"x":610,"width":116,"var":"kuang5","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":228,"x":6,"width":116,"var":"kuang6","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":229,"x":128,"width":116,"var":"kuang7","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":229,"x":249,"width":236,"var":"kuang8","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":229,"x":490,"width":116,"var":"kuang9","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Image","props":{"y":229,"x":610,"width":116,"var":"kuang10","skin":"zoo_ui/game_ui/feiqinzoushou/tu_gx1.png","sizeGrid":"18,24,18,23","height":178,"blendMode":"lighter"}},{"type":"Box","props":{"y":134,"x":65,"width":116,"var":"area0","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":134,"x":186,"width":116,"var":"area1","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":134,"x":307,"width":116,"var":"area2","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":134,"x":427,"width":116,"var":"area3","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":134,"x":548,"width":116,"var":"area4","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":134,"x":668,"width":116,"var":"area5","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":317,"x":64,"width":116,"var":"area6","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":318,"x":186,"width":116,"var":"area7","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":318,"x":367,"width":236,"var":"area8","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":318,"x":548,"width":116,"var":"area9","height":178,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":318,"x":668,"width":116,"var":"area10","height":178,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":354,"x":621,"width":240,"var":"box_info","height":116,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"DaoJiShi","props":{"y":-83,"x":116,"var":"box_time","anchorY":0.5,"anchorX":0.5,"runtime":"ui.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"y":-32,"x":120,"width":231,"var":"box_tip","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_h.png","scaleY":0.7,"scaleX":0.6,"centerX":2,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Clip","props":{"y":0,"x":115,"var":"clip_status","skin":"tongyong_ui/game_ui/tongyong/general/clip_zhuangtai2.png","clipY":3,"anchorX":0.5}},{"type":"Text","props":{"y":2,"x":35,"wordWrap":true,"width":159,"var":"txt_status","text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":-129,"x":-257,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_0","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_0","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-129,"x":-133,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_1","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_1","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-129,"x":-8,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_2","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_2","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-129,"x":114,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_3","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_3","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-129,"x":237,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_4","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_4","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":-129,"x":358,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_5","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_5","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":60,"x":-258,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_6","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_6","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":61,"x":-134,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_7","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_7","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":63,"x":-12,"width":246,"height":138},"child":[{"type":"Text","props":{"y":110,"x":78.6,"width":91,"var":"txt_main_8","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":78.6,"width":91,"var":"txt_total_8","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":61,"x":237,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_9","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_9","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]},{"type":"Box","props":{"y":62,"x":359,"width":118,"height":138},"child":[{"type":"Text","props":{"y":110,"x":14.600000000000001,"width":91,"var":"txt_main_10","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#28ff00","align":"center"}},{"type":"Text","props":{"y":0,"x":14.600000000000001,"width":91,"var":"txt_total_10","text":"00","strokeColor":"#003105","stroke":4,"leading":6,"height":25,"fontSize":20,"color":"#83f9f9","align":"center"}}]}]},{"type":"Box","props":{"y":4,"x":89,"width":1085,"var":"box_zoo","height":610},"child":[{"type":"Box","props":{"y":49,"x":8,"width":119,"var":"box_zoo27","height":85}},{"type":"Box","props":{"y":129,"x":9,"width":119,"var":"box_zoo26","height":85}},{"type":"Box","props":{"y":208,"x":9,"width":119,"var":"box_zoo25","height":85}},{"type":"Box","props":{"y":287,"x":9,"width":119,"var":"box_zoo24","height":85}},{"type":"Box","props":{"y":366,"x":9,"width":119,"var":"box_zoo23","height":85}},{"type":"Box","props":{"y":445,"x":9,"width":119,"var":"box_zoo22","height":85}},{"type":"Box","props":{"y":524,"x":9,"width":119,"var":"box_zoo21","height":85}},{"type":"Box","props":{"y":49,"x":914,"width":119,"var":"box_zoo7","height":85}},{"type":"Box","props":{"y":129,"x":914,"width":119,"var":"box_zoo8","height":85}},{"type":"Box","props":{"y":208,"x":914,"width":119,"var":"box_zoo9","height":85}},{"type":"Box","props":{"y":287,"x":914,"width":119,"var":"box_zoo10","height":85}},{"type":"Box","props":{"y":366,"x":914,"width":119,"var":"box_zoo11","height":85}},{"type":"Box","props":{"y":445,"x":915,"width":119,"var":"box_zoo12","height":85}},{"type":"Box","props":{"y":524,"x":914,"width":119,"var":"box_zoo13","height":85}},{"type":"Box","props":{"y":49,"x":122,"width":119,"var":"box_zoo0","height":85}},{"type":"Box","props":{"y":49,"x":234,"width":119,"var":"box_zoo1","height":85}},{"type":"Box","props":{"y":49,"x":348,"width":119,"var":"box_zoo2","height":85}},{"type":"Box","props":{"y":49,"x":461,"width":119,"var":"box_zoo3","height":85}},{"type":"Box","props":{"y":49,"x":574,"width":119,"var":"box_zoo4","height":85}},{"type":"Box","props":{"y":49,"x":800,"width":119,"var":"box_zoo6","height":85}},{"type":"Box","props":{"y":49,"x":687,"width":119,"var":"box_zoo5","height":85}},{"type":"Box","props":{"y":524,"x":122,"width":119,"var":"box_zoo20","height":85}},{"type":"Box","props":{"y":524,"x":235,"width":119,"var":"box_zoo19","height":85}},{"type":"Box","props":{"y":524,"x":348,"width":119,"var":"box_zoo18","height":85}},{"type":"Box","props":{"y":524,"x":461,"width":119,"var":"box_zoo17","height":85}},{"type":"Box","props":{"y":524,"x":575,"width":119,"var":"box_zoo16","height":85}},{"type":"Box","props":{"y":524,"x":801,"width":119,"var":"box_zoo14","height":85}},{"type":"Box","props":{"y":524,"x":687,"width":119,"var":"box_zoo15","height":85}}]},{"type":"Button","props":{"y":580,"x":49,"var":"btn_playerList","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qtwj.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":67,"x":-12,"wordWrap":true,"width":111,"var":"txt_online","text":"在线200人","strokeColor":"#3b1211","stroke":4,"leading":6,"height":26,"fontSize":22,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":724,"x":641,"width":948,"height":147,"bottom":-4,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-574,"width":679,"height":113,"centerX":-30,"bottom":-20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":54.5,"x":57,"var":"btn_chip0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm1.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"50","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":56,"var":"guang0","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":178,"var":"btn_chip1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm2.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"100","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":56,"var":"guang1","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":300,"var":"btn_chip2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm3.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"200","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":55,"var":"guang2","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":421,"var":"btn_chip3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm4.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"500","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":55,"var":"guang3","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":539,"var":"btn_chip4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm5.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"1000","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":55,"var":"guang4","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":100,"var":"btn_repeat","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_xz.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#42147e","labelStroke":4,"labelSize":28,"labelColors":"#ffffff","labelBold":true,"label":"重复下注","centerX":326,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":128,"x":1171,"skin":"zoo_ui/game_ui/feiqinzoushou/tu_jl.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"y":143,"x":1133,"width":79,"var":"list_record","spaceY":3,"repeatY":8,"repeatX":1,"height":455},"child":[{"type":"RecordItem","props":{"renderType":"render","runtime":"ui.game_ui.feiqinzoushou.component.RecordItemUI"}}]},{"type":"Box","props":{"y":628,"x":10,"width":261,"var":"box_head","height":87},"child":[{"type":"Image","props":{"y":43,"x":82,"width":179,"var":"img_money","skin":"zoo_ui/game_ui/feiqinzoushou/tu_zjdt.png","sizeGrid":"0,34,0,53","height":38}},{"type":"Image","props":{"y":40,"x":38,"width":78,"skin":"zoo_ui/game_ui/feiqinzoushou/tu_txk.png","pivotY":40,"pivotX":38,"height":78}},{"type":"Image","props":{"y":39,"x":39,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_5.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-11,"x":-7,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Label","props":{"y":9,"x":108,"width":124,"var":"lab_name","text":"小名字六个字","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#00d6ff"}},{"type":"Label","props":{"y":50,"x":122,"width":128,"var":"lab_money","text":"00000000.00","height":26,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":2,"x":58,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":86,"x":39,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":670,"x":1170,"var":"btn_chong","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_chongzhi.png","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":1234,"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":47,"var":"btn_spread","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_qifu","top":19,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":86,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":10,"width":180,"var":"box_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":231},"child":[{"type":"Image","props":{"y":77,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":153,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":22,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":162,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":92,"x":14,"var":"btn_zhanji","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game_ui.tongyong.DaoJiShiUI",ui.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.game_ui.feiqinzoushou.component.RecordItemUI",ui.game_ui.feiqinzoushou.component.RecordItemUI);

            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.FeiQinZouShouUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou {
    export class FeiQinZouShou_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public panel_rule:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"x":30,"width":787,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":266,"x":394,"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":392,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":76,"x":17,"width":749,"var":"panel_rule","height":403},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"zoo_ui/game_ui/feiqinzoushou/guize_1.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.FeiQinZouShou_GuiZeUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou {
    export class FeiQinZouShou_HUDUI extends View {
		public view_hud:ui.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public lab_least0:Laya.Label;
		public img_room1:Laya.Image;
		public lab_least1:Laya.Label;
		public img_room2:Laya.Image;
		public lab_least2:Laya.Label;
		public img_room3:Laya.Image;
		public lab_least3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"zoo_ui/game_ui/feiqinzoushou/zjh.jpg","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":910,"top":0,"right":0,"mouseThrough":true,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"var":"box_right","right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":231,"var":"img_room0","skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png","right":979,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":152,"x":156,"width":286,"skin":"zoo_ui/game_ui/feiqinzoushou/difen_04_1.png","height":173,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":359,"x":127,"wordWrap":true,"width":140,"var":"lab_least0","text":"限红：2000","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":399,"x":127,"wordWrap":true,"width":140,"text":"准入：无限","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room1","skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png","right":670,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":-7,"width":256,"skin":"zoo_ui/game_ui/feiqinzoushou/difen_02_1.png","height":252}},{"type":"Label","props":{"y":359,"x":128,"wordWrap":true,"width":140,"var":"lab_least1","text":"限红：5000","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":400,"x":129,"wordWrap":true,"width":140,"text":"准入：无限","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room2","skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png","right":357,"name":"item2","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":145,"x":129,"width":292,"skin":"zoo_ui/game_ui/feiqinzoushou/difen_03_1.png","height":198,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":360,"x":129,"wordWrap":true,"width":140,"var":"lab_least2","text":"限红：20000","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":400,"x":128,"wordWrap":true,"width":140,"text":"准入：无限","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room3","skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png","right":52,"name":"item3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-5,"x":4,"width":252,"skin":"zoo_ui/game_ui/feiqinzoushou/zjh_rw.png","height":256}},{"type":"Label","props":{"y":360,"x":129,"wordWrap":true,"width":140,"var":"lab_least3","text":"限红：50000","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":400,"x":127,"wordWrap":true,"width":140,"text":"准入：无限","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Image","props":{"y":21,"x":632,"skin":"zoo_ui/game_ui/feiqinzoushou/tu_wz.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.game_ui.tongyong.HudUI",ui.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.FeiQinZouShou_HUDUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":957.4016,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":360,"x":317.5984,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":385,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":436,"x":916,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.GoUI.uiView);
        }
    }
}

module ui.game_ui.feiqinzoushou {
    export class StopUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":0.1,"scaleX":2,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":1000,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":2},{"type":"Image","props":{"y":360,"x":275,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tz0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":937,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":9},{"type":"Image","props":{"y":425,"x":343,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_ui.feiqinzoushou.StopUI.uiView);
        }
    }
}
