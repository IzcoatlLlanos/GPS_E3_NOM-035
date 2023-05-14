import { Router } from "express";
import * as personasController from '../controllers/Persona.controller';

const router = Router();

router.get('/:id', personasController.getPersonasListByHotel);
router.get('/uno/:id', personasController.getPersonaItem);
router.post('/', personasController.postPersonaItem);
router.put('/:id', personasController.putPersonaItem);
router.delete('/:id', personasController.deletePersonaItem);
router.put('/encuesta/:idPersonaOK/:idRespuestasOK', personasController.pushEncuestaItem);

export default router;