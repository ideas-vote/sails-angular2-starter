System.register("chat-search.component", ['@angular/core', '@angular/router', 'rxjs/Observable', 'rxjs/Subject', './chat-search.service'], function(exports_1, context_1) {
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
    var core_1, router_1, Observable_1, Subject_1, chat_search_service_1;
    var ChatSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (chat_search_service_1_1) {
                chat_search_service_1 = chat_search_service_1_1;
            }],
        execute: function() {
            ChatSearchComponent = (function () {
                function ChatSearchComponent(chatSearchService, router) {
                    this.chatSearchService = chatSearchService;
                    this.router = router;
                    this.searchTerms = new Subject_1.Subject();
                }
                // Push a search term into the observable stream.
                ChatSearchComponent.prototype.search = function (term) {
                    this.searchTerms.next(term);
                };
                ChatSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.chats = this.searchTerms
                        .debounceTime(300) // wait for 300ms pause in events
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(function (term) { return term // switch to new observable each time
                        ? _this.chatSearchService.search(term)
                        : Observable_1.Observable.of([]); })
                        .catch(function (error) {
                        // TODO: real error handling
                        console.log(error);
                        return Observable_1.Observable.of([]);
                    });
                };
                ChatSearchComponent.prototype.gotoDetail = function (chat) {
                    var link = ['/detail', chat.id];
                    this.router.navigate(link);
                };
                ChatSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'chat-search',
                        templateUrl: 'templates/chat-search.component.html',
                        providers: [chat_search_service_1.ChatSearchService]
                    }),
                    __param(0, core_1.Inject(chat_search_service_1.ChatSearchService)),
                    __param(1, core_1.Inject(router_1.Router))
                ], ChatSearchComponent);
                return ChatSearchComponent;
            }());
            exports_1("ChatSearchComponent", ChatSearchComponent);
        }
    }
});
