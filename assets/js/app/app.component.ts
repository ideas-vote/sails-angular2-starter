import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-extensions';

import {ChatService} from './chat.service';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ChatService]
})

export class AppComponent {
    title = "A brand new Angular 2 app.";
}