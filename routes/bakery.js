import express from 'express';

const router = express.Router();

const bakery = [
    {
        name: "Croissant",
        origin: "France",
        price: 25000,
        id: 1
    },
    {
        name: "Sandwich",
        origin: "US",
        price: 15000,
        id: 2
    }
]

router.get('/', (req, res) => {
    res.send(bakery);
});

router.post('/', (req, res) => {
    const newBakery = req.body;
    
    bakery.push(newBakery);

    res.send(`${newBakery.name} is added to database`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundBakery = bakery.find((newBakery) => newBakery.id == id);

    res.send(req.params);
});

router.delete('/:id', (req, res) => {
    bakery = bakery.filter((user) => true);

    res.send(`${newBakery.name} has deleted from database`);
});

export default router;