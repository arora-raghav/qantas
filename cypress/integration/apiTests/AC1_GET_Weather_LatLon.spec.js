import * as config from '../../support/apiConfig.js';
let apikey;
let lat_lon;
let testData;
before('Load User API Key', function() {
	cy.fixture('users').then((data) => {
		apikey = data[0].apikey;
	});
	cy.fixture('apiTestData').then((data) => {
		testData = data[1];
		lat_lon = 'postal_code=' + testData.postCode;
	});
});

describe('Current Weather Data by postCode', function() {
	it('Valid Api Key - Should return successful reponse with status 200 - OK', function() {
		cy.getWeatherByPLatLon(apikey, lat_lon).then((weather) => {
			expect(weather.status).to.eq(200);
			expect(weather.statusText).to.eq('OK');
		});
	});

	it('Validate all reponse keys', function() {
		cy.getWeatherByLatLon(apikey, lat_lon).then((weather) => {
			expect(weather.body.data[0]).to.include.all.keys(config.responseKeys);
		});
	});
	it('Validate city name based on postCode', function() {
		cy.getWeatherByLatLon(apikey, lat_lon).then((weather) => {
			expect(weather.body.data[0].city_name).to.eq(testData.city);
		});
	});

	it('Invalid/No ApiKey - Should return error with status 403 - Forbidden', function() {
		cy.getWeatherByLatLon('', lat_lon).then((weather) => {
			expect(weather.status).to.eq(403);
			expect(weather.statusText).to.eq('Forbidden');
		});
	});
	it('Invalid/No ApiKey - validate error message', function() {
		cy.getWeatherByLatLon('', lat_lon).then((weather) => {
			expect(weather.body).to.have.property('error').eq('API key not valid, or not yet activated.');
		});
	});
});
