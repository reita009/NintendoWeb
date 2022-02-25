import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff7ee;
    padding: 20px;
   
    .banner{
        height: 300px;
        width: 400px;;
        margin: auto;
        object-fit: contain;
    }
    .banner img{
        height: 100%;
        width: 100%;
        
    }
    
`;
export const Center = styled.div`
   
   
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
    .headerInside ul Link{
        color: #ccc;
    }

    .main{
        display: flex;
       
    }
    .left{
        width: 65%;
        height: 100%;
        
    }
    .right{
        width: 35%;
        height: 100%;
        
    }
    .title-left{
        margin: 15px;
        font-size: 13px;
        border-bottom: 2px solid #ccc;
        padding-bottom: 5px;
        
    }
    .desc{
        margin: 15px;
    }

    .desc h1{
        font-size: 40px;
    }
    .desc-main{
        display: flex;
    }
    .desc-main p {
        font-size: 20px;
    }
    .desc-main img{
        height: 400px;
        margin-left: 15px;
        border-radius: 20px;
    }
    .detonados{
        margin-top: 50px;
    }
    .detonados h2{
        font-size: 40px;
    }
    .detonados p{
        margin-top: 40px;
        font-size: 20px;
    }
    .social{
        height: 150px;
        width: 100%;
        background-image: url("https://i.pinimg.com/564x/c9/13/40/c91340f832096e32b50c593c77508295.jpg");
        background-repeat:repeat-x;
        margin-top: 40px;
    }






    //medias query
    @media (max-width:1520px){
        .headerInside{
            height: 80px;
        }
        .headerCenter{
            margin-bottom: 75px;
        }
        .main{
        display:block;
        
        
        }
        .right{
            background-color: pink;
            margin-top: 30px;
            width: 100%;
        }
        .desc h1{
            margin-left:200px;  
            margin-bottom :20px ;
        }
        .desc-main{
            display: block;
        }
        .desc-container{
        width: 100%;
        margin-left: 70px;
        margin-bottom: 30px;
        
        }
        .desc-main img{
            margin-left: 180px;
        }

      
        }

    @media (max-width:1270){
        .desc-main{
        background-color: pink;
        display: block;
        width: 100%;
        
        }
    }

    @media (max-width:990px){
        .headerInside{
            height: 100px;
        }
        
        }  

        @media (max-width:800px){
        .headerInside{
            height: 120px;
        }
        width: 100%;

        }    
`;