import React from 'react';
import '../styles/navbar.css'
import {IoIosNotifications } from 'react-icons/io'
import {MdFeed } from 'react-icons/md'
import {TiMessages} from 'react-icons/ti'
import avatar from '../assets/img_avatar.png'


const Navbar = () => {
    return ( 
        <div className="topnav">
            <div className='company'>
                <div className='company-logo'>
                    <div></div>
                </div>
                <div className='company-name'>
                    <p>Company name</p>
                    <p style={{color:'red' ,fontWeight:'300'}}>Bootcamp name</p>
                </div>
            </div>
            <div  className='profile' > <div className='profile-pic'><img src={avatar} alt='avatar'></img></div><div className='profile-name'> <h2>TOUAZI AIMEN RYAD</h2></div> </div>
            <div className='navigate'>
                <input type="text" placeholder="Search.."></input>
                <a className='nav-icons'  ><IoIosNotifications  size={25}/></a>
                <a className='nav-icons'  ><TiMessages size={25}/></a>
                <a className='nav-icons' ><MdFeed size={25}/></a>    
            </div>
            
        </div>
     );
}
 
export default Navbar;