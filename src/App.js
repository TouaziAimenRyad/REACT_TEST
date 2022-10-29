import './App.css'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import list from './components/Content'
import DetailSection from './components/DetailSection'
import { useState } from 'react'

function App() {
 
  const [content , updateContent] =useState(list)
  const handledelet =(i)=>
  {
    updateContent([...content.slice(0,i) , ...content.slice(i+1,content.length)])
    
  } 
  return (
    <div className="App">
     {/* <Card img={bg} name="Some name of grid goes here Some name of grid goes here" nb_competence="123"></Card>*/}
     {/*<DetailSection img={bg} nb_competence="123" title="Some name of grid goes here Some name of grid goes here"  objectif="Some objectf goes here" category="some category goes here"></DetailSection>*/}
      <Grid delete={(i)=>{handledelet(i)}} content={content}></Grid>
    </div>
  );
}

export default App;
