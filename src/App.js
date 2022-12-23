import  styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Transition from './pages/transition/transition';
import Home from './pages/Home';
import Snow from './pages/snow/snow';
import Rabbit from './pages/rabbit/rabbit';

function App() {
 
  return (
    
    <div className={styles.App}>
      <Routes>
            <Route exact path='/' element={Home()} />
            <Route exact path="/transition" element={Transition()} />
            <Route exact path="/snow" element={Snow()} />
            <Route exact path="/rabbit" element={Rabbit()} />
      </Routes>
      
    </div>
  );
}

export default App;
