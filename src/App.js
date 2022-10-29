import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import list from './components/Content'
import DetailSection from './components/DetailSection'
import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
 
  const [content , updateContent] =useState(list)
  const handledelet =(i)=>
  {
    updateContent([...content.slice(0,i) , ...content.slice(i+1,content.length)])
    
  } 

  const getItem =(i)=>{return content[i]; }
  return (
    <Router>
        <div className="App">
          
          <Navbar></Navbar>
           <Switch>
             <Route exact path="/"> 
              
             </Route>
             <Route exact path="/grid">
                <Grid delete={(i)=>{handledelet(i)}} content={content}></Grid>
             </Route>
             <Route exact path="/item/:index">

                <DetailSection getItem={getItem}></DetailSection>
             </Route>

             <Route path="*">
                <h1> NOT FOUND</h1>
            </Route>

           </Switch>
        </div>
    </Router>
    
  );
}

export default App;
