import styled from "styled-components";

export const Main = styled.main`
border: solid 2px red;
height: 100vh;
display: flex;
@media (max-width: 500px){
    flex-direction: column;
}
`;

export const Container = styled.section`
border: solid blue 2px;
align-items: center;
width:100%;

div{
    border: solid red 5px;
    width: 50%;
}
`;
export const Div = styled.div`
background-color:yellow;
width: 100%;
    

`

export const Banner = styled.section`
    
    height: 30vh;
    width: 100%;

`