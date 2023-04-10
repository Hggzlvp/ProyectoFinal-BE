import { CartModel } from "../../../models/cart.js";
import { ProductsModel } from "../../../models/productos.js";
import {logger} from "../../../utils/logger.js"


 export const getAllCart = async () => {
    try {
        const response = await CartModel.find();
        return response;
        
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const getCartById = async (id) => {
    try {
        const response = await CartModel.findById(id);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const createCart = async (newCart) => {
    try {
        const response = await CartModel.create(newCart)
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const deleteCart = async (id) => {
    try {
        const response = await CartModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const deleteCartbuy = async (id) => {
    try {
        const response = await CartModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const deleteProductByCart = async (idCart) => {
    try {
        const response = await CartModel.findById(idCart);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const productsByCartId= async ({idCart,idProduct}) => {
    try {
        const responseCart = await CartModel.findById(idCart);
        const responseProduct = await ProductsModel.findById(idProduct);
        return {responseCart,responseProduct}
    } catch (error) {
        logger.error(error);
    }
  }
  
  export const buyCart= async (idCart) => {
    try {
        const response = await CartModel.findById(idCart)
        return response;
    } catch (error) {
        logger.error(error);
    }
  }