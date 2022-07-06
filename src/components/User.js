import React from 'react';

const User = (props) => {
  console.log(props);
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.surname}</h4>
      {props.isArtist ? <h5>{props.occ}</h5> : <span>Learner</span>}
      <p>{props.about}</p>
    </div>
  );
};

export default User;
