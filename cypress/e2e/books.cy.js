describe("Books app", () => {
  it("отображает главную страницу", () => {
    cy.visit("/");
    cy.contains("Books list").should("be.visible");
  });

  it("успешный логин", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать").should("be.visible");
  });

  it("логин с пустым паролем не проходит", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then(($el) => {
      expect($el[0].checkValidity()).to.be.false;
    });
  });

  it("логин с неверным паролем не проходит", () => {
    cy.login("bropet@mail.ru", "wrong-password");
    cy.get("#mail").should("be.visible");
    cy.contains("Добро пожаловать").should("not.exist");
  });
});

describe("Избранное", () => {
  beforeEach(() => {
    cy.login("bropet@mail.ru", "123");
  });

  it("книга, добавленная в избранное при создании, видна на странице Favorites", () => {
    const title = `Книга ${Date.now()}`;
    cy.addBook(title, "Описание", "Автор", true);
    cy.contains("Favorites").click();
    cy.contains(title).should("be.visible");
  });

  it("книгу можно добавить в избранное из общего списка", () => {
    const title = `Книга ${Date.now()}`;
    cy.addBook(title, "Описание", "Автор");
    cy.contains(".card", title).contains("button", "Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains(title).should("be.visible");
  });

  it("книгу можно удалить из избранного", () => {
    const title = `Книга ${Date.now()}`;
    cy.addBook(title, "Описание", "Автор", true);
    cy.contains(".card", title).contains("button", "Delete from favorite").click();
    cy.contains(".card", title).contains("button", "Add to favorite").should("be.visible");
  });
});
