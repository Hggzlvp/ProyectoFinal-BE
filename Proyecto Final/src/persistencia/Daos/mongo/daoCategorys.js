import { CategoryModel } from "../../../models/categorias.js";
import {logger} from "../../../utils/logger.js"


  export const getAllCategories = async () => {
    try {
        const response = await CategoryModel.find();
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const getCategoryById = async (id) => {
    try {
        const response = await CategoryModel.findById(id);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const createCategory = async ({name,description}) => {
    try {
        const response =  await CategoryModel.create({
            name, 
            description,
          });
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const updateCategory = async ({id,name,description}) => {
    try {

        const response = await CategoryModel.findByIdAndUpdate(
            id,
            {name,description},
            {new: true}
        );
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const deleteCategory = async (id) => {
    try {
        const response = await CategoryModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };