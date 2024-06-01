import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import getListaPokemon from "../../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
  
  const [pokemonDetalle, setPokemonDetalle] = useState({})
  const [loading, setLoading] = useState(false)
  const {id}= useParams()
  console.log(id);
  
  useEffect(()=>{
    setLoading(true)
    getListaPokemon()
      .then( (respuesta)=>{
        //console.log(respuesta)
        const buscarPokemon= respuesta.find((buscar)=> buscar.id===Number(id))
        console.log(buscarPokemon);
        setPokemonDetalle(buscarPokemon) 
      })
      .catch( (error)=>{
        console.log(error)
      })
      .finally( (respuesta)=>{
        console.log("Finalizo la promesa");
        setLoading(false)
      })
  },[]) 
    console.log(pokemonDetalle);

    return (
    <div>
        {
          loading ? <div>Descargando Información de tu Pokemon</div> : <ItemDetail pokemonDetalle={pokemonDetalle} />
        }
    </div>
  )
}

export default ItemDetailContainer
