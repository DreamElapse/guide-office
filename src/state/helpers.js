import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export const someComputed = {
  ...mapState('some', {
    currentUser: (state) => state.currentUser
  }),
  ...mapGetters('some', ['constants'])
}

export const someMethods = mapActions('some', ['action1', 'action2'])

export const globalComputed = {
  ...mapState('global', {
    keyword: (state) => state.keyword
  })
}
export const globalMethods = {
  ...mapMutations('global', ['SET_KEYWORD'])
}
export const globalActions = {
  ...mapActions('global', ['setKeyword'])
}
