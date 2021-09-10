<template>
<div class="box">
	<el-container>
		<!-- 左边 start -->
		<el-aside class="left">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>教师信息</span>
					</div>
				</template>
				<div class="card-content">
					<ul>
						<li>教师名称：<span>教师1</span></li>
						<li>所属院系：<span>计算机科学学院</span></li>
						<li>个人简介：</li>
					</ul>
				</div>
			</el-card>

			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>课程信息</span>
					</div>
				</template>
				<div class="card-content">
					<ul>
						<li>课程所属院系：<span>计算机科学学院</span></li>
						<li>选课学生数：<span>263</span></li>
						<li>课程访问数：<span>12</span></li>
						<li>访客访问数：<span>1</span></li>
						<li>课程通知数：<span>0</span></li>
						<li>课程资源数：<span>0</span></li>
						<li>课程任务数：<span>0</span></li>
					</ul>
				</div>
			</el-card>
		</el-aside>
		<!-- 左边 end -->
		<!-- 中间 start -->
		<el-main class="center">
			<div class="box">
				<div class="course-info">
					<div>课程介绍</div>
					<el-divider style="margin-top: 5px;margin-bottom: 5px"></el-divider>
					<div class="info-txt">
						这里是课程介绍
					</div>
				</div>
				<div class="course-center-bottom">
					<div>课程通知</div>
					<el-divider style="margin-top: 5px;margin-bottom: 0px"></el-divider>
					<div class="info-txt">
						<ul>
							<li>关于教材的通知<span>2021-8-20</span></li>
							<li>测试通知2<span>2021-8-20</span></li>
						</ul>
					</div>
				</div>
			</div>
		</el-main>
		<!-- 中间 end -->
		<!-- 右边 start -->
		<el-aside class="right">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>最新动态</span>
					</div>
				</template>
				<div class="card-content">
					<ul>
						<li><span>教师1</span>&nbsp;发布了新的作业<span>&nbsp;实验任务</span></li>
					</ul>
				</div>
			</el-card>
		</el-aside>
		<!-- 右边 end -->
	</el-container>
</div>
</template>

<script>
export default {
	name: "CourseIndex"
}
</script>

<style lang="scss" scoped>
@mixin flexColumn{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

@mixin boxCard{
	.box-card{
		margin-top: 20px;

		.card-header{
			display: flex;
			justify-content: center;
		}

		.card-content{
			padding-left: 20px;
			ul{
				li{
					margin-top: 10px;
					span{
						color: #E6A23C;
					}
				}
			}
		}
	}
}


.box{
	width: 100%;

	.left{
		width: 30%;
		padding: 10px;
		@include flexColumn;

		.box-card{
			margin-top: 20px;

			.card-header{
				display: flex;
				justify-content: center;
			}

			.card-content{
				padding-left: 20px;
				ul{
					li{
						margin-top: 10px;
					}
				}
			}
		}

	}

	.center{
		width: 40%;

		.box{
			width: 100%;
			@include flexColumn;

			.course-info{
				@include flexColumn;

				.info-txt{
					height: 250px;
				}
			}
			.course-center-bottom{
				@include flexColumn;
				.info-txt{
					height: 250px;
					ul{
						li{
							border-bottom: 1px solid #DCDFE6;
							margin-top: 10px;
							span{
								float:right;
							}
						}
					}
				}
			}
		}
	}

	.right{
		width: 30%;
		padding: 10px 0 10px 10px;

		@include boxCard;
	}
}

</style>