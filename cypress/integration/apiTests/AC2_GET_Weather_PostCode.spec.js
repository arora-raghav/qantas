import * as config from '../../support/apiConfig.js';
let apikey;
let lat_lon;
let testData;
before('Load User API Key', function() {
	cy.fixture('users').then((data) => {
		apikey = data[0].apikey;
	});
	cy.fixture('apiTestData').then((data) => {
		testData = data[0];
		lat_lon = 'lat=' + testData.lat + '&lon=' + testData.lon;
	});
});

describe('Current Weather Data by Lat & Lon', function() {
	it('Valid Api Key - Should return successful reponse with status 200 - OK', function() {
		cy.getWeatherByPostCode(apikey, lat_lon).then((weather) => {
			expect(weather.status).to.eq(200);
			expect(weather.statusText).to.eq('OK');
			expect(weather.body.data[0]).to.include.all.keys(config.responseKeys);
		});
	});

	it('Validate all reponse keys', function() {
		cy.getWeatherByPostCode(apikey, lat_lon).then((weather) => {
			expect(weather.body.data[0]).to.include.all.keys(config.responseKeys);
		});
	});
	it('Validate city name based on latitude and longitude', function() {
		cy.getWeatherByPostCode(apikey, lat_lon).then((weather) => {
			expect(weather.body.data[0].city_name).to.eq(testData.city);
		});
	});

	it('Invalid/No ApiKey - Should return error with status 403', function() {
		cy.getWeatherByPostCode('', lat_lon).then((weather) => {
			expect(weather.status).to.eq(403);
			expect(weather.statusText).to.eq('Forbidden');
		});
	});
	it('Invalid/No ApiKey - validate error message', function() {
		cy.getWeatherByPostCode('', lat_lon).then((weather) => {
			expect(weather.body).to.have.property('error').eq('API key not valid, or not yet activated.');
		});
	});
});
