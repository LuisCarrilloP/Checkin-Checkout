const express = require("express")

const { getAllRegistrations, createRegistration, getRegistrationById, updateRegistration, deleteRegistration } = require("../controllers/registrations.controller")

const registersRouter = express.Router()

registersRouter.get("/", getAllRegistrations)

registersRouter.get("/:id", getRegistrationById)

registersRouter.post("/", createRegistration)

registersRouter.patch("/:id", updateRegistration)

registersRouter.delete("/:id", deleteRegistration)

module.exports = { registersRouter }