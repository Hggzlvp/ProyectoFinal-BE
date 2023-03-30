import mongoose from "mongoose";
import { categoryCollectionName } from "./categorias.js";
import { productsCollectionName } from "./productos.js";


export const cartCollectionName = "cart";

const cartSchema= new mongoose.Schema ({
    timestap:{type:String,default: new Date().toLocaleString} ,
    productos:[
        {
            name:{type:String, required:true},
            description:{type:String, required:true},
            price:{type:Number, required:true},
            stock:{type:Number, required:true},
            categoryId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:categoryCollectionName,
                required:true
            }
        }
    ]
});

export const CartModel=mongoose.model (cartCollectionName,cartSchema);