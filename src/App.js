import Menu from "./components/menuComponent";
import "./App.css";
import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
