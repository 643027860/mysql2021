import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../pages/home'], resolve)
    },
    {
      path: '/study',
      name: 'study',
      component: resolve => require(['../pages/study'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'study-content',
          component: resolve => require(['../pages/study/content'], resolve)
        }
      ],
      redirect: to => {
        return '/study/content/1'
      }
    },
    {
      path: '/outline',
      name: 'outline',
      component: resolve => require(['../pages/outline'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'outline-content',
          component: resolve => require(['../pages/outline/content'], resolve)
        }
      ],
      redirect: to => {
        return '/outline/content/0'
      }
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['../pages/video'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'video-content',
          component: resolve => require(['../pages/video/content'], resolve)
        }
      ],
      redirect: to => {
        return '/video/content/1.1'
      }
    },
    {
      path: '/animation',
      name: 'animation',
      component: resolve => require(['../pages/animation'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'animation-content',
          component: resolve => require(['../pages/animation/content'], resolve)
        }
      ],
      redirect: to => {
        return '/animation/content/2.1'
      }
    },
    {
      path: '/exam',
      name: 'exam',
      component: resolve => require(['../pages/exam'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'exam-content',
          component: resolve => require(['../pages/exam/content'], resolve)
        }
      ],
      redirect: to => {
        return '/exam/content/1.1'
      }
    },
    {
      path: '/experiment',
      name: 'experiment',
      component: resolve => require(['../pages/experiment'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'experiment-content',
          component: resolve => require(['../pages/experiment/content'], resolve)
        },
        {
          path: 'video/:id?',
          name: 'experiment-video',
          component: resolve => require(['../pages/experiment/video'], resolve)
        }
      ],
      redirect: to => {
        return '/experiment/content/1.0'
      }
    },
    {
      path: '/case',
      name: 'case',
      component: resolve => require(['../pages/case'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'case-content',
          component: resolve => require(['../pages/case/content'], resolve)
        }
      ],
      redirect: to => {
        return '/case/content/1'
      }
    },
    {
      path: '/technical',
      name: 'technical',
      component: resolve => require(['../pages/technical'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'technical-content',
          component: resolve => require(['../pages/technical/content'], resolve)
        }
      ],
      redirect: to => {
        return '/technical/content/1.1'
      }
    },
    {
      path: '/answer',
      name: 'answer',
      component: resolve => require(['../pages/answer'], resolve)
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: resolve => require(['../pages/evaluate'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'evaluate-content',
          component: resolve => require(['../pages/evaluate/content'], resolve)
        }
      ],
      redirect: to => {
        return '/evaluate/content/1'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['../pages/about'], resolve),
      children: [
        {
          path: 'content/:id?',
          name: 'about-content',
          component: resolve => require(['../pages/about/content'], resolve)
        }
      ],
      redirect: to => {
        return '/about/content/1'
      }
    },
    {
      path: '/',
      redirect: to => {
        return '/home'
      }
    },
    {
      path: '',
      redirect: to => {
        return '/home'
      }
    },
    {
      path: '*',
      redirect: to => {
        return '/home'
      }
    }
  ]
})
