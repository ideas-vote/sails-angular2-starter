System.register("chat-detail.component", ['@angular/core', '@angular/router', './chat', './chat.service'], function(exports_1, context_1) {
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
    var core_1, router_1, chat_1, chat_service_1;
    var ChatDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_1_1) {
                chat_1 = chat_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            ChatDetailComponent = (function () {
                function ChatDetailComponent(chatService, changeDetectorRef, route) {
                    var _this = this;
                    this.chatService = chatService;
                    this.route = route;
                    this.close = new core_1.EventEmitter();
                    this.navigated = false; // true if navigated here
                    this.changeDetectorRef = changeDetectorRef;
                    this.sub = this.route.params.subscribe(function (params) {
                        if (params['id'] !== undefined) {
                            var id = +params['id']; // (+) converts string 'id' to a number
                            _this.navigated = true;
                            _this.chatService.getChat(id)
                                .then(function (chat) {
                                _this.chat = chat;
                                _this.changeDetectorRef.detectChanges();
                            });
                        }
                        else {
                            _this.navigated = false;
                            _this.chat = new chat_1.Chat();
                        }
                    });
                }
                ChatDetailComponent.prototype.ngOnInit = function () {
                    // not working
                };
                ChatDetailComponent.prototype.ngOnDestroy = function () {
                    if (this.sub) {
                        this.sub.unsubscribe();
                    }
                };
                ChatDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.chatService
                        .save(this.chat)
                        .then(function (chat) {
                        _this.chat = chat; // saved chat, w/ id if new
                        _this.goBack(chat);
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                ChatDetailComponent.prototype.goBack = function (savedChat) {
                    if (savedChat === void 0) { savedChat = null; }
                    this.close.emit(savedChat);
                    if (this.navigated) {
                        window.history.back();
                    }
                };
                __decorate([
                    core_1.Input()
                ], ChatDetailComponent.prototype, "chat");
                __decorate([
                    core_1.Output()
                ], ChatDetailComponent.prototype, "close");
                ChatDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'chat-detail',
                        templateUrl: 'templates/chat-detail.component.html'
                    }),
                    __param(0, core_1.Inject(chat_service_1.ChatService)),
                    __param(1, core_1.Inject(core_1.ChangeDetectorRef)),
                    __param(2, core_1.Inject(router_1.ActivatedRoute))
                ], ChatDetailComponent);
                return ChatDetailComponent;
            }());
            exports_1("ChatDetailComponent", ChatDetailComponent);
        }
    }
});
