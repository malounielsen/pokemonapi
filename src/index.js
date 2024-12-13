import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonProvider from './Context/PokemonContext'; 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Pokemon from './Components/Pokemon';
import Team from './Components/Team';
import Layout from './Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <PokemonProvider>
    <Layout>
      <Routes>
       <Route path="/" element={<App />} />
       <Route path="/team" element={<Team />} />
    </Routes>
    </Layout>
    </PokemonProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
