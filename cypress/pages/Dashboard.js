class DashboardPage {
  validateTitle(title) {
    cy.title().should("eq", title);
  }

  logOut() {
    cy.contains("a", "Logout").should("be.visible").click();
  }
}
export default DashboardPage;
