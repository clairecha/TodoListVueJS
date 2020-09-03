import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import AddForm from './components/AddForm';
import ListTodo from './components/ListTodo';
import 'es6-promise/auto'


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

const routes = [
  { path: '/new', component: AddForm },
  { path: '/list', component: ListTodo, props: { whatToDisplay: 'all' } },
  { path: '/done', component: ListTodo, props: { whatToDisplay: 'done' } },
  { path: '/todo', component: ListTodo, props: { whatToDisplay: 'todo' } },
];

export default routes;

const router = new VueRouter({ routes });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
