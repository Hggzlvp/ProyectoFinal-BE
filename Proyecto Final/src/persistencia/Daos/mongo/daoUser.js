import { UserModel } from "../../../models/user.model.js";
import { logger } from "../../../utils/logger.js";


  export const signup = async ({username, password,email,number,admin}) => {
    try {
        const response = new UserModel({username, password,email,number,admin});
        return response;
    } catch (error) {
        logger.error(error);
    }
  };
  
  export const login = async (username) => {
    try {
        const response = await UserModel.findOne({username});
        return response;
    } catch (error) {
        logger.error(error);
    }
  };

  export const deserializeUser = async(userId)=>{
    try {
        const response =  await UserModel.findById(userId);
        return response;
    } catch (error) {
        logger.error(error);
    }
  };

  