<!--
	一个通知条目在学生的列表类展示
-->
<template>
<div class="box">
	<el-badge is-dot class="item" :hidden="checked!=''">
		<div class="content">
			<span>{{title}}</span>
		</div>
	</el-badge>
</div>

</template>

<script>
export default {
name: "SimpleInformationItem",
props:["title","checked"],
}
</script>

<style lang="scss" scoped>
.box{
	width: 100%;
	border-bottom: 1px solid #efefef;
	padding-bottom: 5px;

	&:hover{
		background: #F7F7F7;
		cursor: pointer;
	}

	.item {
		margin-top: 10px;
		margin-right: 10px;
		width: 100%;
		.content{
			width: 100%;
			text-align: center;

			span{
				display: inline-block;
				white-space: nowrap;
				width: 100%;
				overflow: hidden;
				text-overflow:ellipsis;
			}
		}
	}


}
</style>