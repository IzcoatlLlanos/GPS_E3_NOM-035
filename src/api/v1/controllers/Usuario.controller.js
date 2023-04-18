import * as usuarioService from '../services/Usuarios.service';
import boom from '@hapi/boom';

export const getUsuariosList = async (req, res, next) => {
    try {
        const usuariosList = await usuarioService.getUsuariosList();
        if (!usuariosList) throw boom.notFound('No se encontraron usuarios registrados');
        else if (usuariosList) res.status(200).json(usuariosList);
    } catch (error) {
        next(error);        
    }
};

export const getUsuarioItem = async (req, res, next) => {
    const { id } = req.params;
    const keyType = req.query.keyType || 'OK';
    try {
        const usuarioItem = await usuarioService.getUsuarioItem(id, keyType);
        if (!usuarioItem) throw boom.notFound('No se encontró el usuario con el id: '+idUsuario);
        else if (usuarioItem) res.status(200).json(usuarioItem);        
    } catch (error) {
        next(error);
    }
};
