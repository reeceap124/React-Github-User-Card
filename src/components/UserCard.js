import React from 'react';

const UserCard = (props)=> {
    
        return(
            <div className='userCard'>
                <h2>{props.user.name}</h2>
                <div className='imgContainer'><img src={props.user.avatar_url} alt='profile pic'/></div>
                
                <p>Website: {(props.user.blog === "") ? 'Not Listed' : props.user.blog}</p>
                <p><span>Followers: {props.user.followers}</span>   <span>Following: {props.user.following}</span></p>
                <button onClick={props.toggleCard}>Close</button>
                {console.log('In the usercard', props.user.name)}
            </div>
            
        )
    
}

export default UserCard;