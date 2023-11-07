import { useContext } from "react"
import { ServicesContext } from "../../contexts/ServicesFigthersContext"
import { CardHero } from "./styled"
import MainContainer from "../MainContainer"

const HistoricContainer = () => {
    const { historic } =  useContext(ServicesContext)

    return (
        <MainContainer>
            {historic.map((item, index) => {
                const { winner } = item
                const heroOne = item.data[0]
                const heroTwo = item.data[1]

                const style1 = winner === "playerOne" ? {color: "green", scale: "1.1"} : 
                               winner === "plawerTwo" ? {color: "red", scale: "0.9"} : {color: "white"}
                const style2 = winner === "plawerTwo" ? {color: "green", scale: "1.1"} : 
                               winner === "playerOne" ? {color: "red", scale: "0.9"} : {color: "white"}

                const titleCard = winner === "playerOne" ? `Winner ${heroOne.name}` : 
                                  winner === "plawerTwo" ? `Winner ${heroTwo.name}` : "Tied"

                return (
                    <CardHero key={index}>
                        <h2 className="title">{titleCard}</h2>

                        <div className="heroCard">
                            <img src={heroOne?.images.lg} alt="Hero Picture" style={style1}/>
                            <p>{heroOne?.name}</p>
                        </div>
                        <div className="heroCard">
                            <img src={heroTwo?.images.lg} alt="Hero Picture" style={style2}/>
                            <p>{heroTwo?.name}</p>
                        </div>

                        
                    </CardHero>
                )
            })}
            
        </MainContainer>
    )

}

export default HistoricContainer