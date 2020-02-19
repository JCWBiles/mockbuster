const Pool = require('pg').Pool

const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster',
  password: 'MoSalah11'
})

const showFilms = (req, res) => {
  pool.query('SELECT * FROM films', (err, res) => {
    if (error) {
      throw error
    }
  })
}

module.exports = pool;

// require('dotenv').config();
// //
//
// var { Pool } = require('pg')
// var isTest = process.env.NODE_ENV === 'test'
//
// var connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
//
// var pool = new Pool({
//   connectionString: isTest ? process.env.DATABASE_URL : connectionString,
//   ssl: isTest,
// })
//
// module.exports = { pool }



// var Pool = require('pg').Pool
// var pool = new Pool({
//   user: 'student',
//   host: 'localhost',
//   database: 'mockbuster_test',
//   password: 'MaDaOn96!',
//   port: 3000,
// })
//
// pool.on('error', (err) => {
//   console.error('An idle client has experienced an error', err.stack)
// })
//
// var pg = require('pg');
// const client = new pg.Client(
// {
//     user: 'student',
//     host: 'localhost',
//     database: 'mockbuster_test',
//     password: 'MaDaOn96!',
//     port: 3000,
// });
// client.connect(function (err){
//     if(err)
//         console.log(err);
//     else
//         console.log("Connected!");
// });
// module.exports = { pool, client };

// var env = process.env.NODE_ENV; // 'dev' or 'test'
//
// var dev = { app: { port: 3000 }, db: {user: 'student', password: 'MaDaOn96!', host: 'localhost', port: 3000, name: 'mockbuster' }};
//
// var test = { app: { port: 3000 }, db: {user: 'student', password: 'MaDaOn96!', host: 'localhost', port: 3000, name: 'mockbuster_test' }};
//
// var config = { dev, test };
//
// module.exports = config[env];



// var { Pool, Client } = require('pg').native;
// var connectionString = 'postgresql://student:MaDaOn96!@localhost:3000/mockbuster_test'
// var pool = new Pool({
//   connectionString: connectionString,
// })
// pool.on('error', (err) => {
//   console.error('An idle client has experienced an error', err.stack)
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
// module.exports = { pool, client };


// var pool = new Pool()
//
// var { Pool, Client } = require('pg')
// // pools will use environment variables
// // for connection information
// var pool = new Pool()
// pool.on('error', (err) => {
//   console.error('An idle client has experienced an error', err.stack)
// })
//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// // you can also use async/await
// var res = await pool.query('SELECT NOW()')
// await pool.end()
// // clients will also use environment variables
// // for connection information
// var client = new Client()
// await client.connect()
// var res = await client.query('SELECT NOW()')
// await client.end()



// var Pool = require('pg-pool')

// by default the pool uses the same
// configuration as whatever `pg` version you have installed

// var pool = new Pool()
//
// // you can pass properties to the pool
// // these properties are passed unchanged to both the node-postgres Client constructor
// // and the node-pool (https://github.com/coopernurse/node-pool) constructor
// // allowing you to fully configure the behavior of both
// var pool2 = new Pool({
//   user: 'student',
//   host: 'localhost',
//   database: 'mockbuster_test',
//   password: 'MaDaOn96!',
//   port: 3000,
//   ssl: true,
//   max: 20, // set pool max size to 20
//   idleTimeoutMillis: 1000, // close idle clients after 1 second
//   connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
// })
//
// //you can supply a custom client constructor
// //if you want to use the native postgres client
// var NativeClient = require('pg').native.Client
// var nativePool = new Pool({ Client: NativeClient })
//
// //you can even pool pg-native clients directly
// var PgNativeClient = require('pg-native')
// var pgNativePool = new Pool({ Client: PgNativeClient })



// var pg = require('pg');
// var connection = new pg.Pool({
//   user: 'student',
//   host: 'localhost',
//   database: 'mockbuster_test',
//   password: 'null!',
//   port: 3000,
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// pg = require('pg');
// var pool = new pg.Pool()
// // connection using created pool
// pool.connect(function(err, client, done) {
//   client.query('SELECT NOW()')
//   done()
// })
// // pool shutdown
// pool.end()
