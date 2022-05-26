
import './App.css';
import AddStation from './Components/Admin/Add-Station/AddStation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Registration />}/>
      <Route path="/login" element={<Login />}/>
 
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
