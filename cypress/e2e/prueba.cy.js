import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import AddCustomer from "../pages/Customers";

const login = new LoginPage();
const logout = new DashboardPage();
const customer = new AddCustomer();

describe("Navigate to login page", () => {
  it("Open the login page and validate the title", () => {
    login.navigateToLoginPage(data.loginPageTitle);
  });
  it("Set Username", () => {
    login.setUsername(data.username);
  });
  it("Set Password", () => {
    login.setPassword(data.password);
  });
  it("Clicking Log in button", () => {
    login.clickLoginButton();
  });
  it("Validate Dashboard title", () => {
    logout.validateTitle(data.dashboardTitle);
  });
  it("Customers Menu", () => {
    customer.clickOnCustomerMenu();
    customer.clickOnCustomerMenuItem();
    customer.clickOnAddNew();
    customer.verifyDefaultRole();

  });
  it("limpiar", () =>{
    customer.clearDefaultRole();
  });
  it("elegir vendors", () =>{
    customer.selectRole("Administrators");
  })
  it("seleccionar manager vendor", () =>{
    customer.setManagerVendor("Vendor 2");
  });
  it("seleccionar género", () =>{
    customer.selectGender("Female");
  })

});