// Update with your config settings.

require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      port: process.env.DBPORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    },
    migrations: {
      directory: './data/migrations'
    },
  },

  // staging: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: '/data/staging-sfmta.db3'
  //   },

  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   useNullAsDefault: true
  // },

  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      port: process.env.DBPORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    },
    migrations: {
      directory: './data/migrations'
    },
  }

};
