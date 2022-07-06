import React from 'react';
import PropTypes from 'prop-types';

const User2 = ({
  musicGenre,
  movieGenre,
  age,
  name,
  musicLover,
  friends,
  location,
}) => {
  if (!musicLover) {
    return <div>Do not like music!</div>;
  }

  return (
    <div>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <p>{musicLover ? `${musicGenre}` : `${movieGenre}`}</p>
      {location.city}
      <br />
      {location.zip}
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
  location: PropTypes.shape({
    city: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User2.defaultProps = {
  musicLover: false,
};

export default User2;
