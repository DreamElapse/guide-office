import API from "@api";

export const state = {
  baseList: []
}

export const getters = {}

export const mutations = {
  SET_BASE_LIST(state, baseList) {
    state.baseList = [...baseList]
  }
}

export const actions = {
  getBaseList({commit}) {
    return API.BaseData.getBaseList().then(res => {
      if (res.error_code === 0) {
        let list = res.data.map(item => {
          return {
            base_id: item.base_id,
            base_name: item.base_name.replace('组', '')
          }
        })
        // list.unshift({base_id: '', base_name: '公司整体'})
        commit('SET_BASE_LIST', list)
      }
    })
  }
}
