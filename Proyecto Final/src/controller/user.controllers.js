import passport from 'passport';
import { logger } from '../utils/logger.js';
import { sendMailEthereal } from '../services/email.services.js';

const passportOptions = { badRequestMessage: 'falta username / password' };

export const signUp = (req, res, next) =>{    
    passport.authenticate('signup',passportOptions,async (error, user, info) => {
        if(error){
            return next(error)
        }
        if(!user){
            res.status(401).json(info)
        }
         try{
            await sendMailEthereal('Nuevo registro',`El usuario ${req.body.username}\n. Se ha registrado con el mail ${req.body.email}\n.`)
            return res.status(200).json({
                msg: 'Mail enviado con éxito'
            })
        }catch(error){
            logger.error(error)
        }
        

    })(req,res,next)
};

export const login = (req, res,next) => {
    passport.authenticate('login',passportOptions, (error, user, info) =>{
        if(error){            
            return next(error)
        }
        if(!user){
            return res.status(401).json(info)
        }
        if(req.user){
            const username = req.user
            currentUser.name = username.name
            currentUser.number = username.number
            currentUser.email = username.email
            res.json({
                msg: `Bienvenido, ${username.name}`
            })

        }
    } )(req,res,next)



    // res.json({ msg: 'Bienvenido!', user: req.user });
}

export const getHome = (req, res) => {
    res.json(req.session)
}








// export const signp =  (req, res, next) =>{    
//     passport.authenticate('signup',{failureMessage: badRequestMessage}, async (error, user, info) =>{
//         if(error){
//             return next(error)
//         }
//         if(!user){
//             res.status(401).json(info)
//         }
//          try{
//             await sendMailEthereal('Nuevo registro',
//             `El usuario ${req.body.name}\n. Se ha registrado con el mail ${req.body.email}\n. Vive en : ${req.body.adress}\n. Tiene ${req.body.age} años\n. Su número de telefono es : ${req.body.phone}`)
//             return res.status(200).json({
//                 msg: 'Mail enviado con éxito'
//             })
//         }catch(error){
//             logger.error(error)
//         }
        

//     })(req,res,next)
// };