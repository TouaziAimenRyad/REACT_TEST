import React from 'react';
import '../styles/sidebar.css'
import Accordion from './Accordion';
const SideBar = () => {
    return ( 
        <div className='sidenav'>
            <div>
                <Accordion title={"Referentiels"} options={[]}></Accordion>
                <Accordion title={"Ressources"} options={[]}></Accordion>
                <Accordion title={"A faire"} options={["Activités", "Parcous", "Itenéraires", "Grilles", "Rubriques"]}></Accordion>
                <Accordion title={"Suivi groupe et apprenant"} options={[]}></Accordion>
                <Accordion title={"Analyse des competences"} options={[]}></Accordion>
            
             </div>
           
        </div> );
}
 
export default SideBar;