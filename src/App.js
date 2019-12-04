import React from 'react';
import axios from 'axios';

import CardList from './components/CardList'

import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  state ={
    users: [],
    user: '',
    showUserCard: false
  }

  componentDidMount(){
    console.log('cDM')
    axios
      .get('https://api.github.com/users/reeceap124/followers')
      .then(res=> {
        res.data.forEach(follower=>{
          axios
            .get(follower.url)
            .then(res => {
              console.log('users state before: ',this.state.users)
              this.setState({users: [...this.state.users, res.data]})
            })
        })
        console.log('this is state',this.state)
      })
      .catch(err=>{
        console.log('there was and error', err)
      })
  }

  handleCard = () => {
    this.setState({showUserCard: !this.state.showUserCard})
  }


  render(){
    return (
      <div className="App">
        <h1>Your Followers</h1>
        <CardList users={this.state.users} handleCard={this.handleCard}/>
        {this.state.showUserCard ? <UserCard users={this.state.users}/> : null}
        {/* need to get the popup to show up. need to get popup to be customized by user */}
      </div>
    );
  }
  
}

export default App;
