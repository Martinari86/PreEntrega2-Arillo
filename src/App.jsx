import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavFiltros from './components/NavBar/NavFiltros'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Enconstruccion from './components/Enconstruccion/Enconstruccion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  return (
    <div>
      {/* Se envuelve con componenete de navegacion */}
      <BrowserRouter>
        {/* Se envuelve con el contexto */}
        <CartProvider>
            <NavBar />
            {/* Se declara el componenete de TOAST */}
            <ToastContainer theme="light" />
            <div className="mainContainer">  
              {/*Componenete que engloba las rutas */}
              <Routes>  
                {/* Componente para declarar la Ruta que queremos y se asigna el componenete */}
                <Route path='/' element={<ItemListContainer 
                                          texto1="Bienvenido a Poke Store" 
                                          texto2="La primera tienda de Stickers de Pokémon" 
                                          texto3="Busca el tipo que te guste y Atrapalos YA !!!" />}     
                />
                <Route path='/tipo/:idTipo' element={<ItemListContainer 
                                            texto1="Bienvenido a Poke Store" 
                                            texto2="La primera tienda de Stickers de Pokémon" 
                                            texto3="Busca el tipo que te guste y Atrapalos YA !!!" />}     
                />
               <Route path='/detalle/:id' element={<ItemDetailContainer />} />
               <Route path='/cart' element={<Cart />} /> 
               <Route path="/checkout" element={<Checkout />} /> 
               <Route path="/enConstruccion" element={<Enconstruccion />} /> 
              </Routes>
            </div>
        </CartProvider>
      </BrowserRouter>
    </div>  
  )
}

export default App
