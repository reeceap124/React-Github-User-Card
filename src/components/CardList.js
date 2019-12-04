import React from 'react';
import CardForm from './CardForm';


const CardList = props => {
    return (
        <div className='userList'>
            {props.users.map(user => (
                <CardForm key={user.id} user={user}/>
            ))}
        </div>
    )
}

export default CardList;