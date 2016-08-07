import { provideRouter, RouterConfig }  from '@angular/router';

import { ChatsComponent } from './chats.component';
import { DashboardComponent } from './dashboard.component';
import { ChatDetailComponent } from './chat-detail.component';

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
  {
  path: 'detail/:id',
    component: ChatDetailComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];