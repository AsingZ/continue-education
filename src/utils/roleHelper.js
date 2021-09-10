export default {
	/**
	 * 通过角色id来返回对应路由字符串
	 * @param roleId
	 * @returns {string}
	 */
	getRouterStringByRoleId(roleId){
		switch (roleId){
			// 管理员
			case 1:
				return "/admin";
			// 教务管理员
			case 2:
				return "/educationalAdmin";
			// 教师
			case 3:
				return "/teacher";
			// 班主任
			case 4:
				return "/teacher";
			// 学员
			case 5:
				return "/student";
		}
	},

}