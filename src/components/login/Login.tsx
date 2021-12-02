import { LoginContainer, LoginForm, LoginInput, LoginInputContainer, LoginButton} from '../../styles/Login/Login';

const Login = () => {
    return(
        <LoginContainer>
            <LoginForm>
                <p>Login</p>
                <LoginInputContainer>
                    <p>Username:</p>
                    <LoginInput type="text"></LoginInput>
                </LoginInputContainer>
                <LoginInputContainer>
                    <p>Password:</p>
                    <LoginInput type="password"></LoginInput>
                </LoginInputContainer>
                <LoginButton>Sign in</LoginButton>
            </LoginForm>
        </LoginContainer>
    )
}
export default Login;