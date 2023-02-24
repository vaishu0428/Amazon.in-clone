const cloudinary = require("cloudinary").v2;

// Configuration
const cloudinaryConfig=cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports={
    cloudinaryConfig
}
