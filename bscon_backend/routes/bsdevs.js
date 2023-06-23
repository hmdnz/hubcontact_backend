const express = require('express')
const router = express.Router()

const {bsdevs} = require('../models')
router.post('/', async(req, res)=>{
    const _bsdevs = req.body
    await bsdevs.create(_bsdevs)
    res.json(_bsdevs)
})

router.get('/', async(req, res)=>{
    const allBsDevs = await bsdevs.findAll()
    res.json(allBsDevs)
})

module.exports = router