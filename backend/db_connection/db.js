const mongoose = require("mongoose")


const db_connection = async () => {
    await mongoose.connect("mongodb://localhost:27017/techlive_training").then(() => {
        console.log("Db is Connected !!!!");

    }).catch(err => {
        console.log("conection error", err);

    })
}

module.exports = { db_connection }