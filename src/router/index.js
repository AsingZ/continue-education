import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store/index"

const routes = [
	{
		path: '/login',
		name: 'Login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		// 管理员
		path: "/admin",
		name: "Admin",
		component: ()=>import("../views/Admin"),

	},
	{
		// 教务管理员
		path: "/educationalAdmin",
		name: "EducationalAdmin",
		component: ()=>import("../views/EducationalAdmin"),
	},
	{
		// 教师
		path: "/teacher",
		name: "Teacher",
		component: ()=>import("../views/Teacher"),
	},
	{
		// 学员
		path: "/student",
		name: "Student",
		component: ()=>import("../views/Student"),
	},
	{
		path: "/courseDetailed",
		name: "CourseDetailed",
		component: () => import("../views/CourseDetailed"),
		children:[
			{
				path:"index",
				component:()=>import("../views/studentCourse/CourseIndex"),
			}

		]
	},

]


const router = createRouter({
	history: createWebHashHistory(),
	routes
})

// 定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。
router.beforeEach((to, from, next) => {
	if (to.name!="Login") {  // 判断该路由是否需要登录权限
		if (store.state.token&&store.state.token!="") {  // 通过vuex state获取当前的token是否存在
			next();
		}
		else {
			console.log("router/index.js40：未登录");
			window.localStorage.removeItem('loged');
			window.localStorage.removeItem('store');
			next({
				path: 'login',
				query: {redirect:router.currentRoute.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	}
	else {
		next();
	}
})


export default router
