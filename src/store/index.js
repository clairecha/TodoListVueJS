import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    GET_TODO(state, todo) {
      state.list = todo;
    },
    POST_TODO(state, todo) {
      state.list = todo;
    },
  },
  actions: {
    ACTION_GET(context, data) {
      context.commit('GET_TODO', data);
    },
    ACTION_POST(context, data) {
      context.commit('POST_TODO', data);
    },
  },
  getters: {
    getTodo: (state) => {
      return state.list;
    },
    getSize: (state) => {
      return state.list.length;
    },
  },
});
