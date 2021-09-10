import { createStore } from 'vuex'

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
  }
})
