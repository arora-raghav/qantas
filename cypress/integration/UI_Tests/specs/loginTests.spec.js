import HomePage from '../pages/HomePage';

describe('Login Test Cases', function() {
	const home = new HomePage();
	let signInPage;
	let testData;
	let userDashboardPage;
	before(function() {
		cy.fixture('webTestData').then((data) => {
			testData = data;
		});
		home.visit();
	});
	it('Verify PHPTravels Login page', function() {
		signInPage = home.clickLoginLink();
		cy.url().should('include', 'login');
	});
	it('Login with invalid credentials', function() {
		userDashboardPage = signInPage.login(testData.username, ' ');
		userDashboardPage.errorMessage.should('exist');
	});
	it('Login with valid credentials', function() {
		signInPage = home.clickLoginLink();
		userDashboardPage = signInPage.login(testData.username, testData.password);
		cy.title().should('include', 'My Account');
	});
});
