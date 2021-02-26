import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form'
import GithubUserSearch from './GithubUserSearch';
// import FormDemo from './FormDemo'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World.</h1>
//       </div>
//     )
//   }
// }

// const heading = React.createElement('h1',{
//   className:'site-heading'
// },
// 'Site Heading!')

ReactDOM.render( 
    <GithubUserSearch / > ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals