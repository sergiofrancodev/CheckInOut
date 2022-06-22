// Model
const { Registration } = require('../models/Registration.model')

// Petitions
const getAllRegisters = async (req, res) => {
    try {

        const registrations = await Registration.findAll()
        res.status(200).json({
            status: 'success',
            registrations
        })

    } catch (err) {
        console.log(err)
    }
}

const getRegisterById = async (req, res) => {
    try {
        const { id } = req.params

        const register = await Registration.findOne({ where: { id } })

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            })
        }

        res.status(200).json({
            status: 'success',
            register
        })

    } catch (err) {
        console.log(err)
    }
}

const createRegister = async (req, res) => {
    try {
        const { entranceTime } = req.body

        const newRegister = await Registration.create({
            entranceTime: new Date(),
        })
        res.status(201).json({
            status: 'success',
            newRegister
        })
    } catch (err) {
        console.log(err)
    }
}

const updateRegister = async (req, res) => {
    try {
        const { id } = req.params
        const { exitTime, status } = req.body

        const register = await Registration.findOne({ where: { id } })
        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            })
        }

        await register.update({ 
            exitTime: new Date(), 
            status: 'out'
        })

        res.status(204).json({
            status: 'success',
            register
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteRegister = async (req, res) => {
    try {
        const { id } = req.params

        const register = await Registration.findOne({ where: { id } })
        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            })
        }

        /* await user.destroy() No se recomienda esta opcion*/
        await register.update({
            entranceTime: null,
            status: 'cancelled' 
        })

        res.status(204).json({
            status: 'success',
            register
        })

    } catch (err) {
        console.log(err)
    }
}

module.exports = { getAllRegisters, getRegisterById, createRegister, updateRegister, deleteRegister }