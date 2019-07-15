import HomePage from '../pages/HomePage';

describe('Book a Flight', function() {
	const home = new HomePage();
	let signInPage;
	let toursSearchBar;
	let searchResultPage;
	let bookingPage;
	before(function() {
		cy.fixture('webTestData').as('testData');
		home.visit();
	});

	it('Login with valid credentials', function() {
		signInPage = home.clickLoginLink();
		userDashboardPage = signInPage.login(this.testData.username, this.testData.password);
		cy.title().should('include', 'My Account');
	});
	it('Navigate to Home Page', function() {
		home.navigateToHomePage();
		cy.title().should('include', 'PHPTRAVELS');
	});
	it('Search for a Tour', function() {
		toursSearchBar = home.toursSearchBar();
		bookingPage = toursSearchBar.searchTours(
			this.testData.originCity,
			this.testData.checkInDate,
			this.testData.noOfGuests,
			this.testData.tripType
		);
		bookingPage.bookNow.should('exist');
	});
	it('Verify booking summary', function() {
		bookingConfirmationPage = bookingPage.clickBookNow();
	});
});
