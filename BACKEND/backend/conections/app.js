import express  from "express";
import productsRouter from '../routes/productRouter.js';
import usersRouter from '../routes/userRouter.js'
import ventasRouter from '../routes/ventaRouter.js'
import fileupload from 'express-fileupload';



const app = express();

app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './files'
    
}));

app.use(productsRouter)
app.use(usersRouter)
app.use(ventasRouter)


export default app;