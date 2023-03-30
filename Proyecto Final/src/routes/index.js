import {Router} from "express"
const router = Router();

//imports
import ProductosRoutes from "./productos.js"
import CartRoutes from "./cart.js"
import CategoryRoutes from "./category.js"
import UserRoutes from "./user.routes.js"


router.use("/productos",ProductosRoutes)
router.use("/carrito",CartRoutes)
router.use("/categorias",CategoryRoutes)
router.use("/users",UserRoutes)

export default router;