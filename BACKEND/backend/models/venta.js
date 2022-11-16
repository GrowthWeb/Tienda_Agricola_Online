import mongoose from "mongoose";
 
const ventaSchema=  new mongoose.Schema({

    fecha:{
        type: String,
        required: true,
        trim: true

    },
    nombre_producto:{
        type: String,
        required: true,
        trim: true
    },
    cantidad:{
        type: Number,
        required: true,
        trim: true

    },
    valor:{
        type: Number,
        required: true,
        trim: true

    },
    total:{
        type: Number,
        required: true,
        trim: true
    }
    
});

export default mongoose.model ('ventas', ventaSchema);