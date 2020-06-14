import React from 'react';
import './index.css';
import Home from './Layout/Home';
import {Route, Link} from 'react-router-dom';
import MenuInformasi from './Layout/Informasi/MenuInformasi';
import Tentang from './Layout/Informasi/Tentang';
import Agenda from './Layout/Informasi/Agenda';
import Prestasi from './Layout/Informasi/Prestasi';
import ContentVideo from './Layout/ContentVideo';
import MenuPeta from './Layout/Peta/MenuPeta';
import KontenLantaiSatu from './Layout/Peta/LantaiSatu/KontenLantaiSatu';
import TestDatabase from './Data/TesDatabase';
import GambarPeta from './Layout/Peta/GambarPeta';
import KontenAgenda from './Layout/Informasi/KontenAgenda';
import KontenPrestasi from './Layout/Informasi/KontenPrestasi';


function App() {
  


  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/MenuInformasi" component={MenuInformasi}/>
      <Route exact path="/MenuInformasi/Tentang" component={Tentang}/>
      <Route exact path="/MenuInformasi/Tentang/Video" component={ContentVideo}/>
      <Route exact path="/MenuInformasi/Agenda" component={Agenda}/>
      <Route exact path="/MenuInformasi/Prestasi" component={Prestasi}/>
      <Route exact path="/MenuPeta" component={MenuPeta}/>
      <Route exact path="/MenuPeta/KontenLantaiSatu" component={KontenLantaiSatu}/>
      <Route exact path="/MenuPeta/GambarPeta" component={GambarPeta}/>
      <Route exact path="/MenuInfromasi/Agenda/KontenAgenda" component={KontenAgenda}/>
      <Route exact path="/MenuInformasi/Prestasi/KontenPrestasi" component={KontenPrestasi}/>
      <Route exact path="/TestDatabase" component={TestDatabase}/>
    </div>
  );
}

export default App;