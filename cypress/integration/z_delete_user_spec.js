// describe('Deleting user', function() {
//   it('can delete a user', function(){
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
//     cy.contains('Delete Account').click();
//     cy.url().should('eq', 'http://localhost:3000/')
//     cy.visit('http://localhost:3000/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//       .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//       .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/');
//   })
// });
