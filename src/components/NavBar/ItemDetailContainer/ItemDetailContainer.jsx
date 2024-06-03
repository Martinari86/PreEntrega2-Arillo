import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
//import getListaPokemon from "../../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../../db/db.js"

const ItemDetailContainer = () => {
  
  const [pokemonDetalle, setPokemonDetalle] = useState({})
  const [loading, setLoading] = useState(false)
  const {id}= useParams()
  //console.log(id);
  
  const getSticker = () =>{
    setLoading(true)
    const stickerRef = doc(db,"pokemon",id)
    getDoc(stickerRef)
      .then( (dataStickerDb)=>{
          const data = {identificacion: dataStickerDb.id, ...dataStickerDb.data() }
          setPokemonDetalle(data)
          console.log(pokemonDetalle);  
      })
      //.catch()
      .finally(
        setLoading(false)
      )
  }
  console.log(pokemonDetalle);
  useEffect(()=>{
   getSticker()
  },[]) 
    //console.log(pokemonDetalle);

    return (
    <div>
        {
          loading ? <div className="textoRenderizadoItemDetailContainer">Descargando Información de tu POKEMON</div> : <ItemDetail pokemonDetalle={pokemonDetalle} />
        }
    </div>
  )
}

export default ItemDetailContainer

/*
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
*/