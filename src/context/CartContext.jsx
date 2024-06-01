import { createContext} from "react"
import React from 'react'
import { useState } from "react"

//Se crea el contexto
const CartContext = createContext()

const CartProvider = ({children})=>{
    const[carrito, setCarrito] = useState ([])

    console.log(carrito)

const addPokemon = (newPokemon) =>{
    const condicion = estaEnElCarrito(newPokemon.id)
    if(condicion){
        const stickerModificado = carrito.map((sticker) =>{
            if(sticker.id === newPokemon.id){
                return {...sticker, cantidad: sticker.cantidad + newPokemon.cantidad}
            }else{
                return sticker
            }
        })
    setCarrito(stickerModificado)    
    }else{
        setCarrito([...carrito,newPokemon])
    }

}

const cantidadTotalPokemon = () =>{
    const cantidadTotalPokemon = carrito.reduce( (total, pokemon) => total + pokemon.cantidad, 0)
    return cantidadTotalPokemon
}

const vaciarCarrito = () => {
    setCarrito([])
}

const estaEnElCarrito = (idPokemon) =>{
    const condicion = carrito.some ( (stickerCarrito) => stickerCarrito.id === idPokemon)
    return condicion 
}

const borrarStickerPorId = (idPokemon) => {
    const productosFiltrados = carrito.filter((sticker) => sticker.id !== idPokemon)
    setCarrito(productosFiltrados)
}

const precioTotal = () =>{
    const precioTotalSticker = carrito.reduce( (totalCompra, pokemon) => totalCompra + (pokemon.precio * pokemon.cantidad), 0)
    return precioTotalSticker
}

return(
        <CartContext.Provider value={ {carrito, addPokemon, cantidadTotalPokemon, vaciarCarrito, borrarStickerPorId, precioTotal} }>  
            {children}
        </CartContext.Provider>
    )
}



export {CartContext, CartProvider}

//CartContext para cuando quiera consumir los datos
//CartProvider para envolver los componenetes
//Children son todos los componenetes de APP


//UPGRADES, agregar limites para los stocks

