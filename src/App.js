import Main from './components/mainComponent'
import { Component } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Main />
          </div>

        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
