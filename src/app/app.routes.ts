import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { Contracts } from './components/contracts/contracts';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

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
        path: 'register',
        component: Register
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