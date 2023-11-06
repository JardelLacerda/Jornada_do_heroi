import { ReactElement, ReactNode, createContext, useState } from "react";
import { TInfoCards, TPowerStats } from "./api";

export type TPlayerWinnerValues = "playerOne" | "plawerTwo" | "tied" | undefined

export type TServiceContextProps = {
    fighters: TInfoCards[]
    selectHeroForFigth: ((card: TInfoCards) => void)
    verifyWinnerAndRenderStats:(() => ReactElement[])
    playerWinner: TPlayerWinnerValues
}

export type TPowerStatsValid = "combat" | "durability" | "intelligence" | "power" | "strength"

export const ServicesContext = createContext<TServiceContextProps>({} as TServiceContextProps)

export const ServicesProvider = ({children}: {children: ReactNode}) => {

    const [fighters, setFighters] = useState<TInfoCards[]>([])

    const selectHeroForFigth = (card: TInfoCards) => {
        
        const alreadyExistHeroInArray = fighters.find((item) => item.id === card.id)

        if(alreadyExistHeroInArray) {
            setFighters([...fighters.filter((item) => item.id !== alreadyExistHeroInArray?.id)])
        }
        
        if(fighters.length < 2 && fighters[0]?.id !== card.id) setFighters([...fighters, card])
    }

    const personOnePowers: TPowerStats =  fighters[0]?.powerstats
    const personTwoPowers: TPowerStats =  fighters[1]?.powerstats

    const [playerWinner, setPlayerWinner] = useState<TPlayerWinnerValues>()
    
    const verifyWinnerAndRenderStats = ():ReactElement[] => {
        const resultsForStatsPersonOne: string[] = [] // Winner, Loser, Tied
        
        const elements = Object.keys(personOnePowers).map((ps) => {
            const personOneWinInStats = personOnePowers[ps as TPowerStatsValid] > personTwoPowers[ps as TPowerStatsValid] ? "win" : 
            personOnePowers[ps as TPowerStatsValid] == personTwoPowers[ps as TPowerStatsValid] ? "tied" : "lose"

            resultsForStatsPersonOne.push(personOneWinInStats)

            const styled1 = {
                color: `${personOneWinInStats === "lose" ? `red` : personOneWinInStats === "win" && `green`}`,
                scale: `${personOneWinInStats === "lose" ? `0.9` :  personOneWinInStats === "win" && `1.05`}`
            }
            const styled2 = {
                color: `${personOneWinInStats === "win" ? `red` : personOneWinInStats === "lose" && `green`}`,
                scale: `${personOneWinInStats === "win" ? `0.9` : personOneWinInStats === "lose" && `1.05`}`
            }

            return (
                <li key={ps}>
                    <span style={styled1}>{personOnePowers[ps as TPowerStatsValid]}</span>
                    <p className="powerStatsName">{ps}</p>
                    <span style={styled2}>{personTwoPowers[ps as TPowerStatsValid]}</span>
                </li>
            )
        })

        let countWInsPersonOne = 0
        
        resultsForStatsPersonOne.forEach((item) => {
            if(item === "win") countWInsPersonOne ++
            if(item === "lose") countWInsPersonOne --
            return
        })

        if(countWInsPersonOne === 0) setPlayerWinner("tied")
        else if(countWInsPersonOne > 0) setPlayerWinner("playerOne")
        else setPlayerWinner("plawerTwo")

        return elements
    }


    return ( 
        <ServicesContext.Provider value={{
            selectHeroForFigth,
            verifyWinnerAndRenderStats,
            fighters,
            playerWinner
            }}>
            {children}
        </ServicesContext.Provider>
    )
}