import * as personasService from "../services/Personas.service";
import boom from "@hapi/boom";

export const getPersonaItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personaItem = await personasService.getPersonaItem(id);
        if (!personaItem.success) throw boom.notFound(personaItem.error);
        else if (personaItem.success) res.status(200).json(personaItem);
    } catch (error) {
        next(error);
    }
};

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

export const postPersonaItem = async (req, res, next) => {
    try {
        const personaItem = req.body;
        const personaAdded = await personasService.postPersonaItem(personaItem);
        if (!personaAdded.success) throw boom.badData(personaAdded.error);
        else if (personaAdded.success) res.status(200).json(personaAdded);
    } catch (error) {
        next(error);
    }
};

export const putPersonaItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personaItem = req.body;
        const personaUpdated = await personasService.putPersonaItem(id, personaItem);
        if(!personaUpdated.success) throw boom.badData(personaItem.error);
        else if (personaUpdated.success) res.status(200).json(personaUpdated);
    } catch (error) {
        next(error);
    }
};

export const deletePersonaItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personaDeleted = await personasService.deletePersonaItem(id);
        if (!personaDeleted.success) throw boom.notFound(personaDeleted.error);
        else if (personaDeleted.success) res.status(200).json(personaDeleted);
    } catch (error) {
        next(error);
    }
};

export const pushEncuestaItem = async (req, res, next) => {
    try {
        const { idPersonaOK, idRespuestasOK } = req.params;
        const encuestaItem = req.body;
        const personaUpdated = await personasService.pushEncuestaItem(idPersonaOK,idRespuestasOK,encuestaItem);
        if (!personaUpdated.success) throw boom.badData(personaUpdated.error);
        else if (personaUpdated.success) res.status(200).json(personaUpdated);
    } catch (error) {
        return {success: false, error};
    }
};



