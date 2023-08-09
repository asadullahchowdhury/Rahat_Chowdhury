import {createRouter, createWebHistory} from "vue-router";

import MainLayout from "./layout/MainLayout.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import BlogPage from "./pages/BlogPage.vue";


const routes = [
    {
        path: '/', name: 'MainLayout', component: MainLayout,
        children: [
            {path:'',name: 'HomePage' , component: HomePage},
            {path:'/about',name: 'AboutPage' , component: AboutPage},
            {path:'/portfolio',name: 'PortfolioPage' , component: PortfolioPage},
            {path:'/contact',name: 'ContactPage' , component: ContactPage},
            {path:'/blog',name: 'BlogPage' , component: BlogPage},
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;