# Mockbuster
## We are making our version of BlockBuster called MockBuster it is a place to rent/buy movies digitally (no VHS/CD’s here).
Complete ['X']
```
So user can join the MockBuster community thety will be able to sign up.
```
Complete ['X']
```
So user can view their accounts they can sign in.
```
Complete ['X']
```
So user can keep their accounts safe they can log out.
```
Complete ['X']
```
So user can see a range of movies they are able to see the library.
```
Complete ['X']
```
So user can keep their details up to date they can edit their account.
```
Complete ['X']
```
So user can review their selected items they can use the basket.
```
Complete ['X']
```
So user can purchase or rent their items they can checkout.
```
Complete ['X']
```
So user can be sure they signed up correctly and see purchases they receive emails.
```
Complete ['X']
```
So user can find their fave films they can use the search function.
```
Complete ['X']
```
So user can review their films they can like or dislike.
```
Complete ['X']
```
So user can decide if they want the film they can watch a preview/trailer.
```
### Bonus user story
Complete ['X']
```
So user can interact with other film lovers they can chat in the blog page.
```
Complete [ ]
```
So user can watch a film in the highest quality they can select a HD version of the film.
```
Complete [ ]
```
So user can decide how long they want the film they can select duration.
```
## Tools used in this project
It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [ESLint](https://eslint.org) for checking syntax and rule following.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Bootstrap](https://getbootstrap.com) for css.
- [FontAwesome](https://fontawesome.com) for adding icons.
- [bCrypt](https://www.npmjs.com/package/bcrypt) for our password security.
- [MethodOverride](https://www.npmjs.com/package/method-override) to allow a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses or parent classes.
- [Flash](https://www.npmjs.com/package/express-flash-messages) to prompt the user messages when features are tested.
- [Mailgun](https://www.mailgun.com/) to send confirmation emails on sign-up and purchase.
- [Heroku](https://signup.heroku.com/) Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
- [bCrypt](https://www.npmjs.com/package/bcrypt) for our password security.
### Note: Database change
The project began with:
- [Postgres](https://www.postgresql.org/) to manage the database.
After a number of issues it was decided to move over to:
- [MongoDB](https://www.mongodb.com/) to manage the database.
## Card Wall
https://trello.com/b/ZD7sr84I/mockbuster
## Quickstart
### Install Node.js
1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of Node.js, currently `10.16.3`.
    ```
    nvm install 10.16.3
    ```
### Set up your project
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
    ```
    npm install bcrypt
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```
1. MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. After installing mongodb you can interact with it in the command-line by typing 'mongo'.
To see our interactions with mongo please see our db/migrations directory.
For further infomration on how to interact with mongo look up mongo cheat sheets e.g.:
[MongoDB Cheat Sheet](https://blog.codecentric.de/files/2012/12/MongoDB-CheatSheet-v1_0.pdf)
### Start
1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)
### Test
* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```
#### Start test server
The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3000` and uses the `mockbuster_test` MongoDB database,
so that integration tests do not interact with the development server.
