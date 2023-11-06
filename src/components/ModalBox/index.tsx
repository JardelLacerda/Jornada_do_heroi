import { useContext } from "react"
import { BoxModal } from "./styled"
import { ServicesContext } from "../../contexts/services"


const ModalBox = () => {

    const {fighters} = useContext(ServicesContext)

    return (
        <BoxModal>
            <div className="herosCards">
                <img src={fighters[0].images.lg} />
                <h3>{fighters[0].name}</h3>
            </div>
            <div className="infos">
                <ul>
                    <li>
                        <span>{fighters[0].powerstats.combat}</span> 
                        <p>Combat</p> 
                        <span>{fighters[1].powerstats.combat}</span>
                    </li>
                    <li>
                        <span>{fighters[0].powerstats.durability}</span>
                        <p>Durability</p>
                        <span>{fighters[1].powerstats.durability}</span>
                        </li>
                    <li>
                        <span>{fighters[0].powerstats.intelligence}</span>
                        <p>Intelligence</p>
                        <span>{fighters[1].powerstats.intelligence}</span>
                        </li>
                    <li>
                        <span>{fighters[0].powerstats.power}</span>
                        <p>Power</p>
                        <span>{fighters[1].powerstats.power}</span>
                        </li>
                    <li>
                        <span>{fighters[0].powerstats.strength}</span>
                        <p>Strength</p>
                        <span>{fighters[1].powerstats.strength}</span>
                        </li>
                </ul>
            </div>
            <div className="herosCards">
                <img src={fighters[1].images.lg} />
                <h3>{fighters[1].name}</h3>
            </div>
        </BoxModal>
    )
}

export default ModalBox