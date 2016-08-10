System.register("chat.service", ['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var ChatService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ChatService = (function () {
                function ChatService(http) {
                    this.http = http;
                    this.chatsUrl = 'api/chat'; // URL to web api
                }
                ChatService.prototype.getChats = function () {
                    return this.http.get(this.chatsUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ChatService.prototype.getChat = function (id) {
                    var url = this.chatsUrl + "/" + id;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ChatService.prototype.save = function (chat) {
                    if (chat.id) {
                        return this.put(chat);
                    }
                    return this.post(chat);
                };
                ChatService.prototype.delete = function (chat) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.chatsUrl + "/" + chat.id;
                    return this.http
                        .delete(url, { headers: headers })
                        .toPromise()
                        .catch(this.handleError);
                };
                // Add new Chat
                ChatService.prototype.post = function (chat) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json' });
                    return this.http
                        .post(this.chatsUrl, JSON.stringify(chat), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                // Update existing Chat
                ChatService.prototype.put = function (chat) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.chatsUrl + "/" + chat.id;
                    return this.http
                        .put(url, JSON.stringify(chat), { headers: headers })
                        .toPromise()
                        .then(function () { return chat; })
                        .catch(this.handleError);
                };
                ChatService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                ChatService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http))
                ], ChatService);
                return ChatService;
            }());
            exports_1("ChatService", ChatService);
        }
    }
});
