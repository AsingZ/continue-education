<!--
	在这判断角色分发到对应角色页面
-->
<template>
	<div class="home">
	</div>
</template>

<script>
import roleHelper from "@/utils/roleHelper";

export default {
	name: 'Home',
	components: {},
	methods:{
	},
	created(){
		let store=this.$store.state;
		// 判断登录
		if (store.token
			&&store.token!=""
			&&store.roleId!=null) {
			// 登录了 判断role跳到对应页
			this.$router.push(roleHelper.getRouterStringByRoleId(store.roleId));
		}else{
			// 没登录跳到登录页
			this.$router.push("/login");
			console.log("data")
		}
	}
}
</script>

<style lang="scss" scoped>

</style>