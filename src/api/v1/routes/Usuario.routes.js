import { Router } from 'express';
import * as usuarioController from '../controllers/Usuario.controller';

const router = Router();

router.get('/', usuarioController.getUsuariosList);

//router.get('/:id', prodServController.getProdServItem);
export default router;