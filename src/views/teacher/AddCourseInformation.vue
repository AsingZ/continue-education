<!--
	新郑课程通知
-->
<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item>课程通知</el-breadcrumb-item>
		<el-breadcrumb-item>新增课程通知</el-breadcrumb-item>
	</el-breadcrumb>
	<el-divider></el-divider>

	<el-form ref="form" label-width="80px">
		<el-form-item label="通知标题">
			<el-input v-model="addInformation.title"></el-input>
		</el-form-item>
		<el-form-item label="通知内容">
			<el-input type="textarea" v-model="addInformation.content"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">发布</el-button>
			<el-button @click="cleanTxt">取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
name: "AddCourseInformation",
data(){
	return {
		addInformation:{
			course:"",
			title:"",
			content:"",
		},
		teacherData:this.$store.state.teacherData,

	}
},
methods:{
	/**
	 * 创建方法
	 */
	onSubmit(){
		this.addInformation.course=this.teacherData.courseManagerInfoItem.name;
		const information=this.addInformation;
		this.teacherData.courseInformationList.push(information);
		this.addInformation={
			course:"",
			title:"",
			content:"",
		};
	},
	/**
	 * 清除文字
	 */
	cleanTxt(){
		this.addInformation={
			course:"",
			title:"",
			content:"",
		};
	},
},
}
</script>

<style scoped>

</style>