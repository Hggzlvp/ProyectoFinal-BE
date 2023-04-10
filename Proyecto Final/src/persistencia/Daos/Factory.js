import * as Cart from "./mongo/daoCarts.js";
import * as Category from "./mongo/daoCategorys.js";
import * as Product from "./mongo/daoProducts.js";
import * as User from "./mongo/daoUser.js";
import { initDaoMongo } from "./mongo/mongo.js";

const selectedDAO = process.argv[2];
let daoCart=null;
let daoCategory=null;
let daoProduct=null
let daoUser = null;

switch(selectedDAO) {
    case 'mongo':
        initDaoMongo();
        daoCart = Cart;
        daoCategory = Category;
        daoProduct = Product; 
        daoUser = User;
        break;
    case "PosibleCambioDeDataBase":
        console.log("Todavia no hay otra base de datos disponible")
}  


// CART
export const getAllCart = async()=> {
    const carritos= await daoCart.getAllCart()
    return carritos;
}
export const getCartById = async(id)=> {
    return await daoCart.getCartById(id)
}
export const createCart = async(newCart)=> {
    return await daoCart.createCart(newCart)
}
export const deleteCart = async(id)=> {
    return await daoCart.deleteCart(id)
}
export const deleteCartbuy = async(id)=> {
    return await daoCart.deleteCartbuy(id)
}
export const deleteProductByCart = async(idCart)=> {
    return await daoCart.deleteProductByCart(idCart)
}
export const productsByCartId = async(idCart,idProduct)=> {
    return await daoCart.productsByCartId(idCart,idProduct)
}
export const buyCart = async(idCart)=> {
    return await daoCart.buyCart(idCart)
}


// CATEGORYS
export const getAllCategories = async () => {
    return await daoCategory.getAllCategories()
  };
  
  export const getCategoryById = async (id) => {
    return await daoCategory.getCategoryById(id)
  };
  
  export const createCategory = async (name,description) => {
    return await daoCategory.createCategory(name,description)
  };
  
  export const updateCategory = async (id,name,description) => {
    return await daoCategory.updateCategory(id,name,description)
  };
  
  export const deleteCategory = async (id) => {
    return await daoCategory.deleteCategory(id)
  };


// PRODUCTS
export const checkBodyProduct = async (categoryId) => {
    return await daoProduct.checkBodyProduct(categoryId)
};

export const getAllProducts= async (query) => {
    return await daoProduct.getAllProducts(query)
}

export const getProductById= async (id) => {
    return await daoProduct.getProductById(id)  
}

export const createProduct= async ({name,description,stock,price}) => {
    return await daoProduct.createProduct({name,description,stock,price})
}

export const updateProduct= async (id) => {
    return await daoProduct.updateProduct(id)  
}

export const updateProductDos= async ({id,name,description,stock,price,categoryId}) => {
    return await daoProduct.updateProductDos({id,name,description,stock,price,categoryId})  
}

export const deleteProduct = async (id) => {
    return await daoProduct.deleteProduct(id)
}


// USERS
 export const signup = async ({username, password,email,number,admin}) => {
    return await daoUser.signup({username, password,email,number,admin})
  };
  
  export const login = async (username) => {
    return await daoUser.login(username)
  };

  export const deserializeUser = async(userId)=>{
    return await daoUser.deserializeUser(userId)
  };



// DAO
export const getDaoCart= () => {
    return daoCart
}
export const getDaoCategory= () => {
    return daoCategory
}
export const getDaoProduct= () => {
    return daoProduct
}
export const getDaoUser= () => {
    return daoUser
}

