const mongoose = require("mongoose")


const db_connection = async () => {
    await mongoose.connect(process.env.DB_url).then(() => {
        console.log("Db is Connected !!!!");

    }).catch(err => {
        console.log("conection error", err);

    })
}

module.exports = { db_connection }