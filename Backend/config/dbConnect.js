const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const conn = mongoose.connect('mongodb://localhost:27017/harrofree')
        console.log("Database Connected Successfully")
    }
    catch(error){
        console.log('Database error')
    }
}
module.exports = dbConnect