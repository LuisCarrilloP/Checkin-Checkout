const express = require("express")

// Routers
const {registersRouter} = require("./routes/registrations.routes")

//Utils
const { db } = require("./utils/database.util")

//Init express app
const app = express()
app.use(express.json())



//http://localhost:4000/registrations
app.use("/registrations", registersRouter)



db.authenticate()
    .then(() => console.log("Db authenticated"))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log("Db sync"))
    .catch(err => console.log(err))



app.listen(4000, () => {
    console.log("Express app running!!");
})