import logoPokeStore from "../../assets/imagenes/logoPokeStore.png"
import CartWidget from "./CartWidget"
import "./navBar.css"
import { Link } from "react-router-dom"

const NavBar = () =>{


    return (
        <div className="contenedor">    
            <Link to="/">
                <div className="contenedorImagen">
                     <img className="imagen" src={logoPokeStore} alt="" />
                </div>
            </Link>
            <ul className="lista">
                <li className="elemento">Poke Home</li>
                <li className="elemento">Poke Stickers</li>
                <li className="elemento">Centro PokeStore</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar