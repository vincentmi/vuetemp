
<script>
export default {
	data(){
		let authMap  = [
			'od_add' , 'od_delete' , 'od_view' , 'u_search','u_audit'
		]

		let menu =[
			{
				title : "订单管理" , 
				routeIndex : "" , 
				children : [ 
					{
						title : "创建订单" , 
						routeIndex : "/order/add",
						ak:'od_add'

					},
					{
						title : "删除订单" , 
						routeIndex : "/order/delete",
						ak:'od_delete'

					},
					{
						title : "查看订单" , 
						routeIndex : "/order/view",
						ak:'od_view'

					}
				]
			},
			{
				title : "用户管理" , 
				routeIndex : "" , 
				children : [ 
					{
						title : "查询" , 
						routeIndex : "/user/search",
						ak:'u_search'

					},
					{
						title : "审核" , 
						routeIndex : "/user/audit",
						ak:'u_audit'

					}
				]
			}
		]

		return {
			menu  : menu,
			defaultActiveMenu : '/order/add',
			msg : 'Hello world',
			authMap : authMap
		}
	},

	render: function (createElement) {
		var  subMenus = new Array();
		var module , menuItems,subVNode
		for (let i = 0 , max = this.menu.length ; i < max ; i++)
		{
			console.log(this.menu.length)
			module = this.menu[i]
			var  menuItems = new Array()
			for( let j = 0 , jMax = module.children.length ;j < jMax ;j++)
			{
				
				let item = module.children[j]
				let routeIndex

				if(this.authMap.indexOf(item.ak) == -1){
					continue
				}
				if ( item.routeIndex != ''){
					routeIndex = item.routeIndex
				}else{
					routeIndex = i.toString()  + '-' + j.toString()
				}
				let vnode = createElement(
					'el-menu-item' , 
					{
						props: {
							index  : routeIndex
						}
					},
					item.title 
				)
				menuItems.push(vnode)
			}


			if (menuItems.length > 0 )
			{
				subVNode  = new Array()
				subVNode.push(
					createElement(
						'template' ,
						{ 
							slot : 'title'
						},
						module.title
						)
				)

				let subMenu = createElement(
					'el-submenu',
					{ 
						props : {
							index : i.toString()
						} 
					}
					,
					subVNode.concat(menuItems)
					)

				subMenus.push(subMenu)
			}
		}
    return createElement('el-menu', {
    	props : { 
    		router : true,
    		defaultActive : this.defaultActiveMenu,
    		
    	}

    },subMenus)
  },
}
</script>

<style>
.el-submenu {
	background: #AAA;
	color:#fff;
}
</style>
