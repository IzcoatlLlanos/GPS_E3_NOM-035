import boom from "@hapi/boom";
import Encuesta from "../models/Encuesta.model";

export const getEncuestasGuiaList = async () => {
    try {
        const encuestasGuiasList = await Encuesta.find();
        return {success: true, encuestasGuiasList};
    } catch (error) {
        return {success: false, error};
    }
};

export const getEncuestasGuiaItem = async (idEncuesta, keyType) => {
    try {
        const encuestaGuiaItem = (keyType=='OK')? 
            await Encuesta.find( { IdEncuestaOK : idEncuesta } ) : 
            await Encuesta.find( { IdEncuestaBK : idEncuesta } );
        return {success: true, encuestaGuiaItem};  
    } catch (error) {
        return {success: false, error};
    }
};

export const getEncuestaSeccionList = async (idEncuesta, idSeccion) => {
    try {
        const encuestaGuiaItem = await Encuesta.findOne( { IdEncuestaOK : idEncuesta } );
        const { Seccion } = encuestaGuiaItem;

        const index = Seccion.findIndex(
            (seccion) => seccion.IdSeccionOK == idSeccion
        );
        
        const seccionesList = index>=0?Seccion[index]:undefined;
        
        return {success: true, seccionesList};

    } catch (error) {
        return {success: false, error};
    }
};