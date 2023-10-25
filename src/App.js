import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Inicio from './components/inicio';

function App() {
  return (
    <div className='App'>
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
