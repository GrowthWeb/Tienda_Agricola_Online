import mongoose from "mongoose";
 
const productSchema=  new mongoose.Schema({

    nombreProducto: {
        type: String,
        required: true,
        trim: true

    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
        trim: true

    },
    stock:{
        type: Number,
        required: true,
        trim: true

    },
    image:{
        url: String,
        public_id: String

    }

    
});

export default mongoose.model ('productos', productSchema);