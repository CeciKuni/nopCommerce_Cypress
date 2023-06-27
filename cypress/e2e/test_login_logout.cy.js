import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";

const login = new LoginPage();
const logout = new DashboardPage();

describe("Navigate to login page", () => {
  it("Open the login page and validate the title", () => {
    login.navigateToLoginPage(data.loginPageTitle);
  });
  it("Set username and password", () => {
    login.setUsernameAndPassword(data.username, data.password);
  });
  it("Clicking Log in button and Validate title", () => {
    login.clickLoginButton();
    logout.validateTitle(data.dashboardTitle);
  });
  it("Clicking Log Out button", () => {
    logout.logOut();
  });
  it("Return to Login page", () => {
    login.navigateToLoginPage(data.loginPageTitle);
  });
});
