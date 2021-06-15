import Main from './components/mainComponent'
import { Component } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
