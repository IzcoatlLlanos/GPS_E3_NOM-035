import { Router } from "express";
import * as respuestasController from '../controllers/Respuesta.controller';

const router = Router();

router.get('/', respuestasController.getRespuestasList);
router.post('/', respuestasController.postRespuestaItem);
router.get('/:id', respuestasController.getRespuestasItem);
router.put('/:id', respuestasController.putRespuestasItem);
router.delete('/:id', respuestasController.deleteRespuestaItem);

export default router;