import { LoginContainer, LoginForm, LoginInput, LoginInputContainer, LoginButton} from '../../styles/Login/Login';
import { useState } from 'react'

interface Props{
    onClick(username: string):any; 
}

const Login = ({ onClick }: Props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <LoginContainer>
            <LoginForm>
                <p>Login</p>
                <LoginInputContainer>
                    <p>Username:</p>
                    <LoginInput type="text" onChange={(e)=>{setUsername(e.target.value)}}></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Password:</p>
                    <LoginInput type="password" onChange={(e)=>{setPassword(e.target.value)}}></LoginInput>
                </LoginInputContainer>
                <LoginButton onClick={()=>{onClick(username)}} to="/main/home">Sign in</LoginButton>
            </LoginForm>
        </LoginContainer>
    )
}
export default Login;