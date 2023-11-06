import { CardSelect, SelectContainer } from "./styled"
import SwordImage from "../../assets/sword.png"
import CardEmpty from "../../assets/card-empty.png"
import { useContext, useState } from "react"
import { ServicesContext } from "../../contexts/services"
import { Modal } from "@mui/material"
import ModalBox from "../ModalBox"

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
            >
               <ModalBox/>
            </Modal>
            <CardSelect heroimage={fighters[0]?.images.lg}>
                <div className="banner">
                    {fighters[0] && <button onClick={() => selectHeroForFigth(fighters[0])}>X</button>}
                    <img src={CardEmpty} />
                    <p>{fighters[0]?.name}</p>
                </div>
            </CardSelect>

            <img className="sword" src={SwordImage}/>

            <CardSelect heroimage={fighters[1]?.images.lg}>
                <div className="banner">
                    {fighters[1] && <button onClick={() => selectHeroForFigth(fighters[1])}>X</button>}
                    <img src={CardEmpty} />
                    <p>{fighters[1]?.name}</p>
                </div>
            </CardSelect>
        </SelectContainer>
    )
}

export default SelectHeroi

