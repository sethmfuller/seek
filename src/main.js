// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.use(require('vue-resource'));

Vue.config.productionTip = true



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data: {
    origin: ''
  },
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
    }
  },

  created: function() {
    // GET request
    this.$http.get('http://bible-api.com/john%203:16', function (data, status, request) {

        // set data on vm
        this.$set('origin', data);

        console.log(this.origin);

    }).error(function (data, status, request) {
        // handle error
    })
  }
})
