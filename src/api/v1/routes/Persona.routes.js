import { Router } from "express";
import * as personasController from '../controllers/Persona.controller';

const router = Router();

router.get('/:id', personasController.getPersonasListByHotel);

export default router;