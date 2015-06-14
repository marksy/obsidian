'use strict';
//controllers
(function(){
	var app = angular.module('app');
	
	app.controller('IndexController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		$scope.dateTimeFormat = 'd MMM h:mm a';
		
		console.log('IndexController');
		
	}]);
	
	app.controller('HomeController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		
		console.log('HomeController');
		
	}]);
	
	app.controller('WeatherController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http){
		$scope.root = $rootScope;
		
		$scope.location = 'London';
		$scope.temp = '--';
		$scope.windspeed = '--';
		$scope.rain = '--';
		$scope.type = '--';
		
		$http.get(weatherUrl).success(function(data,status,headers,config){
			$scope.temp = data.SiteRep.DV.Location.Period[0].Rep[0].T;
			$scope.windspeed = data.SiteRep.DV.Location.Period[0].Rep[0].S;
			$scope.rain = data.SiteRep.DV.Location.Period[0].Rep[0].Pp;
			$scope.typeNo = data.SiteRep.DV.Location.Period[0].Rep[0].W;
			$scope.type = weatherCodes[$scope.typeNo];
		})
		.error(function(data,status,headers,config){
			console.log('error: ' + data,status,headers,config);
		});
		
		console.log('WeatherController');
		
	}]);
	
	app.controller('TFLController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		
		console.log('TFLController');
		
	}]);
	
	app.controller('StocksController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		
		console.log('StocksController');
		
	}]);
	
	app.controller('ConfigController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		
		console.log('ConfigController');
		
	}]);
})(); 

