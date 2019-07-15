const { get, xpath } = cy;

class UserDashboardPage {
	get title() {
		return this.title;
	}
	get pageHeader() {
		return xpath('//h3[contains(text(),"Johny")]');
	}
	get errorMessage() {
		return xpath('//div[text()="Invalid Email or Password"]');
	}
}
export default UserDashboardPage;
