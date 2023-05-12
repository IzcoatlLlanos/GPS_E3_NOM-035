import Persona from '../models/Persona.model';

export const getPersonasListByHotel = async (hotel) => {
    try {
        const personasList = await Persona.find({ Hotel: hotel });
        return {success: true, personasList};
    } catch (error) {
        return {success: false, error};
    }
};

export const postPersonaItem = async (personaItem) => {
    try {
        const newPersona = await Persona(personaItem);
        newPersona.save();
        return {success: true, newPersona};
    } catch (error) {
        return {success: false, error};
    }
};

export const putPersonaItem = async (idPersonaOK, personaItem) => {
    try {
        const personaToUpdate = await Persona.findOneAndUpdate({ 
            IdPersonaOK: idPersonaOK }, personaItem, { new: true 
        });
        return {success: true, personaToUpdate};
    } catch (error) {
        return {success: false, error};
    }
};

export const deletePersonaItem = async (idPersonaOK) => {
    try {
        const personaToDelete = await Persona.findOneAndDelete({ 
            IdPersonaOK: idPersonaOK 
        });
        return {success: true, personaToDelete};
    } catch (error) {
        return {success: false, error}
    }
};

//SubDocumento

export const pushEncuestaItem = async (idPersonaOK, idRespuestasOK, encuestaItem) => {
    try {
        const personaItem = await Persona.findOne({ IdPersonaOK: idPersonaOK });
        const { Encuestas } = personaItem;

        const index = Encuestas.findIndex(
            (encuesta) => encuesta.IdRespuestaOK == idRespuestasOK
        );

        if (index>=0) {
            Encuestas[index] = encuestaItem;
        } else {
            Encuestas.push(encuestaItem);
        }

        const personaUpdated = await Persona.findOneAndUpdate( 
            { IdPersonaOK: idPersonaOK },
            { $set: { Encuestas } },
            {new: true}
        );

        return {success: true, personaUpdated};
    } catch (error) {
        return {success: false, error};
    }
};




