import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>  
          <Route path='/' element={<ItemListContainer texto1="Bienvenido a Poke Store" texto2="La primera tienda de Stickers de Pokémon" texto3="Buscalos y Atrapalos YA !!!" />}     />
          <Route path='/tipo/:idTipo' element={<ItemListContainer texto1="Bienvenido a Poke Store" texto2="La primera tienda de Stickers de Pokémon" texto3="Busca el tipo que te guste y Atrapalos YA !!!" />}     />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App
