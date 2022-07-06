import React from 'react';
import PropTypes from 'prop-types';

const User2 = ({ musicGenre, movieGenre, age, name, musicLover, friends }) => {
  return (
    <div>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <p>{musicLover ? `${musicGenre}` : `${movieGenre}`}</p>

      {/* {friends.map((friend, index) => ( 
        <div key={index}>
          {index} - {friend}
        </div>
      ))} */}

      {friends.map((friend) => (
        <div key={friend.id}>
          {friend.id} - {friend.name}
        </div>
      ))}
    </div>
  );
};

User2.propTypes = {
  musicGenre: PropTypes.string,
  movieGenre: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string,
  musicLover: PropTypes.bool.isRequired,
  friend: PropTypes.array,
};

export default User2;
