import HomePage from '../pages/HomePage';

describe('Book a Flight', function() {
	const home = new HomePage();
	let signInPage;
	let userDashboardPage;
	let flightSearchBar;
	let searchResultPage;
	let bookingPage;
	before(function() {
		cy.fixture('webTestData').as('testData');
		home.visit();
	});

	it('Login with valid credentials', function() {
		signInPage = home.clickLoginLink();
		userDashboardPage = signInPage.login(this.testData.username, this.testData.password);
		console.log(this.testData.originCity);
		cy.title().should('include', 'My Account');
	});
	it('Navigate to Home Page', function() {
		home.navigateToHomePage();
		cy.title().should('include', 'PHPTRAVELS');
	});
	it('Search for a flight', function() {
		flightSearchBar = home.flightSearchBar();
		searchResultPage = flightSearchBar.searchFlight(
			this.testData.originCity,
			this.testData.destinationCity,
			this.testData.departureDate
		);
		searchResultPage.bookFlight.should('exist');
	});
	it('Book Flight', function() {
		bookingPage = searchResultPage.bookFlight();
		bookingPage.bookNow.should('exist');
	});
	it('Verify booking summary', function() {
		bookingConfirmationPage = bookingPage.clickBookNow();
		bookingPage.bookNow.should('exist');
	});
});
