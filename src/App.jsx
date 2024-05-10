import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer'


function App() {
 

  return (
    
      <div>
        <NavBar />
        <ItemListContainer texto1="Bienvenido a Poke Store" texto2="La primera tienda de Stickers de Pokémon" texto3="Conseguilos YA !!!" />
        <ItemDetailContainer />
      </div>
      
  )
}

export default App
