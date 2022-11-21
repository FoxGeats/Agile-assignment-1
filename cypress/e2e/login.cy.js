let movies;

Cypress.Commands.add('typeEmailAndPassword', (email,password) => {
    cy.get("[name='email']").type(email);
    cy.get("[name='password']").type(password);
    cy.get("Button[name='signIn']").click();
  })
const Email='1563109910@qq.com'
const Password='123456'

describe("User funcitonality", () => {
   
    describe("Login Page and log out page", () => {
        it("Should log in and display the home page", () => {
            cy.visit("/pages/login");
            cy.get("h1").contains("Sign in");
            cy.typeEmailAndPassword(Email,Password)
           
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

    describe("Login with wrong input", () => {
        beforeEach(() => {
            cy.visit("/pages/login");
          });
        it("alert invalid-email", () => {
            cy.typeEmailAndPassword(`qwe`,Password)
            cy.on('window:alert', (text) => {
                expect(text).to.contains('invalid-email');
              });
             
        })
        it("alert user not found", () => {
            cy.typeEmailAndPassword(`123@qq.com`,`123456`)
            cy.on('window:alert', (text) => {
                expect(text).to.contains('user-not-found');
              });
        })
        it("alert wrong password", () => {
            cy.typeEmailAndPassword(Email,`123`)
            cy.on('window:alert', (text) => {
                expect(text).to.contains('wrong-password');
              });
        })
    
    })
})