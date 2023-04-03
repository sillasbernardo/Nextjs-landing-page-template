/* --- @imports --- */
const ApiError = require("../Handlers/ApiError");

/* All connections pass by this route for authentication. */
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization === process.env.API_KEY) {
    next();
  } else {
    return next(ApiError.unauthorized('You are not authorized to access this server.'))
  }
};

/* --- @exports --- */
module.exports = auth;
