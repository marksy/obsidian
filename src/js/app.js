//app
'use strict';

(function() {
	var app = angular.module('app',
	[
		'ngRoute'
	])
	.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProver, $locationProvider, $httpProvider){
		$routeProver
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.when('/weather', {
				templateUrl: 'views/weather.html',
				controller: 'WeatherController'
			})
			.when('/tfl', {
				templateUrl: 'views/tfl.html',
				controller: 'TFLController'
			})
			.when('/stocks', {
				templateUrl: 'views/stocks.html',
				controller: 'StocksController'
			})
			.when('/config', {
				templateUrl: 'views/config.html',
				controller: 'ConfigController'
			})
			.otherwise({redirectTo: '/home'});
	}]);
})();