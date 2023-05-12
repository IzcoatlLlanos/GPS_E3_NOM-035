import * as mongoose from 'mongoose';

const personaSchema = new mongoose.Schema({
    IdPersonaOK: { type : String },
    Nombres: { type : String },
    Apellidos: { type : String },
    Hotel: { type : String },
    CorreoEle: { type : String },
    Celular: { type : String },
    Encuestas: [{
        _id: false,
        IdRespuestaOK: { type : String }, //Formado a partir de el IdPersonaOK
        Enlace: { type : String },
        IdEncuestaOK: { type : String },
        Contestada: { type: Boolean },
        Fecha: { type : Date, default: Date.now },
    }],
    detail_row: {
        _id: false,
        Activo: { type : String, default : 'S' },
        Borrado: { type : String, default : 'N' },
        detail_row_reg: [
            {
                _id: false,
                FechaReg: { type : Date, default: Date.now },
                UsuarioReg: { type : String }
            }
        ]
    }
});

export default mongoose.model(
    'cat_personas',
    personaSchema,
    'cat_personas'
  );