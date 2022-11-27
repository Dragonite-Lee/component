import  styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Transition from './pages/transition/transition';
import Home from './pages/Home';

function App() {

  return (
    
    <div className={styles.App}>
      <Routes>
            <Route exact path='/component' element={Home()} />
            <Route path="/component/transition" element={Transition()} />
      </Routes>
      
    </div>
  );
}

export default App;
