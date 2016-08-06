System.register("app.component", ['@angular/core', './chat-detail.component', './chat.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, chat_detail_component_1, chat_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chat_detail_component_1_1) {
                chat_detail_component_1 = chat_detail_component_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(chatService, changeDetectorRef) {
                    this.chatService = chatService;
                    this.title = 'Chats';
                    this.changeDetectorRef = changeDetectorRef;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getChats();
                };
                AppComponent.prototype.onSelect = function (chat) { this.selectedChat = chat; };
                AppComponent.prototype.getChats = function () {
                    this.chatService.getChats().then(function (chats) {
                        this.chats = chats;
                        // for some reason Angular 2 RC4 does not detect the change...
                        this.changeDetectorRef.detectChanges();
                    }.bind(this));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>Chats</h2>\n    <ul>\n      <li *ngFor=\"let chat of chats\" (click)=\"onSelect(chat)\">\n        <span class=\"badge\">{{chat.id}}</span> {{chat.name}}\n      </li>\n    </ul>\n    <chat-detail [chat]=\"selectedChat\"></chat-detail>\n    ",
                        directives: [chat_detail_component_1.ChatDetailComponent],
                        providers: [chat_service_1.ChatService]
                    }),
                    __param(0, core_1.Inject(chat_service_1.ChatService)),
                    __param(1, core_1.Inject(core_1.ChangeDetectorRef))
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
