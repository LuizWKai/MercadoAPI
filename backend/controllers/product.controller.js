
import mongoose from "mongoose";
import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.error("Error in getting products", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // req.body é o corpo da requisição

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Todos os campos são obrigatórios"});
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in creating product", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

     if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success: false, message: "ID inválido"});
        }
    
        try {
            const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true});
            res.status(200).json({success: true, data: updateProduct});
        } catch (error) {
            console.error("Error in updating product", error.message);
            res.status(500).json({success: false, message: "Server error"});
        }
    }

export const deleteProduct = async (req, res) => {
     const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "ID inválido"});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    } catch (error) {
        console.error("Error in deleting product", error.message);
        res.status(404).json({success: false, message: "Product not found"});
        
    }
}