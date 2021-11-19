import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// Fetch all Products
// GET/api/products
router.get('/', asyncHandler (async(req,res)=>{
  const products = await Product.find({})
res.json(products)

}))


// Fetch single Products
// GET/api/products/:id
router.get('/:id',
asyncHandler(async (req,res)=>{
  const product = await Product.findById(req.params.id)

  if(product){
    res.json(product)

  } else{
   
    res.status(404)
    throw new Error('PRODUCTO NO ENCONTRADO ')
  }
  
  
  }))

export default router
