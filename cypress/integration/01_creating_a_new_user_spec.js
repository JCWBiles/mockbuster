describe('Sign up page', function() {
  it('users can sign up', function() {
    cy.visit('/user')
    cy.get('form')
    cy.get('input[name=firstname]').type('John')
      .should('have.value', 'John');
    cy.get('input[name=lastname]').type('Doe')
      .should('have.value', 'Doe');
    cy.get('input[name=email]').type('j.doe@email.com')
      .should('have.value', 'j.doe@email.com');
      cy.get('input[name=email2]').type('j.doe@email.com')
        .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
      .should('have.value', 'password123');
    cy.get('form').submit()
  });
});
