import * as C from './HomeStyle'
import { Link } from 'react-router-dom'

export const Home = () =>{
    const banner ="https://i.pinimg.com/originals/b7/e4/ff/b7e4ff1601b5d9acd4f2b01bf84fef12.png"
    const image = "https://i.pinimg.com/564x/40/b7/13/40b713a114de0f8e67b89661746bd56a.jpg"
    return(
        <>
            <C.Container>
                    <div className="banner">
                        <img src={banner}  alt=""/>
                    </div>
                    
                <C.Center>
                   <div className="headerCenter">
                       <div className="headerInside">
                           <div className="menu">
                               <ul>
                                    <Link to="/pokemon/swolrd"><li style={{color:"#ccc"}}>Pokemon Swolrd/Shild </li></Link>
                                   <Link to="/pokemon/shiningpearl"><li style={{color:"#ccc"}}>Pokemon Shining Pearl/Brilliant Diamond</li></Link>
                                   <Link to="/pokemon/arceus"><li style={{color:"#ccc"}}>Pokemon Legends Arceus</li></Link>
                               </ul>
                           </div>
                       </div>
                   </div>

                   <div className="main">
                        <div className="left">
                            <div className="title-left">
                                <h2>Inicio do Detonado</h2>
                            </div>
                            <div className="desc">
                                <h1>Detonado</h1>

                                <div className="desc-main">
                                    <div className="desc-container">
                                        <p>Trancado em algum jogo? Estamos aqui para ajudar.
                                        Nesta página reunimos detonados de vários jogos da série Pokemon,
                                        alguns escritos por nós, alguns enviados por outros fãs. 
                                        Como nem todos os detonados são nossos, direcione dúvidas sempre aos respectivos autores.
                                        Não nos responsabilizamos por erros ou inconsistências em material que não seja de nossa autoria.
                                        Caso esteja escrevendo algum detonado e queira nos enviar para ser divulgado neste espaço,
                                        veja nossa página de contato. O guia necessita estar pelo menos em torno de 80% concluído e deve constar nome e contato do autor.
                                        </p>
                                    </div>
                                    <div>
                                    <img src={image} alt="" />
                                    </div>
                                       
                                 </div>

                                 <div className="detonados">
                                     <h2>Pokemon</h2>
                                     <p>Swolrd/Shild</p>
                                     <p>Arceus</p>
                                     <p>Pokemon Shining Pearl/Brilliant Diamond</p>
                                 </div>

                            </div>
                        </div>

                        <div className="right">
                            <div className="social">

                            </div>
                        </div>
                   </div>
                </C.Center>
            </C.Container>
        </>
    )
}