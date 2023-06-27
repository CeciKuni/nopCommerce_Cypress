export class AddCustomer {

  clickOnCustomerMenu() {
    cy.contains("p", "Customers").should("be.visible").click();
  }

  clickOnCustomerMenuItem() {
    cy.xpath(
      "//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]"
    ).click();
  }

  clickOnAddNew() {
    cy.contains("Add new", { timeout: 3000 }).should("be.visible").click();
  }

  setEmail(email) {
    cy.get("#Email").type(email);
  }

  setPassword(password) {
    cy.get("#Password").type(password);
  }

  setFirstName(firstname) {
    cy.get("#FirstName").type(firstname);
  }

  setLastName(lastname) {
    cy.get("#LastName").type(lastname);
  }

  setDOB(dob) {
    cy.get("#DateOfBirth").type(dob);
  }

  setCompanyName(companyName) {
    cy.get("#Company").type(companyName);
  }
  
  setManagerVendor(vendor) {
    cy.get("#VendorId").select(vendor)
  }

  verifyDefaultRole(role) {
    cy.get(".k-button").should("have.attr", "unselectable", "on");
  }

  clearDefaultRole() {
    cy.xpath("//span[@title='delete']").click();
  }

  selectGender(gender) {
    switch (gender) {
      case "Male":
        cy.get("#Gender_Male").click();
        break;
      case "Female":
        cy.get("#Gender_Female").click();
        break;
      default:
        cy.get("#Gender_Male").click();    
    }
  }

  selectRole(rol) {
    cy.xpath(
      "//div[@class='input-group-append input-group-required']//div[@role='listbox']"
    ).click();
    switch (rol) {
      case "Vendors":
        cy.get(".k-item").contains("Vendors").click();
        break;
      case "Guests":
        cy.get(".k-item").contains("Guests").click();
        break;
      case "Administrators":
        cy.get(".k-item").contains("Administrators").click();
        break;
      default:
        cy.get(".k-item").contains("Registered").click();
    }
  }

  setAdminComment(comment) {
    cy.get("#AdminComment").type(comment);
  }

  clickOnSave(){
    cy.get("button").contains("Save").click();
  }

  validateSavedCustomer() {
    cy.contains("body", "The new customer has been added successfully.").should("exist");
  }
}

export class SearchCustomer{

  setEmail(email) {
    cy.get("#SearchEmail").type(email);
  }

  setFirstName(firstname) {
    cy.get("#SearchFirstName").type(firstname);
  }

  setLastName(lastname) {
    cy.get("#SearchLastName").type(lastname);
  }

  clearRole() {
    cy.xpath("//span[@title='delete']").click();
  }

  clickSearch() {
    cy.get("#search-customers").click();
  }

  emailInTable(email) {
    cy.get('.odd > :nth-child(2)')
      .contains(email);
  }

  nameInTable(firstname, lastname) {
    cy.get('tbody > :nth-child(1) > :nth-child(3)')
      .contains(firstname + " " + lastname);
  }

  clickBtnEdit() {
    cy.xpath("//a[normalize-space()='Edit']")
    .should("be.visible")
    .click();
  }

  clickDeleteCustomer() {
    cy.xpath("//span[@id='customer-delete']")
    .should("be.visible")
    .click();
  }

  confirmDeleteCustomer() {
    cy.xpath("//button[normalize-space()='Delete']")
    .should("be.visible")
    .click();
  }

  validateDeletedCustomer() {
    cy.contains("body", "The customer has been deleted successfully.").should("exist");
  }


}

