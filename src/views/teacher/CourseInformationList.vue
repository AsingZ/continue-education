<!--
	课程通知列表
-->
<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item>课程通知</el-breadcrumb-item>
		<el-breadcrumb-item>课程通知列表</el-breadcrumb-item>
	</el-breadcrumb>
	<el-divider></el-divider>


	<div class="table-list">
		<el-table :data="informationList" style="width: 100%">
			<el-table-column prop="title" label="标题" width="180"> </el-table-column>
			<el-table-column prop="content" label="内容"> </el-table-column>
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
	</div>
<!--					弹出框 start-->
	<el-dialog
		title="编辑通知信息"
		v-model="informationDialogVisible"
		width="30%">
		<el-form label-width="80px">
			<el-form-item label="标题">
				<el-input v-model="informationList[informationListIndex].title"></el-input>
			</el-form-item>
			<el-form-item label="内容">
				<el-input v-model="informationList[informationListIndex].content"></el-input>
			</el-form-item>

			<el-form-item label="选择班级">
				<el-select model-value="">
					<el-option label="计科技1801" value="计科技1801"></el-option>
					<el-option label="计科技1802" value="计科技1802"></el-option>
					<el-option label="计科技1803" value="计科技1803"></el-option>
					<el-option label="计科技1804" value="计科技1804"></el-option>
				</el-select>
			</el-form-item>

		</el-form>
		<template #footer>
						<span class="dialog-footer">
							<el-button type="primary" @click="informationDialogVisible=false">确 定</el-button>
							<el-button @click="informationDialogVisible = false">取 消</el-button>
						</span>
		</template>
	</el-dialog>
<!--					弹出框 start-->
</template>

<script>
export default {
name: "CourseInformationList",
data(){
	return {
		// 存放展示的通知列表
		informationList:[],
		informationListIndex:null,
		// 弹出框
		informationDialogVisible:false,

		teacherData:this.$store.state.teacherData,

	}
},
methods:{
	handleDelete(index,row){
		console.log(this.informationList)
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
		this.informationList.remove(index);
		console.log(row)
		this.teacherData.courseInformationList.remove(row);
	},
	handleEdit(index,edit){
		this.informationListIndex=index;
		this.informationDialogVisible=true;
	}
},
created(){
	this.teacherData.courseInformationList.forEach(item=>{
		if(item.course==this.teacherData.courseManagerInfoItem.name){
			const it=item;
			this.informationList.push(it);
		}
	});
	// 筛选课程通知
	// this.informationList=this.teacherData.courseInformationList.filter(item=>{
	// 	return item.course==this.teacherData.courseManagerInfoItem.name;
	// });
},
}
</script>

<style lang="scss" scoped>

</style>