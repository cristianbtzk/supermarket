export default {
  jwt: {
    secret: process.env.JWT_SECRET || 'secretpassword',
    expiresIn: '1d',
  },
};
