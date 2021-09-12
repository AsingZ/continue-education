
<template>
	<el-tabs v-model="educationAdminData.activeName" @tab-click="handleClick">
		<el-tab-pane label="学生列表" name="studentList">
			<div class="student-list">
				<div class="header">
					<el-select
						v-model="educationAdminData.departmentListCheck"
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
						v-model="educationAdminData.subjectListCheck"
						@change="changeSubjectListCheck"
						placeholder="请选择专业">
						<el-option
							v-for="item in educationAdminData.subjectList"
							:key="item.name"
							:label="item.name"
							:value="item.name"
						>
						</el-option>
					</el-select>
					<el-select
						v-model="educationAdminData.clazzListCheck"
						placeholder="请选择班级">
						<el-option
							v-for="item in educationAdminData.clazzList"
							:key="item"
							:label="item"
							:value="item"
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
					<el-table :data="educationAdminData.studentList" style="width: 100%">
						<el-table-column prop="account" label="账号"> </el-table-column>
						<el-table-column prop="name" label="姓名"> </el-table-column>
<!--						<el-table-column prop="roleId" label="角色">-->
<!--							<template #default="scope">-->
<!--								<span v-if="scope.row.roleId==1">管理员</span>-->
<!--								<span v-if="scope.row.roleId==2">教务管理员</span>-->
<!--								<span v-if="scope.row.roleId==3">教师</span>-->
<!--								<span v-if="scope.row.roleId==4">班主任</span>-->
<!--								<span v-if="scope.row.roleId==5">学员</span>-->
<!--							</template>-->
<!--						</el-table-column>-->
						<el-table-column prop="department" label="系部"> </el-table-column>
						<el-table-column prop="subject" label="专业"> </el-table-column>
						<el-table-column prop="clazz" label="班级"> </el-table-column>
						<el-table-column prop="state" label="状态">
							<template #default="scope">
								<el-tag
									:type="scope.row.state == '0' ? 'primary' : 'info'"
								>{{scope.row.state=='0'?"在校":"禁用"}}</el-tag>
							</template>
						</el-table-column>
						<el-table-column label="操作" width="235">
							<template #default="scope">
								<el-button size="mini" @click="openStudentEdit(scope.row,scope.$index)">编辑</el-button>
								<el-button size="mini" @click="openAlert(scope.row.name)">重置密码</el-button>
								<el-button v-if="scope.row.state==1"
									size="mini"
									type="success"
									@click="handleDelete(scope.$index, scope.row,0)">激活</el-button>
								<el-button v-else
									size="mini"
									type="danger"
									@click="handleDelete(scope.$index, scope.row,1)">禁用</el-button>

							</template>
						</el-table-column>
					</el-table>
					<!--				数据表格 end-->
<!--					弹出框 start-->
					<el-dialog
						title="编辑信息"
						v-model="dialogVisible"
						width="30%">
						<el-form label-width="80px">
							<el-form-item label="账号">
								<el-input v-model="editStudent.account"></el-input>
							</el-form-item>
							<el-form-item label="姓名">
								<el-input v-model="editStudent.name"></el-input>
							</el-form-item>

							<el-form-item label="所属系部">
								<el-select v-model="editStudent.department">
									<el-option label="计算机科学学院" value="计算机科学学院"></el-option>
									<el-option label="数学学院" value="数学学院"></el-option>
									<el-option label="体育学院" value="体育学院"></el-option>
								</el-select>
							</el-form-item>

							<el-form-item label="专业">
								<el-select v-model="editStudent.subject">
									<el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
									<el-option label="数字媒体技术" value="数字媒体技术"></el-option>
								</el-select>
							</el-form-item>

							<el-form-item label="班级">
								<el-select v-model="editStudent.clazz">
									<el-option label="1801" value="1801"></el-option>
									<el-option label="1802" value="1802"></el-option>
									<el-option label="1803" value="1803"></el-option>
									<el-option label="1804" value="1804"></el-option>
								</el-select>
							</el-form-item>


						</el-form>
						<template #footer>
						<span class="dialog-footer">
							<el-button type="primary" @click="dialogVisible=false">确 定</el-button>
							<el-button @click="dialogVisible = false">取 消</el-button>
						</span>
						</template>
					</el-dialog>
