import usuarios from '../models/usuario.js'



export const getUsuarios = async (req, res) => {

    try{
    const  listUsuarios = await usuarios.find()
    res.send(listUsuarios)
    }catch(error){
        return res.sendStatus(500);
    }
};
export const createUsuario = async (req, res) => {
    try{
        const {idUsuario,nombreUsuario,email,usuario,password,rol} = req.body;
        const newUsuario = new usuarios({idUsuario,nombreUsuario,email,usuario,password,rol});
        await newUsuario.save()
        return res.json(newUsuario)
        
    }catch(error){

        return res.sendStatus(500);
    }  
};
export const updateUsuario = async (req, res) => {
    try{
    const update_Usuario = await usuarios.findByIdAndUpdate(req.params.id, req.body, {new:true})
    return res.send (update_Usuario);
    }catch(error){
        return res.sendStatus(500);
    }
};


export const deleteUsuario = async (req, res) => {

    try{
        const removeUsuario = await usuarios.findByIdAndDelete(req.params.id)
   
        if (!removeUsuario){

            return res.sendStatus(404) 

        }else{

            return res.sendStatus(204)
        }

    }catch(error){
        return res.sendStatus(500);
    }
};
export const getUsuario = async (req, res) => {
    try {

        const usuario_id = await usuarios.findById(req.params.id)
        if (!usuario_id){
            return res.sendStatus(404);
        }else{ 
            return res.json(usuario_id);
        }
        
    } catch (error) {
        return res.sendStatus(500); 
    }
};
