class GameIndex extends eui.Component implements  eui.UIComponent {

	public group_main: eui.Group
	public rect_main: eui.Rect //白色背景

	// 构造函数
	public constructor() {
		console.log('constructor------------')
		super();

		this.addEventListener(eui.UIEvent.CREATION_COMPLETE , this.onComplete, this)
		this.skinName = "src/game/GameIndex"
	}

	// 组件加入完成
	protected partAdded(partName:string,instance:any):void
	{
		console.log('partAdded-------------')

		super.partAdded(partName,instance);
	}

	// createChildren 与 childrenCreated不同点
	// 1.createChildren 是皮肤初始化创建和添加组件调用
	// 2.childrenCreated 是在组件初始化完成后回调

	// protected createChildren():void{
	// 	console.log('createChildren------------')
	// }

	// 组件初始化完成后回调
	protected childrenCreated():void
	{
		console.log('childrenCreated------------')
		super.childrenCreated();

		// 屏幕适配
		this.width = this.stage.stageWidth
		this.height = this.stage.stageHeight

		this.group_main.width = this.stage.stageWidth
		this.group_main.height = this.stage.stageHeight

		this.rect_main.width = this.stage.stageWidth
		this.rect_main.height = this.stage.stageHeight

	}

	// 组件创建完成
	protected onComplete():void{
		console.log('onComplete------------')


	}
	
}