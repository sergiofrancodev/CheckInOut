const express = require('express')

//Controllers
const { getAllRegisters, getRegisterById, createRegister, updateRegister, deleteRegister } = require('../controllers/registrations.controller')

const registrationsRouter = express.Router()

registrationsRouter.get('/', getAllRegisters)
registrationsRouter.post('/', createRegister)
registrationsRouter.get('/:id', getRegisterById)
registrationsRouter.patch('/:id', updateRegister)
registrationsRouter.delete('/:id', deleteRegister)

module.exports = { registrationsRouter }