<!--					弹出框 start-->

				</div>
			</div>
		</el-tab-pane>
		<el-tab-pane label="教师列表" name="fourth">
			<div class="teacher-list">
				<div class="header">
					<el-select
						v-model="teacherSelectDepartmentStr"
						placeholder="请选择系部">
						<el-option
							v-for="item in educationAdminData.departmentList"
							:key="item.department"
							:label="item.department"
							:value="item.department"
						>
						</el-option>
					</el-select>
					<div>
						<el-button type="primary" @click="teacherSelectByDepartment">确认</el-button>
						<el-button type="primary" @click="cleanTeacherSelect">清空选择</el-button>
					</div>

				</div>
				<div class="content">
					<!--				数据表格 start-->
					<el-table :data="educationAdminData.teacherList" style="width: 100%">
						<el-table-column prop="account" label="账号"> </el-table-column>
						<el-table-column prop="name" label="姓名"> </el-table-column>
						<el-table-column prop="department" label="系部"> </el-table-column>
						<el-table-column prop="state" label="状态">
							<template #default="scope">
								<el-tag
									:type="scope.row.state == '0' ? 'primary' : 'info'"
								>{{scope.row.state=='0'?"在职":"禁用"}}</el-tag>
							</template>
						</el-table-column>
						<el-table-column label="操作" width="235">
							<template #default="scope">
								<el-button size="mini" @click="openTeacherEdit(scope.row,scope.$index)">编辑</el-button>
								<el-button size="mini" @click="openAlert(scope.row.name)">重置密码</el-button>
								<el-button v-if="scope.row.state==1"
										   size="mini"
										   type="success"
										   @click="teacherStateFunciton(scope.$index, scope.row,0)">激活</el-button>
								<el-button v-else
										   size="mini"
										   type="danger"
										   @click="teacherStateFunciton(scope.$index, scope.row,1)">禁用</el-button>

							</template>
						</el-table-column>
					</el-table>
					<!--				数据表格 end-->
					<!--					弹出框 start-->
					<el-dialog
						title="编辑教师信息"
						v-model="teacherDialogVisible"
						width="30%">
						<el-form label-width="80px">
							<el-form-item label="账号">
								<el-input v-model="editTeacher.account"></el-input>
							</el-form-item>
							<el-form-item label="姓名">
								<el-input v-model="editTeacher.name"></el-input>
							</el-form-item>

							<el-form-item label="所属系部">
								<el-select v-model="editTeacher.department">
									<el-option label="计算机科学学院" value="计算机科学学院"></el-option>
									<el-option label="数学学院" value="数学学院"></el-option>
									<el-option label="体育学院" value="体育学院"></el-option>
								</el-select>
							</el-form-item>

						</el-form>
						<template #footer>
						<span class="dialog-footer">
							<el-button type="primary" @click="teacherDialogVisible=false">确 定</el-button>
							<el-button @click="teacherDialogVisible = false">取 消</el-button>
						</span>
						</template>
					</el-dialog>
					<!--					弹出框 start-->

				</div>
			</div>
		</el-tab-pane>
		<el-tab-pane label="导入用户" name="import">
			<div class="import-content">
				<div class="upload">
					<el-upload
						class="upload-demo"
						drag
						action="https://jsonplaceholder.typicode.com/posts/"
						multiple
						accept=".xlsx"
					>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						<template #tip>
							<div class="el-upload__tip">只能上传 xls/xlsx 文件，且不超过 1MB</div>
						</template>
					</el-upload>
					<el-button type="primary" style="margin-top: 80px">上传</el-button>
				</div>
			</div>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
