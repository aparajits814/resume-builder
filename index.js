const express=require('express');
const app=express();
const port=5000;
const ConnectToMongo=require('./db');
const UserRoutes=require('./Routes/UserRoutes');
ConnectToMongo();
app.use(express.json());
app.use('/api/v1/user',UserRoutes);
app.get('/',(req,res)=>{
    res.send("HI");
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})