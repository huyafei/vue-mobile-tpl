import "../../utils/axios";

const user = {
  state: {
    userInfo: "",
    username: "",
    token: localStorage.getItem("token")
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    }
  },
  actions: {
    // 获取用户信息
    getUserInfo({ commit, state }) {
      // commit("SET_USERNAME", userInfoData.username);
      // commit("SET_USERINFO", userInfoData);
    },
    // 退出登录
    logOut({ commit, state }) {}
  }
};

export default user;
