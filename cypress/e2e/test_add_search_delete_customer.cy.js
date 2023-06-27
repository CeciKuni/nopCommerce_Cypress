import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import {AddCustomer, SearchCustomer} from "../pages/Customers";
import faker from 'faker';

const login = new LoginPage();
const logout = new DashboardPage();
const addCustomer = new AddCustomer();
const searchCustomer = new SearchCustomer();

const email = faker.internet.email();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

describe("Add, search and delete a customer", () => {
  it("Open the login page and validate the title", () => {
    login.navigateToLoginPage(data.loginPageTitle);
  });
  it("Set username and password", () => {
    login.setUsernameAndPassword(data.username, data.password)
  });
  it("Clicking Log in button and validate the title", () => {
    login.clickLoginButton();
    logout.validateTitle(data.dashboardTitle);
  });
  it("Navigate to Customers > Customers", () => {
    addCustomer.clickOnCustomerMenu();
    addCustomer.clickOnCustomerMenuItem();
  });
  it("Click 'Add New' button", () => {
    addCustomer.clickOnAddNew();
  });
  it("Verify default rol and clear it", () => {
    addCustomer.verifyDefaultRole();
    addCustomer.clearDefaultRole();
  });
  it("Complete the form", () => {
    addCustomer.setEmail(email);
    addCustomer.setFirstName(firstName);
    addCustomer.setLastName(lastName);
    addCustomer.selectGender("Female");
    addCustomer.setDOB("7/05/1985"); //Format: D / MM / YYY
    addCustomer.setCompanyName("CK");
    addCustomer.selectRole("Guests");
    addCustomer.setManagerVendor("Vendor 2");
    addCustomer.setAdminComment("This is a test....");
  });
  it("Save the customer", () => {
    addCustomer.clickOnSave();
  });
  it("Validate the customer created", () => {
    addCustomer.validateSavedCustomer();
  });
  it("Search the customer by email", () => {
    searchCustomer.setEmail(email);
    searchCustomer.clearRole();
    searchCustomer.clickSearch();
  });
  it("Validate if the name exists in the table", () => {
    searchCustomer.nameInTable(firstName, lastName);
  });
  it("Click on button 'Edit'", () => {
    searchCustomer.clickBtnEdit();
  });
  it("Click on button 'Delete', confirm and validate", () => {
    searchCustomer.clickDeleteCustomer();
    searchCustomer.confirmDeleteCustomer();
    searchCustomer.validateDeletedCustomer();
  });

});


