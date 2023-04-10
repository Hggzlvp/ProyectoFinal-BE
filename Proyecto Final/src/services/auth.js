import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
// import {  } from '../utils/encryptPass.js';
import { UserModel } from '../models/user.model.js';
import { logger } from '../utils/logger.js';

import {deserializeUserR, loginR, signupR} from "../persistencia/Repository/repostory.js"

const currentUser={}

const strategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

const signup = async (req, username, password, done) => {
  logger.info('SIGNUP!');
  try {
    const {email,number,admin}= req.body

    // const newUser = await signupR({username, password,email,number,admin})

    const newUser = new UserModel({username, password,email,number,admin});
    newUser.password = await newUser.encryptPassword(password);
    
    await newUser.save();
    return done(null, newUser);

  } catch (error) {
    logger.error(error);
    return done(null, false,{ message: 'Error inesperadoOO' });
  }
};


const login = async (req, username, password, done) => {
  logger.info('LOGIN!');
  const user = await UserModel.findOne({username});
  // const user = await loginR(username)
  if (!user) {
    return done(null, false, { message: 'User not found' });
  } 
   else {
    const match = await user.matchPassword(password);
    match ? done(null, user) : done(null, false);
  }

  logger.info('USUARIO ENCONTRADO!');

};

export const loginFunc = new LocalStrategy(strategyOptions, login);
export const signUpFunc = new LocalStrategy(strategyOptions, signup);

passport.serializeUser((user, done)=>{
  logger.info('ejecuta serialize');
  done(null, user._id);
});

passport.deserializeUser( async(userId, done)=>{
  logger.info('ejecuta deserialize');
  const user = await UserModel.findById(userId);
  // const user = await deserializeUserR(userId)
  return done(null, user);
});