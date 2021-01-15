export interface State {
  userInfo: object;
}

export default {
  namespaced: true,
  state: {
    userInfo: {},
  },
  mutations: {
    /**
     * @description 用户信息
     */
    setUserInfo(state: State, userInfo: object) {
      state.userInfo = userInfo;
    },
  },
};
