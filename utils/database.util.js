const { Sequelize, DataTypes } = require("sequelize")

//Connect to database
const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "test1234!",
    port: "5432",
    database: "registers"
})

module.exports = { db, DataTypes }