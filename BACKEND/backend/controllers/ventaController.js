import ventas from "../models/venta.js";

export const getVentas = async (req, res) => {

    try{
    const  listVentas = await ventas.find()
    res.send(listVentas)
    }catch(error){
        return res.sendStatus(500);
    }
};
export const createventa = async (req, res) => {
    try{
        const {idVenta,fecha,nombre_producto,cantidad,valor,total} = req.body;
        const newVenta = new ventas ({idVenta,fecha,nombre_producto,cantidad,valor,total})
        await newVenta.save()
        return res.json(newVenta)
    }catch(error){
        return res.sendStatus(500);
    }  
};
export const updateVenta = async (req, res) => {
    try{
    const update_venta = await ventas.findByIdAndUpdate(req.params.id, req.body, {new:true})
    return res.send (update_venta);
    }catch(error){
        return res.sendStatus(500);
    }
};


export const deleteVenta = async (req, res) => {

    try{
        const eliminarVenta = await ventas.findByIdAndDelete(req.params.id)
   
        if (!eliminarVenta){

            return res.sendStatus(404) 

        }else{

            return res.sendStatus(204)
        }

    }catch(error){
        return res.sendStatus(500);
    }
};
export const getVenta = async (req, res) => {
    try {

        const idVenta = await ventas.findById(req.params.id)
        if (idVenta){
            return res.sendStatus(404);
        }else{ 
            return res.json(idVenta);
        }
        
    } catch (error) {
        return res.sendStatus(500); 
    }
};