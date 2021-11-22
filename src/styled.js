import styled from "styled-components";

export const Title = styled.h1`
   font-family: arial;
   text-align: center;
   margin-top: 55px;
   span{
       color: #378FAE;
   }
`;

export const Infor = styled.div`
    display: flex;
   margin-left: 70vh;
   input{
       padding: 2%;
       width: 14vw;
       background-color: #BAB8B5;
       border: none;
       font-weight: bolder;
       font-size: 20px;
   }
   button{
       margin-left: 10px;
       border: none;
       padding: 2%;
       background-color: #378FAE;
       color: white;
       font-weight: 900;
   }
   button:hover{
    background-color: rgba(64, 129, 204, 0.589);
   }
`;

export const Main = styled.div`
   background-color: #BAB8B5;
   width: 80vw;
   padding: 1%; 
   margin: 55px 0 0 150px;
   font-family: georgia;
   h1{
    color: #4169E1;
    text-align: center; 
   }
   p{
       text-align: center; 
       font-weight: bold;
   }
`;



export const Section = styled.div`
   background-color: white;
   display:flex;
   justify-content: space-between;
   padding: 2%;
   color: #054F77;
   margin-top: 35px;
   border-radius: 8px;
    border: solid 3px #4169E1;
   div{
     margin-right: 250px;
     display: flex;
    flex-direction: column;
    align-items: baseline;
   }
   article{
    display: flex;
    flex-direction: column;
    align-items: baseline;  
   }
   span{
       color: gray;
   }
`;