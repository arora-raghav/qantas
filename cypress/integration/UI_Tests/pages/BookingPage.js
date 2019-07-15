require('cypress-xpath');

const { get, xpath } = cy;
class BookingPage {
	get title() {
		return this.title;
	}
	get selectRoom() {
		return xpath('(//input[@id="roomsCheckbox"])[1]');
	}
	get bookNow() {
		return xpath('//*[text()="Book Now"]');
	}

	clickBookNow() {
		this.bookNow.click();
		return new BookingConfirmationPage();
	}
	selectHotelRoom() {
		this.selectRoom.click();
	}
}
export default BookingPage;
