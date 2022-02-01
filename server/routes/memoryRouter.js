const Router = require('express')
const router = new Router()
const memoryController = require('../controllers/memoryController')


router.post('/', memoryController.create)
router.get('/', memoryController.getAll)

module.exports = router