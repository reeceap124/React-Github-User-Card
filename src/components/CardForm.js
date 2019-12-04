import React from 'react';

const CardForm = props => {
    return (
        <div className='user' onClick={props.handleCard}>
            <h2>{props.user.name}</h2>
            <img src={props.user.avatar_url} alt='profile pic'/>
            <p>Website: {(props.user.blog === "") ? 'Not Listed' : props.user.blog}</p>
            <p><span>Followers: {props.user.followers}</span>   <span>Following: {props.user.following}</span></p>
        </div>
    )
}

export default CardForm;