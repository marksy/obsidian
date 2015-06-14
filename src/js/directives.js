'use strict';

(function(){
	var app = angular.module('app');

	app.directive('myCurrentTime', function(dateFilter){
	    return function(scope, element, attrs){
	        var format;
        
	        scope.$watch(attrs.myCurrentTime, function(value) {
	            format = value;
	            updateTime();
	          });
        
	        function updateTime(){
	            var dt = dateFilter(new Date(), format);
	            element.text(dt);
	          }
        
	        function updateLater() {
	            setTimeout(function() {
	              updateTime(); 
	              updateLater(); 
	            }, 60000);
	          }
        
	        updateLater();
	      };
	  });
})(); 
