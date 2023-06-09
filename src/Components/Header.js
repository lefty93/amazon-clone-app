import React, { useContext, useState } from 'react'
import './Header.css'
import { useStateValue } from '../Context/StateProvider';
// import { StateContext } from '../Context/StateProvider';
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { getAuth, signOut } from 'firebase/auth';



function Header() {
  // const [{ basket }, dispatch] = useContext(StateContext)
  const [{ basket, user }, dispatch] = useStateValue()

  const auth = getAuth()
  const login = () => {
    
    signOut(auth)

  }
  return (
    <div className="header">
      <Link to='/'>
        <img src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg" alt="" className="header__logo" />
      </Link>

      <div className="header__location">
        <LocationOnOutlinedIcon />
        <div className="header__optionLocation">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">Malaysia</span>
        </div>

      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder='Search' />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} className="header__loginOption">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>


        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to='/checkout' className="header__basketIcon">
            <ShoppingCartOutlinedIcon />
          </Link>
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>

      </div>
    </div >
  );
}

export default Header