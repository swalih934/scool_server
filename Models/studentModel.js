const mongoose=require('mongoose')


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    batch:{
        type:String,
        require:true
    },
     phone:{
        type:String,
        require:true
    },
     image:{
        type:String,
        require:true
    },
     teacherId:{
        type:String,
        require:true
    },
})

const student=mongoose.model('students',studentSchema)

module.exports=student