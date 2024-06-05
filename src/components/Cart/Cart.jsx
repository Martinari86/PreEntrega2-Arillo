import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";


const Cart = () => {
    const {carrito, vaciarCarrito, borrarStickerPorId, precioTotal} = useContext(CartContext)

  if(carrito.length === 0){
    
  return (
            <div className='contenedorCart'>
                <p className='textoCarritoVacio'>Todavía No Atrapaste Ningún Pokemon</p>
                <Link to="/"><button className="botonVolverCart">Ir a Atraparlos</button></Link>
            </div> 
        )
    }

  return (
    <div className='contenedorCart'>
        <p className='textoCart'>Mi POKE-DEX</p>
      {
        carrito.map( (stickerPokemon) =>(
            <div className='contenedorPrincipalCart' key={stickerPokemon.id}>
                <img className="imagenCart" src={stickerPokemon.imagen}></img>
                <p className="nombreCart">Pokemon: {stickerPokemon.nombre}</p>  
                <p className="cantidadCart">Pedidos: {stickerPokemon.cantidad}</p>  
                <p className="precioCart">Precio: {stickerPokemon.precio}USD/sticker</p>   
                <p className="precioParcialCart">Parcial: {stickerPokemon.precio * stickerPokemon.cantidad} USD</p>    
                <RiDeleteBin6Line className='botonesQuitarCart' onClick={ () =>borrarStickerPorId(stickerPokemon.id) }/>
            </div>
        ))
      }
    <p className="precioTotalCart">Total de la Compra: {precioTotal()} USD </p>    
      <div className='contenedorBotonesCart'>  
        <Link to="/checkout"><button className='BotonesCart'>Quiero Atraparlos</button></Link>
        <button className='BotonesCart' onClick={vaciarCarrito}>Borrar PokeDex</button>  
      </div>
    </div>
  )
}

export default Cart
