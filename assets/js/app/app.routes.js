System.register("app.routes", ['@angular/router', './chats.component', './dashboard.component', './chat-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, chats_component_1, dashboard_component_1, chat_detail_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chats_component_1_1) {
                chats_component_1 = chats_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (chat_detail_component_1_1) {
                chat_detail_component_1 = chat_detail_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'chats',
                    component: chats_component_1.ChatsComponent
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'detail/:id',
                    component: chat_detail_component_1.ChatDetailComponent
                },
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
