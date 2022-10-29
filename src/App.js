import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Grid from './components/Grid'
import bg1 from './assets/img/photo1.jpeg'
import bg2 from './assets/img/photo2.jpeg'
import bg3 from './assets/img/photo3.jpeg'
import bg4 from './assets/img/photo4.jpeg'
import bg5 from './assets/img/photo5.jpeg'
import bg6 from './assets/img/photo6.jpeg'
import bg7 from './assets/img/photo7.jpeg'
import bg8 from './assets/img/photo8.jpeg'
import bg9 from './assets/img/photo9.jpeg'
import bg10 from './assets/img/photo10.jpeg'
import bg11 from './assets/img/photo11.jpeg'
import bg12 from './assets/img/photo12.jpeg'
import bg13 from './assets/img/photo13.jpeg'
import bg14 from './assets/img/photo14.jpeg'
import bg15 from './assets/img/photo15.jpeg'
import bg16 from './assets/img/photo16.jpeg'


import DetailSection from './components/DetailSection'

function App() {
  let content =
  [
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg1
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg2
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg3
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg4
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg5
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg6
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg7
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg8
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg9
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg10
    }, 
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg11
    }, 
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg12
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg13
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg14
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg15
    },
    {
      title:"Some name of grid goes here Some name of grid goes here",
      nb_competence:"123",
      objectif:"Some objectif goes here",
      category:"some category goes here",
      img:bg16
    },
  ]


  return (
    <div className="App">
     {/* <Card img={bg} name="Some name of grid goes here Some name of grid goes here" nb_competence="123"></Card>*/}
     {/*<DetailSection img={bg} nb_competence="123" title="Some name of grid goes here Some name of grid goes here"  objectif="Some objectf goes here" category="some category goes here"></DetailSection>*/}
      <Grid content={content}></Grid>
    </div>
  );
}

export default App;
