import React from 'react';

import return_arrow from "../assets/icons/ic_back.svg"
import more from "../assets/icons/Icon_24x24.svg"
import icon_16x16 from '../assets/icons/Icon_16x16.svg'
import { Link } from "react-router-dom"

import "../styles/detail.css"
import { useParams } from "react-router-dom"

const DetailSection = (props) => {

    let {index}=useParams()
    const item=props.getItem(index)

    return ( 
        <div className={props.containerClass}>
            
            <div className="image-section" style={{backgroundImage:`url(${item.img})`, backgroundSize: 'cover' ,backgroundPosition: 'center' }}>
                
                <div className="control">
                    <Link to='/grid' className="return">
                        <img src={return_arrow}></img>
                    </Link>

                    <span className="competences">
                        <img src={icon_16x16} alt="16x16 icon"></img>
                        <p >{item.nb_competence+ " Competences"}</p>
                    </span>
                </div>

                <span className="title">
                    <Link to="/grid" className="more"> 
                            <img src={more}></img>
                            <p>Grille</p>
                    </Link>
                    <p >{item.title}</p>
                </span>
            </div>
          
            <div className="content">
                <div className="objectif">
                    <h2>Objectif</h2>
                    <p>{item.objectif}</p>
                </div>

                <div className="category">
                    <h2>Category</h2>
                    <p>{item.category}</p>
                </div>
            </div>
            
        </div>  
     );
}
 
export default DetailSection;