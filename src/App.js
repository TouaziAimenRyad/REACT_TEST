import React from 'react';

import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import list from './components/Content'
import DetailSection from './components/DetailSection'
import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import SideBar from './components/Sidebar';
import arrow_icon from './assets/icons/chevron.svg'

function App() {
 
  const [content , updateContent] =useState(list)
  const [collapsed, setCollapsed] = useState(false);
  const handledelet =(i)=>
  {
    updateContent([...content.slice(0,i) , ...content.slice(i+1,content.length)])
    
  } 

  const getItem =(i)=>{return content[i]; }

  const collapse=()=>{setCollapsed(!collapsed); console.log(5115);}

  return (
    <Router>
        <div className="App">
           <Navbar></Navbar>
           <div className='container'>
              <SideBar containerClass={(collapsed?"sidenav collapsed ":"sidenav")} ></SideBar>
              <a className={(collapsed?"show plus":"show moin")}  onClick={collapse}>
                    <img src={arrow_icon}></img>
                    <p>SHOW LESS</p>
                </a>
              <Switch>
                  <Route exact path="/"> 
                      <div className='empty'> <h1>EMPYY CHOOSE GRID FROM SIDE MENU</h1> </div>
                  </Route>
                  <Route exact path="/grid">
                    <Grid containerClass={(collapsed?"wide grid-container":"grid-container")} delete={(i)=>{handledelet(i)}} content={content}></Grid>
                  </Route>
                  <Route exact path="/item/:index">
                    <DetailSection containerClass={(collapsed?"wide detail-container":"detail-container")} getItem={getItem}></DetailSection>
                  </Route>
    
                  <Route path="*">
                    <h1> NOT FOUND</h1>
                  </Route>

              </Switch>

           </div>
           
        </div>
    </Router>
    
  );
}

export default App;
