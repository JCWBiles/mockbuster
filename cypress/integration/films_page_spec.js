describe('Home page', function() {
  it('has a library of films', function() {
    cy.visit('/films');
    cy.get('.navbar-brand').should('contain', 'Library');
  });
});
