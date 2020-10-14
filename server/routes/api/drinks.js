const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET
router.get('/', async (req, res) => {
    const drinks = await loadDrinksCollection();
    res.send(await drinks.find({}).sort({ 'date': -1 }).toArray());
})

// POST
router.post('/', async (req, res) => {
    const drinks = await loadDrinksCollection();

    drinks.update({ date: req.body.date }, { $push: { "drinks": { $each: req.body.drinks } } }, { upsert: true });

    res.status(200).send();

})

// DELETE
router.delete('/:id', async (req, res) => {
    const drinks = await loadDrinksCollection();
    await drinks.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(204).send();
})


async function loadDrinksCollection() {
    let client = await mongodb.connect('mongodb://mongo:27017/database', {
    });

    return client.db('drinks').collection('drinks');
}

module.exports = router;