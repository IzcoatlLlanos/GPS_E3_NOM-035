import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import usuarioRoute from './Usuario.routes';
import personasRoute from './Persona.routes';

const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use('/usuarios', usuarioRoute);
  router.use('/personas', personasRoute);
  // Return Router
  return router;
};
module.exports = routerAPI;