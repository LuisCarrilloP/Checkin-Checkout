const { db, DataTypes } = require("../utils/database.util")

//Create our first model
const Register = db.define("register", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime : {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "work"
    }
})

module.exports = { Register }