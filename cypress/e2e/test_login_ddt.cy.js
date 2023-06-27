import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";

const login = new LoginPage();
const logout = new DashboardPage();

describe("Different logins with json file", () => {
  beforeEach(() => {
    login.navigateToLoginPage(data.loginPageTitle);
  });

  it("Performs login with different credentials", () => {
    cy.fixture("dataLogin").then((testdata) => {
      testdata.forEach((logindata) => {
        login.setUsernameAndPassword(logindata.username, logindata.password);
        login.clickLoginButton();

        cy.title().then((title) => {
          if (title === "Dashboard / nopCommerce administration") {
            if (logindata.result === "Pass") {
              cy.log("*****Passed*****");
              logout.logOut();
            } else {
              cy.log("*****Failed*****");
            }
          } else {
            if (logindata.result === "Pass") {
              cy.log("*****Failed*****");
            } else {
              cy.log("*****Passed*****");
            }
          }
        });
      });
    });
  });
});
