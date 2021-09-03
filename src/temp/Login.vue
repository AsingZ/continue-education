<template>
	<div id="container">
		<div id="output">
			<div class="containerT">
				<h1>用户登录</h1>
				<form class="form" id="entry_form">
					<input type="text" placeholder="用户名" id="entry_name" value="admin">
					<input type="password" placeholder="密码" id="entry_password">
					<button type="button" id="entry_btn">登录</button>
					<div id="prompt" class="prompt"></div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import $ from "@/assets/js/jquery.min"

export default {
	name: "login",
	mounted(){
		$(function () {
			Victor("container", "output");   //登陆背景函数
		})
	}

}
</script>

<style src="@/style/login.css"></style>
<style lang="scss">

</style>