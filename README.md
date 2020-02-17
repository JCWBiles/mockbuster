# Mockbuster

## We are making our version of BlockBuster called MockBuster it is a place to rent/buy movies digitally (no VHS/CD’s here).
```
So user can join the MockBuster community thety will be able to sign up.
```
```
So user can view their accounts they can sign in.
```
```
So user can keep their accounts safe they can log out.
```
```
So user can see a range of movies they are able to see the library.
```
```
So user can keep their details up to date they can edit their account.
```
```
So user can review their selected items they can use the basket.
```
```
So user can purchase or rent their items they can checkout.
```
```
So user can be sure they signed up correctly and see purchases they receive emails.
```
```
So user can find their fave films they can use the search function.
```
```
So user can review their films they can like or dislike.
```
```
So user can decide if they want the film they can watch a preview/trailer.
```

### Bonus user story
```
So user can watch a film in the highest quality they can select a HD version of the film.
```
```
So user can decide how long they want the film they can select duration.
```

## Tools used in this project
It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Postgres](https://www.postgresql.org/) to manage the database.
- [ESLint](https://eslint.org) for checking syntax and rule following.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Bootstrap](https://getbootstrap.com) for css.
- [FontAwesome](https://fontawesome.com) for css.
- [bCrypt](https://www.npmjs.com/package/bcrypt) for our password security.
- [MethodOverride](https://www.npmjs.com/package/method-override) to allow a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses or parent classes.
- [Flash](https://www.npmjs.com/package/express-flash-messages) to prompt the user messages when features are tested.

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
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install Postgres
    ```
     brew install postgresql
    ```
1. Start Postgres
    ```
    brew services start postgresql
    ```
1. Interact with the PostgreSQL database management system
PostgreSQL provides a built-in interface, called psql. It's a command-line tool that allows you to interact with databases. You can think of it like IRB: it's a REPL. Where IRB gives you a Ruby interface, psql's interface uses a different language: 'Structured Query Language', or SQL.
psql also adds a couple of commands on top of SQL, for interacting with the database system.
PostgreSQL also provides one built-in database, called postgres.
To start psql, type psql <database name> into a Terminal, where <database name> is the name of the database you want to interact with. So, typing psql postgres will give us direct access to that first database:
    ```
    $ psql postgres
    postgres=#
    ```
1. node-postgres  
Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
Install
    ```
    $ npm install pg
    ```
1. Create a database using SQL
Now that we're in the psql REPL environment, let's create a database using SQL:
    ```
    postgres=# CREATE DATABASE "database_name_here";
    ```
The semicolon is important! SQL is an old language. You've got to end lines with semicolons.
1. Listing all database tables
You can use one of psql's special non-SQL commands to list databases:
    ```
    postgres=# \l
    ```
You can see the database you made, the given postgres database, and some template databases Postgres needs.
1. Quitting psql
You can leave psql in the following way:
    ```
    postgres=# \q
    ```

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
This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.
