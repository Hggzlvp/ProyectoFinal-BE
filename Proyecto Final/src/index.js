import express from 'express';
import mainRouter from './routes/index.js';
import session from 'express-session';
import passport from 'passport';
import { loginFunc, signUpFunc } from './services/auth.js';
import MongoStore from 'connect-mongo';
import Config from './config/index.js';
import { initDb } from './db/database.js';
import { logger } from './utils/logger.js';

import * as dotenv from 'dotenv';
import { args } from "./config/proces.config.js";
import cluster from "cluster"
import os from "os"

const app = express();

// app.use(express.json());
//settings
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

const ttlSeconds = 600;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
  }),
  secret: 'secretString',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions)); 

app.use(passport.initialize());

app.use(passport.session());

dotenv.config()
const {modo} = args;
const numsCPUs=os.cpus().length;

if (modo === "cluster" && cluster.isPrimary) {
  console.log(`Cantidad de nucleos del sistema: ${numsCPUs}`);
  console.log(`PID MASTER: ${process.pid}`);
  for (let i = 0; i < numsCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code) => {
    console.log(`Worker ${worker.process.pid} with code ${code}`);
    cluster.fork();
  });
} else {

await initDb();
logger.info('Conectado a la DB!');

passport.use('login', loginFunc);
passport.use('signup', signUpFunc);

app.use('/api', mainRouter);

app.listen(Config.PUERTO, () => logger.info(`Escuchando en el puerto ${Config.PUERTO}`));

}