import { Aside } from "./styled"
import SearchImage from "../../assets/search-len.png"
import { MouseEventHandler, useContext } from "react"
import { ApiContext } from "../../contexts/apiContext"


const AsideComponent = ({toggleOpenMenu}: {toggleOpenMenu?: MouseEventHandler<HTMLButtonElement> | undefined}) => {
    const {setSearchName} = useContext(ApiContext)

    return (
        <Aside onClick={toggleOpenMenu}>
            <button className="closed " onClick={toggleOpenMenu}>X</button>
            <nav>
                <h2>Heroi Game</h2>
                <div className="search">
                    <img src={SearchImage} alt="Lupa de Pesquisa"/>
                    <input className="searchInput" placeholder="Qual Heroi Deseja?" onChange={(ev) => setSearchName(ev.target.value)}/>
                </div>

                <ul>
                    <li>home page</li>
                </ul>
            </nav>

        </Aside>
    )
}

export default AsideComponent