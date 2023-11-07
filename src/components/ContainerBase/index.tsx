import { Container } from "./styled"
import { ReactElement } from "react"

const ContainerBase = ({children}: {children: ReactElement[] | ReactElement}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContainerBase