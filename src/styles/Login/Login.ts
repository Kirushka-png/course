import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(230,20,230,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LoginForm = styled.div`
    width: 400px;
    padding: 0 10px 40px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(230,20,230,0.5);
    border-radius: 20px;
    row-gap: 20px;
    > p{
        color: white;
        font-weight: 600;
        font-size: 24px;
    }
`
export const LoginInputContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 10px;
    align-items: center;
    width: 100%;
    color: white;
`
export const LoginInput = styled.input`
    background-color: rgb(240,208,240);
    border: none;
    color: rgba(230,20,230,0.7);
    width: 230px;
    border-radius: 20px;
    height: 40px;
    outline: none;
    padding: 0 0 0 10px;
    :focus-visible{
        border: none;
    }
`
export const LoginButton = styled(Link)`
    width: 150px;
    height: 50px;
    background-color: rgb(230,20,230);
    border:none;
    border-radius: 15px;
    color: white;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    :hover{
        background-color: rgb(230,70,230);
    }
    :active{
        background-color: rgb(240,148,240);
    }
`