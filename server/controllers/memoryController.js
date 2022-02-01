const {Memory} = require('../models/models')
const ApiError = require('../error/ApiError')


class MemoryController {
  async create(req, res) {
    const {name} = req.body
    const memory = await Memory.create({name})
    return res.json(memory)
  }

  async getAll(req, res) {
    const memories = await Memory.findAll()
    return res.json(memories)
  }
}

module.exports = new MemoryController()