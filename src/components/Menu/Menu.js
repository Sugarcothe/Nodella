import React from 'react';
import './Menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'menu '+(menuOpen && "active")}>
      <ul>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#home'>Home</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#about'>About</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#third'>Third</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#fourth'>Fourth</a>
        </li>
        
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#fifth'>Fifth</a>
        </li>
        
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#sixth'>Sixth</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#seventh'>Seventh</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#eight'>Eight</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href='#footer'>Footer</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
