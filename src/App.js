import './App.css';
import Group221 from './Components/Group221/Group221';
import { Hero } from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <div className='container'>
            <Navbar />
            <Hero />
        </div>
        <div className='container2'>
          <Group221 />
        </div>
    </div>
  );
}

export default App;
