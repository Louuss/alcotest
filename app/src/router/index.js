import Vue from 'vue'
import Router from 'vue-router'
import DailyView from '../views/DailyView'
import AddDay from '../views/AddDay'
import Stats from '../views/Stats'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'DailyView',
            component: DailyView
        },
        {
            path: '/addDay',
            name: 'AddDay',
            component: AddDay
        }
        ,
        {
            path: '/stats',
            name: 'Stats',
            component: Stats
        }
    ]
})