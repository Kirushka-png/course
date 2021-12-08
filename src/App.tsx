import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Main from './components/Main/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/main/home" element={<Main link="home"/>}/>
      </Routes>
    </Router>
  )
}

export default App;
