import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
     <Navbar dark color="black">
       <div className="container">
         <NavbarBrand href="/"> Home </NavbarBrand>
       </div>
     </Navbar>

    </div>
  );
}

export default App;
