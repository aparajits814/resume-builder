const mongoose=require('mongoose');
const ConnectToMongo=()=>{
    let url="mongodb://localhost:27017/resume_builder"
    mongoose.connect(url,()=>{
        console.log("Connected to MongoDB");
    })
}
module.exports=ConnectToMongo;