import boom from '@hapi/boom';
import * as respuestaService from '../services/Respuesta.service';

export const getRespuestasList = async (req, res, next) => {
    try {
        const respuestasList = await respuestaService.getRespuestasList();
        if (!respuestasList.success) throw boom.notFound(respuestasList.error);
        else if (respuestasList) res.status(200).json(respuestasList);
    } catch (error) {
        next(error);
    }
};

export const getRespuestasItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const respuestasList = await respuestaService.getRespuestasItem(id);
        if (!respuestasList.success) throw boom.notFound(respuestasList.error);
        else if (respuestasList.success) res.status(200).json(respuestasList);
    } catch (error) {
        next(error);
    }
};

export const putRespuestasItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const respuestasItem = req.body;
        const respuestaUpdated = await respuestaService.putRespuestasItem(respuestasItem,id);
        if (!respuestaUpdated) throw boom.badData(respuestaUpdated.error);
        else if (respuestaUpdated) res.status(200).json(respuestaUpdated);
    } catch (error) {
        next(error);
    }
};

export const postRespuestaItem = async (req, res, next) => {
    try {
        const respuestaItem = req.body;
        const respuestaAdded = await respuestaService.postRespuestaItem(respuestaItem);
        if (!respuestaAdded.success) throw boom.badData(respuestaItem.error);
        else if (respuestaAdded.success) res.status(200).json(respuestaAdded);
    } catch (error) {
        next(error);
    }
};

export const deleteRespuestaItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const respuestaDeleted = await respuestaService.deleteRespuestaItem(id);
        if (!respuestaDeleted.success) throw boom.notFound(respuestaDeleted.error);
        else if (respuestaDeleted.success) res.status(200).json(respuestaDeleted);
    } catch (error) {
        next(error);
    }
};

export const pushSeccionItem = async (req, res, next) => {
    try {
        const { idRespuestaOK, idSeccionOK } = req.params;
        const seccionItem = req.body;
        const respuestaUpdated = await respuestaService.pushSeccionItem(
            idRespuestaOK,idSeccionOK,seccionItem
        );
        if (!respuestaUpdated.success) throw boom.notFound(respuestaUpdated.error);
        else if (respuestaUpdated.success) res.status(200).json(respuestaUpdated);
    } catch (error) {
        next(error);
    }
};