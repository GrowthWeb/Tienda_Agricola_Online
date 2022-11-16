import { Router } from "express";
import { createventa, deleteVenta, getVenta, getVentas, updateVenta } from "../controllers/ventaController.js";


const router= Router();

router.get('/ventas', getVentas);
router.post('/ventas', createventa);
router.put('/ventas/:id', updateVenta);
router.delete('/ventas/:id', deleteVenta);

router.get('/ventas/:id', getVenta);

export default router