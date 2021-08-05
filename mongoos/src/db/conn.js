const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/olympics",{
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>console.log("db connection is seccessful"))
.catch((e)=>console.log("db connection"))