import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import AllRoutes from "./components/AllRoutes"
// import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
        {/* <Login/> */}
    </div>
  );
}

export default App;
