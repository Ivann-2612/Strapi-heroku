module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a8e5a357762ac88714dc0f372bb81979'),
  },
});
