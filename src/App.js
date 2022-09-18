import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom'
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import ContactUs from './components/ContactUs';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div>
    <Header/>
        <Routes>
          <Route exact path='/' element={<Cards/>} />
          <Route exact path='/cart/:id' element={<CardDetails/>} />
          <Route exact path='/contact' element={<ContactUs/>} />
          <Route exact path='/about' element={<Aboutus/>} />
        </Routes>
        </div>


  );
}

export default App;
