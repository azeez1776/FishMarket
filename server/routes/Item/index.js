const express = require('express');
const ItemSchema = require('../../model/Item')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const items = await ItemSchema.find({})
        res.json(items)
    }
    catch (err) {
        res.send(`error in getting items ${err}`)
        console.log(err)
    }
});

// router.post('/', async (req, res) => {
//     try {
//         const item = await ItemSchema
//     }
// })

module.exports = router;
