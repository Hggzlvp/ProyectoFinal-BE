import { getDaoCart, getDaoCategory, getDaoProduct, getDaoUser } from "../Daos/Factory.js";

import { cartsDto } from "../Dto/dtoCart.js";
import { categorysDto } from "../Dto/dtoCategorys.js";
import { productsDto } from "../Dto/dtoProducts.js";
import { usersDto } from "../Dto/dtoUser.js";



const daoCart = getDaoCart()
const daoCategory = getDaoCategory()
const daoProduct = getDaoProduct()
const daoUser = getDaoUser()



// CART
export const getAllCartR = async()=> {
    const listNews = await daoCart.getAllCart();
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const getCartByIdR = async(id)=> {
    const listNews = await daoCart.getCartById(id);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const createCartR = async(newCart)=> {
    const listNews = await daoCart.createCart(newCart);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const deleteCartR = async(id)=> {
    const listNews = await daoCart.deleteCart(id);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const deleteCartbuyR = async(id)=> {
    const listNews = await daoCart.deleteCartbuy(id);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const deleteProductByCartR = async(idCart)=> {
    const listNews = await daoCart.deleteProductByCart(idCart);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
// DUDA SOBRE DOS CONSULTAS A DB
export const productsByCartIdR = async({idCart,idProduct})=> {
    const listNews = await daoCart.productsByCartId({idCart,idProduct});
    return listNews
}
export const buyCartR = async(idCart)=> {
    const listNews = await daoCart.buyCart(idCart);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}


// CATEGORYS
export const getAllCategoriesR = async () => {
    const listNews = await daoCategory.getAllCategories();
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const getCategoryByIdR = async (id) => {
    const listNews = await daoCategory.getCategoryById(id);
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const createCategoryR = async ({name,description}) => {
    const listNews = await daoCategory.createCategory({name,description});
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const updateCategoryR = async ({id,name,description}) => {
    const listNews = await daoCategory.updateCategory({id,name,description});
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const deleteCategoryR = async (id) => {
    const listNews = await daoCategory.deleteCategory(id);
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };


// PRODUCTS
export const checkBodyProductR = async (categoryId) => {
    const listNews = await daoProduct.checkBodyProduct(categoryId);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
};

export const getAllProductsR= async (query) => {
    const listNews = await daoProduct.getAllProducts(query);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
}

export const getProductByIdR= async (id) => {
    const listNews = await daoProduct.getProductById(id);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO 
}

export const createProductR= async ({name,description,stock,price,categoryId}) => {
    const listNews = await daoProduct.createProduct({name,description,stock,price,categoryId});
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
}

export const updateProductR= async (id) => {
    const listNews = await daoProduct.updateProduct(id);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO 
}

export const updateProductDosR= async ({id,name,description,stock,price}) => {
  const listNews = await daoProduct.updateProductDos({id,name,description,stock,price});
  const listNewsDTO = productsDto(listNews);
  return listNewsDTO 
}

export const deleteProductR = async (id) => {
    const listNews = await daoProduct.deleteProduct(id);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
}


// USERS
 export const signupR = async ({username, password,email,number,admin}) => {
    const listNews = await daoUser.signup({username, password,email,number,admin});
    const listNewsDTO = usersDto(listNews);
    return listNewsDTO
  };
  
  export const loginR = async (username) => {
    const listNews = await daoUser.login(username);
    const listNewsDTO = usersDto(listNews);
    return listNewsDTO
  };

  export const deserializeUserR = async(userId)=>{
    const listNews = await daoUser.deserializeUser(userId);
    const listNewsDTO = usersDto(listNews);
    return listNewsDTO
  };