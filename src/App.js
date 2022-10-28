import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Grid from './components/Grid'
import bg from './assets/img/photo2.jpeg'
import DetailSection from './components/DetailSection'

function App() {
  return (
    <div className="App">
     {/* <Card img={bg} name="Some name of grid goes here Some name of grid goes here" nb_competence="123"></Card>*/}
     <DetailSection img={bg} nb_competance="123" title="Some name of grid goes here Some name of grid goes here"  objectif="Some objectf goes here" category="some category goes here"></DetailSection>
    </div>
  );
}

export default App;
