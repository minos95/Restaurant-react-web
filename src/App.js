import "./App.css";

import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react";
import Main from "./component/MainComponent";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
