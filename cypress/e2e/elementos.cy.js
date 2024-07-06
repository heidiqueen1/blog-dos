describe("comprobar elementos de la interfaz", () => {
  it("verificar la existencia de un h1", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("El Blog del trabajo remoto").should("exist");
  });

  it('Debería verificar la existencia de párrafos', () => {
    cy.get('p').should('exist');
  });

});

