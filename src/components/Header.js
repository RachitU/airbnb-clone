import React from 'react'
import {useState} from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
    const [scroll,setScroll] = useState(false);
    window.onscroll = () => {
        setScroll(true);
    }
    
    return (
        <div className={scroll ? 'header-scroll header':'header'}>
          <img className="header__logo" 
           src='https://logos-download.com/wp-content/uploads/2016/03/Airbnb_logo.png' alt="airbnb logo"/> 
          <div className="header__center">
             <input type="text" placeholder="Where do you want to go..."/> 
             <SearchIcon style={{color:"black"}}/> 
          </div>  
          <div className="header__right"> 
            <a className="host">Become a host</a>
            <LanguageIcon className="globe" style={{color:"white"}}/> 
          </div>
          <div className="acc">
              <AccountCircleIcon/>
              <span>Account</span>
              <KeyboardArrowDownIcon className="ok" style={{color:"white"}} sx={{"&:hover":{color:"black"}}}/>  
          </div>
        </div>
    )
}
export default Header
