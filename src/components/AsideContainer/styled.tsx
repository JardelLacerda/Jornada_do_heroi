import styled from "styled-components"


export const ContainerAside = styled.section`
`

export const MenuHamburguer = styled.button`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    border: none;
    border-bottom: solid 2px #5356FB;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 0;
    outline: none;

    @media (min-width: 800px){
        display: none;
    }
`