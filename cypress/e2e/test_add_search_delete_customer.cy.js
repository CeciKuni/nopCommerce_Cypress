import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";
import { AddCustomer, SearchCustomer } from "../pages/Customers";
import faker from "faker";

const login = new LoginPage();
const logout = new DashboardPage();
const addCustomer = new AddCustomer();
const searchCustomer = new SearchCustomer();

const email = faker.internet.email();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

beforeEach("The user opens the website", () => {
  login.navigateToLoginPage(data.loginPageTitle);
  login.setUsernameAndPassword(data.username, data.password);
  login.clickLoginButton();
  logout.validateTitle(data.dashboardTitle);
});

describe("Customer Tests", () => {
  it("Add, Search and Delete a customer", () => {
    addCustomer.clickOnCustomerMenu();
    addCustomer.clickOnCustomerMenuItem();
    addCustomer.clickOnAddNew();
    addCustomer.verifyDefaultRole();
    addCustomer.clearDefaultRole();
    cy.log("Complete the form");
    addCustomer.setEmail(email);
    addCustomer.setFirstName(firstName);
    addCustomer.setLastName(lastName);
    addCustomer.selectGender("Female");
    addCustomer.setDOB("7/05/1985"); //Format: D / MM / YYY
    addCustomer.setCompanyName("CK");
    addCustomer.selectRole("Guests");
    addCustomer.setManagerVendor("Vendor 2");
    addCustomer.setAdminComment("This is a test....");
    addCustomer.clickOnSave();
    addCustomer.validateSavedCustomer();
    cy.log("Search the customer by email");
    searchCustomer.setEmail(email);
    searchCustomer.clearRole();
    searchCustomer.clickSearch();
    searchCustomer.nameInTable(firstName, lastName);
    searchCustomer.clickBtnEdit();
    cy.log("Delete the customer");
    searchCustomer.clickDeleteCustomer();
    searchCustomer.confirmDeleteCustomer();
    searchCustomer.validateDeletedCustomer();
    cy.log("Logout");
    logout.logOut();
    login.navigateToLoginPage(data.loginPageTitle);
  });
});
