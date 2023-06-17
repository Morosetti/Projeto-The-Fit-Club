import './App.css';
import Hero from './components/Hero/Hero';
import Motivos from './components/Motivos/Motivos';
import Planos from './components/Planos/Planos';
import { Programs } from './components/Programs/Programs';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Motivos/>
      <Planos/>
    </div>
  );
}

export default App;
