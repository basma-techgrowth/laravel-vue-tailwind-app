import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      data: {},
      token: null,
    }
  },
  getters: {},
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    }
  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.data = {
        ...userData.user,
        name: 'Tom Cook',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      };
      state.user.token = 123;
    }
  },
  modules: {}
});

export default store;