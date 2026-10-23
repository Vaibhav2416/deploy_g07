const {student}=require("../models/studentModel")

// CRUD Application
// Create Student => student.create => INSERT INTO table
// 
const createStudent=async(req,res)=>{
   try {
     // req.body ={"rollno":101,"name":"aman","email":"aman@gmail.com"}
    const std=await student.create(req.body)
    res.send({
        "message":"Student saved successfully",
        "student":std
    })
   } catch (error) {
        console.log(error)
   }
}

// read all students 
// select * from students
// student.find() => read students
const getStudents=async(req,res)=>{
    try {
        const data=await student.find()
        res.send({
            "message":"Students fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
// We will fetch single student using id
// select id from student where id=101
// student.findbyId
const getSingleStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await student.findById(id)
        res.send({
            "message":"User fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
// Deleting single student
const deleteStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await student.findByIdAndDelete(id)
        res.send({
            "message":"User deleted",
            data
        })
    } catch (error) {
        res.send(error)
    }
}

const updateStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await student.findByIdAndUpdate(id,req.body)
        res.send({
            "message":"User updated",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports={createStudent,getStudents,getSingleStudent,deleteStudent,updateStudent}