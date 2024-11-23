// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import BecomeaCook from './Pages/BecomeaCook';
import { Route, Routes } from 'react-router-dom';
import DownloadUser from './Pages/DownloadUser';
import DownloadKitchen from './Pages/DownloadKitchen';
import Privacy from './Pages/Privacy';
import Support from './Pages/Support';
import Notfound from './Pages/NotFound';


function App() {

  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/BecomeaCook' element={<BecomeaCook/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/cook/:id' element={<DownloadUser/>}/>
            <Route path='/kitchen/download' element={<DownloadKitchen/>}/>
            <Route path='/privacy' element={<Privacy/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route  path="*" element={<Notfound/>}/>
          </Routes>
    </div>
  );
}
export default App;