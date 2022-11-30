import { Router } from "express";

import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario} from "../controllers/userController.js";


const router= Router();

router.get('/usuarios', getUsuarios);
router.post('/crearUsuario', createUsuario);
router.put('/usuarioUpdate/:id', updateUsuario);
router.delete('/usuarioDelete/:id', deleteUsuario);

router.get('/usuarioId/:id', getUsuario);

export default router