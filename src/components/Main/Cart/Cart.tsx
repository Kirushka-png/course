import { CartContainer, CartItemsContainer, CartItemContainer, CartitemName, CartitemPrice, CartitemCounter, CartitemCounterContainer, CartItemButton, AmountContainer, Amount, ApplyButton, EmptyCart } from "../../../styles/Main/Cart/Cart"
import { CartItem } from "../Main"
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Input, MenuItem, Select } from '@mui/material';
import _ from 'lodash'
import Cookies from '../../../utils/Cookies'

interface Props {
    selectedCartItems: CartItem[],
    onChangeItems(newItems: CartItem[]): any
}

export const style = {
    display: "flex",
    "flex-direction": "column",
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


const Cart = ({ selectedCartItems, onChangeItems }: Props) => {

    const [amount, setAmount] = useState<number>(0)
    const [openModal, setOpenModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [data, setData] = useState<any>({ paymentType: "Карта", city: "", region: "", house: "", deliveryType: 1 })

    useEffect(() => {
        setAmount(0)
        selectedCartItems.forEach(item => {
            setAmount(a => (a + (item.count * item.price)))
        });
    }, [selectedCartItems])

    const Changeitem = (id: number, count: number) => {
        const tempItems = selectedCartItems
        tempItems.forEach(item => {
            if (item.id == id) {
                item.count = count
            }
        });
        onChangeItems([...tempItems])
    }
    const Apply = () => {
        if (!Cookies.getCookie("role")?.includes("manager")) {
            fetch("/getUserInfo", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ username: Cookies.getCookie("username"), password: Cookies.getCookie("password") })
            })
                .then((response) => {
                    return response.json();
                })
                .then((d) => {
                    let UserInfo = d.recordset[0]
                    let tempData = { ...data, "Код_заказчика": UserInfo["Код_заказчика"], date: new Date(), price: amount, items: selectedCartItems }
                    console.log(tempData)
                    fetch("/acceptOffer", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(tempData)
                    })
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            onChangeItems([])

                        });
                });
        }
    }

    return (
        <CartContainer>
            {selectedCartItems.length != 0 ?
                <>
                    {
                        selectedCartItems.map((item, idx) => {
                            return (
                                <CartItemsContainer>
                                    <CartItemContainer>
                                        <CartitemName>{item.name}</CartitemName>
                                        <CartitemPrice>{item.price + " RUB x"}</CartitemPrice>
                                        <CartitemCounterContainer>
                                            <CartItemButton onClick={() => { item.count != 1 && Changeitem(item.id, item.count - 1) }}>-</CartItemButton>
                                            <CartitemCounter type="number" value={item.count} onChange={(e) => { const count = parseInt(e.target.value); count != 0 && Changeitem(item.id, count); !e.target.value && Changeitem(item.id, 1) }} />
                                            <CartItemButton onClick={() => { Changeitem(item.id, item.count + 1) }}>+</CartItemButton>
                                        </CartitemCounterContainer>
                                        <CartitemPrice>{"= " + (item.price * item.count) + " RUB"}</CartitemPrice>
                                    </CartItemContainer>
                                </CartItemsContainer>
                            )
                        })
                    }
                    <AmountContainer>
                        <Amount>{"ИТОГО: " + amount + " RUB"}</Amount>
                        <ApplyButton onClick={() => setOpenModal(true)} >Оформить заказ</ApplyButton>
                        <Modal
                            open={openModal}
                            onClose={() => { setOpenModal(false) }}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 800 }}>
                                <h2 id="parent-modal-title">Введите все данные</h2>
                                <p id="child-modal-description">Область</p>
                                <Input value={data.region} onChange={(e) => { let temp = { ...data }; temp.region = e.target.value; setData({ ...temp }) }} />
                                <p id="child-modal-description">Город</p>
                                <Input value={data.city} onChange={(e) => { let temp = { ...data }; temp.city = e.target.value; setData({ ...temp }) }} />
                                <p id="child-modal-description">Улица, дом, квартира</p>
                                <Input value={data.house} onChange={(e) => { let temp = { ...data }; temp.house = e.target.value; setData({ ...temp }) }} />
                                <p id="child-modal-description">Тип оплаты</p>
                                <Select
                                    defaultValue="/getEmployees"
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={data.paymentType}
                                    onChange={(e) => { let temp = { ...data }; temp.paymentType = e.target.value; setData({ ...temp }) }}
                                >
                                    <MenuItem value="Карта">{"Карта"}</MenuItem>
                                    <MenuItem value="Наличные">{"Наличные"}</MenuItem>
                                </Select>
                                <p id="child-modal-description">Вид доставки</p>
                                <Select
                                    defaultValue="/getEmployees"
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={data.deliveryType}
                                    onChange={(e) => { let temp = { ...data }; temp.deliveryType = e.target.value; setData({ ...temp }) }}
                                >
                                    <MenuItem value={1}>{"Почта России"}</MenuItem>
                                    <MenuItem value={2}>{"СДЭК"}</MenuItem>
                                    <MenuItem value={3}>{"Самовывоз"}</MenuItem>
                                </Select>
                                <Button variant="contained" onClick={() => { !_.includes(data, "") ? Apply() : setOpenErrorModal(true) }}>Подтвердить заказ</Button>
                            </Box>
                        </Modal>
                        <Modal
                            hideBackdrop
                            open={openErrorModal}
                            onClose={() => { setOpenErrorModal(false) }}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box sx={{ ...style, width: 400 }}>
                                <h2 id="child-modal-title">Ошибка!</h2>
                                <p id="child-modal-description">
                                    Не все поля заполнены
                                </p>
                                <Button onClick={() => { setOpenErrorModal(false) }}>Закрыть</Button>
                            </Box>
                        </Modal>
                    </AmountContainer>
                </> :
                <EmptyCart>Корзина пуста</EmptyCart>
            }
        </CartContainer>
    )
}
export default Cart;