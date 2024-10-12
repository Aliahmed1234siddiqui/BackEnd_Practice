import express from "express"
import user from './users.js'
import product from './Product.js'
import upload from './Upload.js'
const router = express.Router()

router.use('/user',user)        
router.use('/product',product)
router.use('/upload',upload)        



export default router