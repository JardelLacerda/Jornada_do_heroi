import { createContext, useState, ReactNode } from "react";
import Api  from "../providers/api";

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
    searchName: string
    setSearchName: ((searchName: string) => void)

}

export const ApiContext = createContext<TApiContextProps>({} as TApiContextProps)

export const ApiProvider = ({ children }: {children: ReactNode}) => {

    const [cardsInfos, setCardsInfos] = useState<TInfoCards[]>([])
    const [searchName, setSearchName] = useState<string>("")

    Api.get("").then((resp) => {
        if (resp && resp.status === 200) return setCardsInfos(resp.data)

        console.log("Erro na resposta da API:", resp);
        
    }).catch((err) => console.log("erro api", err))


    return (
        <ApiContext.Provider value={{cardsInfos, setSearchName, searchName}}>
            {children}
        </ApiContext.Provider>
    )
}