import React from 'react';

const Header = () => {
  const btnFalse = 'button false';
  const btn = 'button';
  const isLoggedIn = false;
  return (
    <div className='header'>
      <div className='container'>
        <a href='#'>Site</a>

        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>

          {isLoggedIn ? <button>{btn}</button> : <button>{btnFalse}</button>}
        </nav>
      </div>
    </div>
  );
};

export default Header;
