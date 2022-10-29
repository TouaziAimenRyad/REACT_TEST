import '../styles/grid.css'
import more_icon from '../assets/icons/Moreo.svg'
import Card from './Card';
const Grid = (props) => {

 
        
    

    return ( 
        <div className='grid-container'>
            <p className='grid-title'>Grille</p>
            <div className='grid-control'>

                <div className='grid-search'>
                    
                    <div className='select'>
                        <select name="Recents" >
                            <option>Recents</option>
                            <option>Recents</option>
                            <option>Recents</option>
                        </select>
                        <div className="select_arrow"></div>
                    </div>

                   <div className='select'>
                        <select name="Tous" >
                             <option>Tous</option>
                             <option>Tous</option>
                             <option>Tous</option>
                         </select>
                         <div className="select_arrow"></div>
                   </div>
                    
                    <input type="text" placeholder="Rechercher par mot-clé ou tag"></input>
                    
                    <a  className='more'><img src={more_icon} alt="icon more"></img></a>
                </div>
                
                <button>Diffusion</button>
                
               
            </div>
            <div className='grid'>
                {
                    props.content.map((item,key)=>
                    {
                        return <Card delete={props.delete} key={key}  index={key} img={item.img} title={item.title} nb_competence={item.nb_competence}></Card>

                    }) 
                }
            </div>
        </div>
     );
}
 
export default Grid;