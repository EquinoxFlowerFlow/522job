import Vue from 'vue'
import Vuex from 'vuex'
import { post, get } from '../utils/request'
import { 
  TEACH_LOGIN, TEACH_MU_LOGIN, 
  TEACH_ADD, TEACH_MU_ADD,
  TEACH_LIST, TEACH_MU_LIST,
  TEACH_UPDATE,TEACH_MU_UPDATE,
  TEACH_DELETE,TEACH_MU_DELETE,
  TEACH_MU_MODA
  } from "../constants";
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'',
    list: [],
    status: '',
    dialogFormVisible: false,
  },
  mutations: {
    [TEACH_MU_LOGIN] (state, username) {
      state.username = username
    },
    [TEACH_MU_LIST] (state, list) {
      state.list = list
    },
    [TEACH_MU_ADD] (state, status) {
      state.status = status
    },
    [TEACH_MU_UPDATE] (state, status) {
      state.status = status
    },
    [TEACH_MU_DELETE] (state, status) {
      state.status = status
    },
    [TEACH_MU_MODA] (state, dialogFormVisible) {
      state.dialogFormVisible = dialogFormVisible
    }
  },
  actions: {
    async [TEACH_LOGIN] (state, user) {
      const login = await post(api.login, user)
      if (login.status == 200) {
        state.commit(TEACH_MU_LOGIN,user.username)
      }
    },
    async [TEACH_LIST] ( state ) {
      const list = await get(api.list)
      state.commit(TEACH_MU_LIST, list.users)
    },
    async [TEACH_ADD] (state, data ) {
      const add = await post(api.add, data)
      state.commit(TEACH_MU_ADD,add)
    },
    async [TEACH_UPDATE] (state, data ) {
      const update = await post(api.update, data)
      state.commit(TEACH_MU_UPDATE,update)
    },
    async [TEACH_DELETE] (state, {id} ) {
      const delet = await post(api.delete, {id})
      state.commit(TEACH_MU_UPDATE,delet)

    },
  },
  modules: {
    
  }
})
