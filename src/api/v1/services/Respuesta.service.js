
import Respuesta from "../models/Respuesta.model";
import RespuestaModel from "../models/Respuesta.model";

export const getRespuestasList = async () => {
    try {
        const respuestasList = await Respuesta.find();
        return {success: true, respuestasList};
    } catch (error) {
        return {success: false, error};
    }
};

export const getRespuestasItem = async (idRespuestaOK) => {
    try {
        const respuestaItem = await RespuestaModel.findOne(
            { IdRespuestaOK: idRespuestaOK }
        );
        return { success: true, respuestaItem };
    } catch (error) {
        return { success: false, error };
    }
};

export const putRespuestasItem = async (respuestaItem, idRespuestaOK) => {
    try {
        const respuestaToUpdate = await Respuesta.findOneAndUpdate(
            { IdRespuestaOK: idRespuestaOK }, respuestaItem, { new: true}
        );
        return{ success: true, respuestaToUpdate };
    } catch (error) {
        return { success: false, error };
    }
};

export const postRespuestaItem = async (respuestaItem) => {
    try {
        const newRespuesta = await RespuestaModel(respuestaItem);
        newRespuesta.save();
        return { success: true, newRespuesta };
    } catch (error) {
        return { success: false, error };
    }
};

export const deleteRespuestaItem = async (idRespuestaOK) => {
    try {
        const respuestaToDelete = await RespuestaModel.findOneAndDelete(
            {IdRespuestaOK: idRespuestaOK}
        );
        return {success: true, respuestaToDelete};
    } catch (error) {
        return { success: false, error };
    }
};

export const pushSeccionItem = async (idRespuestaOK, idSeccionOK, seccionItem) => {
    try {
        const respuestaItem = await RespuestaModel.findOne(
            { IdRespuestaOK: idRespuestaOK }
        );
        const { Seccion } = respuestaItem;

        const index = Seccion.findIndex(
            (Seccion) => Seccion.IdSeccionOK == idSeccionOK
        );

        if (index>=0) {
            Seccion[index] = seccionItem;
        } else {
        Seccion.push(seccionItem);
        }

        const respuestaUpdated = await RespuestaModel.findOneAndUpdate( 
            { IdRespuestaOK: idRespuestaOK },
            { $set: { Seccion } },
            {new: true}
        );

        return {success: true, respuestaUpdated};
    } catch (error) {
        return {success: false, error};
    }
};

export const getRespuestaListByIdPersonaOK = async (idPersonaOK) => {
    try {
        const respuestaList = await RespuestaModel.find(
            { IdPersonaOK: idPersonaOK }
        );
        return {success: true, respuestaList};
    } catch (error) {
        return {success: false, error};
    }
};