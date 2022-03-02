import * as C from './pokemomShildStyled'
import {useNavigate} from 'react-router-dom'


export const PokemonSwolrdShild = () =>{
    const navigate = useNavigate();
    const back = () =>{
        navigate(-1)
    }
    return(
        <>
            <C.Container>
                <C.Center>
                    <div className="headerCenter">
                        <div className="headerInside">
                            <h1>Detonado Sword/Shield</h1>
                        </div>
                       
                    </div>

                        <div className="title">
                            <h1>POSTWICK, A CIDADE AGRÍCOLA</h1>
                        </div>

                        <div className="text">
                            <p>Escolha qual o idioma você quer jogar e a sua aparência (sexo, cor da pele e cor do cabelo).
                                 Escreva o seu nome. O jogo irá informar que a partir de agora o salvamento será automático 
                                 (você pode desabilitar essa função depois). A tela mudará para você assistindo a um vídeo no "PokéTube".
                                  Um homem chamado Rose irá lhe introduzir ao Mundo Pokémon. Ele lhe apresentará Leon,
                                   o campeão da região de Galar. Ele fará uma batalha de exibição. 
                                   Você verá que o Charizard dele irá ficar gigante, então o título do jogo aparecerá.</p>
                        </div>
                        
                </C.Center>


                <C.BackButton onClick={back}>Voltar</C.BackButton>
            </C.Container>
            
        </>
    )
}