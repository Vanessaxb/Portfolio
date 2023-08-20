import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ContactForm from './components/ContactForm'
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
            
      <Routes>
        <Route path='/' element={ <Home />}> </Route>
        <Route path='/Portfolio' element={ <Portfolio />}></Route>
        <Route path='/ContactForm' element={ <ContactForm />}></Route>
        <Route path='/Blog' element={ <Blog />}></Route>

        
        <Route path='*' element={ <Navigate to='/' />}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
