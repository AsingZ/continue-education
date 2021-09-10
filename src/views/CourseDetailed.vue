<!--
	课程详情，学生浏览
-->
<template>
	<el-container class="box">
		<!-- 页头 start -->
		<el-header height="141px">
			<logo-header :name="name"></logo-header>
			<div class="nav">
				<el-menu
					:default-active="activeIndex2"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					background-color="#409EFF"
					text-color="#fff"
					active-text-color="#ECF5FF">

					<el-menu-item index="4" style="float:right;">课程活动</el-menu-item>
					<el-menu-item index="3" style="float:right;">课程资源</el-menu-item>
					<el-menu-item index="2" style="float:right;">基本信息</el-menu-item>
					<el-menu-item index="1" style="float:right;">首页</el-menu-item>
					<div class="course-name">数学建模</div>
				</el-menu>
			</div>


		</el-header>
		<!-- 页头 end -->
		<!-- 内容 start -->
		<el-main>
			<router-view/>
		</el-main>
		<!-- 内容 end -->
	</el-container>
</template>


<script>
import LogoHeader from "@/components/LogoHeader";

export default {
name: "CourseDetailed",
components:{
	"logo-header":LogoHeader
},
data() {
	return {
		activeIndex: '1',
		activeIndex2: '1',
	}
},
methods: {
	handleSelect(key, keyPath) {
		console.log(key, keyPath)
	},
},
}
</script>

<style lang="scss" scoped>

.box{
	margin: 0 auto;
	width: 90%;

	.nav{

		.course-name{
			height: 61px;
			line-height: 61px;
			margin-left: 10px;
			font-size: 36px;
			color: #ffffff;
		}
	}
}
</style>