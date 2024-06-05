//Muestra solo la CARD con la informacion del Producto
import "./Item.css"
import { Link } from "react-router-dom"

//Componente que retorna la CARD del producto
const Item = ({elemento}) => {
  const tiposArray = elemento.tipo
  //console.log(tipos);
  return (
    <div className="contenedorItemCard">
      <div className="contenedorItem">
                <p className="textoItem3">{elemento.id}</p>
                <img className="imagenItem" src={elemento.imagen} alt={elemento.nombre}></img>
                <div className="contenedorItem2">
                    <p className="textoItem1">{elemento.nombre}</p>
                    <div className="contenedorItemTipos">    
                        {
                        tiposArray.map((tipos)=>{
                            return <div key={tipos}>
                                      <p className="textoItem2">{tipos}</p>
                                    </div>
                          })
                        }
                    </div>
                 </div>
                 <Link className="linkItem" to={"/detalle/"+ elemento.identificacion}><button className="botonAtrapaloItem"> Atrapalo YA ! </button></Link>       
        </div>
    </div>
  )
}

export default Item
