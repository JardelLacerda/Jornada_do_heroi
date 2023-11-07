import AsideComponent from "../AsideComponent";
import { MenuHamburguer, ContainerAside } from "./styled"

import { useState, useEffect, MouseEvent } from "react"

const AsideContainer = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


    const toggleOpenMenu = (event: MouseEvent):void => {
        const {tagName} = event.target as HTMLElement 
        
        if(tagName === "BUTTON" || tagName === "SECTION"){
            setOpen(!open)
        }
    }

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ContainerAside>
            <MenuHamburguer onClick={toggleOpenMenu}>Menu</MenuHamburguer>

            {(open || windowWidth >= 800) &&  <AsideComponent toggleOpenMenu={toggleOpenMenu}/>}
        </ContainerAside>
    )
}

export default AsideContainer