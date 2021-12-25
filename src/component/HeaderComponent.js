import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar dark color="dark">
          <NavbarBrand>Welcome</NavbarBrand>
        </Navbar>
        <div className="jumbotron">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Lorem Ipsum</h1>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentia
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
