import '../styles/card.css'
import union_icon from '../assets/icons/Union.svg'
import icon_24x24 from '../assets/icons/Icon_24x24.svg'
import icon_16x16 from '../assets/icons/Icon_16x16.svg'
import bin from '../assets/icons/Vector.svg'
import share from '../assets/icons/Path.svg'
import { useState } from 'react'


const Crad = (props) => {
    const [isActive,setActive]=useState(false)
    const toggle_display=(e)=> 
    {
        e.preventDefault();
        setActive(!isActive)
    }
    return (
        <a className="card-container" >
                <div className={'detail '+ (isActive?'displayed':'hidden')}>
                    <a className='delete action'>
                        <img src={bin} alt="bin"></img>
                        <p>Delete</p>

                    </a>
                    <a className='share action'>
                        <img src={share} alt="share"></img>
                        <p>Share</p>
                    </a>
                </div>
                <div className='bg' style={{ backgroundImage:`url(${props.img})` ,backgroundSize: 'cover' ,backgroundPosition: 'center'}}>
                    <div className='card-content' >
                       <div className='card-header'>
                            <a><img src={icon_24x24} alt="24x24 icon"></img></a>
                            <a onClick={toggle_display}> <img src={union_icon} alt="union icon"></img></a>
                       </div>
                       <div className='card-footer'>
                            <p>{props.title} </p>
                            <span className='card-comp'>
                                <img src={icon_16x16} alt="16x16 icon"></img>
                                <p>{props.nb_competence+' Competences'}</p>
                            </span>
                       </div>
                         
                    </div>
                </div>

            
        </a>
    );
}
 
export default Crad;