import { CardSelect } from "./styled"
import CardEmpty from "../../assets/card-empty.png"
import { TInfoCards } from "../../contexts/apiContext"


const SelectCard = ({fighter, action}: {fighter: TInfoCards, action: ((card: TInfoCards) => void)}) => {
    return (
        <CardSelect $heroimage={fighter?.images.lg}>
            <div className="banner">
                {fighter && <button onClick={() => action(fighter)}>X</button>}
                <img src={CardEmpty} />
                <p>{fighter?.name}</p>
            </div>
        </CardSelect>
    )
}

export default SelectCard