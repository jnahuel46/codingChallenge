const express = require('express');
const router = express.Router();

const Products = require ('../models/products');

router.get('/', async (req,res) => {
    const products = await Products.find();
    res.json(products);
});

router.get('/:id', async (req,res) => {
    const products = await Products.findById(req.params.id);
    res.json(products);
});

router.post('/', async (req,res) => {
    const { name, description, image_url, price } = req.body;
    const products = new Products({name, description, image_url, price });
    await products.save();
    res.json({status: 'Product Stored'});
});

router.put('/:id', async (req,res) => {
    const { name, description, image_url, price } = req.body;
    const newProducts = ({name, description, image_url, price });
    await Products.findByIdAndUpdate(req.params.id, newProducts);
    res.json({status: 'Product Updated'});
});

router.delete('/:id', async (req,res) => {
    await Products.findByIdAndRemove(req.params.id);
    res.json({status: 'Product Deleted'});
});

module.exports = router;