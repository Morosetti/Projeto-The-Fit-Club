import './App.css';
import Hero from './components/Hero/Hero';
import Motivos from './components/Motivos/Motivos';
import { Programs } from './components/Programs/Programs';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Motivos/>
    </div>
  );
}

export default App;
