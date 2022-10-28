import return_arrow from "../assets/icons/ic_back.svg"
import more from "../assets/icons/Icon_24x24.svg"
import icon_16x16 from '../assets/icons/Icon_16x16.svg'

import "../styles/detail.css"
const DetailSection = (props) => {
    return ( 
        <div className="detail-container">
            
            <div className="image-section" style={{backgroundImage:`url(${props.img})`, backgroundSize: 'cover' ,backgroundPosition: 'center' }}>
                
                <div className="control">
                    <a className="return">
                        <img src={return_arrow}></img>
                    </a>

                    <span className="competences">
                        <img src={icon_16x16} alt="16x16 icon"></img>
                        <p >{props.nb_competance+ " Competences"}</p>
                    </span>
                </div>

                <span className="title">
                    <a className="more"> 
                            <img src={more}></img>
                            <p>Grille</p>
                    </a>
                    <p >{props.title}</p>
                </span>
            </div>
          
            <div className="content">
                <div className="objectif">
                    <h2>Objectif</h2>
                    <p>{props.objectif}</p>
                </div>

                <div className="category">
                    <h2>Category</h2>
                    <p>{props.category}</p>
                </div>
            </div>
            
        </div>  
     );
}
 
export default DetailSection;