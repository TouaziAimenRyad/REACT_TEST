import '../styles/grid.css'
import more_icon from '../assets/icons/Moreo.svg'
const Grid = () => {
    return ( 
        <div className='grid-container'>
            <p className='grid-title'>Grille</p>
            <div className='grid-control'>

                <div className='grid-search'>
                    
                    <div className='select'>
                        <select name="Recents" >
                            <option>Recents</option>
                            <option>1</option>
                            <option>1</option>
                        </select>
                        <div className="select_arrow"></div>
                    </div>

                   <div className='select'>
                        <select name="Tous" >
                             <option>Tous</option>
                             <option>1</option>
                             <option>1</option>
                         </select>
                         <div className="select_arrow"></div>
                   </div>
                    
                    <input type="text" placeholder="Rechercher par mot-clé ou tag"></input>
                    
                    <a  className='more'><img src={more_icon} alt="icon more"></img></a>
                </div>
                
                <button>Diffusion</button>
                
               
            </div>
            <div className='grid'>
                {/* here put your cards */ }
                <div className='placeholder'></div>
                <div className='placeholder'></div>
                <div className='placeholder'></div>
                <div className='placeholder'></div>
                <div className='placeholder'></div>
                <div className='placeholder'></div>
                <div className='placeholder'></div>
            </div>
        </div>
     );
}
 
export default Grid;