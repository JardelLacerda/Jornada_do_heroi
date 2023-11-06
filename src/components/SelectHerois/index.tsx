import { SelectContainer } from "./styled"
import SwordImage from "../../assets/sword.png"
import { useContext, useState } from "react"
import { ServicesContext } from "../../contexts/ServicesFigthersContext"
import { Modal } from "@mui/material"
import ModalBox from "../ModalBox"
import SelectCard from "../SelectCard"

const SelectHeroi = () => {
    const { fighters, selectHeroForFigth } = useContext(ServicesContext)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <SelectContainer>
            {fighters.length === 2 && <button onClick={handleOpen} className="start">Iniciar</button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                style={{display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <ModalBox/>
            </Modal>

            <SelectCard fighter={fighters[0]} action={selectHeroForFigth}/>

            <img className="sword" src={SwordImage}/>

            <SelectCard fighter={fighters[1]} action={selectHeroForFigth}/>
           
        </SelectContainer>
    )
}

export default SelectHeroi

