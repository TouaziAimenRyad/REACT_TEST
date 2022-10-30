import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/accordion.css'
import arrow_icon from '../assets/icons/chevron.svg'
import { useState } from 'react'

const Accordion = ({title,options}) => {
    const [active, setActive] = useState(false);
    const toggle=()=> 
    {
        setActive(!active)
    }
    return ( 
        <div className='accordion'>
            <a className="accordion-header" onClick={toggle}>
                <p>{title}</p>
                <img src={arrow_icon}></img>
            </a>
            <ul className={"accordion-options "+(active?'opened':'closed')}>
                {options.map((opt,key) => (
                    <li key={key}><Link to={"/"+opt.link}>{opt.display}</Link></li>
                ))}
            </ul>
        </div> 
    );
}
 
export default Accordion;