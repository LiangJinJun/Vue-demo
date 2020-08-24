import Vue from 'vue'
import VueRouter from 'vue-router'
import Opus from '../pages/Opus'
import useropus from '../pages/UserOpus'
import nullpage from '../pages/NullPage'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: Opus
    }, {
        path: '/opus',
        component: Opus
    },
    {
        path: '/useropus',
        component: useropus
    },
    {
        path: '*',
        component: nullpage
    }
]

const router = new VueRouter({
    routes
});

export default router;