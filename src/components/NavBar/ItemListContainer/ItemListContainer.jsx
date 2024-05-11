import "./ItemListContainer.css"
import getListaPokemon from "../../../data/data";
import { useEffect, useState } from "react";
import ItemList2 from "./ItemList2";
import NavFiltros from "./NavFiltros";
import { useParams } from "react-router-dom";

const ItemListContainer = ({texto1,texto2,texto3}) => {

const [pokemon, setPokemon] = useState([])
const {idTipo} = useParams() 

console.log(idTipo);

useEffect(()=>{
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
    })
},[idTipo])  


  //console.log(pokemon);  

  return (
    <div className="contenedorItemListContainer">
      
      <p className="textoItemListContainer1">{texto1}</p>
      <p className="textoItemListContainer2">{texto2}</p>
      <p className="textoItemListContainer3">{texto3}</p>
      <NavFiltros />
      <ItemList2 pokemon={pokemon} />
    </div>
  )
}

export default ItemListContainer
