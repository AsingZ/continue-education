<!--
	课程介绍
-->
<template>
<el-breadcrumb separator-class="el-icon-arrow-right">
	<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
	<el-breadcrumb-item>课程信息</el-breadcrumb-item>
	<el-breadcrumb-item>课程介绍</el-breadcrumb-item>
</el-breadcrumb>
<el-divider></el-divider>

<div class="tip">课程介绍《{{teacherData.courseManagerInfoItem.name}}》</div>

<div class="content">
	<el-input v-model="this.teacherData.courseManagerInfoItem.introduction"></el-input>
	<div class="button"><el-button style="width: 80px;" type="primary">确定</el-button></div>
</div>
</template>

<script>
export default {
name: "Info",
data(){
	return {
		teacherData:this.$store.state.teacherData,
	}
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
.content{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;

	.button{
		margin-top: 50px;
	}
}
</style>