'use strict';
//controllers
(function(){
	var app = angular.module('app');
	
	app.controller('IndexController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		$scope.dateTimeFormat = 'd MMM h:mm a';
		
		
		
		console.log('IndexController');
		
	}]);
	
	app.controller('TwtController', ['$scope', '$rootScope', function($scope,$rootScope){
		
		var ld = $('.twitter');
		var cb = new Codebird();
		
		
		cb.setConsumerKey('gMsM8AJwDYcxhAC4Trg326lp6', 'xgtnNetwamP1j9I1RWyqO5NNpdHw2wuUErqOaPsI8KKK4950o5');
		cb.setToken('8004102-VuDQ6ED8HZZjZMc7ScQikWlgOnCq4HKxcjLw79S4AH', 'pJ2pRW6iQDp7Aa9mVTqF8xx8RJhs5huIlWttTKLfGEdBm');
		
		function twtUpdate() {
			console.log('twtupdate');
			cb.__call(
			    'statuses_homeTimeline',
			    {},
			    function (data) {	
					$scope.$apply(function () {
						$scope.items = data;
						$scope.root.items = data;
						console.log(data);
						ld.removeClass('updating');						
					});
				}
			);
		}
		
        function twtLater() {
            setTimeout(function() {
				ld.addClass('updating');
				twtUpdate(); 
				twtLater();
            }, updateMinutes);
          }
		twtUpdate();
		twtLater();
		
	
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
			
			//Period[0] is today, and Rep[0] is the 5th, 3hr segment (around about 2pm)
			// $scope.temp = data.SiteRep.DV.Location.Period[0].Rep[4].T;
// 			$scope.windspeed = data.SiteRep.DV.Location.Period[0].Rep[4].S;
// 			$scope.rain = data.SiteRep.DV.Location.Period[0].Rep[4].Pp;
// 			$scope.typeNo = data.SiteRep.DV.Location.Period[0].Rep[4].W;
// 			$scope.type = weatherCodes[$scope.typeNo];
			
			//Period[1] is tomorrow and Rep[] is the 5th, 3hr segment (around about 2pm)
			$scope.tempTom = data.SiteRep.DV.Location.Period[1].Rep[4].T;
			$scope.windspeedTom = data.SiteRep.DV.Location.Period[1].Rep[4].S;
			$scope.rainTom = data.SiteRep.DV.Location.Period[1].Rep[4].Pp;
			$scope.typeNoTom = data.SiteRep.DV.Location.Period[1].Rep[4].W;
			$scope.typeTom = weatherCodes[$scope.typeNo];
		
			 console.log(data.SiteRep.DV.Location.Period[0]);
// 			console.log(data.SiteRep.DV.Location.Period[1]);
// 			console.log(data.SiteRep.DV.Location.Period[2]);
// 			console.log(data.SiteRep.DV.Location.Period[3]);
			
		})
		.error(function(data,status,headers,config){
			console.log('error: ' + data,status,headers,config);
		});
		
		console.log('WeatherController');
		
	}]);
	
	app.controller('TFLController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http){
		$scope.root = $rootScope;
		
		$http.get(tflUrl).success(function (data,status,headers,config) {
			//console.log('ok: ' + data, typeof data);
		})
		.error(function (data,status,headers,config) {
			console.log('error: ' + data);
		});
		
		console.log('TFLController');
		
	}]);
	
	app.controller('StravaController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		
		console.log('StravaController');
		
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

