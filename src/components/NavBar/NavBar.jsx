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
            <Link className="elemento" to="/"><li className="elemento">Poke Home</li></Link>
            <Link className="elemento" to="/enConstruccion"><li className="elemento">Entrenadores PokeStore</li> </Link>
            <Link className="elemento" to="/enConstruccion"><li className="elemento">Centro PokeStore</li> </Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar