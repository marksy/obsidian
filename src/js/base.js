'use strict';

function beerOClock(d,h,m) {
	var beer = new Date();
	
	beer.setDate(d);
	beer.setHours(h);
	beer.setMinutes(m);
	
	var today = new Date();
	var day = today.getDay();
	var hour = today.getHours();
	var minutes = today.getMinutes();
	
	var beerDay = beer.getDay();
	var beerHour = beer.getHours();
	var beerMinutes = beer.getMinutes();

	var daysTil = 0;
	 
	if (day === beerDay) {
		console.log((beerHour - hour) + 'hrs, ' + (60 - minutes) + 'mins until Beer O\'Clock');
		//return false
	}
	if (day <= (beerDay-1)) {
		daysTil = beerDay-day;
		console.log(daysTil + ' days, ' + (beerHour - hour) + 'hrs, ' + ((60 - minutes) + beerMinutes) + 'mins until Beer O\'Clock');
		//return false
	}
	else {
		daysTil = (day-beerDay) + beerDay;
		console.log(daysTil + ' days, ' + (beerHour - hour) + 'hrs, ' + (60 - minutes + beerMinutes) + 'mins until Beer O\'Clock');
	}

	
}

beerOClock(5,17,20);


