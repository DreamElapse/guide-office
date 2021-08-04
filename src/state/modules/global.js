// import API from "@api";

export const state = {
  keyword: ''
}

export const getters = {}

export const mutations = {
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword
  }
}

export const actions = {
  setKeyword({commit}, keyword) {
    console.log(123)
    commit('SET_KEYWORD', keyword)
  }
 
}
