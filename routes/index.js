const express = require('express')
const BookController = require('../controllers/bookController')
const router = express.Router()

router.get('/', BookController.list)
router.get('/create', BookController.create)
router.post('/create', BookController.store)

module.exports = router