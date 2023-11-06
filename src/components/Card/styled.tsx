import { styled } from "styled-components"

interface IProps {
    bgcolor: string
}

export const BasicCard = styled.div<IProps>`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 15px 15px 0 0;
    border: solid 1px white;
    ${({bgcolor}) => `
        background-color: ${bgcolor};
    `}
    transition: 0.15s;

    &:hover{
        scale: 1.05

    }
    

    figure {
        width: 120px;
        height: 150px;
        
        padding: 0;
        margin: 0;
        position: relative;

        img{
            border-radius: 10px 10px 0 0;
            height: 100%;
            width: 100%;
        }
    }

    h3{
        margin: 0;
        color: white;
        font-weight: bolder;
        text-transform: uppercase;
        -webkit-text-stroke: 1px #19191E;
        text-align: center;
    }

    button{
        margin: 0;
        padding: 6px 13px;
        font-weight: bold;
        background-color: #5356FB;
        border: solid 1px;
    }


`