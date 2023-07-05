//Add customer page
const CUSTOMER_MENU_ITEM =
  "a[href='/Admin/Customer/List'] p:contains('Customers')";
const EMAIL = "#Email";
const PASSWORD = "#Password";
const FIRSTNAME = "#FirstName";
const LASTNAME = "#LastName";
const DOB = "#DateOfBirth";
const COMPANY = "#Company";
const VENDOR = "#VendorId";
const DEFAULT_ROL = ".k-button";
const DELETE_BUTTON_ROL = "span[title='delete']";
const MALE = "#Gender_Male";
const FEMALE = "#Gender_Female";
const CUSTOMER_ROLES = "div.input-group-append.input-group-required div[role='listbox']";
const LIST_ROLES = ".k-item";
const ADMIN_COMMENT = "#AdminComment";

//Search customer page
const SEARCH_EMAIL = "#SearchEmail";
const SEARCH_FIRSTNAME = "#SearchFirstName";
const SEARCH_LASTNAME = "#SearchLastName";
const SEARCH_CUSTOMER_BUTTON = "#search-customers";
const EMAIL_COLUMN = ".odd > :nth-child(2)";
const COLUMN_NAME = "tbody > :nth-child(1) > :nth-child(3)";
const DELETE_BUTTON = "span#customer-delete";
const MODAL_DELETE_BUTTON = ".modal-footer > .btn-danger";

export class AddCustomer {
  clickOnCustomerMenu() {
    cy.contains("p", "Customers").should("be.visible").click();
  }
  clickOnCustomerMenuItem() {
    cy.get(CUSTOMER_MENU_ITEM).click();
  }
  clickOnAddNew() {
    cy.contains("Add new", { timeout: 3000 }).should("be.visible").click();
  }
  setEmail(email) {
    cy.get(EMAIL).type(email);
  }
  setPassword(password) {
    cy.get(PASSWORD).type(password);
  }
  setFirstName(firstname) {
    cy.get(FIRSTNAME).type(firstname);
  }
  setLastName(lastname) {
    cy.get(LASTNAME).type(lastname);
  }
  setDOB(dob) {
    cy.get(DOB).type(dob);
  }
  setCompanyName(companyName) {
    cy.get(COMPANY).type(companyName);
  }
  setManagerVendor(vendor) {
    cy.get(VENDOR).select(vendor);
  }
  verifyDefaultRole(role) {
    cy.get(DEFAULT_ROL).should("have.attr", "unselectable", "on");
  }
  clearDefaultRole() {
    cy.get(DELETE_BUTTON_ROL).click();
  }
  selectGender(gender) {
    switch (gender) {
      case "Male":
        cy.get(MALE).click();
        break;
      case "Female":
        cy.get(FEMALE).click();
        break;
      default:
        cy.get(MALE).click();
    }
  }
  selectRole(rol) {
    cy.get(CUSTOMER_ROLES).click();
    switch (rol) {
      case "Vendors":
        cy.get(LIST_ROLES).contains("Vendors").click();
        break;
      case "Guests":
        cy.get(LIST_ROLES).contains("Guests").click();
        break;
      case "Administrators":
        cy.get(LIST_ROLES).contains("Administrators").click();
        break;
      default:
        cy.get(LIST_ROLES).contains("Registered").click();
    }
  }
  setAdminComment(comment) {
    cy.get(ADMIN_COMMENT).type(comment);
  }
  clickOnSave() {
    cy.get("button").contains("Save").click();
  }
  validateSavedCustomer() {
    cy.contains("body", "The new customer has been added successfully.").should(
      "exist"
    );
  }
}

export class SearchCustomer {
  setEmail(email) {
    cy.get(SEARCH_EMAIL).type(email);
  }

  setFirstName(firstname) {
    cy.get(SEARCH_FIRSTNAME).type(firstname);
  }

  setLastName(lastname) {
    cy.get(SEARCH_LASTNAME).type(lastname);
  }

  clearRole() {
    cy.get(DELETE_BUTTON_ROL).click();
  }

  clickSearch() {
    cy.get(SEARCH_CUSTOMER_BUTTON).click();
  }

  emailInTable(email) {
    cy.get(EMAIL_COLUMN).contains(email);
  }

  nameInTable(firstname, lastname) {
    cy.get(COLUMN_NAME).contains(firstname + " " + lastname);
  }

  clickBtnEdit() {
    cy.get("a").contains("Edit").click();
  }

  clickDeleteCustomer() {
    cy.get(DELETE_BUTTON).should("be.visible").click();
  }

  confirmDeleteCustomer() {
    cy.get(MODAL_DELETE_BUTTON).should("be.visible").click();
  }

  validateDeletedCustomer() {
    cy.contains("body", "The customer has been deleted successfully.").should("exist");
  }
}
