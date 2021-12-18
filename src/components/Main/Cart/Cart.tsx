import { CartContainer, CartItemsContainer, CartItemContainer, CartitemName, CartitemPrice, CartitemCounter, CartitemCounterContainer, CartItemButton, AmountContainer, Amount, ApplyButton, EmptyCart } from "../../../styles/Main/Cart/Cart"
import { CartItem } from "../Main"
import { useState, useEffect } from 'react'

interface Props {
    selectedCartItems: CartItem[],
    onChangeItems(newItems: CartItem[]): any
}

const Cart = ({ selectedCartItems, onChangeItems }: Props) => {

    const [amount, setAmount] = useState<number>(0)

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
        onChangeItems([])
    }

    return (
        <CartContainer>
            { selectedCartItems.length != 0 ?
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
                    <ApplyButton onClick={() => Apply()} >Подтвердить заказ</ApplyButton>
                </AmountContainer>
                </> :
                <EmptyCart>Корзина пуста</EmptyCart>
            }
        </CartContainer>
    )
}
export default Cart;