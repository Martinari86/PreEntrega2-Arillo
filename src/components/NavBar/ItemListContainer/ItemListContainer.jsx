import "./ItemListContainer.css"
//import getListaPokemon from "../../../data/data";
import { useEffect, useState } from "react";
import ItemList2 from "./ItemList2";
//import NavFiltros from "../NavFiltros";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import db from "../../../db/db";
import NavFiltros from "../NavFiltros";


const ItemListContainer = ({texto1,texto2,texto3}) => {

const [pokemon, setPokemon] = useState([])
const [loading, setLoading] = useState(false)
const {idTipo} = useParams() 


console.log(loading);
const getStickers = () =>{
  const stickersRef = collection(db,"pokemon")
  setLoading(true)
if(idTipo){
  const q = query(stickersRef, where("tipo", "array-contains", idTipo))
  getDocs(q)
  .then((stickersDb)=> {
    console.log(loading);
    const dataSticker = stickersDb.docs.map((sticker)=>{
      return {identificacion: sticker.id, ...sticker.data()}
    })
    console.log(dataSticker);
    setPokemon(dataSticker);
  })
  //.catch
  .finally( 
    setLoading(false)
    )
} else{
  const q = query(stickersRef, orderBy("id", "asc"))  
  getDocs(q)
    .then((stickersDb)=> {
      const dataSticker = stickersDb.docs.map((sticker)=>{
        return {identificacion: sticker.id, ...sticker.data()}
      })
      setPokemon(dataSticker);
    })
    //.catch
    .finally(
      setLoading(false)
    )
  }
}

  useEffect(()=>{
    getStickers()
},[idTipo])  


  //console.log(pokemon);  

  return (
    <div className="contenedorItemListContainerInicial" >
          
      <NavFiltros />
      <div className="contenedorItemListContainer">    
          <p className="textoItemListContainer1">{idTipo ? "" : texto1}</p>
          {
            loading || <p className="textoItemListContainer2">{idTipo ? "Pokemon Tipo " + idTipo: texto2}</p>
          } 
          <p className="textoItemListContainer3">{idTipo ? "" : texto3}</p> 

          {
            loading ? <div className="textoRenderizadoItemListContainer" >{idTipo ? "POKEMON tipo " + idTipo + " YO LOS ELIJO ..." : "POKEMON YO LOS ELIJO..."}</div> : <ItemList2 pokemon={pokemon} />
          }
      </div>
    </div>
  )
}

export default ItemListContainer


//PONER ALGUNA ANIMACION EN VEZ DE "POKEMON YO TE ELIJO"


//GETLISTA POKEMON desde DATA
/*
useEffect(()=>{
  setLoading(true)
  getListaPokemon()
    .then( (respuesta)=>{
      //console.log(respuesta)
      if(idTipo){
      //Si idTipo NO es undefinded, filtra por lo recibido en este caso, filtra por tipo
       const pokemonFiltro = respuesta.filter( (elemento)=> elemento.tipo.includes(idTipo)) 
       setPokemon(pokemonFiltro)
       console.log(pokemonFiltro);
      }else{
      //Si idTipo es undefinded, devuelve todo
        setPokemon(respuesta) 
      }
    })
    .catch( (error)=>{
      console.log(error)
    })
    .finally( (respuesta)=>{
      console.log("Finalizo la promesa");
      setLoading(false)
    })
},[idTipo]) 
*/ 