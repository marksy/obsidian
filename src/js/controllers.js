'use strict';
//controllers
(function(){
	var app = angular.module('app');
	
	app.controller('IndexController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		$scope.dateTimeFormat = 'd MMM h:mm a';
		
        $scope.root.setStatus = function (code) {
            $scope.root.status = code;
            $scope.root.message = HTTP_STATUS_CODES.getMessage(code);
            if (code == 200) {
            	$scope.root.isProcessing = false;
            }
        }
		
		$scope.persons = [
		    {id:0,"name": "Mark", "status": "at home"},
		    {id:1,"name": "Rouzie", "status": "gone shopping"},
		    {id:2,"name": "Quincy", "status": "meout"},
		    {id:3,"name": "Goatie", "status": "under the bed"}
		];
		
		$scope.statuses = [ 'at home', 'gone shopping', 'hiding under the bed', 'meout'];
		
		$scope.changeStatus = function(person,selection) {
			console.log('was: ' + person.status);
			person.status = selection;
			console.log('now: ' + person.status);
		}
		
		$scope.pushNewStatus = function(addNewStatus) {
			if(addNewStatus != undefined) {
				console.log(addNewStatus);
				$scope.statuses.push(addNewStatus);
				console.log($scope.statuses);
			}
		}

		console.log($scope.yesterday1);

        $scope.root.setStatus(200);
		
	}]);
	
	app.controller('HeaderController', ['$scope', '$location', function($scope,$location){
		$scope.isActive = function (viewLocation) { 
			return viewLocation === $location.path();
		};
	}]);
	
	app.controller('TwtController', ['$scope', '$rootScope', function($scope,$rootScope){
		
		var ld = $('.twitter');
		var cb = new Codebird();
		
		cb.setConsumerKey('gMsM8AJwDYcxhAC4Trg326lp6', 'xgtnNetwamP1j9I1RWyqO5NNpdHw2wuUErqOaPsI8KKK4950o5');
		cb.setToken('8004102-VuDQ6ED8HZZjZMc7ScQikWlgOnCq4HKxcjLw79S4AH', 'pJ2pRW6iQDp7Aa9mVTqF8xx8RJhs5huIlWttTKLfGEdBm');
		
		var Twitter = {
			update: function() {
				//console.log('twtupdate');
				cb.__call(
				    'statuses_homeTimeline',
				    {},
				    function (data) {	
						$scope.$apply(function () {
							$scope.items = data;
							$scope.root.items = data;
							//console.log(data);
							ld.removeClass('updating');						
						});
					}
				);
			},
			later: function() {
	            setTimeout(function() {
					ld.addClass('updating');
					Twitter.update(); 
					Twitter.later();
	            }, updateMinutes);
			}
		}
		// Twitter.update();
// 		Twitter.later();
		
		
	
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
		

		
		var Weather = {
		    update: function() {
				$http.get(weatherUrl).success(function(data,status,headers,config){
					//console.log('weather-update');
					// console.log('weather is a ' + typeof data);
					//Period[0] is today, and Rep[0] is the current segment
					$scope.temp = data.SiteRep.DV.Location.Period[0].Rep[0].T;
					$scope.windspeed = data.SiteRep.DV.Location.Period[0].Rep[0].S;
					$scope.rain = data.SiteRep.DV.Location.Period[0].Rep[0].Pp;
					$scope.typeNo = data.SiteRep.DV.Location.Period[0].Rep[0].W;
					$scope.type = weatherCodes[$scope.typeNo];
		
					//Period[1] is tomorrow and Rep[] is the 5th, 3hr segment (around about 2pm)
					$scope.tempTom = data.SiteRep.DV.Location.Period[1].Rep[4].T;
					$scope.windspeedTom = data.SiteRep.DV.Location.Period[1].Rep[4].S;
					$scope.rainTom = data.SiteRep.DV.Location.Period[1].Rep[4].Pp;
					$scope.typeNoTom = data.SiteRep.DV.Location.Period[1].Rep[4].W;
					$scope.typeTom = weatherCodes[$scope.typeNo];
		
					//console.log(data.SiteRep.DV.Location.Period[0]);
				})
				.error(function(data,status,headers,config){
					console.log('error: ' + data,status,headers,config);
				});
		    },
			later: function() {
				setTimeout(function() {
					//console.log('weather-later');
					Weather.update();
					Weather.later();
				}, 1200000);//every 20mins
			}
		}
		Weather.update();
		Weather.later();
				
	}]);
	
	app.controller('TFLController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http){
		$scope.root = $rootScope;
		
		$http.get(tflUrl).success(function (data,status,headers,config) {
			// console.log('data: ' + data);
			if(data[0] == '<') {
				console.log('error coneccted');
				// $scope.$apply(function () {
					$scope.trains = { "trains": 
					{"LineId":"0","LineName":"TFL","StatusCode":"SD","Status":"Error","Message":"Error with connection. Most likely their data is malformed.","IsDisrupted":false,"Disruptions":[]}
					};
					
					console.log($scope.trains);
				// });
			} else {
			console.log('tfl data seems fine');
			var bisc = data.slice(6,-3);
			var lamb = JSON.parse('{"trains":[' + bisc + ']}');

			$scope.trains = lamb.trains;
		}

		})
		.error(function (data,status,headers,config) {
			console.log('error: ' + data);
		});
		
		console.log('TFLController');
		
	}]);
	
	app.controller('StravaController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http){
		$scope.root = $rootScope;
		
		$http({ method: 'JSONP', url: stravaUrl }).success(function(data){
			$scope.activities = data;
		})
		.error(function(data){
			console.log('strava error: ' + data);
		});
		
		
		console.log('StravaController');
		
	}]);
	
	app.controller('FinanceController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http){
		$scope.root = $rootScope;
		
		$scope.yesterday1 = previousDay.setDate(toDate.getDate()-1);
		$scope.yesterday2 = previousDay.setDate(toDate.getDate()-2);
		$scope.yesterday3 = previousDay.setDate(toDate.getDate()-3);
		$scope.yesterday4 = previousDay.setDate(toDate.getDate()-4);
		$scope.yesterday5 = previousDay.setDate(toDate.getDate()-5);
		
		var mapth = $scope.yesterday1;
		console.log(mapth);
		
		$http.get(financeUrl).success(function(data){
			console.log('yesterday sx: ' + data);
		})
		.error(function(data){
			console.log('yesterday er: ' + data);
		});

		
		$http.get(financeLatest).success(function(data){
			$scope.trimData = data.slice(5,-1);
			$scope.cleanData = JSON.parse($scope.trimData);
			
			
			

		}).error(function(data) {
			console.log('finance error: ' + data);
		});
		
		console.log('FinanceController');
		
	}]);
	
	app.controller('PeopleController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
				
		

		
		// $scope.updateUser = function() {
// 			console.log('this is update');
// 			$scope.person.status = $scope.selection.status;
// 		};
				
		console.log('PeopleController');
		
	}]);
	
	app.controller('ConfigController', ['$scope', '$rootScope', function($scope,$rootScope){
		$scope.root = $rootScope;
		
		console.log('ConfigController');
		
	}]);
})(); 

