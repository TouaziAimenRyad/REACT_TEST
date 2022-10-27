import React from 'react';
import '../styles/navbar.css'
import {IoIosNotifications } from 'react-icons/io'
import {MdFeed } from 'react-icons/md'
import {TiMessages} from 'react-icons/ti'
import avatar from '../assets/img_avatar.png'


const Navbar = () => {
    return ( 
        <div className="topnav">
            <a className='company'><div className='company-logo'></div><div className='company-name'></div></a>
            <a href="#" className='profile' > <div className='profile-pic'><img src={avatar} alt='avatar'></img></div><div className='profile-name'> <h2>TOUAZI AIMEN RYAD</h2></div> </a>
            <div className='navigate'>
                <input type="text" placeholder="Search.."></input>
                <a className='nav-icons'  href="#"><IoIosNotifications  size={25}/></a>
                <a className='nav-icons' href="#" ><TiMessages size={25}/></a>
                <a className='nav-icons' href="#"><MdFeed size={25}/></a>    
            </div>
            
        </div>
     );
}
 
export default Navbar;