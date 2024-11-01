const mongoose=require('mongoose')


const connectionString=process.env.DB_CONNECTION

mongoose.connect(connectionString).then(res=>{
    console.log("server connected to MongoDB");
    
}).catch(err=>{
    console.log(err);
    
})