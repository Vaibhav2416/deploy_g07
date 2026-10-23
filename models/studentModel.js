const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        reuired:true
    },
    age:{
        type:Number
    }
})
const student=mongoose.model("Student",studentSchema)
module.exports={student}
// Database // collection (Table)
