const express= require('express');
const tasksController = require('./controllers/tasksController')
const router = express.Router()

router.get('/tasks', (req, res) => res.status(200).send('KK'));

module.exports = router;