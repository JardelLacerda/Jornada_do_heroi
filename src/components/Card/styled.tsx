import { styled } from "styled-components"

interface IProps {
    $bgColor: string
}

export const BasicCard = styled.div<IProps>`
    width: 230px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0;
    padding: 5px 10px;
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
    

    figure {
        width: 150px;
        height: 180px;
        padding: 0;
        margin: 10px 0 0 0;
        position: relative;
        
        
        img{
            border-radius: 1rem;
            border: solid 2px ;
            height: 100%;
            width: 100%;
        }
    }

    h2{
        margin: 0;
        padding: 0 15px;
        color: white;
        font-weight: bolder;
        width: 100%;
    }

    button{
        margin: 0;
        padding: 6px 13px;
        font-weight: bold;
        background-color: #5356FB;
        border: solid 1px;
    }
    
    
`