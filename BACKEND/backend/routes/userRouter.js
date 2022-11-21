import { Router } from "express";
import { verifyAcces } from "../conections/license.js";
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, login, updateUsuario} from "../controllers/userController.js";


const router= Router();

router.get('/usuarios', verifyAcces, getUsuarios);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

router.get('/usuarios/:id', getUsuario);
router.post('/login/',login);

export default router