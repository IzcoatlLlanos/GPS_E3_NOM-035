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
