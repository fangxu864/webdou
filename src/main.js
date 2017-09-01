import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './pages/App.vue';
import test from './pages/test.vue';

Vue.use(ElementUI)

const routes = {
  '/': App,
  '/about': test
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || App
    }
  },
  render (h) { return h(this.ViewComponent) }
})
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})