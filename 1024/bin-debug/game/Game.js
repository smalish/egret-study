var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game = (function (_super) {
    __extends(Game, _super);
    // 构造函数
    function Game() {
        var _this = this;
        console.log('constructor------------');
        _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        _this.skinName = "src/Game/Test1.exml";
        return _this;
    }
    // 组件加入完成
    Game.prototype.partAdded = function (partName, instance) {
        console.log('partAdded-------------');
        _super.prototype.partAdded.call(this, partName, instance);
    };
    // createChildren 与 childrenCreated不同点
    // 1.createChildren 是皮肤初始化创建和添加组件调用
    // 2.childrenCreated 是在组件初始化完成后回调
    // protected createChildren():void{
    // 	console.log('createChildren------------')
    // }
    // 组件初始化完成后回调
    Game.prototype.childrenCreated = function () {
        console.log('childrenCreated------------');
        _super.prototype.childrenCreated.call(this);
        // 屏幕适配
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        this.group_main.width = this.stage.stageWidth;
        this.group_main.height = this.stage.stageHeight;
        this.rect_main.width = this.stage.stageWidth;
        this.rect_main.height = this.stage.stageHeight;
    };
    // 组件创建完成
    Game.prototype.onComplete = function () {
        console.log('onComplete------------');
    };
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game", ["eui.UIComponent", "egret.DisplayObject"]);
