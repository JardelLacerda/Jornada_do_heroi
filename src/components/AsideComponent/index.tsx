import { Aside } from "./styled"
import SearchImage from "../../assets/search-len.png"
import { MouseEventHandler } from "react"


const AsideComponent = ({toggleOpenMenu}: {toggleOpenMenu?: MouseEventHandler<HTMLButtonElement> | undefined}) => {
    return (
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

        </Aside>
    )
}

export default AsideComponent