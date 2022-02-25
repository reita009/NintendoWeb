import * as C from './styledHeader'; 
import { Link } from 'react-router-dom'
export const Header = () =>{

    return(
        <>
            <C.Container>
                <C.Center>
                    <div className="menu" >
                        <ul >
                            <Link  to="/"><li style={{color:"#ccc"}}>Home</li></Link>
                            <Link to="/sobre"><li style={{color:"#ccc"}}>Sobre</li></Link>
                            <Link to="/contato"><li style={{color:"#ccc"}}>Contato</li></Link>
                            <Link to="/noticias"><li style={{color:"#ccc"}}>Notícias</li></Link>
                        </ul>
                    </div>
                </C.Center>
            </C.Container>
        </>
    )

}