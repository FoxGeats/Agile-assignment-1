let movies;
describe("User funcitonality", () => {
    
    describe("Login Page and log out page", () => {
        it("Should log in and display the home page", () => {
            cy.visit("/pages/login");
            cy.get("h1").contains("Sign in");
            
            cy.get("[name='email']").type(`${Cypress.env("EMAIL")}`);
            cy.get("[name='password']").type(`${Cypress.env("PASSWORD")}`);
            cy.get("Button[name='signIn']").click();
            cy.get("span").contains("Hello")
        });
        it("Should navigate back to the logout page when the Log out button is clicked", () => {
            cy.get("Button[name=logout]").click();
            cy.url().should("include", `/pages/logout`);
        });
        it("Should navigate to the home page when the return to home page button is clicked", () => {
            cy.get("a").eq(0).click();
            cy.get("h3").contains("Discover");
            cy.get("span").contains("please")
        });
    });
    

})