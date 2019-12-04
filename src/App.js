import React from 'react';
import axios from 'axios';

import CardList from './components/CardList'

import './App.css';

class App extends React.Component {
  state ={
    users: []
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

  handleCardClick = e =>{
    e.preventDefault();
    // how to create a popup item
  }


  render(){
    return (
      <div className="App">
        <h1>Your Followers</h1>
        <CardList users={this.state.users}/>
        
      </div>
    );
  }
  
}

export default App;
