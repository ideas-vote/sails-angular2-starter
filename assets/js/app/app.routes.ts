import { provideRouter, RouterConfig }  from '@angular/router';
import { ChatsComponent } from './chats.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'chats',
    component: ChatsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];