<template>
	<el-tree
		:data="educationAdminData.departmentSubjectClazz"
		default-expand-all
		:expand-on-click-node="false"
	>
		<template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>
            <a @click="append(data)" v-if="data.name.indexOf('18')==-1"> <i class="el-icon-circle-plus-outline"></i> </a>
            <a @click="remove(node, data)"> <i class="el-icon-remove-outline"></i> </a>
          </span>
			<span>{{ data.name }}</span>

        </span>
		</template>
	</el-tree>
</template>

<script>
export default {
name: "Department",
data(){
	return{

		educationAdminData:this.$store.state.educationAdminData,
	}
},
methods:{
	append(node){
		this.$prompt('请输入名称', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
		})
		.then(({ value }) => {

			const newChild = { name: value, children: [] };
			if (!node.children) {
				node.children = [];
			}
			node.children.push(newChild);
			this.educationAdminData.departmentSubjectClazz = [...this.educationAdminData.departmentSubjectClazz];

		})
		.catch(() => {
			this.$message({
				type: 'info',
				message: '取消输入',
			})
		})


	},
	remove(node, data) {
		const parent = node.parent
		const children = parent.data.children || parent.data
		const index = children.findIndex((d) => d.name === data.name)
		children.splice(index, 1)
		this.educationAdminData.departmentSubjectClazz = [...this.educationAdminData.departmentSubjectClazz]
	},
},
}
</script>

<style lang="scss" scoped>

</style>