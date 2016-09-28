var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        views:{
            'index':{
                templateUrl: 'view/home.html',
                controller: 'homeController'
            }
        }
    });
    $stateProvider.state('school', {
        url: '/school',
        views:{
            'index':{
                templateUrl: 'view/school.html',
                controller: 'schoolController'
            }
        }
        
    });
    // ui-view嵌套
    $stateProvider.state('school.wc', {
        url: '/wc',
        views:{
            'wc':{
                templateUrl: 'view/school-wc.html'
                // controller: 'wcController'
            }
        }
    });
    $stateProvider.state('room', {
        url: '/room',
        views:{
            'index':{
                templateUrl: 'view/room.html',
                controller: 'roomController'
            }
        }
    });
}]);
