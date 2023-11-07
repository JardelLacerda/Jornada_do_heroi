import { styled } from "styled-components"

export const CardHero = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 10px 5px;

    box-sizing: border-box;
    border-radius: 15px;
    border: solid 1px white;
    background-color: #282c34;
    background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%);
    box-shadow: 0 7px 20px 5px #00000088;
    transition: 0.15s;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: .5s all;

    ::before{
        position: fixed;
        content: "";
        box-shadow: 0 0 100px 40px #ffffff08;
        top: -10%;
        left: -100%;
        transform: rotate(-45deg);
        height: 60rem;
        transition: .7s all;
    }

    &:hover{
        scale: 1.05;
        border: 1px solid #ffffff44;
        box-shadow: 0 7px 50px 10px #000000aa;
        filter: brightness(1.3);

        ::before{
            filter: brightness(.5);
            top: -100%;
            left: 200%;
        }
    }

    h2.title{
        position: absolute;
        top: -20px;
    }

    div.heroCard{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-top: 25px;

        img{
            width: 100px;
            height: 100px;
            margin: 0;
            padding: 0;
            border-radius: 100%;
            border: solid 5px;
        }

        p{
            margin: 0;
            padding: 0;
            font-weight: bolder;
            font-size: 1.2rem;
            text-align: center;
            color: white;
        }
    }
`