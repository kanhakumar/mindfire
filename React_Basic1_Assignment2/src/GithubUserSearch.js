import React, { Component } from 'react'
import './GithubUserSearch.css'

export default class GithubUserSearch extends Component {

    state = {
        loading: true,
        userName: "",
        users: []
    }

    // componentDidMount(){
    //     () => {this.displayUser();}
    // }

    userSearch = (value) => {
        this.setState({
            userName: value
        }, () => {
            if (value.length > 0) {
                this.displayUser();
                console.log(value);
            }
        })
    }

    displayUser = () => {
        if (this.state.userName.length === 0) {
            this.setState({ users: [] })
        }
        else {
            const url = "https://api.github.com/search/users?q=";
            const res = fetch(url + this.state.userName + '&per_page=30');
            res.then(response => response.json())
                .then(data => this.setState({ users: data.items }, () => { console.log(this.state.users); }));
        }
    }

    showList = () => {
        if(this.state.users) {
            return this.state.users.map(user => {
                return (<div className='col-md-3' key={user.id}>{user.login}</div>);
            })
        }
    }

    render() {
        return (
            <div>
                <div className="search">
                    <h2>Github Users Search</h2>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='UserName'
                        onChange={(event) => this.userSearch(event.target.value)}
                    />
                    {/* <button type='button' className='btn btn-success'>Search</button> */}
                </div>
                <div className="list row">
                    {this.showList()}
                </div>
            </div>

        )
    }
}