const mongoose = require('mongoose')

const connectDb = () => {
    console.log(process.env.DB_CONNECTION_URL)
    mongoose.connect(process.env.DB_CONNECTION_URL).then(() => {
        console.log("database connected seccessfull")
    }
    ).catch((err) => {
        console.log("database is not connected", err)
    })
}
module.exports = connectDb;