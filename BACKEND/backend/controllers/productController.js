import productos from '../models/producto.js';
import { deleteImage, uploadImage } from '../libraries/cloudFiles.js'; 
import fs from 'fs-extra';


export const getProductos = async (req, res) => {

    try{
    const  listProductos = await productos.find()
    res.send(listProductos)
    }catch(error){
        return res.sendStatus(500);
    }
};
export const createProducto = async (req, res) => {
    try{
        const {idProducto,nombreProducto,descripcion,precio,stock} = req.body;

        var image=null;

        if(req.files.image){
            const subirImagen = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            image ={
            url:subirImagen.secure_url,
            public_id: subirImagen.public_id
            }

        }
        const newProducto = new productos({idProducto,nombreProducto,descripcion,precio,stock,image})
        await newProducto.save()
        return res.json(newProducto)
    }catch(error){
        return res.sendStatus(500);
    }  
};
export const updateProducto = async (req, res) => {
    try{
    const productoUpdate = await productos.findByIdAndUpdate(req.params.id, req.body, {new:true})
    return res.send (productoUpdate);
    }catch(error){
        return res.sendStatus(500);
    }
};


export const deleteProducto = async (req, res) => {

    try{
        const removeProducto = await productos.findByIdAndDelete(req.params.id)
   
        if (!removeProducto)return res.sendStatus(404)
        if (removeProducto.image.public_id){
            await deleteImage(removeProducto.image.public_id)    
        }
        return res.sendStatus (204);
        
    }catch(error){
        return res.sendStatus(500);
    }
};
export const getproducto = async (req, res) => {
    try {

        const producto = await productos.findById(req.params.id)
        if (!producto){
            return res.sendStatus(404);
        }else{ 
            return res.json(producto);
        }
        
    } catch (error) {
        return res.sendStatus(500); 
    }
};

