angular.module('app', ['ngRoute']) 
         .controller('homeController', function ($scope) {
            $scope.controllerName = 'This is homeController';
        })
        .controller('customerController', function ($scope) {
            $scope.controllerName = 'This customerController';
        })
        .controller('customerDetailcontroller', function ($scope) {
            $scope.controllerName = 'This customerDetailController';
        })
        .controller('aboutController', function ($scope) {
            $scope.controllerName = 'This aboutController';
        })
        .config(function ($routeProvider) {
            $routeProvider
                .when(
                    '/', {
                        controller: 'homeController',
                        templateUrl: 'home.html'
                    }
                )
                .when(
                    '/customers', {
                        controller: 'customerController',
                        templateUrl: 'customers.html'
                    }
                )
                .when(
                    '/about', {
                        controller: 'aboutController',
                        templateUrl: 'about.html'
                    }
                )
                .otherwise({
                    redirectTo: '/'
                });
        });


        