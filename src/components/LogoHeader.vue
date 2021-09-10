<template>
<div class="header-box" :id="border?'a':''">
<!-- 左边logo start-->
<h1 class="logo">
	<img src="@/assets/images/school_name.png" alt="logo">
</h1>
<!-- 左边logo end-->
<!-- 右边功能区 start -->
<ul class="nav">
		<li class="nav-item" id="searchInput">
			<div style="margin-top: 20px">
				<el-input placeholder="请输入课程名称或课程编号" v-model="searchText">
					<template #append>
						<el-button icon="el-icon-search" type="primary"></el-button>
					</template>
				</el-input>
			</div>
		</li>
		<li class="nav-item nav-img">
			<el-dropdown trigger="click">
				<img src="@/assets/images/default_person.jpg" alt="photo">
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item style="text-align: center">
							{{name}}
						</el-dropdown-item>
						<el-dropdown-item>
							<i class="el-icon-lock"></i>
							退出登录
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</li>
</ul>
<!-- 右边功能区 end -->
</div>
</template>

<script>
export default {
name: "LogoHeader",
data(){
	return {
		border:true,
		searchText:"",

	}
},
// 参数
props:["name"],

}
</script>

<style lang="scss" scoped>
#a{
	border-bottom:1px solid #DCDFE6;
}
.header-box{
	//定义最小宽度
	@media screen and (max-width: 959px){
		width: 959px;
	}

	width: 100%;
	height: 80px;
	line-height: 80px;

	// 定义flex布局，强制垂直居中
	@mixin columnCenter{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.logo{
		float: left;
		height: 100%;
		line-height: 100%;
		@include columnCenter;

	}
	.nav{
		float: right;
		height: 100%;
		line-height: 100%;
		list-style: none;

		.nav-item{
			height: 100%;
			line-height: 100%;
			float: left;
			margin-left: 20px;
			margin-right: 20px;
		}

		// 屏幕小了隐藏搜索框
		#searchInput{
			@media screen and (max-width: 1339px){
				display: none;
			}
		}

		.nav-item.nav-img{
			img{
				width: 40px;
				height: 40px;
				border-radius: 50%;
				vertical-align: middle;
				margin-top: 20px;
			}

		}


	}
}
</style>