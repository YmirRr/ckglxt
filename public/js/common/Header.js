function Header(container){
	this.container = $(container); // 头部 DOM 结构需要加入的容器
	// 创建头部布局的DOM元素
	this.createDom();
}

Header.template = `<nav class="navbar navbar-default navbar-inverse nav">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">库存管理系统</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="/">首页</a></li>
					<li><a href="/html/list.html">列表</a></li>
					
				</ul>
				
				<ul class="nav navbar-nav navbar-right">
					<li><a href="javascript:void(0);">登录</a></li>
					<li><a href="javascript:void(0);">注册</a></li>
				</ul>
			</div>
		</div>
	</nav>`;

$.extend(Header.prototype,{
	// 创建头部的 DOM 结构
	createDom : function(){
		// 将布局结构设置到容器内部渲染
		this.container.html(Header.template);
	}
})