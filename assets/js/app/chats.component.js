System.register("chats.component", ['@angular/core', '@angular/router', './chat.service', './chat-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, chat_service_1, chat_detail_component_1;
    var ChatsComponent;
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
            function (chat_detail_component_1_1) {
                chat_detail_component_1 = chat_detail_component_1_1;
            }],
        execute: function() {
            ChatsComponent = (function () {
                function ChatsComponent(chatService, changeDetectorRef, route, router) {
                    this.chatService = chatService;
                    this.route = route;
                    this.title = 'Chats';
                    this.changeDetectorRef = changeDetectorRef;
                    this.router = router;
                    this.getChats();
                }
                ChatsComponent.prototype.ngOnInit = function () {
                    // not working
                };
                ChatsComponent.prototype.ngOnDestroy = function () {
                    if (this.sub) {
                        this.sub.unsubscribe();
                    }
                };
                ChatsComponent.prototype.onSelect = function (chat) { this.selectedChat = chat; };
                ChatsComponent.prototype.getChats = function () {
                    this.chatService.getChats().then(function (chats) {
                        this.chats = chats;
                        // for some reason Angular 2 RC4 does not detect the change...
                        this.changeDetectorRef.detectChanges();
                    }.bind(this));
                };
                ChatsComponent.prototype.gotoDetail = function () {
                    var link = ['/detail', this.selectedChat.id];
                    this.router.navigate(link);
                };
                ChatsComponent.prototype.addChat = function () {
                    this.addingChat = true;
                    this.selectedChat = null;
                };
                ChatsComponent.prototype.close = function (savedChat) {
                    this.addingChat = false;
                    if (savedChat) {
                        this.getChats();
                    }
                };
                ChatsComponent.prototype.deleteChat = function (chat, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.chatService
                        .delete(chat)
                        .then(function (res) {
                        _this.chats = _this.chats.filter(function (c) { return c !== chat; });
                        if (_this.selectedChat === chat) {
                            _this.selectedChat = null;
                        }
                        _this.changeDetectorRef.detectChanges();
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                ChatsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-chats',
                        templateUrl: 'templates/chats.component.html',
                        directives: [chat_detail_component_1.ChatDetailComponent]
                    }),
                    __param(0, core_1.Inject(chat_service_1.ChatService)),
                    __param(1, core_1.Inject(core_1.ChangeDetectorRef)),
                    __param(2, core_1.Inject(router_1.ActivatedRoute)),
                    __param(3, core_1.Inject(router_1.Router))
                ], ChatsComponent);
                return ChatsComponent;
            }());
            exports_1("ChatsComponent", ChatsComponent);
        }
    }
});
