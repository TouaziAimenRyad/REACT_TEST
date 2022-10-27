import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Grid from './components/Grid'
import bg from './assets/img/photo1.jpeg'

function App() {
  return (
    <div className="App">
      <Card img={bg} name="Some name of grid goes here Some name of grid goes here" nb_competence="123"></Card>
    </div>
  );
}

export default App;
