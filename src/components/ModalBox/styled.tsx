import { styled } from "styled-components"

export const BoxModal = styled.section`
    width: 80%;
    max-width: 600px;
    min-height: 350px;
    border: solid 3px #5356FB;
    border-radius: 10px;
    background-color: #19191E;
    margin: 50% auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 15px 0;
    box-sizing: border-box;

    div.herosCards{
        width: 80%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        img{
            width: 100%;
            max-width: 200px;
            height: 70%;
            margin: 0;
            padding: 0;
        }

        h3{
            color: white;
            -webkit-text-stroke: 1px #19191E;
            font-weight: bolder;
            text-align: center;
            margin: 0;
            padding: 0;

        }

    }

    div.infos{
        width: 100%;

        ul{
            list-style: none;
            width: 100%;
            margin: 20px auto;
            padding: 0;

            li{
                width: 90%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;

                p{
                    color: #5356FB;

                    font-weight: bolder;
                }
            }
        }
    }
`