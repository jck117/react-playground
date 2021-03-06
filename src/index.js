import React from 'react';
import ReactDOM from 'react-dom';
//import App from './playingwithdanger/App'; //14.17
import App from './App'; //comment this out for 14.14 & above
//import App from './paltrows-power-toes/App'; //14.14 //comment this out for 14.17
import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun.js';
import { BrowserRouter } from 'react-router-dom'; //14.14
import AppLang from './lang-context/AppLang'; //14.15
import RegistrationForm from './registrationForm/registrationForm'; //14.17


ReactDOM.render (
        <>
            
            {/* 14.17 
            <App /> 
            */}
            
            {/* 14.17
            <RegistrationForm />    
            */}

            {/* 14.15 //Comment this out for 14.17 */}
            {/* <AppLang /> */}

            {/* //14.14
            <BrowserRouter>
                <App />
            </BrowserRouter>
            */}
            
            <App />
            <div className = "state-drills"> 
                <HelloWorld />
                <Bomb />
                <RouletteGun bulletInChamber={8}/>
            </div>
            

        </> 
    , document.getElementById('root')

);
    
    
    
    





