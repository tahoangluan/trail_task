/* eslint-disable */
const AddFunctionalities = () => import('@/components/Tasks/AddFunctionalities');
const SmileyFace = () => import('@/components/Tasks/SmileyFace');
const MainVue = () => import('@/components/MainVue');
const UsersDisplay = () => import('@/components/Tasks/UsersDisplay');
const ResulstsOfFunction = () => import('@/components/Tasks/ResulstsOfFunction');
const TaskButton = () => import('@/components/TaskButtons');
const App = () => import('@/App');
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const title = "Title"
const router = new Router({
    routes:[
        {
            path: '/',
            name:"MainVue",
            component: MainVue,
            children:[
                {
                    path: '',
                    name: 'TaskButton',
                    components: {
                        mainVueSubPages: TaskButton,
                    },
                    meta: {
                        title,
                    },
                },
                {
                    path: '/task1',
                    name: 'SmileyFace',
                    components: {
                        mainVueSubPages: SmileyFace,
                    },
                },
                {
                    path: '/task4',
                    name: 'AddFunctionalities',
                    components: {
                        mainVueSubPages: AddFunctionalities,
                    },
                },{
                    path: '/task3',
                    name: 'ResulstsOfFunction',
                    components: {
                        mainVueSubPages: ResulstsOfFunction,
                    },
                },{
                    path: '/task2',
                    name: 'UsersDisplay',
                    components: {
                        mainVueSubPages: UsersDisplay,
                    },
                },
            ],
            meta: {
                title,
            },
        },

    ]
})
export default router;