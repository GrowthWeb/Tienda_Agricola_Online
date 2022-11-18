//import { React} from "react";
import '../styles/productos.css'

export function ListaProductos (){
     
      


   

        fetch('http://localhost:5000/productos').then(x => x.json())

        .then(console.log)

           /*<section class="contenido">
                
                <div class="mostrador" id="mostrador">
                    <div class="fila">
                        <div class="item" onclick="cargar(this)">
                            <div class="contenedor-foto">
                            <img src="" alt="granadilla"/>
                            </div>
                            
                            <p class="descripcion">
                                 </p>
                            <span class="precio">idfl</span>
                         </div>
                    </div>
                </div> 
             
            </section>*/
        

};

