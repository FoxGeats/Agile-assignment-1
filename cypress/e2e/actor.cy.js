let actors; // List of movies from TMDB
let actor; //

describe("Base tests", () => {
  before(() => {
    // Get the discover movies from TMDB and store them locally.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        actors = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/movies/people");
  });

  describe("The Discover Movies page", () => {
    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("People");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
      
    });
    

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(actors[index].name);
      });
    });
  });
  describe("The movie details page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/${
          actors[2].id
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((personDetails) => {
          actor = personDetails;
        });

    });
    beforeEach(() => {
        cy.visit(`/persons/${actors[2].id}`);
      });
   
    it(" displays the movie title, overview and genres and ", () => {
     
        cy.get("h3").contains(actor.name);
        
       
      

    cy.get("p").contains("Biography");
   cy.get("p").next().contains(actor.biography);
   
    });
  });
});