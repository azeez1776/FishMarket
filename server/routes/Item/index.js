const express = require('express');
const { findByIdAndUpdate } = require('../../model/Item');
const ItemSchema = require('../../model/Item')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const items = await ItemSchema.find({})
        res.json(items)
    }
    catch (err) {
        res.status(500).send(error)
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
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    const { name, description, price, img } = req.body;
    const itemField = {};

    if (name) itemField.name = name;
    if (description) itemField.description = description;
    if (price) itemField.price = price;
    if (img) itemField.img = img;

    try {
        let item = await ItemSchema.findById(req.params.id);
        if (!item) {
            res.send('404 item not found')
        }

        item = await ItemSchema.findByIdAndUpdate(
            req.params.id,
            { $set: itemField },
            { new: true }
        );

        res.json(item)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const item = await ItemSchema.findById(req.params.id);
        if (!item) res.status(404).send('Not found');
        await ItemSchema.findByIdAndDelete(req.params.id)
        res.send('Item deleted successfully')
    }
    catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;
