import { styled } from "styled-components"


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    margin-top: 70px;
    width: 100%;
    
    @media (min-width: 800px){
        margin: 20px 50px 0 0 ;
        width: 90%;
        flex-direction: row;
        flex-wrap: wrap;
    }
`