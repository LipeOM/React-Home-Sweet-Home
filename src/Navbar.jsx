import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='main-header fixed flex column'>
      <nav className='navbar flex row vertical-align-row'>
        <NavLink to='/' exact={true} className={`link`}>
          <div className='brand'>
            <h1>Home Sweet Home</h1>
            <h5>Divulgação De Casas</h5>
          </div>
        </NavLink>
        <div className='navigation right'>
          <NavLink to='/sobre' className={`link`}>
            Sobre
          </NavLink>
          <NavLink to='/vender' className={`link`}>
            Vender
          </NavLink>
          <NavLink to='/admin' className={`link`}>
            Login
          </NavLink>
          <NavLink to='/cadastrar' className={`link`}>
            Cadastrar
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;