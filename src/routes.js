import Vue from 'vue';
import Router from 'vue-router';


import Layout from '@/components/Layout/Layout';

import LoginPage from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

import DashboardPage from '@/pages/Dashboard/Dashboard';
import TournamentsPage from '@/pages/Tournaments/Tournaments';

Vue.use(Router);

export default new Router({
    
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: LoginPage,
      },
      {
        path: '/error',
        name: 'Error',
        component: ErrorPage,
      },
      {
        path: '/dashboard',
        name: 'DashboardPage',
        component: DashboardPage,
       },
       {
        path: '/tournaments',
        name: 'TournamentsPage',
        component: TournamentsPage,
       }
    ]
  });