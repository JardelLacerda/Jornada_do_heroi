import { styled } from "styled-components"

export const BoxModal = styled.section`
    width: 80%;
    max-width: 600px;
    min-height: 350px;
    border: solid 3px #5356FB;
    border-radius: 10px;
    background: rgb(2,0,36);
    background: radial-gradient(circle,
        rgba(2,0,36,1) 0%, 
        rgba(52,22,2,1) 47%, 
        rgba(9,9,121,1) 79%, 
        rgba(0,212,255,1) 100%);
    margin: 20% auto;

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
        position: relative;
        
        img.heroPicture{
            width: 100%;
            max-width: 200px;
            height: 70%;
            margin: 0;
            padding: 0;
           
        }

        img.winnerBanner, img.tiedBanner{
            width: 100%;
            max-width: 230px;
            position: absolute;
            bottom: 20px;
        }

        img.tiedBanner{
            bottom: -15px;
        }

        h3{
            color: white;
            -webkit-text-stroke: 1px #19191E;
            font-weight: bolder;
            text-align: center;
            margin: 0;
            padding: 0;
            z-index: 1;
        }

    }

    div.infos{
        width: 100%;

        ul{
            list-style: none;
            width: 100%;
            margin: 20px auto;
            padding: 0;
            display: flex;

            li{
                width: 90%;
                margin: 0 auto;
                gap: 20px;
                display: grid;
                grid-template-rows: 1fr, 5fr, 1fr;
                justify-content: center;

                p.powerStatsName{
                    color: white;
                    -webkit-text-stroke: 1px #5356FB;
                    font-weight: bolder;
                    text-transform: uppercase;
                    text-align: center;
                    width: 10px;
                    height: 230px;
                    width:1px;
                    word-wrap: break-word;
                    font-family: monospace; 
                    white-space: pre-wrap;
                }

                span{
                    height: 30px;
                    font-weight: bold;
                }
            }
        }
    }
`