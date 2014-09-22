"use strict";
angular.module("jeffscottwardWebsite", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "restangular", "ui.router"])
       .config(["$stateProvider", "$urlRouterProvider",
            function(e, t) {
                e.state("home", {
                    url: "/",
                    templateUrl: "partials/home.html",
                    controller: "HomeCtrl"
                }).state("about", {
                    url: "/about",
                    templateUrl: "partials/about.html",
                    controller: "HomeCtrl"
                }).state("portfolio", {
                    url: "/portfolio",
                    templateUrl: "partials/portfolio.html",
                    controller: "HomeCtrl"
                }).state("portfolio.websites", {
                    url: "/websites",
                    templateUrl: "partials/portfolio.websites.html",
                    controller: "HomeCtrl"
                }).state("portfolio.codepen", {
                    url: "/codepen",
                    templateUrl: "partials/portfolio.codepen.html",
                    controller: "HomeCtrl"
                }).state("portfolio.talks", {
                    url: "/talks",
                    templateUrl: "partials/portfolio.talks.html",
                    controller: "HomeCtrl"
                }).state("resume", {
                    url: "/resume",
                    templateUrl: "partials/resume.html",
                    controller: "HomeCtrl"
                }).state("contact", {
                    url: "/contact",
                    templateUrl: "partials/contact.html",
                    controller: "HomeCtrl"
                }).state("blog", {
                    url: "/blog",
                    templateUrl: "partials/blog.html",
                    controller: "HomeCtrl"
                }), t.otherwise("/about")
            }
        ]), angular.module("jeffscottwardWebsite").controller("HomeCtrl", ["$scope",
            function(e) {
                e.currentTab = "about", e.getCurrentTab = function() {
                    return e.currentTab
                }, e.setCurrentTab = function(t) {
                    e.currentTab = t
                }, e.isCurrentTab = function(t) {
                    return e.currentTab === t ? !0 : void 0
                }, e.processForm = function() {
                    alert(formData)
                }
            }
        ]);