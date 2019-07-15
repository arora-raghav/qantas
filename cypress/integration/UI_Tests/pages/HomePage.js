import ToursSearchBar from './ToursSearchBar';
import FlightSearchBar from './FlightSearchBar';
import HotelSearchBar from './HotelSearchBar';
import SignInPage from './SignInPage';

const { get, xpath } = cy;

class HomePage {
	visit() {
		cy.viewport(1024, 768);
		cy.visit('https://www.phptravels.net/');
	}
	hotelSearchBar() {
		return new HotelSearchBar();
	}
	flightSearchBar() {
		return new FlightSearchBar();
	}
	toursSearchBar() {
		return new ToursSearchBar();
	}

	get myAccount() {
		return xpath('//div[@class="container"]//a[contains(text(), "My Account")]');
	}

	get homePageLogo() {
		return xpath('//a[contains(@class,"navbar-brand ")]');
	}
	get lnkLogin() {
		return xpath('//*[@class="container"]//*[text()=" Login"]');
	}

	navigateToHomePage() {
		this.homePageLogo.click();
	}
	clickLoginLink() {
		this.myAccount.click();
		this.lnkLogin.click();
		return new SignInPage();
	}
}
export default HomePage;
