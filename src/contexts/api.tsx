import { createContext, useState, ReactNode } from "react";
import { Api } from "../providers/api";

export type TPowerStats = {
    combat: number
    durability: number
    intelligence: number
    power: number
    strength: number
}

export type TInfoCards = {
    id: number
    name: string
    slug: string
    images: {
        lg: string
        md: string
        sm: string
        xs: string
    }
    powerstats: TPowerStats
    appearance: { 
        eyeColor: string
    }
}

export type TApiContextProps = {
    cardsInfos: TInfoCards[]
}

export const ApiContext = createContext<TApiContextProps>({} as TApiContextProps)

export const ApiProvider = ({ children }: {children: ReactNode}) => {

    const [cardsInfos, setCardsInfos] = useState<TInfoCards[]>([])

    Api.get("").then((resp) => {
        setCardsInfos(resp.data)
    }).catch((err) => console.log("erro", err))
   
    return (
        <ApiContext.Provider value={{cardsInfos}}>
            {children}
        </ApiContext.Provider>
    )
}