 import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent'
function App() {
  return (
    <div className="App">
     <Navbar dark color="black">
       <div className="container">
         <NavbarBrand href="/"> Home </NavbarBrand>
       </div>
     </Navbar>
     <Menu/>

    </div>
  );
}

export default App;
