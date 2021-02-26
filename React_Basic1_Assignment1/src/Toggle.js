import React,{Component} from 'react'
import {Helmet} from 'react-helmet';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      if(this.state.isToggleOn){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      }
      else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Dark' : 'Light'}
        </button>
      );
    }
}
export default Toggle