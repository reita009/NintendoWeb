import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff7ee;
    padding: 20px;
    display: block;
`;

export const Center = styled.div`
    width: 60%;
    background-color: beige;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;

    .headerCenter{
        width: 100%;
        height: 60px;
        background-color: #051933;
        padding-top: 10px;
        padding-bottom: 10px;
        
    }
    .headerInside{
        background-color: #1D4564;
        width: 100%;
        height: 100%;
        display: flex;
        color: antiquewhite;
        padding: 10px;
        display: flex;  
        
        h1{
            margin: auto;
            position: relative;
            bottom: 8px;
        }
        
    }

    .title{
            width: 100%;
            display: flex;
            padding: 20px;
        }
    .title h1{
        margin: auto;
        color: #051933  ;
    }
    .text{
        margin: 20px;
    }
    
`;

export const BackButton = styled.button`
    padding: 8px;
    background-color: #e84118;
    border: none;
    border-radius: 15px;
    font-size: 25px;
    color: antiquewhite;
    margin-left : 27%;
    margin-top: 30px;
    
    &:hover{
        background-color: #b83818;
        cursor: pointer;
        
    }


    ` 