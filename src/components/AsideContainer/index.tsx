import AsideComponent from "../AsideComponent";
import { MenuHamburguer, ContainerAside } from "./styled"

import { useState, MouseEvent } from "react"

const AsideContainer = () => {
    const [open, setOpen] = useState<boolean>(true)

    const toggleOpenMenu = (event: MouseEvent):void => {
        const {tagName} = event.target as HTMLElement 
        
        if(tagName === "BUTTON" || tagName === "SECTION"){
            setOpen(!open)
        }
    }


    return (
        <ContainerAside>
            <MenuHamburguer onClick={toggleOpenMenu}>Menu</MenuHamburguer>

            {open && <AsideComponent toggleOpenMenu={toggleOpenMenu}/>}
        </ContainerAside>
    )
}

export default AsideContainer