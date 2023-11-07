import { useContext } from "react"
import { ApiContext, TInfoCards } from "../../contexts/apiContext"
import Card from "../Card"
import MainContainer from "../MainContainer"

const CardsContainer = () => {
    const { cardsInfos, searchName} = useContext(ApiContext)

    const filterHerosByName = ():TInfoCards[] => {
        if(!searchName) return cardsInfos

        const herosFilterArray = cardsInfos.filter((card) => card.name.toLocaleLowerCase().includes(searchName.toLowerCase()))

    return herosFilterArray
    }
    
    return(
        <MainContainer>
            {filterHerosByName().length > 0 ? filterHerosByName().map((card) => {
                return <Card cards={card} key={card.id}/>
            }) : <h2 className="noSearch">Herois Não encontrados</h2>}
        </MainContainer>
    )
}

export default CardsContainer
