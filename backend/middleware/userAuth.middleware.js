const jwt = require("jsonwebtoken");


const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log("auth decode",decoded);
    if (decoded) {
      const userID = decoded.ExistingUserID;
      // console.log("after decoding the token", userID);
      req.body.userID = userID;
      next();
    } else {
      res.send("Please Login");
    }
  } else {
    res.send("Please Login");
  }
};



module.exports = {
  authenticateToken,
};
