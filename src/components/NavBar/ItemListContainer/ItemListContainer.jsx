import "./ItemListContainer.css"
import getListaPokemon from "../../../data/data";
import { useEffect, useState } from "react";
import ItemList2 from "./ItemList2";

const ItemListContainer = ({texto1,texto2,texto3}) => {

const [pokemon, setPokemon] = useState([])

useEffect(()=>{
  getListaPokemon()
    .then( (respuesta)=>{
      //console.log(respuesta)
      setPokemon(respuesta)
    })
    .catch( (error)=>{
      console.log(error)
    })
    .finally( (respuesta)=>{
      console.log("Finalizo la promesa");
    })
},[])  


  //console.log(pokemon);  

  return (
    <div className="contenedorItemListContainer">
      
      <p className="textoItemListContainer1">{texto1}</p>
      <p className="textoItemListContainer2">{texto2}</p>
      <p className="textoItemListContainer3">{texto3}</p>
      <ItemList2 pokemon={pokemon} />
    </div>
  )
}

export default ItemListContainer
