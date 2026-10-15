import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Contracts } from './contracts/contracts';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Homepage
    },
    {
        path: 'contracts',
        component: Contracts
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];