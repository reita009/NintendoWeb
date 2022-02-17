import  styled from 'styled-components'

export const Container = styled.header`
    background-color: #051933;
    width: 100%;
    height: 80px;
    padding-top: 9px;
`;

export const Center = styled.div`
    background-color: #1D4564;
    width: 100%;
    height: 60px;
    display: flex;

    .menu{
        margin: auto;
    }
    .menu ul{
        display: flex;
        color: #f0e8d9;
    }
    .menu ul li{
        margin-left: 28px;
        font-size: 20px;
        list-style: none;
    }
`;