import { ReactElement, ReactNode, createContext, useState, useEffect } from "react";
import { TInfoCards, TPowerStats } from "./apiContext";

export type TPlayerWinnerValues = "playerOne" | "plawerTwo" | "tied" | undefined

export type THistoric = {
    winner: TPlayerWinnerValues
    data: TInfoCards[]
}

export type TServiceContextProps = {
    selectHeroForFigth: ((card: TInfoCards) => void)
    counterWinnerAndRenderStats:(() => ReactElement[])
    savedFigther: (() => void)
    fighters: TInfoCards[]
    playerWinner: TPlayerWinnerValues
    historic: THistoric[]
    
}

export type TPowerStatsValid = "combat" | "durability" | "intelligence" | "power" | "strength"

export const ServicesContext = createContext<TServiceContextProps>({} as TServiceContextProps)

export const ServicesProvider = ({children}: {children: ReactNode}) => {

    const [fighters, setFighters] = useState<TInfoCards[]>([])
    const [historic, setHistoric] = useState<THistoric[]>([])
    const [playerWinner, setPlayerWinner] = useState<TPlayerWinnerValues>()

    const selectHeroForFigth = (card: TInfoCards) => {
        
        const alreadyExistHeroInArray = fighters.find((item) => item.id === card.id)

        if(alreadyExistHeroInArray) {
            setFighters([...fighters.filter((item) => item.id !== alreadyExistHeroInArray?.id)])
        }
        
        if(fighters.length < 2 && fighters[0]?.id !== card.id) setFighters([...fighters, card])
    }

    const personOnePowers: TPowerStats =  fighters[0]?.powerstats
    const personTwoPowers: TPowerStats =  fighters[1]?.powerstats


    const counterWinnerAndRenderStats = ():ReactElement[] => {
        
        const elements = Object.keys(personOnePowers).map((ps) => {
            const personOneWinInStats = personOnePowers[ps as TPowerStatsValid] > personTwoPowers[ps as TPowerStatsValid] ? "win" : 
            personOnePowers[ps as TPowerStatsValid] == personTwoPowers[ps as TPowerStatsValid] ? "tied" : "lose"

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

        return elements
    }

    const verifyWinner = () => {
        // Codigo Duplicado, preciso melhorar essas duas funções verifyWinner e counterWinnerAndRenderStats - A Fazer
        const resultsForStatsPersonOne: string[] = [] // Winner, Loser, Tied

        Object.keys(personOnePowers).map((ps) => {
            
            const personOneWinInStats = personOnePowers[ps as TPowerStatsValid] > personTwoPowers[ps as TPowerStatsValid] ? "win" : 
            personOnePowers[ps as TPowerStatsValid] == personTwoPowers[ps as TPowerStatsValid] ? "tied" : "lose"

            resultsForStatsPersonOne.push(personOneWinInStats)
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
    }

    const savedFigther = ():void => {

        const alreadyExist = historic.find((item) => 
        (item.data[0].id === fighters[0].id || item.data[0].id === fighters[1].id) && 
        (item.data[0].id === fighters[1].id || item.data[1].id === fighters[1].id))

        if(alreadyExist) return

        const newHistoric: THistoric = {
            data: fighters,
            winner: playerWinner
        }

        setHistoric([...historic, newHistoric])

        return
    }


    useEffect(() => {
        if (fighters?.length === 2) verifyWinner()

    }, [fighters])

    useEffect(() => {
        const historiLocal: THistoric[] = JSON.parse(localStorage.getItem("historic") as string)

        if(historiLocal?.length > 0) setHistoric([...historiLocal])

    }, [])

    useEffect(() => {
        localStorage.setItem("historic", JSON.stringify(historic))
    }, [historic])

    return ( 
        <ServicesContext.Provider value={{
            selectHeroForFigth,
            counterWinnerAndRenderStats,
            savedFigther,
            fighters,
            playerWinner,
            historic
            }}>
            {children}
        </ServicesContext.Provider>
    )
}