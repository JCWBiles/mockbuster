// describe('Editing user details', function() {
//   it('can edit user name', function(){
//     cy.visit('/account');
//     cy.get('.users').should('contain', 'John');
//     cy.contains('Edit').first().click();
//     cy.get('#new-name-form').find('[type="text"]').clear().type('Mike');
//     cy.get('#new-name-form').submit();
//     cy.get('.users').should('not.contain', 'John');
//     cy.get('.users').should('contain', 'Mike');
//   })
// })
