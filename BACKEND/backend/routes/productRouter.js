import { Router } from "express";
import {createProducto, deleteProducto, getproducto, getProductos, updateProducto } from "../controllers/productController.js";

const router= Router();

router.get('/productos', getProductos);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);

router.get('/productos/:id',getproducto);


export default router