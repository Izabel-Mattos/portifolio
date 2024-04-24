import styled from "styled-components";

export const Main = styled.main`
border: solid 2px red;
height: 100vh;
display: flex;
@media (max-width: 500px){
    flex-direction: column;
}
`
export const Container = styled.section`
border: solid blue 2px;
display: flex;
justify-content:center;
align-items: center;
width:100%;


div{
    border: solid red 5px;
    width: 50%;
}

`;