import * as mongoose from 'mongoose';

const respuestaSchema = new mongoose.Schema({
    IdRespuestaOK   : { type : String },
    IdPersonaOK     : { type : String },
    IdEncuestaOK    : { type : String },
    IdUsuarioOK     : { type : String },
    Hotel           : { type : String },
    Contestada      : { type : Boolean },
    Enlace          : { type : String },
    Puntuacion      : { type : Number },
    Seccion         : [{
        _id: false,
        IdSeccionOK     : { type : String },
        Nombre          : { type : String },
        Tipo            : { type : String },
        Resultado       : { type : Number },
        Respuestas: [{
            _id: false,
            IdPreguntaOK    : { type : String },
            Respuesta       : { type : String },
            Valor           : { type : Number }
        }]
    }]
});

export default mongoose.model(
    'cat_respuestas',
    respuestaSchema,
    'cat_respuestas'
);