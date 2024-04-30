// DEFINE OUR ROUTER RULES

import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/404View.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name: 'home',
            component: HomeView
        },
        {
            path:"/home",
            redirect: "/"
        },
        {
            path:"/:catchall(.*)*",
            name: 'Not Found',
            component: NotFoundView
        },
        {
            path:"/about",
            name: 'about',
            component: AboutView
        },
        {
            path:"/projects",
            name: 'projects',
            component: ProjectsView
        },
    ]
});

export default router;