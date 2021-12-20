import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Main from './components/Main/Main';
import Cookies from './utils/Cookies';

function App() {

  const onLogin = (username:string)=>{
    username == "manager" ? Cookies.setCookie("role", "manager") : Cookies.setCookie("role", "user")
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login onClick={(e)=>{onLogin(e)}}/>}/>
        <Route path="/main/home" element={<Main link="home"/>}/>
        <Route path="/main/shop" element={<Main link="shop"/>}/>
        <Route path="/main/cart" element={<Main link="cart"/>}/>
        <Route path="/main/supplies" element={<Main link="supplies"/>}/>
      </Routes>
    </Router>
  )
}

export default App;
