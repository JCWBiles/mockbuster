describe('Checking out a user', function() {
  it('user can checkout ', function(){
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
      .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
      .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films');
    cy.get('#movie').click();
    cy.contains('Add To Basket').click();
    cy.get('cd-cart__trigger').click();
    cy.contains('Checkout - £').click();
    cy.url().should('eq', 'http://localhost:3000/checkout');
    cy.get('input[name=address_first_line]').type('1 Davidson Road')
    .should('have.value', '1 Davidson Road');
    cy.get('input[name=address_second_line]').type('South Croydon')
    .should('have.value', 'South Croydon');
    cy.get('input[name=address_town]').type('London')
    .should('have.value', 'London');
    cy.get('input[name=address_post_code]').type('CR8 6EN')
    .should('have.value', 'CR8 6EN');
    cy.get('input[name=card_holder]').type('Russ Weaver')
    .should('have.value', 'Russ Weaver');
    cy.get('input[name=expiration_month]').type('12')
    .should('have.value', '12');
    cy.get('input[name=expiration_year]').type('2020')
    .should('have.value', '2020');
    cy.get('input[name=cvc]').type('666')
    .should('have.value', '666');
    cy.contains('Confirm Payment').click();
    cy.url().should('eql', 'http://localhost:3000/checkout/thank_you');
  });
});