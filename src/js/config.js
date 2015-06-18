//config settings
var HTTP_STATUS_CODES = {
	'CODE_200': 'OK',
	'CODE_201': 'Created',
	'CODE_202': 'Accepted',
	'CODE_203': 'Non-Authoritative Information',
	'CODE_204': 'No Content',
	'CODE_205': 'Reset Content',
	'CODE_206': 'Partial Content',
	'CODE_300': 'Multiple Choices',
	'CODE_301': 'Moved Permanently',
	'CODE_302': 'Found',
	'CODE_303': 'See Other',
	'CODE_304': 'Not Modified',
	'CODE_305': 'Use Proxy',
	'CODE_307': 'Temporary Redirect',
	'CODE_400': 'Bad Request',
	'CODE_401': 'Unauthorized',
	'CODE_402': 'Payment Required',
	'CODE_403': 'Forbidden',
	'CODE_404': 'Not Found',
	'CODE_405': 'Method Not Allowed',
	'CODE_406': 'Not Acceptable',
	'CODE_407': 'Proxy Authentication Required',
	'CODE_408': 'Request Timeout',
	'CODE_409': 'Conflict',
	'CODE_410': 'Gone',
	'CODE_411': 'Length Required',
	'CODE_412': 'Precondition Failed',
	'CODE_413': 'Request Entity Too Large',
	'CODE_414': 'Request-URI Too Long',
	'CODE_415': 'Unsupported Media Type',
	'CODE_416': 'Requested Range Not Satisfiable',
	'CODE_417': 'Expectation Failed',
	'CODE_500': 'Internal Server Error',
	'CODE_501': 'Not Implemented',
	'CODE_502': 'Bad Gateway',
	'CODE_503': 'Service Unavailable',
	'CODE_504': 'Gateway Timeout',
	'CODE_505': 'HTTP Version Not Supported',
	getMessage: function (status) {
		var code = 'CODE_'.concat(status);

		if (HTTP_STATUS_CODES[code]) {
			return HTTP_STATUS_CODES[code];
		} else {
			return '';
		}
	}
};

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

//tfl
//var tflKey = '2a45b9bd5d4a3699ccc79338d8bec6e7'; stupid TFL doesnt event support JSON so let's use something else:
var tflUrl = 'http://labs.coruscantconsulting.co.uk/tube/api/lines.php?callback=JSON';


//strava
var stravaAT = '54b0e167486e9e58b52d9b1a73b5471e24c5cf58';
var stravaUrl = 'https://www.strava.com/api/v3/athlete/activities?access_token=' + stravaAT + '&callback=JSON_CALLBACK';


var taliwacker = null ;

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

