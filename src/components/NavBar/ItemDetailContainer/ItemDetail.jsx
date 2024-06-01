
import { useEffect, useState } from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const ItemDetail = ({ pokemonDetalle }) => {
    //console.log(pokemonDetalle);
    const{addPokemon} =useContext(CartContext)
    
    const [tiposArray,setTiposArray]=useState([])
    const [ataquesArray,setAtaquesArray] = useState([])
    
    useEffect(()=>{
    setTiposArray(pokemonDetalle.tipo);
    setAtaquesArray(pokemonDetalle.ataques);
    },[pokemonDetalle] )
    
    //console.log(tiposArray);
    //console.log(ataquesArray);

    const addProduct = (count) => {
        //Se estructura un producto
        const productCart= {...pokemonDetalle, cantidad: count}
        //Se añade el producto al carrito
        addPokemon(productCart);
        
      } 


    return (
    <div className="contenedorItemDetailContanier">
     <img className="imagenItemDetailContanier" src={pokemonDetalle.imagen} alt={pokemonDetalle.nombre}></img>
     <div className="contenedorItemDetailContanier2">    
            <p className="textoItemDetailContanier1">{pokemonDetalle.nombre}</p>
            <p className="textoTipos">Tipo</p>
            <div className="contenedorItemDetailContanierTexto1">    
                {tiposArray?.map((tipo,index)=> (
                    <p className="textoItemDetailContanier3" key={index}>{tipo}</p>
                ))}
            </div>
            
            <p className="textoAtaques">Ataques Principales</p>
            <div className="contenedorItemDetailContanierTexto2">    
                {ataquesArray?.map((ataque,index)=> (
                    <p className="textoItemDetailContanier4" key={index}>{ataque}</p>
                ))} 
            </div> 
       
            <p className="textoPrecio">Precio</p>
            <p className="textoItemDetailContanier2">{pokemonDetalle.precio} USD</p>
            <ItemCount stock={pokemonDetalle.id} addProduct={addProduct}/>  
     </div>  
    </div>
  )
}

export default ItemDetail
