import React from 'react'
import classes from './header.module.css';
import Hamburger from '../../assets/menu.png';
import Logo from '../../assets/logo.png';
import Icon from '../../assets/notify.png';
import User from '../../assets/Profile.png';

const header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.logo}>
            <img src={Hamburger} alt='hamburger'/>
            <img src={Logo} alt='logo'/>
            <input type="text" placeholder="search"></input>
        </div>
        <div className={classes.icons}>
           <div className={classes.bell}><img  src={Icon} alt='icon'/></div>
           <div className={classes.profile}><img src={User} alt='user'/></div>
        </div>
        </div>
    </div>
  )
}

export default header