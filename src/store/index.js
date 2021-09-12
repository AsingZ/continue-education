import { createStore } from 'vuex'
import adminData from "./moules/admin"
import educationAdminData from "@/store/moules/educationAdmin";

export default createStore({
  state: {
    // 是否登录
    token:"",
    // 用户角色
    roleId:null,
    // 登录信息
    logedInfo:null,
  },
  mutations: {
    retoken(){
      this.token="";
    }
  },
  actions: {
  },
  modules: {
    adminData:adminData,
    educationAdminData:educationAdminData,
  }
})
