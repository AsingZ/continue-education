<template>
<div id="container">
<div id="output">

<!-- 中间登录 start 外面两层为背景 -->
<div class="login-box">
<div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex
justify-center flex-1">
	<!-- 左边盒子 start -->
	<div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
		<div id="login-box-right" class="m-12 xl:m-16 w-full bg-contain bg-center
		bg-no-repeat" style=""></div>
	</div>
	<!-- 左边盒子 end -->

	<!-- 右边登录界面 start -->
	<div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
	<div class="mt-0 flex flex-col items-center">
		<h1 class="text-2xl xl:text-3xl font-extrabold">用户登录</h1>
		<div class="w-full flex-1 mt-8">
		<div class="mx-auto max-w-xs">
			<input v-model.lazy="account" type="text" placeholder="账号" class="w-full px-8 py-4 rounded-lg
			font-medium bg-gray-100 border border-gray-200 placeholder-gray-500
			text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
			<input v-model.lazy="password" type="password" placeholder="密码" class="w-full px-8 py-4
			rounded-lg font-medium bg-gray-100 border border-gray-200
			placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400
			focus:bg-white mt-5" @keyup.enter="loginFrom">
			<!-- 下拉菜单 start -->
			<select v-model="roleValue" id="minimal" class="w-full px-8 py-4 rounded-lg font-medium
			bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm
			focus:outline-none focus:bg-white mt-5">
					<option v-for="item in roleList" :value ="item.id">{{item.name}}</option>
			</select>

			<!-- 下拉菜单 end -->
			<button @click="loginFrom" class="mt-5 tracking-wide font-semibold
			bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700
			ease-in-out flex items-center justify-center focus:shadow-outline
			focus:outline-none" type="submit">
				<span class="ml-3">登 录</span>
			</button>
			<p class="mt-6 text-xs text-gray-600 text-center">我同意并遵守服务协议</p>
		</div>
		</div>
	</div>
	</div>
	<!-- 右边登录界面 end -->

</div>
</div>
<!-- 中间登录 end -->
</div>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import ipconfig from "@/utils/ipconfig";
import $ from "@/assets/js/jquery.min";
import axios from "@/plugins/axios";
import { ElMessage } from 'element-plus';

export default {
name: "login",
data(){
	return {
		roleList:[],
		roleValue: "",
		account:"",
		password:"",
	}
},
computed:{
	...mapState({
	}),
},
methods: {
	/**
	 * 登录方法
	 */
	loginFrom(){
		if (this.account==null||this.account==""){
			ElMessage('账号不能为空！');
			return ;
		}
		if (this.password==null||this.password==""){
			ElMessage('密码不能为空！');
			return ;
		}

		axios.post(ipconfig.address+"/common/login",{
			account: this.account,
			password: this.password,
			roleId: this.roleValue
		}).then((response)=>{
			if(response.data.code!=200){
				ElMessage('账号密码错误！');
			}else{
				this.$store.state.token="true";
				//保存登录状态
				window.localStorage.setItem("loged",true);
				this.$router.push("/");
			}
		}).catch((error)=>{
			console.log(error);
			ElMessage('！错误');
		});
	}
},
created(){
	// 加载角色数据
	axios.get(ipconfig.selfAddress+"/data/role.json").then((response)=>{
		this.roleList=response.data;
		// 设置默认选项
		this.roleValue=this.roleList[0].id;
	}).catch(()=>{
		console.log("login.vue:88",error);
		ElMessage('网络出错，请刷新重试！');
	});
	/*
	axios.get(ipconfig.address+"/permission/roleList").then((response)=>{
		this.roleList=response.data.data;
		// 设置默认选项
		this.roleValue=this.roleList[0].id;
	}).catch((error)=>{
		console.log("login.vue:88",error);
		ElMessage('网络出错，请刷新重试！');
	});
	*/
},
mounted(){
	// 登陆背景函数
	$(function () {
		Victor("container", "output");
	});
},
watch:{
	account(newVal,oldVal){
		// 路由跳转时先执行了这个才加载的数据
		if (this.roleList==null||this.roleList.length<1){
			// 所以先做空值判断
			return;
		}
		/**
		 * 通过角色名称的名字来设置roleValue的值
		 * @param strName
		 */
		let setRoleValueByRoleName = (strName)=>{
			this.roleValue = this.roleValue=this.roleList.find(k =>k.name=== strName).id;
		}

		let len = newVal.length;
		if (len==12){
			setRoleValueByRoleName("学员");
		}else if(len == 6){
			axios.get(ipconfig.address+"/permission/roleId/"+newVal).then((response)=>{
				// 这里返回的是roleId，直接设置进去
				this.roleValue=response.data.data;
			}).catch((error)=>{
				console.log(error);
			});
		}else if(newVal === "admin"){
			setRoleValueByRoleName("管理员");
		}
	},

},
}
</script>

<style src="@/style/login.css" scoped></style>
<style src="@/style/tailwind.min.css" scoped></style>
<style lang="scss" scoped>
.login-box{
	width: 100%;
	height: 100%;
	position: absolute;

	#login-box-right {
		background-image: url("../assets/images/dlbox.svg");
	}
}
select#minimal {
	-webkit-appearance: none;
	-moz-appearance: none;
	background-image:
		linear-gradient(45deg, transparent 50%, gray 50%),
		linear-gradient(135deg, gray 50%, transparent 50%),
		linear-gradient(to right, #ccc, #ccc);
	background-position:
		calc(100% - 20px) calc(1.5em + 2px),
		calc(100% - 15px) calc(1.5em + 2px),
		calc(100% - 2.5em) calc(1em + 2px);
	background-size:
		5px 5px,
		5px 5px,
		1px 1.5em;
	background-repeat: no-repeat;
}

select#minimal:focus {
	background-image:
		linear-gradient(45deg, green 50%, transparent 50%),
		linear-gradient(135deg, transparent 50%, green 50%),
		linear-gradient(to right, #ccc, #ccc);
	background-position:
		calc(100% - 15px) calc(1.5em + 2px),
		calc(100% - 20px) calc(1.5em + 2px),
		calc(100% - 2.5em) calc(1em + 2px);
	background-size:
		5px 5px,
		5px 5px,
		1px 1.5em;
	background-repeat: no-repeat;
	border-color: green;
	outline: 0;
}

select:-moz-focusring {
	color: transparent;
	text-shadow: 0 0 0 #000;
}
</style>