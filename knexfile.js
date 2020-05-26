// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/sfmta.db3'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: '/data/staging-sfmta.db3'
    },

    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      port: 5432,
      user: 'lambdalabs24sfmta',
      password: 'p-bjWb4DCUeGFHx',
      database: 'historicalTransitData'
    },
    migrations: {
      directory: './data/migrations'
    },
  }

};
