// headerSelector : 头部布局DOM所放置容器的选择器
function HeaderAndFooter(headerSelector) {
	this.headerSelector = headerSelector || ".header";
	this.init();
}

// 向 HeaderAndFooter 原型中添加方法
$.extend(HeaderAndFooter.prototype, {
	init : function(){
		// 创建头部
		this.createHeader();
	},
	createHeader : function(){
		new Header(this.headerSelector);
	}
});
