import Vue from 'vue'
import Vuex from 'vuex'
import { post, get } from '../utils/request'
import {TEACH_LOGIN, TEACH_MU_LOGIN} from "../constants";
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    username:'',

  },
  mutations: {
    [TEACH_MU_LOGIN] (state, username) {
      state.username = username
    }
  },
  actions: {
    async [TEACH_LOGIN] (state,user) {
      const login = await post(api.login, user)

      if (login.status == 200) {
        state.commit(TEACH_MU_LOGIN,user.username)
      }
      
      //注册部分
      // const reg = await post('http://api.baxiaobu.com/index.php/home/v1/register',user)
      // console.log(reg)
    }
  },
  modules: {
    
  }
})
