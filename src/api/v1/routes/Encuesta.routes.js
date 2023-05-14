import { Router } from "express";
import * as encuestasController from '../controllers/Encuesta.controller';

const router = Router();

router.get('/', encuestasController.getEncuestasGuiaList);
router.get('/:id', encuestasController.getEncuestasGuiaItem);
router.get('/seccion/:idEncuesta/:idSeccion', encuestasController.getEncuestaSeccionList);

export default router;