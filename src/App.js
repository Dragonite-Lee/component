import  styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Transition from './pages/transition/transition';
import Home from './pages/Home';
import Snow from './pages/snow/snow';

function App() {
 
  return (
    
    <div className={styles.App}>
      <Routes>
            <Route exact path='/component' element={Home()} />
            <Route path="/component/transition" element={Transition()} />
            <Route path="/component/snow" element={Snow()} />
      </Routes>
      
    </div>
  );
}

export default App;
