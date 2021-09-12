
<template>
	<el-tabs v-model="activeName">
		<el-tab-pane label="课程列表" name="courseList">
			<div class="course-list">
				<div class="header">
					<el-select
						v-model="departmentCheckStr"
						@change="changeDepartmentListCheck"
						placeholder="请选择系部">
						<el-option
							v-for="item in educationAdminData.departmentList"
							:key="item.department"
							:label="item.department"
							:value="item.department"
						>
						</el-option>
					</el-select>
					<el-select
						v-model="this.subjectCheckStr"
						placeholder="请选择专业">
						<el-option
							v-for="item in this.subjectList"
							:key="item.name"
							:label="item.name"
							:value="item.name"
						>
						</el-option>
					</el-select>

					<div>
						<el-button type="primary" @click="selectListByClass">确认</el-button>
						<el-button type="primary" @click="cleanSelect">清空选择</el-button>
					</div>

				</div>
				<div class="content">
					<!--				数据表格 start-->
					<el-table :data="educationAdminData.seeCourseList" style="width: 100%">
						<el-table-column prop="id" label="课程编号"> </el-table-column>
						<el-table-column prop="name" label="课程名称"> </el-table-column>
						<el-table-column prop="teacher" label="主讲老师"> </el-table-column>
						<el-table-column prop="department" label="所属系部"> </el-table-column>
						<el-table-column prop="subject" label="所属专业"> </el-table-column>
						<el-table-column label="操作" width="235">
							<template #default="scope">
								<el-button size="mini" @click="openCourseEdit(scope.row,scope.$index)">编辑</el-button>
								<el-button size="mini" type="danger" @click="openAlert(scope.row.name)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<!--				数据表格 end-->
					<!--					弹出框 start-->
					<el-dialog
						title="编辑课程信息"
						v-model="courseDialogVisible"
						width="30%">
						<el-form label-width="80px">
							<el-form-item label="课程编号">
								<el-input v-model="editCourse.id"></el-input>
							</el-form-item>
							<el-form-item label="课程名称">
								<el-input v-model="editCourse.name"></el-input>
							</el-form-item>
							<el-form-item label="主讲教师">
								<el-input v-model="editCourse.teacher"></el-input>
							</el-form-item>

							<el-form-item label="系别">
								<el-select v-model="editCourse.department">
									<el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
									<el-option label="数字媒体技术" value="数字媒体技术"></el-option>
								</el-select>
							</el-form-item>

							<el-form-item label="专业">
								<el-select v-model="editCourse.subject">
									<el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
									<el-option label="数字媒体技术" value="数字媒体技术"></el-option>
								</el-select>
							</el-form-item>


						</el-form>
						<template #footer>
						<span class="dialog-footer">
							<el-button type="primary" @click="courseDialogVisible=false">确 定</el-button>
							<el-button @click="courseDialogVisible = false">取 消</el-button>
						</span>
						</template>
					</el-dialog>
					<!--					弹出框 start-->

				</div>
			</div>
		</el-tab-pane>
		<el-tab-pane label="创建课程" name="create">
			<div class="list-add">
			<el-form label-width="80px">
				<el-form-item label="课程编号">
					<el-input v-model="addCourse.id"></el-input>
				</el-form-item>
				<el-form-item label="课程名称">
					<el-input v-model="addCourse.name"></el-input>
				</el-form-item>
				<el-form-item label="主讲教师">
					<el-select v-model="addCourse.teacher"  placeholder="请选择主讲教师">
						<el-option label="教师1" value="教师1"></el-option>
						<el-option label="教师2" value="教师2"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="所属系部">
				<el-select
					v-model="addCourse.department"
					@change="changeAddDepartmentListCheck"
					placeholder="请选择系部">
					<el-option
						v-for="item in educationAdminData.departmentList"
						:key="item.department"
						:label="item.department"
						:value="item.department"
					>
					</el-option>
				</el-select>
				</el-form-item>

				<el-form-item label="所属专业">
					<el-select
						v-model="addCourse.subject"
						placeholder="请选择专业">
						<el-option
							v-for="item in addCourseSubjectList"
							:key="item.name"
							:label="item.name"
							:value="item.name"
						>
						</el-option>
					</el-select>
				</el-form-item>



				<el-form-item size="large">
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
				</el-form-item>
			</el-form>
			</div>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
export default {
	name:"Course",
	data() {
		return {
			activeName: 'courseList',
			courseDialogVisible:false,
			departmentCheckStr:"",
			subjectList:[],
			subjectCheckStr:"",
			editCourse:{},
			addCourse:{
				id:"",
				name:"",
				teacher:"",
				department:"",
				subject:"",
			},
			addCourseSubjectList:[],
			// vuex
			educationAdminData:this.$store.state.educationAdminData,

		}
	},
	methods: {
		/**
		 * 选择系部，变动专业
		 */
		changeDepartmentListCheck(){
			this.educationAdminData.departmentList.forEach(item=>{
				if (this.departmentCheckStr==item.department){
					const sub=item.subject;
					this.subjectList=sub;
				}
			});
		},
		openCourseEdit(course,index){
			this.editCourse=course;
			this.courseDialogVisible=true;
		},
		openAlert(){
			this.$alert('现在不允许删除课程哦！', '提示', {
				confirmButtonText: '确定',
				callback: (action) => {

				},
			})
		},
		cleanSelect(){
			this.subjectList=[];
			this.subjectCheckStr="";
			this.departmentCheckStr="";
		},
		/**
		 * 筛选课程
		 */
		selectListByClass(){
			if(this.departmentCheckStr==""){
				return ;
			}
			const oldList=this.educationAdminData.seeCourseList;
			this.educationAdminData.seeCourseList=[];
			oldList.forEach(item=>{
				if (this.subjectCheckStr==""){
					if(this.departmentCheckStr==item.department){
						this.educationAdminData.seeCourseList.push(item);
					}
				}else{
					if(this.subjectCheckStr==item.subject){
						this.educationAdminData.seeCourseList.push(item);
					}
				}
			});
		},
		/**
		 * 新增课程里面的select的change事件
		 */
		changeAddDepartmentListCheck(){
			this.educationAdminData.departmentList.forEach(item=>{
				if (this.addCourse.department==item.department){
					const sub=item.subject;
					this.addCourseSubjectList=sub;
				}
			});
		},
		onSubmit(){
			const a=this.addCourse;
			this.educationAdminData.seeCourseList.push(a);
			this.addCourse={
				id:"",
				name:"",
				teacher:"",
				department:"",
				subject:"",
			};
		}
	},
	created(){
		// 加载数据
		if(this.educationAdminData.seeCourseList.length<1){
			const list=this.educationAdminData.courseList;
			this.educationAdminData.seeCourseList=list;
		}
	}
}
</script>

<style lang="scss" scoped>
.course-list{
	width: 100%;

	.header{
		display: flex;
		justify-content: center;
		align-content: center;

	}
}
</style>
