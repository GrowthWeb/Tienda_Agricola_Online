
async function ListaProductos(url='http://localhost:5000/productos', data={}){
  
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
     
    },
    
  });
  return response.json(); // parses JSON response into native 
};
export default ListaProductos;