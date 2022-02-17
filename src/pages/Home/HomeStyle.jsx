import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff7ee;
    padding: 20px;
    .banner{
        height: 200px;
        width: 300px;;
        margin: auto;
    }
    .banner img{
        height: 100%;
        width: 100%;
        
    }
`;
export const Center = styled.div`
    
    height: 800px;
    width: 60%;
    background-color: beige;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    .headerCenter{
        width: 100%;
        height: 60px;
        background-color: #051933;
        padding-top: 10px;
        
    }
    .headerInside{
        background-color: #1D4564;
        width: 100%;
        height: 40px;
        display: flex;
        color: antiquewhite;
        padding: 10px;
        display: flex;  
    }
    .menu{
        margin: auto;
    }
    .headerInside ul{
        display: flex;
    }
    .headerInside ul li{
        list-style: none;
        margin-left: 20px;
        font-size: 20px;
    }
`;