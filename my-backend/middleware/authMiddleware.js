const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Authentication disabled per user request
  req.user = { id: 'mock-user-id', email: 'mock@example.com' };
  next();
};

module.exports = authMiddleware;
