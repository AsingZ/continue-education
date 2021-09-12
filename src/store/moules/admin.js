export default {
	namespaced:true,
	state:{
		activeName: 'list',
		tableData: [
			{
				id:1,
				account:"180015511001",
				name: '学生1',
				roleId:5,
				state:0,
			},
			{
				id:2,
				account:"180015511002",
				name: '学生2',
				roleId:5,
				state:0,
			},
			{
				id:3,
				account:"180015511003",
				name: '学生3',
				roleId:5,
				state:1,
			},
			{
				id:1,
				account:"000001",
				name: '教务管理员1',
				roleId:2,
				state:0,
			},
			{
				id:1,
				account:"000002",
				name: '教师1',
				roleId:3,
				state:0,
			},
			{
				id:2,
				account:"000003",
				name: '班主任1',
				roleId:4,
				state:0,
			},

		],
		dialogVisible: false,
		index:0,
		user:{
			id:1,
			account:"180015511001",
			name: '学生1',
			roleId:5,
			state:0,
		},
		adduser:{
			id:"",
			account:"",
			name: '',
			roleId:null,
			state:null,
		},
		/*上面是user里面数据*/
		/*下面是permission数据*/
		educationalAdminList:[
			{
				key:1,
				label:"/educational/addStudent",
			},
			{
				key:2,
				label:"/educational/delStudent",
			},
			{
				key:3,
				label:"/educational/editStudent",
			},
			{
				key:4,
				label:"/educational/searchStudent",
			},
			{
				key:5,
				label:"/educational/courseList",
			},
			{
				key:6,
				label:"/educational/addCourse",
			},
			{
				key:7,
				label:"/educational/editCourse",
			},
			{
				key:8,
				label:"/educational/addCourse",
			},
			{
				key:9,
				label:"/educational/banCourse",
			},
			{
				key:10,
				label:"/common/courseList",
			},
			{
				key:11,
				label:"/common/logedInfo",
			},
			{
				key:12,
				label:"/teacher/courseList",
			},
			{
				key:13,
				label:"/teacher/courseInfo",
			},
			{
				key:14,
				label:"/student/courseList",
			},
			{
				key:15,
				label:"/student/courseInfo",
			},
		],
		educationalAdminPermissionValue:[1,2,3,4,5,6,7],
		teacherPermissionValue:[10,11,12,13],
		headTeacherPermissionValue:[12,13],
		studentPermissionValue:[14,15],
	},
	mutations:{

	},
	actions:{

	},
	getters:{

	}
}