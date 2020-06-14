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
import LantaiSatuBarat  from './Layout/Peta/LantaiSatu/LantaiSatuBarat';
import LantaiSatuTimur  from './Layout/Peta/LantaiSatu/LantaiSatuTimur';
import KontenLantaiDua  from './Layout/Peta/LantaiDua/KontenLantaiDua';
import LantaiDuaBarat  from './Layout/Peta/LantaiDua/LantaiDuaBarat';
import LantaiDuaTimur  from './Layout/Peta/LantaiDua/LantaiDuaTimur';
import KontenLantaiTiga  from './Layout/Peta/LantaiTiga/KontenLantaiTiga';
import LantaiTigaBarat  from './Layout/Peta/LantaiTiga/LantaiTigaBarat';
import LantaiTigaTimur  from './Layout/Peta/LantaiTiga/LantaiTigaTimur';
import TestDatabase from './Data/TesDatabase';

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
      <Route exact path="/MenuPeta/KontenLantaiSatu/LantaiSatuTimur" component={LantaiSatuTimur}/>
      <Route exact path="/MenuPeta/KontenLantaiSatu/LantaiSatuBarat" component={LantaiSatuBarat}/>
      <Route exact path="/MenuPeta/KontenLantaiDua" component={KontenLantaiDua}/>
      <Route exact path="/MenuPeta/KontenLantaiDua/LantaiDuaTimur" component={LantaiDuaTimur}/>
      <Route exact path="/MenuPeta/KontenLantaiDua/LantaiDuaBarat" component={LantaiDuaBarat}/>
      <Route exact path="/MenuPeta/KontenLantaiTiga" component={KontenLantaiTiga}/>
      <Route exact path="/MenuPeta/KontenLantaiTiga/LantaiTigaTimur" component={LantaiTigaTimur}/>
      <Route exact path="/MenuPeta/KontenLantaiSatu/LantaiTigaBarat" component={LantaiTigaBarat}/>
      <Route exact path="/MenuInformasi/Agenda/KontenAgenda" component={KontenAgenda}/>
      <Route exact path="/MenuInformasi/Prestasi/KontenPrestasi" component={KontenPrestasi}/>
      <Route exact path="/TestDatabase" component={TestDatabase}/>
    </div>
  );
}

export default App;