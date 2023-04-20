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
    const keyType = req.query.keyType || 'BK';
    try {
        const usuarioItem = await usuarioService.getUsuarioItem(id, keyType);
        if (!usuarioItem) throw boom.notFound('No se encontró el usuario con el id: '+idUsuario);
        else if (usuarioItem) res.status(200).json(usuarioItem);        
    } catch (error) {
        next(error);
    }
};

export const putUsuarioItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const usuarioItem = req.body;
        const keyType = req.query.keyType || 'BK'
        const usuarioUpdated = await usuarioService.putUsuarioItem(id, usuarioItem, keyType);
        if (!usuarioUpdated) throw boom.notFound('No se encontro el usuario a actualizar');
        else if (usuarioUpdated) res.status(200).json(usuarioUpdated);
    } catch (error) {
        next(error);
    }
};

export const postUsuarioItem = async (req, res, next) => {
    try {
        const usuarioItem = req.body;
        const usuarioAdded = await usuarioService.postUsuarioItem(usuarioItem);
        if (!usuarioAdded) throw boom.badData('Error en la informacion enviada');
        else if (usuarioAdded) res.status(200).json(usuarioAdded);
    } catch (error) {
        next(error);
    }
};