class LoginPage {
  navigateToLoginPage(title) {
    cy.visit("/login");
    cy.title().should("eq", title);
  }

  setUsernameAndPassword(username, password) {
    cy.get("#Email").clear().type(username);
    cy.get("#Password").clear().type(password);

  }

  clickLoginButton() {
    cy.get("button[type='submit']").click({force: true});
  }
}

export default LoginPage;
