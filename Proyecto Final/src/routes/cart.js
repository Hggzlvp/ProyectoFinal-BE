import {Router} from "express"
import {
 getAllCart,
 getCartById,
 createCart,
 deleteProductByCart,
 deleteCart,
 productsByCartId,
 buyCart
} from '../controller/logicaCarts.js';
import { CartModel } from "../models/cart.js";
const router = Router();




router.get("/",getAllCart);

router.get("/:id",getCartById);

router.post("/",createCart);

router.post("/:id",productsByCartId)

router.delete("/:id",deleteCart);

router.delete("/:id/productos",deleteProductByCart);

router.get('/:id/compra',buyCart)

  
export default router;