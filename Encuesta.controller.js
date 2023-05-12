import boom from "@hapi/boom";
import * as encuestaService from '../services/Encuesta.service';

export const getEncuestasGuiaList = async (req, res, next) => {
    try {
        const encuestasGuiasList = await encuestaService.getEncuestasGuiaList();
        if (!encuestasGuiasList.success) throw boom.notFound(encuestasGuiasList.error);
        else if (encuestasGuiasList.success) res.status(200).json(encuestasGuiasList)
    } catch (error) {
        next(error);
    }
};

export const getEncuestasGuiaItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const keyType = req.query.keyType || 'OK';
        const encuestaGuiaItem = await encuestaService.getEncuestasGuiaItem(id, keyType);
        if (!encuestaGuiaItem.success) throw boom.notFound(encuestaGuiaItem.error);
        else if (encuestaGuiaItem.succes) res.status(200).json(encuestaGuiaItem);
    } catch (error) {
        next(error);
    }
};

export const getEncuestaSeccionList = async (req, res, next) => {
    try {
        const { idEncuesta, idSeccion } = req.params;
        const seccionList = await encuestaService.getEncuestaSeccionList(idEncuesta, idSeccion);
        if (!seccionList.success) throw boom.notFound(seccionList.error);
        else if (seccionList.success) res.status(200).json(seccionList);
    } catch (error) {
        next(error);
    }
};