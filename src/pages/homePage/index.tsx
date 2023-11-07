import AsideContainer from "../../components/AsideContainer"
import CardsContainer from "../../components/CardsContainer"
import ContainerBase from "../../components/ContainerBase"
import SelectHeroi from "../../components/SelectHerois"


const HomePage = () => {
    
    return(
        <ContainerBase>
            <AsideContainer/>
            <CardsContainer/>
            <SelectHeroi/>
        </ContainerBase>
    )
}

export default HomePage
