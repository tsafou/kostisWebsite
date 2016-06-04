'use strict';

// Declare app level module which depends on views, and components
angular.module('kostisWebsite', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    'ngAnimate',
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
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
            templateUrl: 'partial-skills.html',
            // controller: 'aboutController',
            // controllerAs: 'aboutCtrl'
        });
});
