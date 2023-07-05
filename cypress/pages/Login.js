const USERNAME = "#Email";
const PASSWORD = "#Password";
const LOGIN_BUTTON = "button[type='submit']";


class LoginPage {
  navigateToLoginPage(title) {
    cy.visit("/login");
    cy.title().should("eq", title);
  }

  setUsernameAndPassword(username, password) {
    cy.get(USERNAME).clear().type(username);
    cy.get(PASSWORD).clear().type(password);

  }

  clickLoginButton() {
    cy.get(LOGIN_BUTTON).click({force: true});
  }
}

export default LoginPage;
