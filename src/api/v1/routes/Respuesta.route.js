import { Router } from "express";
import * as respuestasController from '../controllers/Respuesta.controller';

const router = Router();

router.get('/', respuestasController.getRespuestasList);
router.get('/persona/:idPersonaOK', respuestasController.getRespuestaListByIdPersonaOK);
router.post('/', respuestasController.postRespuestaItem);
router.get('/:id', respuestasController.getRespuestasItem);
router.put('/:id', respuestasController.putRespuestasItem);
router.delete('/:id', respuestasController.deleteRespuestaItem);
router.put('/seccion/:idRespuestaOK/:idSeccionOK', respuestasController.pushSeccionItem)



export default router;