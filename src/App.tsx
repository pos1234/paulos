import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
interface AppProps { }
const App: React.FC<AppProps> = () => {
  const [menu, setMenu] = useState(false)
  const scrollToComponent = (component: string) => {
    const element = document.getElementById(component);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative'>
      <div className="md:hidden">
        <MenuIcon onClick={() => setMenu(!menu)} sx={{ fontSize: '2.5rem' }} className='cursor-pointer text-whiteText fixed right-2 top-3 md:hidden' />
      </div>
      <div id='Navigation' className={menu ? 'block' : 'max-md:hidden'}>
        <Navigation scrollToComponent={scrollToComponent} close={menu} setClose={setMenu} />
      </div>
      <div id='Home'>
        <Home scrollToComponent={scrollToComponent} />
      </div>
      <div id='Portfolio'>
        <Portfolio />
      </div>
      <div id='Skills'>
        <Skills />
      </div>
      <div id='Certificates'>
        <Certificates />
      </div>
      <div id='Contact'>
        <Contact />
      </div>
      <button onClick={() => scrollToComponent('Navigation')} className={menu ? 'hidden' : 'fixed text-whiteText cursor-pointer rounded-full bg-orange text-white right-3 bottom-3 w-12 h-12'}>
        <ArrowDropUpIcon sx={{ fontSize: "3rem" }} />
      </button>
    </div>
  );
};

interface NavigationProps {
  scrollToComponent: (component: string) => void;
  activeComponent: string;
}

/* bg-primary text-whiteText
 */export default App;
