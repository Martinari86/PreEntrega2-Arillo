//rafce para crear rapido la sintaxis de un componente
import { TiShoppingCart } from "react-icons/ti";
import "./cartWidget.css"

const CartWidget = () => {
  return (
    <div className="contenedorCart">
      <TiShoppingCart className="iconoCart" size={40}/>
      <p className="numero">10</p>
    </div>
  )
}

export default CartWidget
