
/********************************/
//	Extension Configuration 	//
/********************************/

const dotenv = require('dotenv');
dotenv.config();

const config = {
	//	This section of config settings is shared client side (browser)
	'public': {
		//	Salesforce Login URL
		//'salesforceLoginUri': 'https://login.salesforce.com/services/oauth2/token',
		'salesforceLoginUri': 'https://test.salesforce.com/services/oauth2/token',
		//'salesforceLoginUri': 'https://login.salesforce.com/services/oauth2/authorize',
		//'salesforceLoginUri': 'https://vietnamprosperityjointstockcommerc--dev.sandbox.my.salesforce.com/services/oauth2/token',
		//'salesforceLoginUri': 'https://login.salesforce.com',
		'salesforceApiVersion': '55.0',
		//	Salesforce -> Tableau data types map
		'datatypes': {
			'base64': 'string',
			'boolean': 'bool',
			'byte':'string',
			'date': 'date',
			'dateTime': 'date-time',
			'double': 'float',
			'int':'int',
			'string':'string',
			'time': 'date-time'
		},
		//	Extension settings
		'name': 'Salesforce Writeback Extension',
		'settingsKey': 'sfwriteback',
		'defaults': {
			'salesforce': {
				'ObjectName': null,
				'FieldMappings': {},
				'username': '',
				'password': ''
			},
			'tableau':{
				'worksheet': null
			}
		},
		'configPopup': {
			'url': 'config',
			'size': {
				'height': 500,
				'width': 400
			}
		},
	},
	//	This section of config settings never leaves the server
	'private': {
		//	Salesforce Connected App
		'consumerKey': process.env.CONSUMERKEY || '',
		'consumerSecret': process.env.CONSUMERSECRET || '',
		'profiles': process.env.PROFILES || ''
	}
};

module.exports = config;

//console.log('Your environment variable CONSUMERKEY has the value: ', process.env.CONSUMERKEY);
//console.log('Your environment variable CONSUMERSECRET has the value: ', process.env.CONSUMERSECRET);
//console.log('Your environment variable PROFILES has the value: ', process.env.PROFILES);