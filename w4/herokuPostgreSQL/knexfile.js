// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: "qgvomvnerjsjcz",
      password: "P5463GpPVrWg9UE3IokSoUdz_I",
      database: "ddhnq64o8f9s6k",
      host: "ec2-107-20-198-81.compute-1.amazonaws.com",
      port: 5432,
      ssl: true
    }
  }
};
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }


