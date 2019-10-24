import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }
];
//
// VueRouter.beforeEach((to, from, next) => {
//     if(to.meta.auth){
//         if(!getStore('token')){
//             Toast.fail('失败文案');
//         }
//         next();
//     }else{
//         next();
//     }
// });

const router = new VueRouter({
    routes
});

export default router
