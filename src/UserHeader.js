import React from 'react';

const UserHeader = ({user, newUser}) => {

    return( 
        <div className='header'>
            <img src = {user.avatar} 
                alt = {`${user.fullName} avatar`}
                onClick = {() => {
                    window.location.hash = '#view=home';
                }}/>

            <div> {user.fullName} </div>
            
            <button className = 'newUser' onClick = { () => {
                window.localStorage.removeItem('userId');
                newUser();  
                }}>Get New User
            </button>
        </div>
    )
}

export default UserHeader;