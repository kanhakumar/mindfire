import React, { Component } from 'react'

export default class ChangeBackGroundColor extends Component {
    constructor(props) {
        super(props);
        this.state = { red: 255, green: 255, blue: 255 };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.changeColor();
    }
    changeColor() {
        console.log(this.state);
        document.body.style.backgroundColor = 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')';
    }

    handleChange = (value, color) => {
        this.setState(prevState => {
            var obj = { ...prevState };
            obj[color] = value;
            return obj;
        }, () => {
            this.changeColor();
        })
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.red} onChange={(event) => { this.handleChange(event.target.value, 'red') }} />
                <input type="number" value={this.state.green} onChange={(event) => { this.handleChange(event.target.value, 'green') }} />
                <input type="number" value={this.state.blue} onChange={(event) => { this.handleChange(event.target.value, 'blue') }} />
            </div>

        )
    }
}