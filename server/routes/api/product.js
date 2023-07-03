const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//
const Product = require('../../models/product');
const Provider = require('../../models/provider');
const Category = require('../../models/category');

//
router.get('/item:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const productDocResult = await Product.findOne({ slug, isActive: true })    ;
    }
    catch(error){
        console.log(error);
    }
})