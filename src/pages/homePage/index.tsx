import AsideContainer from "../../components/AsideContainer"
import CardsContainer from "../../components/CardsContainer"
import SelectHeroi from "../../components/SelectHerois"
import { Container } from "./styled"


const HomePage = () => {
    
    return(
        <Container>
            <AsideContainer/>
            <CardsContainer/>
            <SelectHeroi/>
        </Container>
    )
}

export default HomePage
