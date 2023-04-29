import * as usuarioService from '../services/Usuarios.service';
import boom from '@hapi/boom';

export const getGerentesList = async (req, res, next) => {
    try {
        const gerentesList = await usuarioService.getGerentesList();
        if(!gerentesList.success) throw boom.notFound(gerentesList.error);
        else if (gerentesList.success) res.status(200).json(gerentesList);
    } catch (error) {
        
    }
}

export const getUsuariosList = async (req, res, next) => {
    try {
        const usuariosList = await usuarioService.getUsuariosList();
        if (!usuariosList.success) throw boom.notFound(usuariosList.error);
        else if (usuariosList.success) res.status(200).json(usuariosList);
    } catch (error) {
        next(error);        
    }
};

export const getUsuarioItem = async (req, res, next) => {
    const { id } = req.params;
    const keyType = req.query.keyType || 'BK';
    try {
        const usuarioItem = await usuarioService.getUsuarioItem(id, keyType);
        if (!usuarioItem.success) throw boom.notFound(usuarioItem.error);
        else if (usuarioItem.success) res.status(200).json(usuarioItem);        
    } catch (error) {
        next(error);
    }
};

export const putUsuarioItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const usuarioItem = req.body;
        const usuarioUpdated = await usuarioService.putUsuarioItem(id, usuarioItem);
        if (!usuarioUpdated.success) throw boom.notFound(usuarioUpdated.error);
        else if (usuarioUpdated.success) res.status(200).json(usuarioUpdated);
    } catch (error) {
        next(error);
    }
};

export const postUsuarioItem = async (req, res, next) => {
    try {
        const usuarioItem = req.body;
        const usuarioAdded = await usuarioService.postUsuarioItem(usuarioItem);
        if (!usuarioAdded.success) throw boom.badData(usuarioAdded.error);
        else if (usuarioAdded.success) res.status(200).json(usuarioAdded);
    } catch (error) {
        next(error);
    }
};