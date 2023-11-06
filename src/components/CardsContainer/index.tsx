import { useContext } from "react"
import { ApiContext } from "../../contexts/api"
import { Main } from "./styled"
import Card from "../Card"

const CardsContainer = () => {
    const { cardsInfos } = useContext(ApiContext)

    return(
        <Main>
            {cardsInfos?.map((card) => {
                return <Card cards={card} key={card.id}/>
            })}
        </Main>
    )
}

export default CardsContainer
