import logo from "./logo.svg";
import "./App.css";
import Dishes from "./shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Navbar dark color="dark">
        <NavbarBrand>HI</NavbarBrand>
      </Navbar>
      <Dishes />
    </div>
  );
}

export default App;
