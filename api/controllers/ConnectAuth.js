/* All connections pass by this route for authentication. */

const connect_auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization === process.env.REACT_APP_API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
};

exports.connect_auth = connect_auth;
