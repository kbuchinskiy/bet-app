export default {
  port: 7113,
  db: {
    password: '5U6jPfkQXe4W2xVB',
  },
  auth: {
    jwtSercet: process.env.JWT_SECRET || 'secret',
  },

};
