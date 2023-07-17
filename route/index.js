import Vue from 'vue';
import Dashboard from '../pages/dashboard';

Vue.use(VueRouter);

const routes =[
    {
        path: '/',
        component:Dashboard,
        children:[
            {
                path: '/',
                component:()=>import('../pages/dashboard')
            },
            {
                path: '/data_permohonan',
                component:()=>import('../pages/data_permohonan')
            },
            {
                path: '/form_permohonan',
                component:()=>import('../pages/form_permohonan')
            },
            {
                path: '/form_permohonan_edit',
                component:()=>import('../pages/form_permohonan_edit')
            },
        ]
    }
]
const router = new VueRouter(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    }
)
export default router;