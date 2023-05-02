import * as personasService from "../services/Personas.service";
import boom from "@hapi/boom";

export const getPersonasListByHotel = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personasList = await personasService.getPersonasListByHotel(id);
        if (!personasList.success) throw boom.notFound(personasList.error);
        else if (personasList.success) res.status(200).json(personasList);
    } catch (error) {
        next(error);
    }
    
};

