<template>
<el-container style="position: absolute;top: 0px;bottom: 0px;width: 100%; height: 100%; border: 1px solid #eee ">
	<el-aside width="200px" style="background-color: rgb(238, 241, 246);">
		<el-menu router="true" default-active="/admin/user">
			<el-menu-item index="/admin/user">
				<i class="el-icon-setting"></i>
				<template #title>用户管理</template>
			</el-menu-item>
			<el-menu-item index="/admin/permission">
				<i class="el-icon-setting"></i>
				<template #title>权限管理</template>
			</el-menu-item>
		</el-menu>
	</el-aside>

	<el-container style="height: 100%">
		<el-header style="text-align: right; font-size: 12px">
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="dialogVisible=true">修改密码</el-dropdown-item>
						<el-dropdown-item>
							<router-link :to="{path:'/login'}" style="text-decoration:none;">退出</router-link>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			<span>管理员</span>
		</el-header>

		<el-main style="height: 100%">
			<div style="height:calc(100%);">
				<router-view/>
			</div>
		</el-main>
	</el-container>
</el-container>
	<el-dialog
		title="修改密码"
		v-model="dialogVisible"
		width="30%"
	>
		<template #default>
			<el-form label-width="80px">
				<el-form-item label="旧密码">
					<el-input type="password" placeholder="请输入旧密码" v-model="oldpass"></el-input>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input placeholder="请输入新密码" type="password" v-model="newpass"></el-input>
				</el-form-item>
			</el-form>
		</template>
		<template #footer>
    <span class="dialog-footer">
		<el-button type="primary" @click="changePassword()">确 定</el-button>
		<el-button @click="dialogVisible = false">取 消</el-button>
    </span>
		</template>
	</el-dialog>

</template>

<script>
export default {
	name:"Admin",
	data() {
		return{
			dialogVisible:false,
			oldpass:"",
			newpass:"",
		}
	},
	components:{

	},
	methods:{
		changePassword(){
			this.$alert('修改成功', '提示', {
				confirmButtonText: '确定',
				callback: (action) => {
					this.dialogVisible=false;
				},
			});
		},
		quit(){
			this.$router.match("/login");
		}
	}
}
</script>

<style scoped>
.el-header {
	background-color: #b3c0d1;
	color: var(--el-text-color-primary);
	line-height: 60px;
}

.el-aside {
	color: var(--el-text-color-primary);
}

.content{

}
</style>
