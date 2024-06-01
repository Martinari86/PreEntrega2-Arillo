import "./ItemListContainer.css"
import getListaPokemon from "../../../data/data";
import { useEffect, useState } from "react";
import ItemList2 from "./ItemList2";
import NavFiltros from "../NavFiltros";
import { useParams } from "react-router-dom";

const ItemListContainer = ({texto1,texto2,texto3}) => {

const [pokemon, setPokemon] = useState([])
const [loading, setLoading] = useState(false)
const {idTipo} = useParams() 

//console.log(idTipo);

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


  //console.log(pokemon);  

  return (
    <div className="contenedorItemListContainer" >
          <p className="textoItemListContainer1">{idTipo ? "" : texto1}</p>
          {
            loading || <p className="textoItemListContainer2">{idTipo ? "Pokemon Tipo " + idTipo: texto2}</p>
          } 
          <p className="textoItemListContainer3">{idTipo ? "" : texto3}</p> 

      {
        loading ? <div>{idTipo ? "POKEMON tipo " + idTipo + " YO LOS ELIJO ..." : "POKEMON YO LOS ELIJO"}</div> : <ItemList2 pokemon={pokemon} />
      }
      
    </div>
  )
}

export default ItemListContainer


//PONER ALGUNA ANIMACION EN VEZ DE "POKEMON YO TE ELIJO"