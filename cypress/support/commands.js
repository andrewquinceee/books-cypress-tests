Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");
  cy.contains("button", "Log in").click();
  if (email) {
    cy.get("#mail").type(email);
  }
  if (password) {
    cy.get("#pass").type(password);
  }
  cy.contains("button", "Submit").click();
});

Cypress.Commands.add("addBook", (title, description, author, favorite = false) => {
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(author);
  if (favorite) {
    cy.get("#favorite").check({ force: true });
  }
  cy.contains("button", "Submit").click();
});
