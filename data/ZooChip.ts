/**
* name 
*/
module gamezoo.data {
	export class ZooChip extends gamecomponent.object.PlayingChip {
		constructor() {
			super();
		}
		//筹码起始位置(主玩家，其他玩家，庄家，座位0，座位1，座位2，座位3，座位4，座位5)  
		private _chipStart = [[49, 667], [49, 580], [640, -100],];
		private _chipEnd = [[305, 220], [425, 220], [550, 220], [670, 220],
		[790, 220], [910, 220], [305, 415], [425, 415], [600, 415], [790, 415], [910, 415]];  //筹码终点位置
		private _targetIndex: number;
		public _seatIndex: number;//精灵座位归属
		//初始位置，终点位置，筹码类型，筹码大小，筹码层级
		setData(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
			this.size = 0.4;
			this.sortScore = 999 - index;
			this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
			this._val = value.toString();
			this._type = type;
			this._targetIndex = targetIdx - 1;
			this.rotateAngle = MathU.randomRange(0, 360);
			this._seatIndex = unitIndex;
		}

		sendChip() {
			let posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 30).x;
			let posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 30).y;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			super.sendChip();
		}

		flyChip(index: number, isBanker: boolean, count: number) {
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			let target = isBanker ? this._chipEnd : this._chipStart;
			this.targe_pos.x = target[index][0];
			this.targe_pos.y = target[index][1];
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500 + count * 15, Laya.Ease.backIn, Handler.create(this, () => {
				this.isFinalPos = true;
			}));
		}

		drawChip() {
			let posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 40).x;
			let posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 40).y;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			if (!this.pos) {
				this.pos = new Vector2(posX, posY);
			} else {
				this.pos.x = posX;
				this.pos.y = posY;
			}
		}
	}
}