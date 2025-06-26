import { Routes } from "@angular/router";

export default [
    {
        path: "",
        loadComponent: () => import("./home")
    }
] as unknown as Routes