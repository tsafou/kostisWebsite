'use strict';

// Declare app level module which depends on views, and components
angular.module('kostisWebsite', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    'ngAnimate',
    'angularTypewrite',
    'angular-inview',
    'duScroll',
    'uiGmapgoogle-maps'
    // 'smoothScroll'
]).config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, uiGmapGoogleMapApiProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/tpl/partial-home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            // views: {
            //     "viewA": { templateUrl: "components/home/tpl/partial-home-list.html",
            //         controller: function($scope) {
            //             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            //         }}
            // }
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'components/home/tpl/partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html',
            // controller: 'aboutController',
            // controllerAs: 'aboutCtrl'
        })

        .state('skills', {
            url: '/skills',
            templateUrl: 'components/skills/tpl/partial-skills.html',
            // controller: 'aboutController',
            // controllerAs: 'aboutCtrl'
        });


    /*Theming*/
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('amber')
        .backgroundPalette('grey').dark();

    // Google Maps
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBJlIUu2xoZT8DO3qsVsZFT9NZNeslH3JY',
        v: '3.23', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
