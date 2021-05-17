import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用Vuex管理数据
import Vuex from 'vuex'

/* 视频 */
// 引入video插件及css
import VideoPlayer from 'vue-video-player'
// 引入 hls,视频直播(m3u8)必须引入的
import 'videojs-contrib-hls'
//  播放rtmp视频
import 'videojs-flash'
// 引入video的css
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
