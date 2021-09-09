<template>
	<div class="home">
		<button @click="t">访问</button>
	</div>
</template>

<script>
import ipconfig from "@/utils/ipconfig";
import axios from "@/plugins/axios"

export default {
	name: 'Home',
	components: {},
	methods:{
		t(){
			axios.get(ipconfig.address+"/common/getLogin").then((response)=>{
				console.log(response)
			});
		}
	}
}
</script>
