import "./navFiltros.css"
import { Link } from "react-router-dom"

const NavFiltros = () => {
  return (
    <div>
          <div className="contenedorFiltro">    
            <ul className="listaFiltro">
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Agua">Agua</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Bicho">Bicho</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Dragón">Dragón</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Eléctrico">Eléctrico</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Fantasma">Fantasma</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Fuego">Fuego</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Hada">Hada</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Hielo">Hielo</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Lucha">Lucha</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Normal">Normal</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Planta">Planta</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Psíquico">Psíquico</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Roca">Roca</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Tierra">Tierra</Link></li>
                <li className="tipoFiltro"><Link className="linkFiltro" to="/tipo/Veneno">Veneno</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavFiltros
