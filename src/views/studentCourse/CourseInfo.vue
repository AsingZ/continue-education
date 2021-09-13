<template>
<div class="box">
	<div class="left-box">
		<el-menu :default-active="rightActive"  @select="handleSelect" background-color="#ECF5FF" active-text-color="#ffd04b">
			<el-menu-item index="1">
				<i class="el-icon-setting"></i>
				<template #title>课程介绍</template>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-setting"></i>
				<template #title>课程大纲</template>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-setting"></i>
				<template #title>教师信息</template>
			</el-menu-item>
		</el-menu>
	</div>
	<div class="right-box">
<!--		课程介绍 start-->
		<div v-if="rightActive==1">
			<div class="header">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item>基本信息</el-breadcrumb-item>
					<el-breadcrumb-item>课程介绍</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<el-divider></el-divider>
			<div class="content">
				{{educationAdminData.courseDetailedIndex.introduction}}
			</div>
		</div>
<!--		课程介绍 end-->
<!--		课程大纲 start-->
		<div v-if="rightActive==2">
			<div class="header">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item>基本信息</el-breadcrumb-item>
					<el-breadcrumb-item>课程大纲</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<el-divider></el-divider>
			<div class="content">
				{{educationAdminData.courseDetailedIndex.bigG}}
			</div>
		</div>
<!--		课程大纲 end-->
<!--		教师信息 start-->
		<div v-if="rightActive==3">
			<div class="header">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item>基本信息</el-breadcrumb-item>
					<el-breadcrumb-item>教师信息</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<el-divider></el-divider>
			<div class="content-table">

				<table cellpadding="0" cellspacing="0" class="infotable">
					<tbody>
					<tr height="50px">
						<th width="20%">教师姓名</th>
						<td>{{educationAdminData.courseDetailedIndex.teacher}}</td>
					</tr>
					<tr>
						<th>院系</th>
						<td>计算机学学院</td>
					</tr>
					</tbody>
				</table>

			</div>
		</div>
<!--		教师信息 end-->
	</div>
</div>

</template>

<script>
export default {
name: "CourseInfo",
data(){
	return {
		rightActive:1,
		educationAdminData:this.$store.state.educationAdminData,
		teacherData:this.$store.state.teacherData
	}
},
methods:{
	handleSelect(key, keyPath) {
		this.rightActive=key;
	},
},
}
</script>

<style lang="scss" scoped>
$leftwidth:25%;
$rightwidth:75%;

.box{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	.left-box{
		padding-right: 20px;
		width: $leftwidth;
	}

	.right-box{
		margin-left: 50px;
		width: $rightwidth;

		.content{
			min-height: 50px;
			border: 1px solid #909399;
		}
	}
}
table.infotable {
	width: 100%;
	margin: 15px auto;
	text-align: center;
	background: #fcfcfc;
	border-left: 1px solid #e3e3e3;
	border-top: 1px solid #e3e3e3;
	/* border-right: 1px solid #e4e4e4; */
}
table {
	font-size: 12px;
	width: 100%;
}
table {
	/* border-collapse: collapse; */
	border-collapse: separate;
	border-spacing: 2px;
}
tr {
	display: table-row;
	vertical-align: inherit;
	border-color: inherit;
}
th {
	display: table-cell;
	vertical-align: inherit;
	font-weight: bold;
	text-align: center;
}
td {
	display: table-cell;
	vertical-align: inherit;
}
</style>