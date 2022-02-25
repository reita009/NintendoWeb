//dependencias
import { Routes,  Route} from 'react-router-dom'

//componentes
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Pokemon } from './pages/Pokemon/Pokemon'
import { PokemonSwolrdShild } from './pages/Pokemon/PokemonShild/PokemonSwolrdShild'
import { PokemonShining } from './pages/Pokemon/PokemonShining'
import { NotFound } from './pages/NotFound'
import { PokemonArceus } from './pages/Pokemon/PokemonArceus'
//style Geral
import './App.css'

function App() {
  

  return (
    <>
          <Header/>
         
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <About/> } />
                <Route path="/pokemon" element={ <Pokemon/> } />
                <Route path="/pokemon/swolrd" element={ <PokemonSwolrdShild/> } />
                <Route path="/pokemon/shiningpearl" element={ <PokemonShining/> } />
                <Route path="/pokemon/arceus" element={ <PokemonArceus/> } />
                <Route path="*" element={ <NotFound/> } />
            </Routes>
           
          <Footer/>
       
    </>
  );
}

export default App
