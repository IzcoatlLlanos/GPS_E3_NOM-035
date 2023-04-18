import Usuario from '../models/Usuario.model';
import boom from '@hapi/boom';

export const getUsuariosList = async () => {
    try {
        return await Usuario.find();
    } catch (error) {
        throw boom.internal(error);
    }
};

export const getUsuarioItem = async (idUsuario, keyType) => {
    try {
        if (keyType=='OK') return await Usuario.findOne({IdUsuarioOK: idUsuario});
        else if (keyType=='BK') return await Usuario.findOne({IdUsuarioBK: idUsuario});
    } catch (error) {
        throw boom.internal(error);
    }
};