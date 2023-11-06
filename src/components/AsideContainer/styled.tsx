import styled from "styled-components"

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
`

export const Aside = styled.section`
    border: none;
    width: 100%;
    background-color: rgba(12,12,12,0.6) ;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: fixed;
    z-index: 1;
    cursor: pointer;
    min-height: 500px;
    height: 100vh;
    overflow: hidden;

    .closed{
        font-size: 25px;
        margin: 10px 15px;
        padding: 0;
        box-sizing: border-box;
        float: right;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        color: #c0c0c0;
    }

    nav{
        margin: 0;
        padding: 15px 10px;
        width: 65%;
        max-width: 320px;
        height: 100%;
        border: none;
        border-right: solid 1px white;
        background-color: #19191E;
        box-sizing: border-box;
        text-transform: uppercase;
        cursor: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        h2{
            margin: 0;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        
            li{
                text-align: center;
                border-radius: 10px;
                background-color: #5356FB;
                padding: 5px 15px;
                cursor: pointer;
            }
        }

        .search{
            display: flex;
            flex-direction: row;
            background-color: #19191E;
            border: solid 1px #5356FB;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            align-items: center;
            justify-content: space-between;

            img{
                width: 20px;
                height: 20px;
                filter: invert(100%);
            }

            .searchInput{
                width: 100%;
                border: none;
                padding: 8px 5px;
                background-color: #19191E;
                outline: none;
            }
            .searchInput::placeholder{
                color: rgba(250,250,250,0.5);
            }
        }

        
    }
`

