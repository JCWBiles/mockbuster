var pg= require('pg');
var config = {
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  password: null,
  port: 3000,
}

var pool = new pg.Pool(config);
pool.on('connect', () => {
  console.log('connected to the Database');
})

var createFilms = () => {
  var films = `CREATE TABLE IF NOT EXISTS films(id SERIAL PRIMARY KEY,
    name VARCHAR(300) NOT NULL,
    genres TEXT[] NOT NULL,
    actors TEXT[] NOT NULL,
    directors TEXT[],
    date SMALLINT NOT NULL);`;
    pool.query(films)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });


    module.exports = {
      createFilms,
      pool,
    }
  };
