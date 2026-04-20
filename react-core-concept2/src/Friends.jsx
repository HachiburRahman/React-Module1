import React, { use } from 'react';
import Friend from './Friend';

const Friends = ({fetchPromise}) => {

    const friends=use(fetchPromise);
    // console.log(friends);
    return (
        <div className='card'>
            <h3>Number of Friends:{friends.length}</h3>
            {
                friends.map(friend=><Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;