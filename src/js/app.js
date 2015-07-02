//app
'use strict';

(function() {
	var app = angular.module('app',
	[
		'ngRoute'
	])
	.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
		$routeProvider
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
			.when('/strava', {
				templateUrl: 'views/strava.html',
				controller: 'StravaController'
			})
			.when('/finance', {
				templateUrl: 'views/finance.html',
				controller: 'FinanceController'
			})
			.when('/people', {
				templateUrl: 'views/people.html',
				controller: 'PeopleController'
			})
			.when('/config', {
				templateUrl: 'views/config.html',
				controller: 'ConfigController'
			})
			.otherwise({redirectTo: '/home'});
	}]);
})();