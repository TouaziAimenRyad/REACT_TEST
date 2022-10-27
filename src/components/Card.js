import '../styles/card.css'
import union_icon from '../assets/icons/Union.svg'
import icon_24x24 from '../assets/icons/Icon_24x24.svg'
import icon_16x16 from '../assets/icons/Icon_16x16.svg'

const Crad = (props) => {
    return (
        <div className="card-container" >
                <div className='bg' style={{ backgroundImage:`url(${props.img})` ,backgroundSize: 'cover' ,backgroundPosition: 'center'}}>
                    <div className='card-content' >
                       <div className='card-header'>
                            <a href='#'><img src={icon_24x24} alt="union icon"></img></a>
                            <a href='#'> <img src={union_icon} alt="24x24 icon"></img></a>
                       </div>
                       <div className='card-footer'>
                            <p>{props.name} </p>
                            <span className='card-comp'>
                                <img src={icon_16x16} alt="16x16 icon"></img>
                                <p>{props.nb_comptence+' Competences'}</p>
                            </span>
                       </div>
                         
                    </div>
                </div>

            
        </div>
    );
}
 
export default Crad;