import { useState } from 'react'
import cookie from '../../../Images/cookie1.jpg'
import Modal from '@mui/material/Modal';
import { ItemContainer, ItemImg, ItemText, ModalHeader, ModalBody, ModalTitle, ItemDescription, ItemCounter, BuyItemButton } from '../../../styles/Main/MainPage/MainPage';
import { Item } from '../Home/Home'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const ModalContainer = styled(Box)`
    display:flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    padding: 1rem;
    background-color: rgb(230, 199, 199);
    color:#212529;
`

interface ItemsProps {
    itemInfo: Item
}

export const ItemComponent = ({ itemInfo }: ItemsProps) => {

    const [itemOpened, setItemOpened] = useState<boolean>(false)
    const [itemCount, setItemCount] = useState<number>(1)

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
                    <ModalHeader>
                        <ModalTitle>
                            {itemInfo.name}
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <ItemImg src={cookie} />
                        <ItemContainer>
                            <ItemText>{itemInfo.name}</ItemText>
                            <ItemText>{"RUB " + itemInfo.price.toFixed(2)}</ItemText>
                            <ItemText>ОПИСАНИЕ</ItemText>
                            <ItemDescription>
                                Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.
                            </ItemDescription>
                            <ItemText>КОЛИЧЕСТВО</ItemText>
                            <ItemCounter type='number' onChange={(e) => {const count = parseInt(e.target.value); count != 0 && setItemCount(count); !e.target.value && setItemCount(1)}} value={itemCount}/>
                            <BuyItemButton>Добавить в корзину</BuyItemButton>
                        </ItemContainer>
                    </ModalBody>
                </ModalContainer>
            </Modal>
        </>
    )
}
export default ItemComponent