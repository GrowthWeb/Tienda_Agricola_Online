import jwt from 'jsonwebtoken';
import fs from "fs";
import path from 'path';


export const verifyAcces =async (req, res, next)=>{
    if(req.header("Authorization")!=undefined){

        const token = req.header("Authorization").replace("Secure ", "");

        fs.readFile(path.join('./keys/public.key'),
           'utf-8',
           async (err, publicKey)=>{
                if(err) throw err;
                try{
                    const data =jwt.verify(token, publicKey)
                    next();

                }catch(error){
                    res
                    .status(401)
                    .send({ error: " Usuario no autorizado"});

                }
           }

        )

    }else{
        res.status(401).send({error: "Sin autorizacion"})
    }

};