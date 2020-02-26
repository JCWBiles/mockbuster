// describe('Editing user details', function() {
//   it('can edit user name', function(){
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//       .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//       .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films');
//     cy.contains('Account').click();
//     cy.contains('My Details').click();
//     cy.url().should('eq', 'http://localhost:3000/account');
//     cy.get('#user-first-name').should('contain', 'John');
//     cy.get('#edit').first().click();
//     cy.get('#new-name-form').find('[type="text"]').clear().type('Mikey')
//     cy.get('#new-name-form').submit();
//     cy.get('#user-first-name').should('not.contain', 'John');
//     cy.get('#user-first-name').should('contain', 'Mikey');
//   })
// })
