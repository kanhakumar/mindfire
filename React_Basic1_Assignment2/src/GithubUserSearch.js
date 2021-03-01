import React, { Component } from 'react'
import './GithubUserSearch.css'

export default class GithubUserSearch extends Component {

    state = {
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
            this.displayUser();
        })
    }

    displayUser = () => {
        if (this.state.userName.length === 0) {
            this.setState({ users: [] },()=>{
                this.showList();
            })
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
                // return (<div className='col-md-3' key={user.id}>{user.login}</div>);
                return (
                    <div className="card col-md-3" key={user.id}>
                        <a href={user.html_url} target='_blank'><img src={user.avatar_url} width='300' height='300'/></a>
                        <p className='user-name'>{user.login}</p>
                    </div>
                );
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