import { TInfoCards } from "../../contexts/api"
import { ServicesContext } from "../../contexts/services"
import { BasicCard } from "./styled"
import { useContext } from "react"

const Card = ({cards}: {cards: TInfoCards}) => {

    const { selectHeroForFigth, fighters } = useContext(ServicesContext)

    return (
        <BasicCard bgcolor={cards.appearance.eyeColor} onDoubleClick={() => selectHeroForFigth(cards)}>
            <figure>
                <img src={cards.images.lg} />
            </figure>

            <h3>{cards.name}</h3>

            <button onClick={() => selectHeroForFigth(cards)}>{fighters.find((item) => item.id === cards.id) === undefined ? "Escolher" : "Remover"}</button>
        </BasicCard>
    )
}

export default Card