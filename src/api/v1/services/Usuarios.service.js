import Usuario from '../models/Usuario.model';
import boom from '@hapi/boom';

export const getGerentesList = async () => {
    try {
        const gerList = await Usuario.find({ Rol: '2' });
        return {success: true, gerList};
    } catch (error) {
        return {success: false, error}
    }
}

export const getUsuariosList = async () => {
    try {
        const usersList = await Usuario.find();
        return {success: true,usersList};
    } catch (error) {
        return {success: false, error};
    }
};

export const getUsuarioItem = async (idUsuario, keyType) => {
    try {
        let userItem;
        if (keyType=='OK') userItem = await Usuario.findOne({IdUsuarioOK: idUsuario});
        else if (keyType=='BK') userItem = await Usuario.findOne({IdUsuarioBK: idUsuario});
        return {success: true, userItem};
    } catch (error) {
        return {success: false, error};
    }
};

export const putUsuarioItem = async (idUsuario, usuarioItem) => {
    try {
        const userUpdated = await Usuario.findOneAndUpdate({ IdUsuarioOK: idUsuario }, usuarioItem, {new: true});
        return {success: true, userUpdated};
    } catch (error) {
        return {success: false, error};
    }
};

export const postUsuarioItem = async (usuarioItem) => {
    try {
        const newUsuario = await Usuario(usuarioItem);
        newUsuario.save();
        return {success: true, newUsuario};
    } catch (error) {
        return {success: false, error}
    }
};