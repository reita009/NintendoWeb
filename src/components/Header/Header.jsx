import * as C from './styledHeader'; 
export const Header = () =>{

    return(
        <>
            <C.Container>
                <C.Center>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Pokemon Swolrd</li>
                            <li>Pokemon Shild</li>
                        </ul>
                    </div>
                </C.Center>
            </C.Container>
        </>
    )

}