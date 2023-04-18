import Usuario from '../models/Usuario.model';
import boom from '@hapi/boom';

export const getUsuariosList = async () => {
    try {
        return await Usuario.find();
    } catch (error) {
        throw boom.internal(error);
    }
};