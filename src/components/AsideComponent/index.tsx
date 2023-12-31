import { Aside } from "./styled"
import SearchImage from "../../assets/search-len.png"
import { MouseEventHandler, useContext } from "react"
import { ApiContext } from "../../contexts/apiContext"
import { Link } from "react-router-dom"

const AsideComponent = ({toggleOpenMenu}: {toggleOpenMenu?: MouseEventHandler<HTMLButtonElement> | undefined}) => {
    const {setSearchName} = useContext(ApiContext)

    const url = window.location.href.split("/")

    return (
        <Aside onClick={toggleOpenMenu}>
            <button className="closed " onClick={toggleOpenMenu}>X</button>
            <nav>
                <h2>Heroi Game</h2>
                {url[url.length - 1] !== "historic" && 
                
                <div className="search">
                    <img src={SearchImage} alt="Lupa de Pesquisa"/>
                    <input className="searchInput" placeholder="Qual Heroi Deseja?" onChange={(ev) => setSearchName(ev.target.value)}/>
                </div>}

                <div className="navegation">
                    <Link className="link" to="/">home page</Link>
                    <Link className="link" to="/historic">Historico</Link>
                </div>
            </nav>

        </Aside>
    )
}

export default AsideComponent