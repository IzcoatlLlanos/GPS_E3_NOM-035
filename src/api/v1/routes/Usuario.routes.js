import { Router } from 'express';
import * as usuarioController from '../controllers/Usuario.controller';

const router = Router();

router.get('/', usuarioController.getUsuariosList);
router.get('/gerentes', usuarioController.getGerentesList);
router.post('/', usuarioController.postUsuarioItem);
router.get('/:id', usuarioController.getUsuarioItem);
router.put('/:id', usuarioController.putUsuarioItem);
router.delete('/:id', usuarioController.deleteUsuarioItem);

//router.get('/:id', prodServController.getProdServItem);
export default router;