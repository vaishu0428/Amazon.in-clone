const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");

const adminAccesssOnly = async (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (token) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // console.log("auth decode",decoded);
        if (decoded) {

            const Logged_User = await UserModel.findById({ _id: decoded.ExistingUserID })

            if (Logged_User.role === "admin") {
                next();
            } else {
                res.status(401).send("Unauthorized access");
            }


        } else {
            res.send("Please Login");
        }
    } else {
        res.send("Please Login");
    }
}

module.exports = adminAccesssOnly;