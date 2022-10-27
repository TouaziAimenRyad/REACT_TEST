import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card'
import bg from './assets/img/photo1.jpeg'
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <div className='placeholder'><Card img={bg} alt="jfjf" name="Some name of grid goes here  " nb_comptence="123"></Card></div>
    </div>
  );
}

export default App;
