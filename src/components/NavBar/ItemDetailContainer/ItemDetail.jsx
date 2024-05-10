
import "./ItemDetail.css"

const ItemDetail = ({ pokemonDetalle }) => {
    console.log(pokemonDetalle);
    const tiposArray = pokemonDetalle.tipo
    const ataquesArray = pokemonDetalle.ataques
    console.log(tiposArray);
    console.log(ataquesArray);
    return (
    <div className="contenedorItemDetailContanier">
     <img className="imagenItemDetailContanier" src={pokemonDetalle.imagen} alt={pokemonDetalle.nombre}></img>
     <div className="contenedorItemDetailContanier2">    
            <p className="textoItemDetailContanier1">{pokemonDetalle.nombre}</p>
           
            <p className="textoTipos">Tipo</p>
     
       
        
            
            <p className="textoPrecio">Precio</p>
            <p className="textoItemDetailContanier2">{pokemonDetalle.precio} USD</p>
     </div>  
    </div>
  )
}

export default ItemDetail
