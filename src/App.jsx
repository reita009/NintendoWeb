//dependencias
import { Routes,  Route} from 'react-router-dom'

//componentes
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
//style Geral
import './App.css'

function App() {
  

  return (
    <>
          <Header/>
         
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <About/> } />
            </Routes>
           
          <Footer/>
       
    </>
  );
}

export default App
