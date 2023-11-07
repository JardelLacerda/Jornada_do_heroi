import styled from "styled-components"

interface IProps {
    $heroimage: string
}

export const CardSelect = styled.div<IProps>`
        width: 40%;
        height: 100%;
        border-radius: 5px;

        .banner{
            ${({$heroimage}) => 
                $heroimage ? `background-image: url(${$heroimage});` 
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