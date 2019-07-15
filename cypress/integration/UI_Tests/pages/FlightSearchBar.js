require('cypress-xpath');

const { get, xpath } = cy;
class FlightSearchBar {
	get title() {
		return this.title;
	}
	get flightsBarButton() {
		return xpath('//a[@href="#flights"]');
	}
	get origin() {
		return xpath('(//span[text()="Enter City Or Airport"])[1]');
	}
	get destination() {
		return xpath('(//span[text()="Enter City Or Airport"])[2]');
	}

	get txtCityName() {
		return get(`div#select2-drop input.select2-input`);
	}
	get firstSearchResult() {
		return xpath('//*[@id="select2-drop"]/ul/li[1]/div');
	}

	get txtDepartureTime() {
		return xpath('//*[@name="departure"]');
	}
	get txtCheckOut() {
		return xpath('//*[@name="arrival"]');
	}

	get searchButton() {
		return xpath('//*[@id="flights"]//*[contains(text(),"Search")]');
	}

	enterOriginCityName(cityName) {
		this.origin.click();
		this.txtCityName.type(cityName);
		this.firstSearchResult.click();
	}

	enterDestinationCityName(cityName) {
		this.destination.click();
		this.txtCityName.type(cityName);
		this.firstSearchResult.click();
	}
	enterDepartureTime(time) {
		this.txtDepartureTime.type(time);
	}

	searchFlight(originCity, destinationCity, departureDate) {
		this.flightsBarButton.click();
		this.enterOriginCityName(originCity);
		this.enterDestinationCityName(destinationCity);
		this.enterDepartureTime(departureDate);
		this.searchButton.click();
		return new SearchResultPage();
	}
}
export default FlightSearchBar;
