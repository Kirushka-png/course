import styled from 'styled-components'

export const CartContainer = styled.div`
    width:80%;
    gap: 10px;
    display: flex;
    flex-direction: column;
`

export const CartItemsContainer = styled.div`
    width: calc(100%-40px);
    height: max-content;
    padding: 20px;
    background-color: rgba(230,20,230,0.5);
    border-radius: 20px;
`

export const CartItemContainer = styled.div`
    width:100%;
    display: flex;
    height: 40px;
    border-radius: 20px;
    justify-content: space-between;
`

export const CartitemName = styled.p`
    color: black;
    font-size: 20px;
    display:flex;
    align-items: center;
    width: 60%;
`

export const CartitemPrice = styled.p`
    color: black;
    font-size: 20px;
    display:flex;
    align-items: center;
    width: 100px;
`
export const CartitemCounter = styled.input`
    width: 60px;
    color: black;
    font-size: 20px;
    display:flex;
    align-items: center;
`

export const CartitemCounterContainer = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;
    align-items: center;
`

export const CartItemButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: black;
    background-color: white;
`

export const AmountContainer = styled.div`
    width: calc(100%-20px);
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;
    justify-content: space-between;
`   

export const Amount = styled.p`
    color: black;
    font-size: 20px;
    display:flex;
`
export const ApplyButton = styled.button`
    border-radius: 15px;
    border: none;
    cursor: pointer;
`

export const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 20px;
`