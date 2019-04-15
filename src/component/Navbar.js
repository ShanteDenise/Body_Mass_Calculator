import React, { Component } from "react";
import { Navbar, Button, Modal } from "react-materialize";

class Nav extends Component {
  openModal = () => {
    console.log("clicked");
  };
  render() {
    return (
      <div>
        <Navbar className="blue-grey darken-4" alignLinks="left">
      
          <Modal header="" trigger={<Button >Chart</Button>}>
            <img style={{width:530}} src="https://www.top10better.com/wp-content/uploads/2018/10/Body_mass_calculator-kg.jpg" alt="body mass"></img>
          </Modal>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
