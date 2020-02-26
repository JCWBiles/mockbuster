// describe('Films grouped according to genre', function() {
//   it('shows action films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Action').click();
//     cy.url().should('eq', 'http://localhost:3000/films/action')
//     cy.get('title').should('contain', 'Action');
//   }),
//
//   it('shows bio-pic films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Biopic').click();
//     cy.url().should('eq', 'http://localhost:3000/films/biopic')
//     cy.get('title').should('contain', 'Bio-Pic');
//   }),
//
//   it('shows comedy films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Comedy').click();
//     cy.url().should('eq', 'http://localhost:3000/films/comedy')
//     cy.get('title').should('contain', 'Comedy');
//   }),
//
//   it('shows crime films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Crime').click();
//     cy.url().should('eq', 'http://localhost:3000/films/crime')
//     cy.get('title').should('contain', 'Crime');
//   }),
//
//   it('shows drama films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Drama').click();
//     cy.url().should('eq', 'http://localhost:3000/films/drama')
//     cy.get('title').should('contain', 'Drama');
//   }),
//
//   it('shows fantasy films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Fantasy').click();
//     cy.url().should('eq', 'http://localhost:3000/films/fantasy')
//     cy.get('title').should('contain', 'Fantasy');
//   }),
//
//   it('shows history films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('History').click();
//     cy.url().should('eq', 'http://localhost:3000/films/history')
//     cy.get('title').should('contain', 'History');
//   }),
//
//   it('shows horror films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Horror').click();
//     cy.url().should('eq', 'http://localhost:3000/films/horror')
//     cy.get('title').should('contain', 'Horror');
//   });
//
//   it('shows kids films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Kids').click();
//     cy.url().should('eq', 'http://localhost:3000/films/kids')
//     cy.get('title').should('contain', 'Kids');
//   });
//
//   it('shows legal films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Legal').click();
//     cy.url().should('eq', 'http://localhost:3000/films/legal')
//     cy.get('title').should('contain', 'Legal');
//   });
//
//   it('shows musical films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Musical').click();
//     cy.url().should('eq', 'http://localhost:3000/films/musical')
//     cy.get('title').should('contain', 'Musical');
//   }),
//
//   it('shows romance films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Romance').click();
//     cy.url().should('eq', 'http://localhost:3000/films/romance')
//     cy.get('title').should('contain', 'Romance');
//   });
//
//   it('shows sports films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Sports').click();
//     cy.url().should('eq', 'http://localhost:3000/films/sports')
//     cy.get('title').should('contain', 'Sports');
//   }),
//
//   it('shows superhero films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Superhero').click();
//     cy.url().should('eq', 'http://localhost:3000/films/superhero')
//     cy.get('title').should('contain', 'Superhero');
//   }),
//
//   it('shows thriller films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('Thriller').click();
//     cy.url().should('eq', 'http://localhost:3000/films/thriller')
//     cy.get('title').should('contain', 'Thriller');
//   }),
//
//   it('shows war films', function() {
//     cy.visit('/login')
//     cy.get('form')
//     cy.get('input[name=email]').type('j.doe@email.com')
//     .should('have.value', 'j.doe@email.com');
//     cy.get('input[name=password]').type('password123')
//     .should('have.value', 'password123');
//     cy.get('form').submit();
//     cy.url().should('eq', 'http://localhost:3000/films')
//     cy.contains('Genres').click();
//     cy.contains('War').click();
//     cy.url().should('eq', 'http://localhost:3000/films/war')
//     cy.get('title').should('contain', 'War');
//   });
// });
