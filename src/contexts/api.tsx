import { createContext, useState, ReactNode } from "react";
import { Api } from "../providers/api";

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
    powerstats: {
        combat: number
        durability: number
        intelligence: number
        power: number
        strength: number
    }
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
    })
   
    return (
        <ApiContext.Provider value={{cardsInfos}}>
            {children}
        </ApiContext.Provider>
    )
}