require('dotenv').config()
const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'test'
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})
module.exports = { pool }

DB_USER=api_user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3000
DB_DATABASE=mockbuster
