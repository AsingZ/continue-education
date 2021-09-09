import { createStore } from 'vuex'

export default createStore({
  state: {
    token:""
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