export default {
	name:"User",
	data() {
		return {
			// 学生的弹框控制
			dialogVisible:false,
			// 正在编辑的学生
			editStudent:{},
			//教师的选择
			teacherSelectDepartmentStr:"",
			// 正在编辑的教师
			editTeacher:{},
			// 教师的弹框控制
			teacherDialogVisible:false,
			// 上面局部---------------------------------
			adminData:this.$store.state.adminData,
			educationAdminData: this.$store.state.educationAdminData,
		}
	},
	methods: {
		/**
		 * 禁用学生
		 * @param index
		 * @param row
		 */
		handleDelete(index,row,state){
			this.educationAdminData.studentList[index].state=state;
		},
		handleClick(tab, event) {
			console.log(tab, event)
		},
		changeDepartmentListCheck(departmentName){
			// 选了以后先初始化
			this.educationAdminData.subjectList=[];
			this.educationAdminData.subjectListCheck="";
			this.educationAdminData.clazzList=[];
			this.educationAdminData.clazzListCheck="";

			this.educationAdminData.departmentList.forEach((departmentItem)=>{
				if(departmentItem.department==departmentName){
					const list=departmentItem.subject;
					this.educationAdminData.subjectList=list;
				}
			});
		},
		changeSubjectListCheck(subjectNmae){
			this.educationAdminData.clazzList=[];
			this.educationAdminData.clazzListCheck="";
			const list=this.educationAdminData.subjectList.forEach((subjectItem)=>{
				if(subjectItem.name==subjectNmae){
					const list=subjectItem.clazz;
					this.educationAdminData.clazzList=list;
				}
			});
		},
		selectListByClass(){
			const oldList=this.educationAdminData.studentList;
			this.educationAdminData.studentList=[];
			oldList.forEach(item=>{
				if (this.educationAdminData.clazzListCheck==""){
					if (this.educationAdminData.subjectListCheck==""){
						if(this.educationAdminData.departmentListCheck==""){
							this.educationAdminData.studentList.push(item);
						}else{
							if(this.educationAdminData.departmentListCheck==item.department){
								this.educationAdminData.studentList.push(item);
							}
						}
					}else{
						if(this.educationAdminData.subjectListCheck==item.subject){
							this.educationAdminData.studentList.push(item);
						}
					}
				}else{
					if(this.educationAdminData.clazzListCheck==item.clazz){
						this.educationAdminData.studentList.push(item);
					}
				}
			});
		},
		cleanSelect(){
			this.educationAdminData.departmentListCheck="";
			this.educationAdminData.subjectListCheck="";
			this.educationAdminData.clazzListCheck="";
		},
		/**
		 * 重置密码
		 */
		openAlert(name) {
			this.$confirm(`将重置该用户（${name}）密码为123456, 是否继续?`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.$message({
						type: 'success',
						message: '重置成功!',
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消',
					})
				})
		},
		openStudentEdit(student, index){
			this.editStudent=student;
			this.dialogVisible=true;
			this.educationAdminData.studentListIndex=index;
		},
		besureEdit(){
			// this.educationAdminData.studentList[this.educationAdminData.studentListIndex]=this.editStudent;
		},
		/**
		 * 教师选择
		 */
		teacherSelectByDepartment(){
			if(this.teacherSelectDepartmentStr==""){
				return;
			}
			const oldList=this.educationAdminData.teacherList;
			this.educationAdminData.teacherList=[];

			oldList.forEach(item=>{
				if (item.department==this.teacherSelectDepartmentStr){
					this.educationAdminData.teacherList.push(item);
				}
			});
		},
		/**
		 * 清空教师选择
		 */
		cleanTeacherSelect(){
			this.teacherSelectDepartmentStr="";
		},
		/**
		 * 修改教师状态
		 * @param index
		 * @param row
		 * @param state
		 */
		teacherStateFunciton(index,row,state){
			this.educationAdminData.teacherList[index].state=state;
		},
		openTeacherEdit(teacher, index){
			this.editTeacher=teacher;
			this.teacherDialogVisible=true;
			this.educationAdminData.teacherListIndex=index;
		},
	},
	created(){
		// 加载学生和教师list
		if(this.educationAdminData.studentList.length<1||this.educationAdminData.teacherList.length<1)
		this.adminData.tableData.forEach(item=>{
			if(item.roleId==5){
				this.educationAdminData.studentList.push(item);
			}else if(item.roleId==3||item.roleId==4){
				this.educationAdminData.teacherList.push(item);
			}
		});

	}
}
</script>

<style lang="scss" scoped>
.student-list{
	width: 100%;
	height: 100%;

	.header{

		display: flex;
		justify-content: center;
		align-content: center;

	}

	.content{

	}
}
.teacher-list{
	width: 100%;
	height: 100%;
	.header{

		display: flex;
		justify-content: center;
		align-content: center;

	}

	.content{

	}
}

.import-content{
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.upload{
		text-align: center;
	}
}
</style>
