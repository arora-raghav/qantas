require('cypress-xpath');

const { get, xpath } = cy;
class BookingSummaryPage {
	get title() {
		return this.title;
	}
	get flightOriginCity() {
		return xpath('//h5[contains(text(), "Type")]/following::tr[1]/td[3]');
	}

	get flightDestinationCity() {
		return xpath('//h5[contains(text(), "Type")]/following::tr[2]/td[3]');
	}
	get bookNow() {
		return xpath('//*[text()="Book Now"]');
	}

	clickCOnfirmBooking() {
		this.btnConfirmBooking.click();
	}
	selectHotelRoom() {
		this.selectRoom.click();
	}
}
export default BookingSummaryPage;
