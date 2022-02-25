import styled from "styled-components";
export const NotFound = () =>{
    const image ="https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/99f44446ca2bf79d18fca7403c712d1c.png?compress=1&resize=1200x900&vertical=top";
    return(
        <>
           <Container>
           <img src={image} alt="" />
           </Container>
        </>
    )
}


const Container = styled.div`
        height: 700px;
        width: 100%;
        background-color: aliceblue;

        img{
            height: 100%;
            width: 100%;
            object-fit:contain;
        }
`;