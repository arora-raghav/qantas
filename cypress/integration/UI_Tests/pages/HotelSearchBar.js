require('cypress-xpath');

const { get, xpath } = cy;
class HotelSearchBar {
	get title() {
		return this.title;
	}
	get hotelOrCityNameBox() {
		return xpath('//span[text()="Search by Hotel or City Name"]');
	}

	get txtHotelOrCityName() {
		return get(`div#select2-drop input.select2-input`);
	}
	get hotelOrCityNameFirstSuggestion() {
		return xpath('//ul[@class="select2-result-sub"]/li[1]');
	}

	get txtCheckIn() {
		return xpath('//*[@name="checkin"]');
	}
	get txtCheckOut() {
		return xpath('//*[@name="checkout"]');
	}

	get numberOfTravelersField() {
		return get(`#travellersInput`);
	}

	get adultPlusButton() {
		return get(`#adultPlusBtn`);
	}

	get txtNumberOfAdults() {
		return get(`#adultInput`);
	}

	get childMinusButton() {
		return get(`#childMinusBtn`);
	}

	get childPlusButton() {
		return get(`#childPlusBtn`);
	}

	get txtNumberOfChildrens() {
		return get(`#childInput`);
	}

	get searchButton() {
		return xpath('//button[@type="submit" and text()=" Search"]');
	}

	enterHotelName(hotelOrCity) {
		this.hotelOrCityNameBox.click();
		this.txtHotelOrCityName.type(hotelOrCity);
		this.hotelOrCityNameFirstSuggestion.click();
	}
	enterCheckInAndOutDate(checkIn, checkOut) {
		this.txtCheckIn.clear().type(checkIn);
		this.txtCheckOut.clear().type(checkOut);
	}
	enterNumberOfTravellers(adults, childrens) {
		this.numberOfTravelersField.click();
		this.txtNumberOfAdults.type(adults);
		this.txtNumberOfChildrens.type(childrens);
	}

	searchHotel(hotelOrCity, checkIn, checkOut, adults, childrens) {
		this.enterHotelName(hotelOrCity);
		this.enterCheckInAndOutDate(checkIn, checkOut);
		this.enterNumberOfTravellers(adults, childrens);
		this.searchButton.click();

		return new BookingPage();
	}
}
export default HotelSearchBar;
