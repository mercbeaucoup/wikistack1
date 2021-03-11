const express = require('express')
const wikiRouter = express.Router()
const { addPage } = require('../views')

wikiRouter.get('/', async(req, res, next) => {
    res.send('testing')
})

wikiRouter.post('/', async(req, res, next) => {
    res.send('test again')
})

wikiRouter.get('/add', (req, res, next) => {
    res.send(addPage())
})

module.exports = wikiRouter