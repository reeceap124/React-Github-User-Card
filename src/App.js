import React from 'react';
import axios from 'axios';

import CardList from './components/CardList'

import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  state ={
    users: [],
    user: {},
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

  toggleCard = () => {
    if (this.state.showUserCard){
      return(
        document.body.classList.remove('cardSelected'),
        this.setState({
          showUserCard: !this.state.showUserCard
        })
      )
      
    }
    return null
  }

  handleCard = (id) => {
      this.state.users.map(val => {
        if(val.id === id) {
          console.log('toggled the user')
          return(
            
            this.setState({
            showUserCard: !this.state.showUserCard,
            user: val
            })
          )
          
        } else {
          return(
            null
          )
          
        }
      })
    
  }


  render(){
    return (
      <div className='App'>
        <div onClick={this.toggleCard}>
          <h1>Your Followers</h1>
        <CardList users={this.state.users} handleCard={this.handleCard}/>
        </div>
        {this.state.showUserCard ? <UserCard user={this.state.user} toggleCard={this.toggleCard}/> : null}
        {/* need to get the popup to show up. need to get popup to be customized by user */}
      </div>
    );
  }
  
}

export default App;
