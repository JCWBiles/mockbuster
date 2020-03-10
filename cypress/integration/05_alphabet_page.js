describe('Films grouped in alphabetical order ', function() {
  it('shows films A to E ', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains('A-Z').click();
    cy.contains('A-E').click();
    cy.url().should('eq', 'http://localhost:3000/films/a_to_e')
    cy.get('title').should('contain', 'A to E');
  }),

  it('shows films F to J ', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains('A-Z').click();
    cy.contains('F-J').click();
    cy.url().should('eq', 'http://localhost:3000/films/f_to_j')
    cy.get('title').should('contain', 'F to J');
  }),

  it('shows films K to O ', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains('A-Z').click();
    cy.contains('K-O').click();
    cy.url().should('eq', 'http://localhost:3000/films/k_to_o')
    cy.get('title').should('contain', 'K to O');
  }),

  it('shows films P to T ', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains('A-Z').click();
    cy.contains('P-T').click();
    cy.url().should('eq', 'http://localhost:3000/films/p_to_t')
    cy.get('title').should('contain', 'P to T');
  }),

  it('shows films U to Z ', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains('A-Z').click();
    cy.contains('U-Z').click();
    cy.url().should('eq', 'http://localhost:3000/films/u_to_z')
    cy.get('title').should('contain', 'U to Z');
  }),

  it('shows films 0 to 9 ', function() {
    cy.visit('/login')
    cy.get('form')
    cy.get('input[name=email]').type('j.doe@email.com')
    .should('have.value', 'j.doe@email.com');
    cy.get('input[name=password]').type('password123')
    .should('have.value', 'password123');
    cy.get('form').submit();
    cy.url().should('eq', 'http://localhost:3000/films')
    cy.contains('A-Z').click();
    cy.contains('0-9').click();
    cy.url().should('eq', 'http://localhost:3000/films/zero_to_nine')
    cy.get('title').should('contain', '0 to 9');
  });
});
