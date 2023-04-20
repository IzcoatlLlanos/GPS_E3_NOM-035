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

export const putUsuarioItem = async (idUsuario, usuarioItem, keyType) => {
    try {
        if (keyType=='OK') return await Usuario.findOneAndUpdate({ IdUsuarioOK: idUsuario }, usuarioItem, {new: true});
        else if (keyType=='BK') return await Usuario.findOneAndUpdate({ IdUsuarioBK: idUsuario }, usuarioItem, {new: true});
    } catch (error) {
        throw boom.internal(error);
    }
};

export const postUsuarioItem = async (usuarioItem) => {
    try {
        const newUsuario = await Usuario(usuarioItem);
        return newUsuario.save();
    } catch (error) {
        throw boom.internal(error);
    }
};