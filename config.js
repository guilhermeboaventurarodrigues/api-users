module.exports = {
  db: {
    database: 'api-users',
    username: '',
    password: '',
    params: {
    dialect: 'sqlite',
    storage: 'api-users.sqlite',
    define: {
    underscored: true
      }
    }
  },
  jwt: {
    secret: '123',
    options: { session: false }
    }
};