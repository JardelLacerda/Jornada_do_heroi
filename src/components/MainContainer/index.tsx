import { ReactElement } from "react"
import { Main } from "./styled"

const MainContainer = ({children} : {children: ReactElement[] | ReactElement}) => {
    return (
        <Main>
            {children}
        </Main>
    )
}

export default MainContainer