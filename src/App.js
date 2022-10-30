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
          {/* <Card img={bg} name="Some name of grid goes here Some name of grid goes here" nb_competence="123"></Card>*/}
          {/*<DetailSection img={bg} nb_competence="123" title="Some name of grid goes here Some name of grid goes here"  objectif="Some objectf goes here" category="some category goes here"></DetailSection>*/}
          {/*navbar ans side br*/ }
           <Navbar></Navbar>
           <div className='container'>
              <SideBar></SideBar>
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
           
        </div>
    </Router>
    
  );
}

export default App;
