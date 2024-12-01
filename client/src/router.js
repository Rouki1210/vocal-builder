import Vue from 'vue'
import Router from 'vue-router'
import Words from './views/Words.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Test from './views/Test.vue'

Vue.use(Router)

const router = new Router({
mode: 'history',
routes: [
    {
        path: '/',
         //redirect: '/words'
        name: 'Home',
        component: Home
    },
    {
        path: '/words',
        name: 'Words',
        component: Words
    },
    {
        path: '/words/new',
        name: 'New',
        component: New
    },
    {
        path: '/words/show/:id',
        name: 'Show',
        component: Show
    },
    {
        path: '/words/edit/:id',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/words/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/words/test',
        name: 'Test',
        component: Test
    },
    ]
})

export default router