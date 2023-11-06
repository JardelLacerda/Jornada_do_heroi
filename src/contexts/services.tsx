import { ReactNode, createContext, useState } from "react";
import { TInfoCards } from "./api";

export type TServiceContextProps = {
    fighters: TInfoCards[]
    selectHeroForFigth: ((card: TInfoCards) => void)
}

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

    return ( 
        <ServicesContext.Provider value={{
            selectHeroForFigth,
            fighters
            }}>
            {children}
        </ServicesContext.Provider>
    )
}