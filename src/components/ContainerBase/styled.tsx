import { styled } from "styled-components"


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 90vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    max-width: 2300px;
    position: relative;

    @media (min-width: 800px){
        display: grid;
        grid-template-columns: 2fr 4fr;
        grid-gap: 50px;

    }

    @media (min-width: 1400px){
        grid-template-columns: 1fr 4fr;
    }
` 