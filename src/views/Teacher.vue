<template>
	<el-container style="position: absolute;top: 0px;bottom: 0px;width: 100%; height: 100%; border: 1px solid #eee ">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246);">
			<el-menu
				default-active="/teacher/introduction"
				router="true"
			>
				<el-submenu index="1">
					<template #title>
						<i class="el-icon-location"></i>
						<span>课程信息</span>
					</template>
					<el-menu-item index="/teacher/introduction">课程介绍</el-menu-item>
					<el-menu-item index="/teacher/bigG">课程大纲</el-menu-item>
					<el-menu-item index="/teacher/teacherInfo">教师信息</el-menu-item>
				</el-submenu>
				<el-menu-item index="/teacher/resources">
					<i class="el-icon-location"></i>
					<span>课程资源</span>
				</el-menu-item>
				<el-submenu index="2">
					<template #title>
						<i class="el-icon-location"></i>
						<span>课程通知</span>
					</template>
					<el-menu-item index="/teacher/courseInformationList">课程通知列表</el-menu-item>
					<el-menu-item index="/teacher/addCourseInformation">新增课程通知</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template #title>
						<i class="el-icon-location"></i>
						<span>课程活动</span>
					</template>
					<el-menu-item index="">课程任务列表</el-menu-item>
					<el-menu-item index="">新增课程任务</el-menu-item>
				</el-submenu>
				<el-submenu index="5">
					<template #title>
						<i class="el-icon-location"></i>
						<span>选课学生管理</span>
					</template>
					<el-menu-item index="">学生管理</el-menu-item>
					<el-menu-item index="">成绩管理</el-menu-item>
				</el-submenu>

			</el-menu>
		</el-aside>

		<el-container style="height: 100%">
			<el-header style="text-align: right; font-size: 12px">
<!--				课程表头 start-->
				<div class="course-title">
					<span class="course-name">{{teacherData.courseManagerInfoItem.name}}</span>
					<span style="margin-left: 20px;">课程编号：{{teacherData.courseManagerInfoItem.id}}</span>
					<span style="margin-left: 20px;">主讲教师：{{teacherData.courseManagerInfoItem.teacher}}</span>
				</div>
<!--				课程介绍 end-->
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 15px"></i>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item @click="dialogVisible=true">修改密码</el-dropdown-item>
							<el-dropdown-item>
								<router-link :to="{path:'/login'}" style="text-decoration:none;">退出</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
				<span>{{teacherData.courseManagerInfoItem.teacher}}</span>
			</el-header>

			<el-main style="height: 100%">
				<div style="height:calc(100%);">
					<router-view/>
				</div>
			</el-main>
		</el-container>
	</el-container>
	<el-dialog
		title="修改密码"
		v-model="dialogVisible"
		width="30%"
	>
		<template #default>
			<el-form label-width="80px">
				<el-form-item label="旧密码">
					<el-input type="password" placeholder="请输入旧密码" v-model="oldpass"></el-input>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input placeholder="请输入新密码" type="password" v-model="newpass"></el-input>
				</el-form-item>
			</el-form>
		</template>
		<template #footer>
    <span class="dialog-footer">
		<el-button type="primary" @click="changePassword()">确 定</el-button>
		<el-button @click="dialogVisible = false">取 消</el-button>
    </span>
		</template>
	</el-dialog>

</template>

<script>
export default {
	name:"Teacher",
	data() {
		return{
			dialogVisible:false,
			oldpass:"",
			newpass:"",
			teacherData:this.$store.state.teacherData,

		}
	},
	components:{

	},
	methods:{
		changePassword(){
			this.$alert('修改成功', '提示', {
				confirmButtonText: '确定',
				callback: (action) => {
					this.dialogVisible=false;
				},
			});
		},
		quit(){
			this.$router.match("/login");
		}
	}
}
</script>

<style lang="scss" scoped>
.el-header {
	background-color: #b3c0d1;
	color: var(--el-text-color-primary);
	line-height: 60px;
}

.el-aside {
	color: var(--el-text-color-primary);
}

.content{

}
.course-title{
	float: left;
	color: #ffffff;

	.course-name{
		font-size: 25px;

	}

}
</style>
