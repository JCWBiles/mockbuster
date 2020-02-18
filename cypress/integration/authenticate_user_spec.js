describe('Login page', function() {
    it('users can login', function() {
      cy.visit('/')
      cy.get('form')
      cy.get('input[name=email]').type('j.doe@email.com')
        .should('have.value', 'j.doe@email.com');
      cy.get('input[name=password]').type('password123')
        .should('have.value', 'password123');
      cy.get('form').submit();
    });
});