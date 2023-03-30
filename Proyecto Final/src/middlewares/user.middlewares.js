import { logger } from '../utils/logger.js';

export const isLoggedIn = (req, res, next) => {
    logger.info(req.isAuthenticated());
    if(!req.isAuthenticated()) return res.status(401).json({msg: 'no estas autorizado'});
    next();
}