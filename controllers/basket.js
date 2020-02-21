const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var BasketController = {
  Add: function(req, res) {

    var { email, name } = req.body;
    pool.query(`INSERT INTO basket (users_id, films_id) VALUES ( (SELECT id from users WHERE email='${email}'), (SELECT id from films WHERE name='${name}') )`, (error, user) => {
      if (error) {
        throw error
      }
      //
      // req.session.userId = user.id
      // console.log(req.session.userId)

      console.log('Film added to basket')
    })
  },
  Index: function(req, res) {
    pool.query(`SELECT * FROM films WHERE name='${name}'`, (error, films) => {
      if (error) {
        throw error
      }
      res.render('basket/index', { films: films })
      // console.log(films);
      // res.status(200).json(results.rows)
    })
  }
};
module.exports = BasketController;
