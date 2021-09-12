<template>
	<el-tabs v-model="adminData.activeName" @tab-click="handleClick">
		<el-tab-pane name="list">
			<template #label><i class="el-icon-s-home"></i>用户列表</template>
			<div class="list-content">
<!--				数据表格 start-->
				<el-table :data="adminData.tableData" style="width: 100%">
					<el-table-column prop="id" label="ID" width="180"> </el-table-column>
					<el-table-column prop="account" label="账号" width="180"> </el-table-column>
					<el-table-column prop="name" label="姓名" width="180"> </el-table-column>
					<el-table-column prop="roleId" label="角色" width="180">
						<template #default="scope">
							<span v-if="scope.row.roleId==1">管理员</span>
							<span v-if="scope.row.roleId==2">教务管理员</span>
							<span v-if="scope.row.roleId==3">教师</span>
							<span v-if="scope.row.roleId==4">班主任</span>
							<span v-if="scope.row.roleId==5">学员</span>
						</template>
					</el-table-column>

					<el-table-column prop="state" label="状态" width="180">
						<template #default="scope">
							<el-tag
								:type="scope.row.state == '0' ? 'primary' : 'info'"
								>{{scope.row.state=='0'?"在校":"禁用"}}</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template #default="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
							>编辑</el-button
							>
							<el-button
								size="mini"
								type="danger"
								@click="handleDelete(scope.$index, scope.row)"
							>删除</el-button
							>
						</template>
					</el-table-column>
				</el-table>
<!--				数据表格 end-->

				<el-dialog
					title="编辑信息"
					v-model="adminData.dialogVisible"
					width="30%">
					<el-form label-width="80px">
						<el-form-item label="id">
							<el-input disabled v-model="adminData.user.id"></el-input>
						</el-form-item>
						<el-form-item label="账号">
							<el-input v-model="adminData.user.account"></el-input>
						</el-form-item>
						<el-form-item label="姓名">
							<el-input v-model="adminData.user.name"></el-input>
						</el-form-item>

						<el-form-item label="角色">
							<el-select v-model="adminData.user.roleId">
								<el-option label="管理员" value="1"></el-option>
								<el-option label="教务管理员" value="2"></el-option>
								<el-option label="教师" value="3"></el-option>
								<el-option label="班主任" value="4"></el-option>
								<el-option label="学员" value="5"></el-option>
							</el-select>
						</el-form-item>


						<el-form-item label="状态">
							<el-radio-group v-model="adminData.user.state">
								<el-radio label="0">在校</el-radio>
								<el-radio label="1">禁用</el-radio>
							</el-radio-group>
						</el-form-item>

					</el-form>
					<template #footer>
						<span class="dialog-footer">
							<el-button type="primary" @click="adminData.dialogVisible=false">确 定</el-button>
							<el-button @click="adminData.dialogVisible = false">取 消</el-button>
						</span>
					</template>
				</el-dialog>
			</div>
		</el-tab-pane>
		<el-tab-pane label="新增用户" name="add">
			<div class="list-add">
				<el-form label-width="80px">
					<el-form-item label="id">
						<el-input v-model="adminData.adduser.id"></el-input>
					</el-form-item>
					<el-form-item label="账号">
						<el-input v-model="adminData.adduser.account"></el-input>
					</el-form-item>
					<el-form-item label="姓名">
						<el-input v-model="adminData.adduser.name"></el-input>
					</el-form-item>

					<el-form-item label="角色">
						<el-select v-model="adminData.adduser.roleId">
							<el-option label="管理员" value="1"></el-option>
							<el-option label="教务管理员" value="2"></el-option>
							<el-option label="教师" value="3"></el-option>
							<el-option label="班主任" value="4"></el-option>
							<el-option label="学员" value="5"></el-option>
						</el-select>
					</el-form-item>


					<el-form-item label="状态">
						<el-radio-group v-model="adminData.adduser.state">
							<el-radio label="0">在校</el-radio>
							<el-radio label="1">禁用</el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item size="large">
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-tab-pane>
		<el-tab-pane label="导入用户" name="import">
			<div class="list-import">
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
import {mapState,mapMutations} from 'vuex'

export default {
	name: "User",
	data() {
		return {
			adminData:this.$store.state.adminData,
		}
	},
	computed:{
		...mapState({
			activeName:state=>state.adminData.activeName,
			tableData:state=>state.adminData.tableData,
			dialogVisible:state=>state.adminData.dialogVisible,
			index:state=>state.adminData.index,
			user:state=>state.adminData.user,
			adduser:state=>state.adminData.adduser,
		}),
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event)
		},
	//	操作的方法 start
		handleEdit(indexNum, row) {
			this.adminData.index=indexNum;
			this.adminData.user=this.tableData[this.index];
			this.adminData.dialogVisible=true;
		},
		handleDelete(index, row) {
			function remove(array,index)
			{
				if(index<=(array.length-1))
				{
					for(var i=index;i<array.length;i++)
					{
						array[i]=array[i+1];
					}
				}
				else
				{
					throw new Error('超出最大索引！');
				}
				array.length=array.length-1;
				return array;
			}
			this.adminData.tableData=remove(this.adminData.tableData,index);
		},
	//	操作的方法 end
		onSubmit(){

			const newUser = JSON.parse(JSON.stringify(this.adminData.adduser));
			this.adminData.tableData.push(newUser);
			this.adduser.id="";
			this.adduser.name="";
			this.adduser.account="";
			this.$alert('添加成功', '提示', {
				confirmButtonText: '确定',
				callback: (action) => {

				},
			})
		},

	},
	mounted(){

	}
}
</script>

<style lang="scss" scoped>
.editDialog{
	display: flex;
	flex-direction: column;
	justify-content: center;

}

.list-import{
	height: 100%;
	.upload{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
}

</style>
