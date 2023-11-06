import { Aside, MenuHamburguer } from "./styled"
import SearchImage from "../../assets/search-len.png"
import { useState, MouseEvent } from "react"

const AsideContainer = () => {
    const [open, setOpen] = useState<boolean>(false)

    const toggleOpenMenu = (event: MouseEvent) => {
        const {tagName} = event.target as HTMLElement 
        
        if(tagName === "BUTTON" || tagName === "SECTION"){
            setOpen(!open)
        }
    }

    return (
        <>
            <MenuHamburguer onClick={toggleOpenMenu}>Menu</MenuHamburguer>
            {open &&
            <Aside onClick={toggleOpenMenu}>
                <button className="closed " onClick={toggleOpenMenu}>X</button>
                <nav>
                    <h2>Heroi Game</h2>
                    <div className="search">
                        <img src={SearchImage} alt="Lupa de Pesquisa"/>
                        <input className="searchInput" placeholder="Qual Heroi Deseja?"/>
                    </div>

                    <ul>
                        <li>home page</li>
                    </ul>
                </nav>

            </Aside>}
        </>
    )
}

export default AsideContainer