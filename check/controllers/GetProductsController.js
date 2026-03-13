import SingleProductDB from "../models/SingleProduct.js";

const GetProducts = async (req,res)=>{
    try{
        const allProducts = await SingleProductDB.find()
        if(allProducts.length == 0){
            return res.status(501).json({message:"no products here"})
        }
        res.status(200).json(allProducts)

    }catch(err){
        res.status(500).json({message:err.message})

    }
}

export default GetProducts