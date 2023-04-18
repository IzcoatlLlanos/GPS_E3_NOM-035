import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import usuarioRoute from './Usuario.routes';;

const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use('/Usuario', usuarioRoute);
  // Return Router
  return router;
};
module.exports = routerAPI;