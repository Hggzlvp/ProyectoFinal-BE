import { ProductsModel } from "../../../models/productos.js"
import {logger} from "../../../utils/logger.js" 

export const checkBodyProduct = async (categoryId) => {
    try {
        const response = await ProductsModel.findById(categoryId);
        return response;
    } catch (error) {
        logger.error(error);
    }
};

export const getAllProducts= async (query) => {
    try {
        const response =  await ProductsModel.find(query)
        return response;
    } catch (error) {
        logger.error(error);
    } 
}

export const getProductById= async (id) => {
    
    try {
        const response = await ProductsModel.findById(id);
        return response;
    } catch (error) {
        logger.error(error);
    }   
}

export const createProduct= async ({name,description,stock,price,categoryId}) => {
    
    try {
        const response = await ProductsModel.create({
            name,
            description,
            stock,
            price,
            categoryId,
        })
        return response;
    } catch (error) {
        logger.error(error);
    }  
}

export const updateProduct= async (id) => {
    
    try {
        const response = await ProductsModel.findById(id);
        return response;
    } catch (error) {
        logger.error(error);
    }    
}

export const updateProductDos= async ({id,name,description,stock,price}) => {
    try {
        console.log("UPDATEdos",id,name,description,stock,price)
        const response = await ProductsModel.findByIdAndUpdate(
            id,
            {name,description,stock,price},
            {new:true}
        );
        console.log(response)
        return response;
    } catch (error) {
        logger.error(error);
    } 
}

export const deleteProduct = async (id) => {
    try {
        const response = await ProductsModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        logger.error(error);
    }
}

