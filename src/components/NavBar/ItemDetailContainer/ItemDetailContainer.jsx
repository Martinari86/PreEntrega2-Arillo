import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import getListaPokemon from "../../../data/data"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [pokemonDetalle, setPokemonDetalle] = useState({})
  
  useEffect(()=>{
    getListaPokemon()
      .then( (respuesta)=>{
        //console.log(respuesta)
        const buscarPokemon= respuesta.find((buscar)=> buscar.id===151)
        console.log(buscarPokemon);
        setPokemonDetalle(buscarPokemon) 
      })
      .catch( (error)=>{
        console.log(error)
      })
      .finally( (respuesta)=>{
        console.log("Finalizo la promesa");
      })
  },[]) 
    console.log(pokemonDetalle);
    return (
    <div>
     <ItemDetail pokemonDetalle={pokemonDetalle} />    
    </div>
  )
}

export default ItemDetailContainer
