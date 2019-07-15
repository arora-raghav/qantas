import HomePage from '../pages/HomePage';

describe('Book a Flight', function() {
	const home = new HomePage();
	let signInPage;
	let userDashboardPage;
	let hotelSearchBar;
	let searchResultPage;
	let bookingPage;
	before(function() {
		cy.fixture('webTestData').as('testData');
		home.visit();
	});

	it('Login with valid credentials', function() {
		signInPage = home.clickLoginLink();
		signInPage.login(this.testData.username, this.testData.password);
		cy.title().should('include', 'My Account');
	});
	it('Navigate to Home Page', function() {
		home.navigateToHomePage();
		cy.title().should('include', 'PHPTRAVELS');
	});
	it('Search for a hotel', function() {
		hotelSearchBar = home.hotelSearchBar();
		searchResultPage = hotelSearchBar.searchHotel(
			this.testData.originCity,
			this.testData.checkInDate,
			this.testData.checkOutDate,
			this.testData.adults,
			this.testData.childrens
		);
		searchResultPage.hotelDetails.should('exist');
	});
	it('Book Hotel', function() {
		bookingPage = searchResultPage.hotelDetails();
		bookingPage.selectHotelRoom();
		bookingPage.bookNow.should('exist');
	});
	it('Verify booking summary', function() {
		bookingConfirmationPage = bookingPage.clickBookNow();
	});
});
