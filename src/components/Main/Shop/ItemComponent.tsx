import { useState } from 'react'
import cookie from '../../../Images/cookie1.jpg'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ItemContainer, ItemImg, ItemText } from '../../../styles/Main/MainPage/MainPage';
import { Item } from '../Home/Home'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const ModalContainer = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    background-color: white;
`

interface ItemsProps {
    itemInfo: Item
}

export const ItemComponent = ({ itemInfo }: ItemsProps) => {

    const [itemOpened, setItemOpened] = useState<boolean>(false)

    return (
        <>
            <ItemContainer onClick={() => { setItemOpened(true) }}>
                <ItemImg src={cookie} />
                <ItemText>{itemInfo.name}</ItemText>
                <ItemText>{"RUB " + itemInfo.price.toFixed(2)}</ItemText>
            </ItemContainer>
            <Modal
                open={itemOpened}
                onClose={() => {setItemOpened(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalContainer>
                    <ItemContainer onClick={() => { setItemOpened(true) }}>
                        <ItemImg src={cookie} />
                        <ItemText>{itemInfo.name}</ItemText>
                        <ItemText>{"RUB " + itemInfo.price.toFixed(2)}</ItemText>
                    </ItemContainer>
                </ModalContainer>
            </Modal>
        </>
    )
}
export default ItemComponent