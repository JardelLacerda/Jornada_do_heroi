import styled from "styled-components";

export const SelectContainer = styled.section`
    position: fixed;
    bottom: 0;
    width: 250px;
    height: 150px;
    border: solid 2px #5356FB;
    background-color: #19191E;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    button.start{
        position: absolute;
        width: 50%;
        margin: 0 auto;
        height: 40px;
        background-color: #024e0f;
        color: black;
        font-weight: bolder;
        z-index: 1;
        -webkit-text-stroke: 1px #19191E;
        cursor: pointer;
    }

    img.sword{
        width: 35px;
        height: 35px;
        filter: invert(50%) sepia(50%);
        cursor: pointer;
    }

    img.sword:hover{
        filter: invert(100%) sepia(100%);
    }

    @media (min-width: 800px){
        left: 15px;
        bottom: 20px;
        z-index: 1;
    }

`