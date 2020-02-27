describe('Making a blog', function() {
  it('user can post a blog', function(){
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains("Account").click();
    cy.contains('Blog').click();
    cy.url().should('eq', 'http://localhost:3000/blog');
    cy.get('input[name="movie"]').type('Bridget Jones Diary')
    .should('have.value', 'Bridget Jones Diary');
    cy.get('input[name="review"]').type('What a fun film')
    .should('have.value', 'What a horrible film');
    cy.get('input[name="user"]').should('have.value', 'John');
    cy.get('#new-blog-form').submit();
    cy.get('#movie1').should('contain', 'Bridget Jones Diary');
    cy.get('#review1').should('contain', 'What a fun film');
    cy.get('#user1').should('contain', 'John');
  })
})
