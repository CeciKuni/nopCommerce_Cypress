import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";

const login = new LoginPage();
const logout = new DashboardPage();

describe("Login and Logout Test", () => {
  it("Login and Logout", () => {
    login.navigateToLoginPage(data.loginPageTitle);
    login.setUsernameAndPassword(data.username, data.password);
    login.clickLoginButton();
    logout.validateTitle(data.dashboardTitle);
    logout.logOut();
    login.navigateToLoginPage(data.loginPageTitle);
  });
});
