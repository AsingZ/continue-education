export default {
	namespaced:true,
	state:{
		/**
		 * 课程详细管理里面的课程信息
		 */
		courseManagerInfoItem:{
			id:"123456",
			name:"JAVA基础",
			teacher:"教师1",
			department:"计算机科学学院",
			subject:"计算机科学与技术",
		},
		/**
		 * 课程通知
		 */
		courseInformationList:[
			{
				course:"JAVA基础",
				title:"测试通知",
				content:"这是通知内容",
			},
			{
				course:"JAVA基础",
				title:"测试通知1",
				content:"这是通知内容1",
			},
			{
				course:"JAVA基础",
				title:"新通知",
				content:"这是通知内容。这是通知内容。这是通知内容。这是通知内容。",
			},
		],
	},
	mutations:{

	},
	actions:{

	},
	getters:{

	}
}