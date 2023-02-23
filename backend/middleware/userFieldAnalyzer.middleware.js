const validateUserData = (req, res, next) => {
  const user = req.body;
  const errors = [];

  // Validate name field
  if (!user.name) {
    errors.push("Name is required.");
  }

  // Validate email field
  if (!user.email) {
    errors.push("Email is required.");
  } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
    errors.push("Email is invalid.");
  }

  // Validate pass field
  if (!user.pass) {
    errors.push("Password is required.");
  } else if (user.pass.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Validate mobile field
  if (user.mobile && (user.mobile < 1000000000 || user.mobile > 9999999999)) {
    errors.push("Mobile number is invalid.");
  }

  // Validate address field
  if (user.address && user.address.length > 0) {
    const address = user.address[0];
    if (
      !address.city ||
      !address.area ||
      !address.district ||
      !address.state ||
      !address.pinCode
    ) {
      errors.push("Address fields are incomplete.");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

module.exports = { validateUserData };
