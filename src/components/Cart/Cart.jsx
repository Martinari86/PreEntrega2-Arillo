import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"
import { Link } from 'react-router-dom'


const Cart = () => {
    const {carrito, vaciarCarrito, borrarStickerPorId, precioTotal} = useContext(CartContext)

    if(carrito.length === 0){
    
    return (
            <div>
                <p className='textoCarritoVacio'>No atrapaste ningun Pokemon</p>
                <Link to="/"><button>Vayamos a Atraparlos</button></Link>
            </div> 
        )
    }

  return (
    <div>
        <p>Mi POKE-DEX</p>
      {
        carrito.map( (stickerPokemon) =>(
            <div className='contenedorPrincipalCart' key={stickerPokemon.id}>
                <img className="imagenCart" src={stickerPokemon.imagen}></img>
                <p className="nombreCart">Nombre: {stickerPokemon.nombre}</p>  
                <p className="cantidadCart">Cantidad Pedida: {stickerPokemon.cantidad}</p>  
                <p className="precioCart">Precio Unitario: {stickerPokemon.precio}USD/sticker</p>   
                <p className="precioParcialCart">Precio Parcial: {stickerPokemon.precio * stickerPokemon.cantidad} USD</p>    
                <button onClick={ () =>borrarStickerPorId(stickerPokemon.id) }>Quitar del PokeDex</button>   
            </div>
        ))
      }
    <p className="precioTotalCart">Total de la Compra: {precioTotal()} </p>    
    <button onClick={vaciarCarrito}>Borrar PokeDex</button>  
    </div>
  )
}

export default Cart
