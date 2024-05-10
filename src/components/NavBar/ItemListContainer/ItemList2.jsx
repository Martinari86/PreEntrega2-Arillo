import React from 'react'
import Item from './Item'
import "./ItemList.css"

const ItemList2 = ({pokemon}) => {
  return (
    <div className="contenedorItemList">
      {
        pokemon.map((elemento)=>{
        return <Item key={elemento.id} elemento={elemento} />
                }
                )
      } 
    </div>
  )
}

export default ItemList2
