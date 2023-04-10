import {logger} from '../../../utils/logger.js'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


    export const initDaoMongo = () => {

        mongoose.connect(process.env.MONGO_ATLAS_SRV, (err) => {
        if(err){
            logger.error(err)
        } else {
            logger.info('Conectado a MongoDB!')
        }
    });


    
}

