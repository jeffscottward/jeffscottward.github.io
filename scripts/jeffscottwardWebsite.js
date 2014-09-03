'use strict';

angular.module('jeffscottwardWebsite', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: 'HomeCtrl'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'partials/portfolio.html',
        controller: 'HomeCtrl'
      })
      .state('portfolio.websites', {
        url: '/websites',
        templateUrl: 'partials/portfolio.websites.html',
        controller: 'HomeCtrl'
      })
      .state('portfolio.codepen', {
        url: '/codepen',
        templateUrl: 'partials/portfolio.codepen.html',
        controller: 'HomeCtrl'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'partials/resume.html',
        controller: 'HomeCtrl',
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html',
        controller: 'HomeCtrl',
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'partials/blog.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise('/about');
  })
;
