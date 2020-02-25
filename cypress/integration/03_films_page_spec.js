describe('Library page', function() {
  it('has a library of films', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
      .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
      .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', '/films')
    cy.get('.navbar-brand').should('contain', 'Library');
  });
});
