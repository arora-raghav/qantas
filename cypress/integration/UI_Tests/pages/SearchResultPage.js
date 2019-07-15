import BookingPage from './BookingPage';

require('cypress-xpath');

const { get, xpath } = cy;
class SearchResultPage {
	get title() {
		return this.title;
	}
	get hotelDetails() {
		return xpath('//div[@class="itemscontainer"]//tr[6]//h4/a');
	}

	get bookFlight() {
		return xpath('//tr[6]//button[contains(text(), "Book Now")]');
	}

	clickHotelDetails() {
		this.hotelDetails.click();
	}

	bookFlight() {
		this.bookFlight.click();
		return new BookingPage();
	}
}
export default SearchResultPage;
