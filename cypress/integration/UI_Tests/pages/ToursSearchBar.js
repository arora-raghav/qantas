import BookingPage from './BookingPage';

require('cypress-xpath');

const { get, xpath } = cy;
class ToursSearchBar {
	get title() {
		return this.title;
	}
	get toursBarButton() {
		return xpath('//a[@href="#tours"]');
	}
	get cityName() {
		return xpath('//span[text()="Search by Listing or City Name"]');
	}

	get txtCityName() {
		return get(`div#select2-drop input.select2-input`);
	}
	get firstSearchResult() {
		return xpath('//*[@id="select2-drop"]/ul/li[1]/ul/li[1]');
	}

	get txtDepartureDate() {
		return xpath('//*[@name="date"]');
	}

	get guestCount() {
		return get('#adults');
	}
	get tripType() {
		return get('#tourtype');
	}
	get searchButton() {
		return xpath('//*[@id="flights"]//*[contains(text(),"Search")]');
	}

	enterCityName(cityName) {
		this.cityName.click();
		this.txtCityName.type(cityName);
		this.firstSearchResult.click();
	}

	enterDepartureDate(date) {
		this.txtDepartureDate.type(date);
	}
	selectNoOfGuests(guestCount) {
		this.guestCount.select(guestCount);
	}
	selectTripType(tripType) {
		this.tripType.select(tripType);
	}
	searchTours(cityName, destinationDate, noOfGuests, tripType) {
		this.toursBarButton.click();
		this.enterCityName(cityName);
		this.enterDepartureDate(destinationDate);
		this.selectNoOfGuests(noOfGuests);
		this.selectTripType(tripType);

		return new BookingPage();
	}
}
export default ToursSearchBar;
