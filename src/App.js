// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import BecomeaCook from './Pages/BecomeaCook';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/BecomeaCook' element={<BecomeaCook/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
 

      
    </div>
  );
}

export default App;
