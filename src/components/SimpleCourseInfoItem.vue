<!--
	教师和学生的课程列表的一块，展示一些简单的信息
-->
<template>
<div class="course-list-item-box">
	<!-- 照片 start -->
	<div class="item-img">
		<img src="@/assets/images/default_course_img.jpg" alt="">
	</div>
	<!-- 照片 end -->
	<!-- 内容 start -->
	<div class="item-content">
		<p class="title">
			<span>{{courseName}}</span>
			<img src="@/assets/images/new.gif">
		</p>
		<p class="course-id">课程编号：<span>{{courseId}}</span></p>
		<p class="teacher-name">主讲教师：<span>{{teacherName}}</span></p>
		<div class="link">
			<el-button size="small" type="primary">进入课程</el-button>
		</div>
	</div>
	<!-- 内容 start -->
</div>
</template>

<script>
export default {
name: "SimpleCourseInfoItem",
// 参数
props:["courseName","courseId","teacherName","isNew"],
methods:{

},
}
</script>

<style lang="scss" scoped>
.course-list-item-box{
	width: 270px;
	background: #FCFCFC;
	margin: 15px 15px 5px 0;
	padding-bottom: 15px;
	border-bottom: 1px solid #efefef;

	//&:hover{
	//	background: #F7F7F7;
	//}

	img{
		width: 270px;
		height: 153px;

		&:hover{
			cursor: pointer;
		}
	}

	.item-content{
		margin-top: 10px;
		padding-left: 1px;
		// span的marginLeft值
		$spanMarginLeft:10px;

		p{
			margin-top: 5px;
		}

		p.title{
			font-size: 18px;
			font-weight: bold;
			line-height: 30px;
			color: #333;

			img{
				width: 27px;
				height: 11px;
				margin-left: $spanMarginLeft;
			}
			&:hover{
				cursor: pointer;
			}
		}
		p.course-id,p.teacher-name{
			font-size: 14px;
			color: #030;
			line-height: 20px;
			span{
				margin-left: $spanMarginLeft;
			}
		}

		.link{
			margin-top: 20px;
			display: flex;
			justify-content: center;
		}
	}

}
</style>