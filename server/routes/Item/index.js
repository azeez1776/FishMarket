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

router.post('/', async (req, res) => {

    const { name, description, price, img } = req.body;

    try {
        const newItem = new ItemSchema({
            name,
            description,
            price,
            img
        });

        const item = await newItem.save();
        res.json(item)
    }

    catch (error) {
        res.send(`${error} 500`)
    }
})

module.exports = router;
