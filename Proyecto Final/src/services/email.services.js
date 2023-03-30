import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import { logger } from "../utils/logger.js"
dotenv.config();

export const transporter = createTransport({
    host:process.env.HOST,
    port:process.env.PUERTO_ETHEREAL,
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    }
});

export const sendMailEthereal = async (subject, message) =>{
    try{
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject,
            text:message,
        })
    }catch(error){
        logger.error(error)
    }
}
