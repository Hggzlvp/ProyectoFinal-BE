import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user.model.js';
import { logger } from '../utils/logger.js';

const currentUser={}

const strategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
};

const signup = async (req, username, password, done) => {
  logger.info('SIGNUP!');
  try {
    const {email,number}= req.body
    const newUser = new UserModel({username, password,email,number});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    return done(null, newUser);

  } catch (error) {
    logger.error(error);
    return done(null, false,{ message: 'Error inesperado' });
  }
};


const login = async (req, username, password, done) => {
  logger.info('LOGIN!');
  const user = await UserModel.findOne({username});
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
  return done(null, user);
});