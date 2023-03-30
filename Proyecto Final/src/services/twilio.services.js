import twilio from "twilio";
import { logger } from "../utils/logger.js";
import dotenv from "dotenv"
dotenv.config()

export const twilioClient = twilio(process.env.SID,process.env.TOKEN)

export const sendSMS = async (msg) =>{
    try{
        const message = {
            body: msg,
            from: process.env.SMS,
            to: process.env.NUMBER_SMS_ADM
        };
        return await twilioClient.messages.create(message)
    }catch(error){
        logger.error(error)
    }
}

export const sendWSP = async (msg) =>{
    try{
        if(process.env.NUMBER_ADM){
        const message = {
            body: msg,
            from: process.env.NUMBER_TWILIO_WSP,
            to: process.env.NUMBER_ADM
        }
        return await twilioClient.messages.create(message)}
    }catch(error){
        logger.error(error)
    }
}