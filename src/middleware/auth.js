const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers['token'];

  if (!token) {
    return res.status(400).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    console.log(err)
    return res.status(400).send("Invalid Token");
  }
  next();
};

module.exports = verifyToken;