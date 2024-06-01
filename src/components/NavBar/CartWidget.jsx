//rafce para crear rapido la sintaxis de un componente
import { TiShoppingCart } from "react-icons/ti";
import "./cartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {carrito}=useContext(CartContext)
  const {cantidadTotalPokemon} = useContext(CartContext)

  let cantidad = cantidadTotalPokemon()

  return (
    <Link className="linkCartWidget" to="/cart">  
      <div className={ cantidad>=1 ? "contenedorCart-blue": "contenedorCart-white"} >
        <TiShoppingCart className="iconoCart" size={40}/>
        <p className="numero">{ cantidad>=1 && cantidadTotalPokemon()}</p>
      </div>
    </Link>
  )
}

export default CartWidget
