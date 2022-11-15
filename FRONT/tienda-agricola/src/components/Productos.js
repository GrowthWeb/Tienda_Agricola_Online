
import { React} from "react";
import {JsonData} from '../data/productos.json';
import '../styles/productos.css'


export function ListaProductos(){

    const Data=JsonData.map(
        (info)=>{
            return(
                <Fragment>
                    <section class="contenido">
                        <div class="mostrador" id="mostrador">
                            <div class="fila">
                                <div class="item" onclick="cargar(this)">
                                    <div class="contenedor-foto">
                                        <img src={imagen2} alt="granadilla"/>
                                    </div>
                                    <p class="descripcion">granadilla</p>
                                    <span class="precio">$ 1.300</span>
                                </div>
                            </div>
                        </div> 
                    </section>
                     <script src="../components/script.js"></script>

                
                </Fragment>
            )
         
        }
    )
    return(
        <body>
            {Data}
        </body>

    )
    
    
}
 