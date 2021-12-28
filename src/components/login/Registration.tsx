import { LoginContainer, LoginForm, LoginInput, LoginInputContainer, LoginButton, Linker } from '../../styles/Login/Login';
import { useState, useEffect } from 'react'
import Cookies from '../../utils/Cookies'
import _ from 'lodash'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState({ f: "", i: "", o: "", phone: "", birthday: new Date(), email: "", date: new Date })
    const [UserData, setUserData] = useState<any>([{}])
    const [openErrorModal, setOpenErrorModal] = useState(false)

    useEffect(() => {
        fetch("/getUsersData", {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.recordset)
                setUserData(data.recordset)
            });
    }, [])

    const onReg = (username: string) => {
        let tempUser = _.find(UserData, (e) => e.login == username)
        console.log(tempUser)
        if (!_.includes(data, "") && !tempUser) {
            let tempData = { ...data, password: password, username: username }
            fetch("/createNewUser", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(tempData)
            })
                .then((response) => {
                    return true
                })
        }
        else{
            setOpenErrorModal(true)
            return false
        }
    }

    return (
        <LoginContainer>
            <Modal
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
            <LoginForm>
                <Linker to="/login">Регистрация</Linker>
                <LoginInputContainer>
                    <p>Логин:</p>
                    <LoginInput type="text" value={username} onChange={(e) => { setUsername(e.target.value) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Пароль:</p>
                    <LoginInput type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Фамилия:</p>
                    <LoginInput type="text" value={data.f} onChange={(e) => { let temp = { ...data }; temp.f = e.target.value; setData({ ...temp }) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Имя:</p>
                    <LoginInput type="text" value={data.i} onChange={(e) => { let temp = { ...data }; temp.i = e.target.value; setData({ ...temp }) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Отчество:</p>
                    <LoginInput type="text" value={data.o} onChange={(e) => { let temp = { ...data }; temp.o = e.target.value; setData({ ...temp }) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Телефон:</p>
                    <LoginInput type="text" value={data.phone} onChange={(e) => { let temp = { ...data }; temp.phone = e.target.value; setData({ ...temp }) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Дата_рождения:</p>
                    <LoginInput type="date" onChange={(e) => { let temp = { ...data }; temp.birthday = new Date(e.target.value); setData({ ...temp }) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Почта:</p>
                    <LoginInput type="text" value={data.email} onChange={(e) => { let temp = { ...data }; temp.email = e.target.value; setData({ ...temp }) }}></LoginInput>
                </LoginInputContainer>
                <LoginButton onClick={(event) => { !onReg(username) && event.preventDefault() }} to="/login">Зарегистрироваться</LoginButton>
            </LoginForm>
        </LoginContainer>
    )
}
export default Registration;