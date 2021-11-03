const express = require('express');
const Items = require('../../model/Item/')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const item = await Items.find()
        res.json(item)
    }
    catch (err) {
        res.send(`error in getting items ${err}`)
        console.log(err)
    }
})

module.exports = router;
