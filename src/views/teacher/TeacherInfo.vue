<!--
	教师信息
-->
<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item>课程信息</el-breadcrumb-item>
		<el-breadcrumb-item>教师信息</el-breadcrumb-item>
	</el-breadcrumb>
	<el-divider></el-divider>

	<el-table ref="multipleTable" :data="teacherInfoItem"  @selection-change="handleSelectionChange"
			  style="width: 100%">
		<el-table-column type="selection" width="55"> </el-table-column>
		<el-table-column prop="name" label="姓名"> </el-table-column>
		<el-table-column prop="account" label="教师账号"></el-table-column>
		<el-table-column prop="department" label="所属系部"></el-table-column>
	</el-table>

	<div class="button-group">
		<el-button @click="addTeacher">添加教师</el-button>
		<el-button @click="toggleSelection">删除选定项目</el-button>
	</div>
</template>

<script>
export default {
name: "TeacherInfo",
data(){
	return {
		// 临时保存教师信息，
		teacherInfoItem:[],
		// 保存选择
		multipleSelection: [],
		teacherData:this.$store.state.teacherData,
		educationAdminData:this.$store.state.educationAdminData,
		adminData:this.$store.state.adminData,

	}
},
methods:{
	toggleSelection() {
		/**
		 * 删除数组指定下标或指定对象
		 * @param obj
		 */
		Array.prototype.remove=function(obj){
			for(let i =0;i <this.length;i++){
				let temp = this[i];
				if(!isNaN(obj)){
					temp=i;
				}
				if(temp == obj){
					for(let j = i;j <this.length;j++){
						this[j]=this[j+1];
					}
					this.length = this.length-1;
				}
			}
		};
		this.multipleSelection.forEach(item=>{
			this.teacherInfoItem.remove(item);
		});
	},
	handleSelectionChange(val) {
		this.multipleSelection = val
	},
},
created(){
	this.adminData.tableData.forEach(item=>{
		if(item.name==this.teacherData.courseManagerInfoItem.teacher){
			const  teacherItem=item;
			this.teacherInfoItem=[];
			this.teacherInfoItem.push(teacherItem);
		}

	});

},
}
</script>

<style lang="scss" scoped>
.tip {
	padding: 8px 16px;
	background-color: var(--el-color-primary-light-9);
	border-radius: 4px;
	border-left: 5px solid var(--el-color-primary);
	margin: 20px 0;
}
.button-group{
	margin-top: 50px;
}
</style>