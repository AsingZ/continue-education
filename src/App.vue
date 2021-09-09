<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'App',
	created() {
		if(localStorage.getItem("loged")){
			this.$store.replaceState(
				Object.assign({},this.$store.state,JSON.parse(window.localStorage.getItem("store")))
			);
		}else {
			window.localStorage.removeItem('store');
		}
		//在页面刷新时将vuex里的信息保存到localStorage里
		window.addEventListener("beforeunload",()=>{
			window.localStorage.setItem("store",JSON.stringify(this.$store.state));
		});
	},
}
</script>

<style>

</style>