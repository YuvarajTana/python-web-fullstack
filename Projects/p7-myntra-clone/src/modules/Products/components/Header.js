import React from 'react';
import "../../../App.css";

function Header(){
  return <header className='Header-section'>
    <nav>
      <ul>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
        <li>STUDIO</li>
      </ul>
      
      <input className='Search-button' placeholder='Search for products, brands and more'/>
      <div className='Cart-section'>
        <div className="Profile-icon">Profile</div>
        <div className="Cart-bag">Cart</div>
      </div>
    </nav>
  </header>;
}

export default Header;