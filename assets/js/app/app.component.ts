import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {ChatService} from './chat.service';

@Component({
    selector: 'my-app',
    template:
    `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
        <a [routerLink]="['/chats']" routerLinkActive="active">Chats</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ChatService]
})

export class AppComponent {
    title = "A brand new Angular 2 app.";
}