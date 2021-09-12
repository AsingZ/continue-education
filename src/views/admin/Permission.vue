
<template>
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="教务管理员" name="educationalAdmin" class="info">
			<el-transfer v-model="adminData.educationalAdminPermissionValue"
						 :data="adminData.educationalAdminList" :titles='titleArray'  >
			</el-transfer>
		</el-tab-pane>
		<el-tab-pane label="教师" name="teacher">
			<el-transfer v-model="adminData.teacherPermissionValue"
						 :data="adminData.educationalAdminList" :titles='titleArray'  />
		</el-tab-pane>
		<el-tab-pane label="班主任" name="headTeacher">
			<el-transfer v-model="adminData.headTeacherPermissionValue"
						 :data="adminData.educationalAdminList" :titles='titleArray'  />
		</el-tab-pane>
		<el-tab-pane label="学员" name="student">
			<el-transfer v-model="adminData.studentPermissionValue"
						 :data="adminData.educationalAdminList" :titles='titleArray'  />
		</el-tab-pane>
	</el-tabs>
</template>

<script>
export default {
	name:"Permission",
	data() {
		return {
			activeName: 'educationalAdmin',
			titleArray:["没有权限的接口","拥有权限的接口"],
			adminData:this.$store.state.adminData,
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event)
		},
	},
}
</script>

<style scoped>
.info{
	height: 500px;
}
</style>
<style>
.el-transfer-panel{
	width: 300px;
}
.el-transfer-panel__list.is-filterable{
	width: 300px;
	height: 500px;
}

</style>

