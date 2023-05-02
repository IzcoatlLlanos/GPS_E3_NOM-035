import Persona from '../models/Persona.model';

export const getPersonasListByHotel = async (hotel) => {
    try {
        const personasList = await Persona.find({ Hotel: hotel });
        return {success: true, personasList};
    } catch (error) {
        return {success: false, error};
    }
};
