import logoPokeStore from "../../assets/imagenes/logoPokeStore.png"
import CartWidget from "./CartWidget"
import "./navBar.css"

const NavBar = () =>{


    return (
        <div className="contenedor">    
            <div className="contenedorImagen">
                <img className="imagen" src={logoPokeStore} alt="" />
            </div>
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