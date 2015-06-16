//config settings


// clock

// twitter
var	tweet,
	twtDate,
	twtUsername,
	twtUserImg,
	twtText;
	var updateMinutes = (1000*60)*4;

//weather
var weatherKey = '08c33162-6e48-4b98-bfe7-38ccaae9c53d';
var weatherUrl = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/3772?res=3hourly&key='+weatherKey;

var weatherCodes = {
	'0':	'Clear night',
	'1':	'Sunny day',
	'2':	'Partly cloudy (night)',
	'3':	'Partly cloudy (day)',
	'4':	'Not used',
	'5':	'Mist',
	'6':	'Fog',
	'7':	'Cloudy',
	'8':	'Overcast',
	'9':	'Light rain shower (night)',
	'10':	'Light rain shower (day)',
	'11':	'Drizzle',
	'12':	'Light rain',
	'13':	'Heavy rain shower (night)',
	'14':	'Heavy rain shower (day)',
	'15':	'Heavy rain',
	'16':	'Sleet shower (night)',
	'17':	'Sleet shower (day)',
	'18':	'Sleet',
	'19':	'Hail shower (night)',
	'20':	'Hail shower (day)',
	'21':	'Hail',
	'22':	'Light snow shower (night)',
	'23':	'Light snow shower (day)',
	'24':	'Light snow',
	'25':	'Heavy snow shower (night)',
	'26':	'Heavy snow shower (day)',
	'27':	'Heavy snow',
	'28':	'Thunder shower (night)',
	'29':	'Thunder shower (day)',
	'30':	'Thunder'
};
console.log(weatherCodes);


//tfl
//var tflKey = '2a45b9bd5d4a3699ccc79338d8bec6e7'; stupid TFL doesnt event support JSON so let's use something else:
var tflUrl = 'http://labs.coruscantconsulting.co.uk/tube/api/lines.php?callback=mycallback_func';

// var Foo = {
//     bar: function() {
//         alert("baz");
//     }
// }
// Foo.bar();
//strava

//stocks GBP v NZD
// openexchange

var exchangeAppId = 'af3688c987aa4f4faa7740671a0f632e';
var exchangeBaseUrl = 'https://openexchangerates.org/api/';
var exchangeQuery = '?app_id=';
var exchangeAPIlatest = 'latest.json',
	exchangeAPIhistory = 'historical/YYYY-MM-DD.json',
	exchangeAPIcurrencies = 'currencies.json',
	exchangeAPItime = 'time-series.json';
	
	console.log('exchange latest: ' + exchangeBaseUrl+exchangeAPIlatest+exchangeQuery+exchangeAppId);
	console.log('exchangeAPIhistory: ' + exchangeBaseUrl+exchangeAPIhistory+exchangeQuery+exchangeAppId);
	console.log('exchangeAPIcurrencies: ' + exchangeBaseUrl+exchangeAPIcurrencies+exchangeQuery+exchangeAppId);
	console.log('exchangeAPItime: ' + exchangeBaseUrl+exchangeAPItime+exchangeQuery+exchangeAppId);

//now playing/spotify/itunes

//staff

//jira

