import { useContext } from "react"
import { BoxModal } from "./styled"
import { ServicesContext } from "../../contexts/services"
import WinnerBanner from "../../assets/winner-banner.png"
import TiedBanner from "../../assets/tied-banner.png"

const ModalBox = () => {

    const {fighters, verifyWinnerAndRenderStats, playerWinner} = useContext(ServicesContext)
    return (
        <BoxModal>
            <div className="herosCards">
                {playerWinner === "playerOne" && <img className="winnerBanner" src={WinnerBanner}/>}
                {playerWinner === "tied" && <img className="tiedBanner" src={TiedBanner}/>}
                <img className="heroPicture" src={fighters[0].images.lg} />
                <h3>{fighters[0].name}</h3>
            </div>
            <div className="infos">
                <ul>
                    {verifyWinnerAndRenderStats()}
                </ul>
            </div>
            <div className="herosCards">
                {playerWinner === "plawerTwo" && <img className="winnerBanner" src={WinnerBanner}/>}
                {playerWinner === "tied" && <img className="tiedBanner" src={TiedBanner}/>}
                <img className="heroPicture" src={fighters[1].images.lg} />
                <h3>{fighters[1].name}</h3>
            </div>
        </BoxModal>
    )
}

export default ModalBox