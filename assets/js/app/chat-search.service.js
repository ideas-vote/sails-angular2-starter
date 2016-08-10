System.register("chat-search.service", ['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ChatSearchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ChatSearchService = (function () {
                function ChatSearchService(http) {
                    this.http = http;
                }
                ChatSearchService.prototype.search = function (term) {
                    return this.http
                        .get("api/chat/?name=" + term)
                        .map(function (r) { return r.json(); });
                };
                ChatSearchService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http))
                ], ChatSearchService);
                return ChatSearchService;
            }());
            exports_1("ChatSearchService", ChatSearchService);
        }
    }
});
