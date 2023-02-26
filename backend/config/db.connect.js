const mongoose= require("mongoose")

mongoose.set("strictQuery", false);

const ConnectDb=()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
      console.log("Unable to connect !");
    });
}


module.exports=ConnectDb;