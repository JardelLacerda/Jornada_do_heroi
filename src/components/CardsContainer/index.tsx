import { useContext } from "react"
import { ApiContext, TInfoCards } from "../../contexts/apiContext"
import { Main } from "./styled"
import Card from "../Card"

const CardsContainer = () => {
    const { cardsInfos, searchName} = useContext(ApiContext)

    const filterHerosByName = ():TInfoCards[] => {
        if(!searchName) return cardsInfos

        const herosFilterArray = cardsInfos.filter((card) => card.name.toLocaleLowerCase().includes(searchName.toLowerCase()))

    return herosFilterArray
    }
    
    return(
        <Main>
            {filterHerosByName().length > 0 ? filterHerosByName().map((card) => {
                return <Card cards={card} key={card.id}/>
            }) : <h2 className="noSearch">Não Foi possível encontrar o heroi de nome: {searchName}</h2>}
        </Main>
    )
}

export default CardsContainer
