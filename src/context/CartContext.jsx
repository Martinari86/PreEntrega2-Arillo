import { createContext} from "react"
import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";


//Se crea el contexto
const CartContext = createContext()

//Componente que recibe de APP los coponenetes
const CartProvider = ({children})=>{
    //Declaracion de variable de estado
    const[carrito, setCarrito] = useState ([])
    //console.log(carrito)

//Funcion para agregar un nuevo pokemon al arrito
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

//Funcion que calcula la cantidad Total
const cantidadTotalPokemon = () =>{
    const cantidadTotalPokemon = carrito.reduce( (total, pokemon) => total + pokemon.cantidad, 0)
    return cantidadTotalPokemon
}

//Funcion para vaciar Carrito
const vaciarCarrito = () => {
    setCarrito([])
}

//Funcion para chequear que el elemento existe en el carrito
const estaEnElCarrito = (idPokemon) =>{
    const condicion = carrito.some ( (stickerCarrito) => stickerCarrito.id === idPokemon)
    return condicion 
}

//Funcion que elimina el registro
const borrarStickerPorId = (idPokemon) => {
    const productosFiltrados = carrito.filter((sticker) => sticker.id !== idPokemon)
    setCarrito(productosFiltrados)
}

//Funcion que calcula el precio total
const precioTotal = () =>{
    const precioTotalSticker = carrito.reduce( (totalCompra, pokemon) => totalCompra + (pokemon.precio * pokemon.cantidad), 0)
    return precioTotalSticker
}

//Funcion para ir a la página anterior
const navigate = useNavigate()
const goBack = () => {
    navigate(-1);
  };

return(
        <CartContext.Provider value={ {carrito, addPokemon, cantidadTotalPokemon, vaciarCarrito, borrarStickerPorId, precioTotal, goBack} }>  
            {children}
        </CartContext.Provider>
    )
}



export {CartContext, CartProvider}

//CartContext para cuando quiera consumir los datos
//CartProvider para envolver los componenetes
//Children son todos los componenetes de APP


//UPGRADES, agregar limites para los stocks

