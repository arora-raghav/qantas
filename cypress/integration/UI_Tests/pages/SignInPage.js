import UserDashboardPage from './UserDashboardPage';
const { get, xpath } = cy;

class SignInPage {
	get txtEmail() {
		return get(`[name='username']`);
	}
	get txtPassword() {
		return get(`[name='password']`);
	}
	get btnSubmit() {
		return xpath('//button[text()="Login"]');
	}

	login(username, password) {
		this.txtEmail.clear().type(username);
		this.txtPassword.clear().type(password);
		this.btnSubmit.click();
		return new UserDashboardPage();
	}
}
export default SignInPage;
