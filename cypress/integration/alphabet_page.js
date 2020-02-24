describe('Films grouped in alphabetical order ', function() {
  it('shows films A to E ', function() {
    cy.visit('/films/a_to_e');
    cy.get('title').should('contain', 'A to E');
  }),

  it('shows films F to J ', function() {
    cy.visit('/films/f_to_j');
    cy.get('title').should('contain', 'F to J');
  }),

  it('shows films K to O ', function() {
    cy.visit('/films/k_to_o');
    cy.get('title').should('contain', 'K to O');
  }),

  it('shows films P to T ', function() {
    cy.visit('/films/p_to_t');
    cy.get('title').should('contain', 'P to T');
  }),

  it('shows films U to Z ', function() {
    cy.visit('/films/u_to_z');
    cy.get('title').should('contain', 'U to Z');
  }),

  it('shows films 0 to 9 ', function() {
    cy.visit('/films/zero_to_nine');
    cy.get('title').should('contain', '0 to 9');
  });
});
