import * as C from './HomeStyle'

export const Home = () =>{
    const banner ="https://o.remove.bg/downloads/4dc35705-1dd3-425e-a3e4-e4d7094f40b3/lPy97IIGOHyLbZDJu9VVfhiPmU6mE0Lb-removebg-preview.png"

    return(
        <>
            <C.Container>
                    <div className="banner">
                        <img src={banner} />
                    </div>
                    
                <C.Center>
                   <div className="headerCenter">
                       <div className="headerInside">
                           <div className="menu">
                               <ul>
                                   <li>Pokemon Swolrd/Shild </li>
                                   <li>Pokemon Shining Pearl/Brilliant Diamond</li>
                                   <li>Pokemon Legends Arceus</li>
                               </ul>
                           </div>
                       </div>
                   </div>
                </C.Center>
            </C.Container>
        </>
    )
}