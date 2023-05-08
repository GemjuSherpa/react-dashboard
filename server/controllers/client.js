import Product from '../models/Product.js'
import ProductStat from '../models/ProductStat.js'

export const getProducts = async (req, res) => {
    try{
        // get all products
        const products = await Product.find()

        // get the products with status
        // Map over all the products found, use the _id to get stats of that product
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat,
                }
            })
        )
        res.status(200).json(productsWithStats)
    }catch (error){
        res.status(404).json({message: error.message})
    }
} 