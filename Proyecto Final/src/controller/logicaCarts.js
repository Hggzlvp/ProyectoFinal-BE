import { CartModel } from '../models/cart.js';
import {sendMailEthereal} from "../services/email.services.js"
import { sendSMS,sendWSP } from '../services/twilio.services.js';
import { buyCartR, createCartR, deleteCartbuyR, deleteCartR, deleteProductByCartR, getAllCartR, getCartByIdR, productsByCartIdR } from '../persistencia/Repository/repostory.js';


export const getAllCart = async (req, res) => {
  try {
    // const cart = await CartModel.find();
    const cart = await getAllCartR()
    res.json({
      data: cart
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    // const cart = await CartModel.findById(id)
    const cart= await getCartByIdR(id)
    if(!cart)
     return res.status(404).json({
      msg: 'Carrito no encontrado!'
     });
     res.json({
      data: cart
     })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const createCart = async (req, res) => {
  try {
    const newCart = {
        timestap:new Date().toLocaleString(),
        productos:[],
    };
    // const cart = await CartModel.create(newCart)
    const cart=await createCartR(newCart)
    // return cart?._id.toString()

    res.json({
      cart
    })
    
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const {id} = req.params;
    // await CartModel.findByIdAndDelete(id);
    await deleteCartR(id)
    res.json({
      msg: 'carrito eliminado correctamente'
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteCartbuy = async (req, res) => {
  try {
    const {id} = req.params;
    // await CartModel.findByIdAndDelete(id);
    await deleteCartbuyR(id)
    res.json({
      msg: 'carrito eliminado correctamente'
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};
//original
export const deleteProductByCart = async (req, res) => {
      try {
        const idCart=req.params.id;
        const {id}=req.body;
        const idProduct=id;

        // const dataCart = await CartModel.findById(idCart);
        const dataCart = await deleteProductByCartR(idCart);
        const indexProducto = dataCart.productos.findIndex((itemId) => itemId.id == idProduct)
        
        if (indexProducto < 0) {
          throw "El producto no existe";
        }

        console.log(dataCart.productos,"PRODUCTOS")

        dataCart.productos.splice(indexProducto,1)
        
        console.log(dataCart.productos,"POST PRODUCTOS")

        await createCartR(dataCart)

        res.json({
           msg: `el producto con ${idProduct} fue eliminado del carrito ${idCart}`
        })
      } catch (err) {
        res.status(500).json({
          error: err.message
        });
      }
};

// export const deleteProductByCart= async (req,res) => {
//   try {
    
//     const idCart=req.params.id;
//     const {id}=req.body;
//     const idProduct=id;

//     // const dataProduct= await ProductsModel.findById(idProduct)
//     const dataCart = await deleteProductByCartR({idCart,idProduct});
//     const DC=dataCart.responseProduct
//     dataCart.responseCart.productos.push(DC)
    

//     await createCartR(dataCart.responseCart)

//     res.json({
//       msg: `el producto con ${idProduct} fue borrado del carrito ${idCart}`
//     })

//   } catch (err) {
//     res.status(500).json({
//       error: err.message
//     });
//   } 
// }

export const productsByCartId= async (req,res) => {
  try {
    
    const idCart=req.params.id;
    const {id}=req.body;
    const idProduct=id;

    // const dataProduct= await ProductsModel.findById(idProduct)
    const dataCart = await productsByCartIdR({idCart,idProduct});
    
    const DC=dataCart.responseProduct
    dataCart.responseCart.productos.push(DC)

    await createCartR(dataCart.responseCart)

    res.json({
      msg: `el producto con ${idProduct} fue agregado al carrito ${idCart}`
    })

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  } 
}

export const buyCart= async (req,res) => {
  try {
    
  const idCart=req.params.id;
  // const dataCart = await CartModel.findById(idCart)
  const dataCart = await buyCartR(idCart);
  const nombresProductos= dataCart.productos.map(x => x.name)
    
  await sendMailEthereal("Compra de pepito",nombresProductos.toLocaleString())
  // await CartModel.findByIdAndDelete(idCart);
  await deleteCartR(idCart)
  
  await sendSMS(`su lista de productos es:${nombresProductos}`)
  await sendWSP(`su lista de productos es:${nombresProductos}`)
 
  res.json({
    msg: `Ha finalizado su compra`
  })

  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err.message
    });
  } 
}