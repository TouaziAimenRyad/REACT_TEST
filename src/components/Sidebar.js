import React from 'react';
import '../styles/sidebar.css'
import Accordion from './Accordion';

const SideBar = (props) => {
    return ( 
        <div className={props.containerClass}>
            <div>
                <Accordion title={"Referentiels"} options={[{link:"activity",display:"Activités"},{link:"parcours",display:"Parcous"} ,{link:"itenerary",display:"Itenéraires"} ,{link:"grid",display:"Grilles"} ,{link:"rubrique",display:"Rubriques"}]}></Accordion>
                <Accordion title={"Ressources"} options={[{link:"activity",display:"Activités"},{link:"parcours",display:"Parcous"} ,{link:"itenerary",display:"Itenéraires"} ,{link:"grid",display:"Grilles"} ,{link:"rubrique",display:"Rubriques"}]}></Accordion>
                <Accordion title={"A faire"} options={[{link:"sequence",display:"Séquences"},{link:"parcours",display:"Parcous"} ,{link:"itenerary",display:"Itenéraires"} ,{link:"grid",display:"Grilles"} ,{link:"rubrique",display:"Rubriques"} ]}></Accordion>
                <Accordion title={"Suivi groupe et apprenant"} options={[{link:"activity",display:"Activités"},{link:"parcours",display:"Parcous"} ,{link:"itenerary",display:"Itenéraires"} ,{link:"grid",display:"Grilles"} ,{link:"rubrique",display:"Rubriques"}]}></Accordion>
                <Accordion title={"Analyse des competences"} options={[{link:"activity",display:"Activités"},{link:"parcours",display:"Parcous"} ,{link:"itenerary",display:"Itenéraires"} ,{link:"grid",display:"Grilles"} ,{link:"rubrique",display:"Rubriques"}]}></Accordion>
            
            </div>
            
           
        </div> );
}
 
export default SideBar;