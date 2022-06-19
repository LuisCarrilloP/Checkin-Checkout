//Models
const { Register } = require("../models/registration.models")

const getAllRegistrations = async (req, res) => {
    try{
        const registrations = await Register.findAll()
        
        res.json({
            status: "sucess",    
            registrations,
            
        })
    }catch(err){
        console.log(err);
    }
    
}

const getRegistrationById = async (req,res) => {
    const { id } = req.params

    const register = await Register.findOne({ where: { id }})

    if(!register){
        res.status(404).json({
            status: "error",
            message: "Register not found"
        })
    }

    res.status(200).json({
        status: "sucess",
        register
    })
}

const createRegistration = async (req,res) => {
    try{
        const { entranceTime } = req.body

        const newRegistration = await Register.create({entranceTime: entranceTime})

        res.status(201).json({
            status : "succes",
            newRegistration
        })
    }catch (err){
        console.log(err);
    }
    /* const { id } = req.params
    const register = await Register.findOne( { where: { id }})
    await register.update( {status: "work"}) */
}

const updateRegistration = async (req, res) => {
    const { id } = req.params
    const { exitTime } = req.body

    const register = await Register.findOne( { where: { id }})

    if(!register){
        res.status(404).json({
            status: "error",
            message: "Register not found"
        })
    }

    await register.update({ exitTime, status: "out" })

    res.status(204).json({status: "sucess"})
}

const deleteRegistration = async (req, res) => {
    const { id } = req.params

    const register = await Register.findOne( { where: { id }})

    if(!register){
        res.status(404).json({
            status: "error",
            message: "Register not found"
        })
    }

    /* await user.destroy() */
    await register.update({ status: "cancelled"})

    res.status(204).json({ status: "sucess"})
}

module.exports = { getAllRegistrations, createRegistration, getRegistrationById, updateRegistration,deleteRegistration }