import * as mongoose from 'mongoose';

const encuestaSchema = new mongoose.Schema({
    IdEncuestaOK    :   { type : String },
    IdEncuestaBK    :   { type : String },
    Tipo            :   { type : String },
    Vigencia        :   { type : String },
    Fecha           :   { type : String },
    Descripcion     :   { type : String },
    Seccion: [{
        _id: false,
        IdSeccionOK :   { type : String },
        IdSeccionBK :   { type : String },
        Nombre      :   { type : String },
        Tipo        :   { type : String },
        Preguntas: [{
            _id: false,
            IdPregunta  :   { type : String },
            Categoria   :   { type : String },
            Dominio     :   { type : String },
            Pregunta    :   { type : String },
        }], 
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
    'cat_encuestas',
    encuestaSchema,
    'cat_encuestas'
);