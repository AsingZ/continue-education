<!--
	教师查看的课程列表
-->
<template>
	<el-container class="box">
		<!-- 页头 start -->
		<el-header height="80px">
			<logo-header :name="name"></logo-header>
		</el-header>
		<!-- 页头 end -->
		<!-- 内容 start -->
		<el-container>
			<!-- 左边信息 start -->
			<el-aside class="left" width="250px">
				<el-tabs type="card">
					<el-tab-pane label="系统通知">
						<!-- 左边盒子 start -->
						<div class="left-information">
							<div v-for="item in teacherData.courseInformationList">
								<information-item :title="item.title" checked="false" @click="informationDrawer(item)" />
							</div>

							<el-drawer
								:title="informationDrawerInfo.title"
								v-model="drawer"
								direction="rtl"
								destroy-on-close>

								<span>{{ informationDrawerInfo.content }}</span>
							</el-drawer>
						</div>
						<!-- 左边盒子 end -->
					</el-tab-pane>
				</el-tabs>
			</el-aside>
			<!-- 左边信息 end -->
			<!-- 右边主体 start -->
			<el-main>
				<el-tabs type="card">
					<el-tab-pane label="课程列表">
						<!-- 右边盒子 start -->
						<div class="course-list">
							<div v-for="item in educationAdminData.courseList" >
								<a @click="courseInfo(item)" v-if="item.teacher==name">
									<course-list-item :courseName="item.name"
													  :courseId="item.id"
													  :teacherName="item.teacher"
									/>
								</a>
							</div>
						</div>
						<!-- 右边盒子 start -->
					</el-tab-pane>

				</el-tabs>

			</el-main>
			<!-- 右边主体 start -->
		</el-container>
		<!-- 内容 end -->
	</el-container>
</template>

<script>
import axios from "@/plugins/axios";
import ipconfig from "@/utils/ipconfig";
import {ElMessage} from "element-plus";
import logoHeader from "@/components/LogoHeader";
import SimpleCourseInfoItem from "@/components/SimpleCourseInfoItem";
import SimpleInformationItem from "@/components/SimpleInformationItem";

export default {
name: "CourseManager",
// 组件
components:{
	"logo-header":logoHeader,
	"course-list-item":SimpleCourseInfoItem,
	"information-item":SimpleInformationItem,
},
data(){
	return {
		// 保存logoHeader展示姓名
		name:null,
		// 旁边通知是否显示
		drawer:false,
		// 通知里面的内容
		informationDrawerInfo:{
			course:"",
			title:"",
			content:"",
		},
		// vuex
		educationAdminData:this.$store.state.educationAdminData,
		teacherData:this.$store.state.teacherData,
	}
},
methods:{
	courseInfo(course){
		this.teacherData.courseManagerInfoItem=course;
		window.localStorage.setItem("store",JSON.stringify(this.$store.state));
		window.open('./#/teacher/introduction','teacher');
	},
	/**
	 * 打开通知的方法
	 */
	informationDrawer(item){
		this.informationDrawerInfo=item;
		this.drawer = true;
	},
},
beforeCreate(){
	// 2.在加载之前获取登录信息
	axios.get(ipconfig.address+"/common/logedInfo").then((response)=>{
		if (response.data.code==200){
			this.$store.state.logedInfo=response.data.data;
			this.name=response.data.data.name;
		}else{
			ElMessage("状态异常");
		}

	}).catch((error)=>{
		console.log(error);
		console.log("student created error")
	});
},
}
</script>

<style lang="scss" scoped>
.box{
	width: 80%;
	margin: 0 auto;

	.left{
		margin-top: 20px;
		border-right: 1px solid #efefef;

		.left-information{

		}
	}

	.course-list{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
}
</style>