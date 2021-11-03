const express = require('express');
const Items = require('../../model/Item/')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const item = await Items.find()
        res.json(item)
    }
    catch (error) {
        res.send('error in getting items')
    }
})

