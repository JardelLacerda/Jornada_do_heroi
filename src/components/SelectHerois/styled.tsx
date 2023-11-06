import styled from "styled-components";

interface IProps {
    heroimage: string
}

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

`

export const CardSelect = styled.div<IProps>`
        width: 40%;
        height: 100%;
        border-radius: 5px;

        .banner{
            ${({heroimage}) => 
                heroimage ? `background-image: url(${heroimage});` 
                : `background-image: none`
            }
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            position: relative;

            img{
                width: 100%;
                height: 100%;
                margin-left: -1px;
            }

            p{
                position: absolute;
                bottom: 5px;
                text-align: center;
                width: 100%;
                color: white;
                -webkit-text-stroke: 1px #19191E;
                font-weight: bolder;
            }

            button{
                position: absolute;
                margin: 0;
                padding: 0 5px;
                right: -5px;
                top: -5px;
                background-color: #e25a5a
            }

        }

`