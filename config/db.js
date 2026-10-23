const mongoose=require("mongoose")
// mongoose will connect node js with mongodb and it also provides
// some efficient methods to apply validations
// id number, email "@" mandatory
require("dotenv").config()

const connection= mongoose.connect(process.env.MONGO_URL)

module.exports={connection}