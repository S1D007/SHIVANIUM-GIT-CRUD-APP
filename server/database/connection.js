

const mongoose = require('mongoose');

const connectDB =async()=>{
    try{
  //mongodb connection string
  const con =await mongoose.connect("mongodb+srv://admin:admin123@cluster0.vhsius7.mongodb.net/users",{
    useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false,
    useCreateIndex: true
  } )
  console.log(`MongoDB connected:${con.connection.host}`);
    }catch(err){
     console.log(err);
     process.exit(1);
    }

}
module.exports = connectDB;
