<template>
	
</template>

<script>
import axios from "@/plugins/axios";
import ipconfig from "@/utils/ipconfig";
import {ElMessage} from "element-plus";

export default {
	name: "Teacher",
	beforeCreate(){
		// 1. 先判断当前角色是否是学生
		if(this.$store.state.roleId!=5){
			// 不是跳到HOME
			this.$router.push("/");
		}

		// 2.在加载之前获取登录信息
		axios.get(ipconfig.address+"/common/logedInfo").then((response)=>{
			if (response.data.code==200){
				console.log(response.data)
				this.$store.state.logedInfo=response.data.data;
				this.name=response.data.data.name;
			}else{
				ElMessage("状态异常");
			}

		}).catch((error)=>{
			console.log(error);
			console.log("student created error")
		});
	}

}
</script>

<style scoped>

</style>