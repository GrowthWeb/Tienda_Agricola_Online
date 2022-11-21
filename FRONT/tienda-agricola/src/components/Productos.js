
export function ListaProductos(){

    fetch("http://localhost:5000/productos")
    .then(function(respuesta){
        return respuesta.json();

    }).then(function(respuesta){
        var nombreproduct =document.getElementById('nombreProducto');
        nombreproduct.innerHTML = respuesta.nombreproducto;
    }) 

    
};