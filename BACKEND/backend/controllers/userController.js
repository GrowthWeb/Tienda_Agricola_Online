import usuarios from '../models/usuario.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';


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
        bcrypt.genSalt(10, function (err, salt){
            bcrypt.hash(newUsuario.password, salt, async function(err, hash){
                newUsuario.password=hash;

                await newUsuario.save()
                return res.json(newUsuario)

            });

        })

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
export const login= async(req, res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Por favor ingrese los datos",
        });
    }

    let {usuario, password} =req.body;

    usuarios.findOne({usuario}).then((user)=>{
        if(!user){
            res.status(404).json({

                usernamenotfound: "Usuario no encontrado",

            });

            
        }
        bcrypt.compare(password, user.password).then((isMatch)=>{
            
            if(isMatch){
               fs.readFile(
                    path.join("../keys/private.key"),
                    "utf-8",
                    (err, privateKey)=>{
                        if(err) throw err;

                        let payload = {

                        id: user._id,
                        name: user.usuario,
                        rol: user.rol

                    };

                    jwt.sign(
                        payload,
                        privateKey,
                        {
                            expiresIn: 31556926,
                            algorithm: 'RS256',
                        },
                           (err, token)=>{
                            if(err) throw err;
                            res.json({ 
                                success: true,
                                token: "Secure " + token,

                            })
                         }
                    );
                }
                );

               
            }

        });

    });


};
