import { LoginContainer, LoginForm, LoginInput, LoginInputContainer, LoginButton, Linker } from '../../styles/Login/Login';
import { useState, useEffect } from 'react'
import Cookies from '../../utils/Cookies'
import _ from 'lodash'
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [UserData, setUserData] = useState<any>([{}])

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

  const onLogin = (username: string, password: string) => {
    if (username == "manager" && password == "manager") {
      Cookies.setCookie("role", "manager")
      Cookies.setCookie("username", "manager")
      Cookies.setCookie("password", "manager")
      return true
    }
    else {
      let tempUser = _.find(UserData, (e) => { return e.login == username})
      if (tempUser && tempUser.password == password) {
        Cookies.setCookie("role", "user")
        Cookies.setCookie("username", username)
        Cookies.setCookie("password", password)
        return true
      }
    }
    return false
  }
    useEffect(() => {
        Cookies.deleteAllCookies()
    }, [])

    return (
        <LoginContainer>
            <LoginForm>
                <Linker to="/reg">Логин</Linker>
                <LoginInputContainer>
                    <p>Логин:</p>
                    <LoginInput type="text" onChange={(e) => { setUsername(e.target.value) }}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Пароль:</p>
                    <LoginInput type="password" onChange={(e) => { setPassword(e.target.value) }}></LoginInput>
                </LoginInputContainer>
                <LoginButton onClick={(event) => { !onLogin(username, password) && event.preventDefault() }} to="/main/home">Войти</LoginButton>
            </LoginForm>
        </LoginContainer>
    )
}
export default Login;