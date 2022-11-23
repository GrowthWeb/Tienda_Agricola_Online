import { Router } from "express";

import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario} from "../controllers/userController.js";


const router= Router();

router.get('/usuarios', getUsuarios);
router.post('/crearUsuario', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

router.get('/usuarios/:id', getUsuario);

export default router