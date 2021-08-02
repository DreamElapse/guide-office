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
    currentTitles: (state) => state.currentTitles,
    marginBottom: (state) => state.marginBottom,
    baseList: (state) => state.baseList
  })
}
export const globalMethods = {
  ...mapMutations('global', ['SET_CURRENT_TITLES'])
}
export const globalActions = {
  ...mapActions('global', ['SET_CURRENT_TITLES', 'getBaseList'])
}
