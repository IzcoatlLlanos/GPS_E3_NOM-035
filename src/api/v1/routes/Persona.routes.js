import { Router } from "express";
import * as personasController from '../controllers/Persona.controller';

const router = Router();

router.get('/:id', personasController.getPersonasListByHotel);
router.post('/', personasController.postPersonaItem);
router.put('/:id', personasController.putPersonaItem);
router.delete('/:id', personasController.deletePersonaItem);

export default router;