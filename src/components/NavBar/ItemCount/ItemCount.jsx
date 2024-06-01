import { useState } from "react"
import { Link } from "react-router-dom"
import "./ItemCount.css"


const ItemCount = ({stock,addProduct}) => {
  const [count, setCount] = useState(1)
  const [stickerAgregado, setStrickerAgregado] = useState(false)

  const handleClickDecrement = () =>{
    if(count>1)
    setCount( count - 1 )
  }

  const handleClickIncrement= () =>{
    if(count<stock)
    setCount( count + 1 )
  }

  const handleAddToCart = () =>{
    addProduct(count);
    setStrickerAgregado(true)
  }

    return (
    <div>
      
      {
        stickerAgregado ? <Link className="linkItemCount" to="/Cart"><button className="botonIrCarrito">Ir al Carrito</button></Link> : 
                            
                            <div className="contenedorPrincipalItemCount">
                                <p className="textoItemCount">Cuantos vas a atrapar?</p>
                                <div className="contenedorBotones"> 
                                    <button className="boton" onClick={handleClickDecrement}>-</button>
                                    <p className="contador">{count}</p>
                                    <button className="boton" onClick={handleClickIncrement}>+</button>
                                </div>
                                <button className="botonAgregarCarrito" onClick={handleAddToCart}>PokeBola VE !!!</button>
                            </div>
      }
      
    </div>
  )
}

export default ItemCount
