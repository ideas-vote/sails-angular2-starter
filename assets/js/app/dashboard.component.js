System.register("dashboard.component", ['@angular/core', '@angular/router', './chat.service', 'chat-search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, chat_service_1, chat_search_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            },
            function (chat_search_component_1_1) {
                chat_search_component_1 = chat_search_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(chatService, changeDetectorRef, router) {
                    var _this = this;
                    this.chatService = chatService;
                    this.chats = [];
                    this.changeDetectorRef = changeDetectorRef;
                    this.router = router;
                    this.chatService.getChats()
                        .then(function (chats) {
                        _this.chats = chats.slice(1, 5);
                        _this.changeDetectorRef.detectChanges();
                    });
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    // does not work
                };
                DashboardComponent.prototype.gotoDetail = function (chat) {
                    var link = ['/detail', chat.id];
                    this.router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'templates/dashboard.component.html',
                        directives: [chat_search_component_1.ChatSearchComponent]
                    }),
                    __param(0, core_1.Inject(chat_service_1.ChatService)),
                    __param(1, core_1.Inject(core_1.ChangeDetectorRef)),
                    __param(2, core_1.Inject(router_1.Router))
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
