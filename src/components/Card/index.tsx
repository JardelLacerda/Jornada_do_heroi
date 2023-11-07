import { TInfoCards } from "../../contexts/apiContext"
import { ServicesContext } from "../../contexts/ServicesFigthersContext"
import { BasicCard } from "./styled"
import { useContext } from "react"

const Card = ({cards}: {cards: TInfoCards}) => {

    const { selectHeroForFigth, fighters } = useContext(ServicesContext)

    return (
        <BasicCard $bgColor={cards.appearance.eyeColor} onDoubleClick={() => selectHeroForFigth(cards)}>
            <figure>
                <img src={cards.images.lg} />
            </figure>

            <h2>{cards.name} #{cards.id}</h2>

            <button onClick={() => selectHeroForFigth(cards)}>{fighters.find((item) => item.id === cards.id) === undefined ? "Escolher" : "Remover"}</button>

        </BasicCard>
    )
}

export default Card