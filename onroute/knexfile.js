module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/onroute_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/onroute_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
