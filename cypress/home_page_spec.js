describe('Home page', function() {
  it('has a title', function() {
    cy.visit('/');
    cy.get('.header').should('contain', 'Featured');
  });
});
