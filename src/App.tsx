import React from 'react';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

//Components
import Title from './Components/Title';
import Header from './Components/Header';
import Footer from './Components/Footer';

//Router
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Startseite from './Pages/Startseite'
import UnsereEtablisments from './Pages/UnsereEtablisments';
import UnsereDienstleister from './Pages/UnsereDienstleister';
import ServicesUndDienstleistungen from './Pages/ServicesUndDienstleistungen';
import LoginPage from './Pages/LoginPage';
import TestPage from './Pages/TestPage';

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    margin: '1%',
    marginBottom: '2%',
    backgroundColor: 'darkred',
    '&:hover': {
      backgroundColor: 'rgba(150,75,15,1)'
    }
  },
  cnt: {
    textAlign: 'center'
  },
  text: {
    fontSize: 15,
    margin: '0.3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    textAlign: 'justify'
  }
})

const kotButton = () => {
  alert("Du bist in Scheiße getreten")
}

const ScrollToTop=() =>{
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);
}

function App() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startseite />}/>
        <Route path="/Unsere%20Etablisments" element={<UnsereEtablisments/>}/>
        <Route path="/Unsere%20Dienstleister" element={<UnsereDienstleister/>}/>
        <Route path="/Services%20und%20Dienstleistungen" element={<ServicesUndDienstleistungen/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/TestPage" element={<TestPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;