import { Route, Routes } from "@angular/router";
import { Layouts } from "./components/layouts/layouts";


export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        redirectTo:"home",
    },
    {
        path:"",
        component: Layouts,
        children: [
            {
                path:"home", loadChildren: () => import("./pages/home/home.routes")
            },
            {
                path:"about", loadComponent: () => import("./pages/about/about")
            },
            {
                path:"contact", loadComponent: () => import("./pages/contact/contact")
            },
            {
                path:"skills", loadComponent: () => import("./pages/skills/skills")
            },
            {
                path:"projects", loadComponent: () => import("./pages/projects//projects")
            },
        ]
    }
];