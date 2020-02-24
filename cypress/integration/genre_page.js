describe('Films grouped according to genre', function() {
  it('shows action films', function() {
    cy.visit('/films/action');
    cy.get('title').should('contain', 'Action');
  }),

  it('shows bio-pic films', function() {
    cy.visit('/films/biopic');
    cy.get('title').should('contain', 'Bio-Pic');
  }),

  it('shows comedy films', function() {
    cy.visit('/films/comedy');
    cy.get('title').should('contain', 'Comedy');
  }),

  it('shows crime films', function() {
    cy.visit('/films/crime');
    cy.get('title').should('contain', 'Crime');
  }),

  it('shows drama films', function() {
    cy.visit('/films/drama');
    cy.get('title').should('contain', 'Drama');
  }),

  it('shows fantasy films', function() {
    cy.visit('/films/fantasy');
    cy.get('title').should('contain', 'Fantasy');
  }),

  it('shows history films', function() {
    cy.visit('/films/history');
    cy.get('title').should('contain', 'History');
  }),

  it('shows horror films', function() {
    cy.visit('/films/horror');
    cy.get('title').should('contain', 'Horror');
  });

  it('shows kids films', function() {
    cy.visit('/films/kids');
    cy.get('title').should('contain', 'Kids');
  });

  it('shows legal films', function() {
    cy.visit('/films/legal');
    cy.get('title').should('contain', 'Legal');
  });

  it('shows musical films', function() {
    cy.visit('/films/musical');
    cy.get('title').should('contain', 'Musical');
  }),

  it('shows romance films', function() {
    cy.visit('/films/romance');
    cy.get('title').should('contain', 'Romance');
  });

  it('shows sports films', function() {
    cy.visit('/films/sports');
    cy.get('title').should('contain', 'Sports');
  }),

  it('shows superhero films', function() {
    cy.visit('/films/superhero');
    cy.get('title').should('contain', 'Superhero');
  }),

  it('shows thriller films', function() {
    cy.visit('/films/thriller');
    cy.get('title').should('contain', 'Thriller');
  }),

  it('shows war films', function() {
    cy.visit('/films/war');
    cy.get('title').should('contain', 'War');
  });
});
