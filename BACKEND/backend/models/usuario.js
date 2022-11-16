import mongoose from "mongoose";
 
const usuarioSchema=  new mongoose.Schema({

    nombreUsuario: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    usuario:{
        type: String,
        required: true,
        trim: true

    },
    password:{
        type: String,
        required: true,
        trim: true

    },
    rol:{
        type: String,
        required: true,
        trim: true
    }
    
});

export default mongoose.model ('usuarios', usuarioSchema);