import React, {Component} from 'react';
import Table from './Table'
import Home from './Home'
import Time from './Time'
import Toggle from './Toggle'
import LoginControl from './LoginControl';
import ChangeBackGroundColor from './ChangeBackgroundColor';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Time className="time" />
        <h1>Hello World.</h1>
        <div className="container">
          <Table />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <LoginControl />
        </div>
        <div>
          <ChangeBackGroundColor />
        </div>
      </div>
    )
  }
}

export default App