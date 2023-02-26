// const userValidator = (req, res, next) => {
//   const { name, email, pass, mobile, address } = req.body;

//   // Validate name
//   if (!name || name.trim().length < 3) {
//     return res
//       .status(400)
//       .json({ error: "Name must be at least 3 characters" });
//   }

//   // Validate email
//   if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//     return res.status(400).json({ error: "Please provide a valid email" });
//   }

//   // Validate password
//   if (!pass || pass.trim().length < 6) {
//     return res
//       .status(400)
//       .json({ error: "Password must be at least 6 characters" });
//   }

//   // // Validate mobile number
//   // if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
//   //   return res
//   //     .status(400)
//   //     .json({ error: "Please provide a valid 10 digit mobile number" });
//   // }

//   // // Validate address
//   // if (
//   //   !address ||
//   //   !address[0].city ||
//   //   !address[0].area ||
//   //   !address[0].district ||
//   //   !address[0].state ||
//   //   !address[0].pinCode
//   // ) {
//   //   return res.status(400).json({ error: "Please provide a valid address" });
//   // }

//   next();
// };

const userSignupInputValidate = (req, res, next) => {
  const { name, email, pass } = req.body;
  // Validate name
  if (!name || name.trim().length < 3) {
    return res
      .status(400)
      .json({ error: "Name must be at least 3 characters" });
  }

  // Validate email
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email" });
  }

  // Validate password
  if (!pass || pass.trim().length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }
  next();
};

const userLoginInput = (req, res, next) => {
  const { email, pass } = req.body;

  // Validate email
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email" });
  }

  // Validate password
  if (!pass || pass.trim().length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  next();
};

const profileInput = (req, res, next) => {
  const { mobile, address } = req.body;
  // Validate mobile number
  if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
    return res
      .status(400)
      .json({ error: "Please provide a valid 10 digit mobile number" });
  }
  // Validate address
  if (
    address ||
    address[0].city ||
    address[0].area ||
    address[0].state ||
    address[0].pinCode
  ) {
    return res.status(400).json({ error: "Please provide a valid address" });
  }

  next();
};

module.exports = {
  // userValidator,
  userSignupInputValidate,
  userLoginInput,
  profileInput,
};
