var foundtruck = angular.module('foundtruck', ['ui.router']);

foundtruck.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
    if (window.appMode == "user") {
        $stateProvider        
            .state('userLogin', {
                url: '/',
                controller: 'UserLoginController',
                templateUrl: 'views/user/login.html'
            })
            .state('findlocation', {
            	url: '/findlocation',
            	controller: 'FindLocationController',
                templateUrl: 'views/user/findlocation.html'         
            })
            .state('findlocationalternative',{
                url: '/findlocationalternative',
                controller: 'FindLocationAlternativeController',
                templateUrl: 'views/user/findlocationalternative.html'
            })
            .state('loadtrucks', {
                url: '/loadtrucks',
                controller: 'LoadTrucksController',
                templateUrl: 'views/user/loadtrucks.html' 
            });
    } else if (window.appMode == "manager") {
        $stateProvider
            .state('managerLogin', {
                url: '/',
                controller: 'ManagerLoginController',
                templateUrl: 'views/manager/clientlogin.html'
            });
    } else {
        console.log('Modo não encontrado');
    }

});