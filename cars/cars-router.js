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

//DELETE
router.delete('/:id', async (req, res, next) => {
	try {
        await db("cars").where("id", req.params.id).del()
        res.status(204).end()
	}
	catch (err) {
		next(err)
	}
})

//UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            cleanTitle: req.body.cleanTitle,
            salvage: req.body.salvage
        }
        await db("cars").where("id", req.params.id).update(payload)
        const updatedCar = await db("cars").where("id", req.params.id).first()
        res.json(updatedCar)
    }
    catch (err) {
        next(err)
    }
})


module.exports = router;