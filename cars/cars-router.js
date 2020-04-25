const express = require('express')
const db = require('../data/config')
const router = express.Router()


//READ
router.get('/', async (req, res, next) => {
    try {
        const cars = await db("cars")
        res.json(cars)
    }
    catch (err) {
        next(err)
    }
})

//CREATE
router.post('/', async (req, res, next) => {
    try {
        const carData = req.body
        const [id] = await db("cars").insert(carData)
        const newCar = await db("cars").where({ id })

        res.status(201).json(newCar)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;