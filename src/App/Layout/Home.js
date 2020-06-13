import React, {Component} from 'react';
import { Progress, Button } from 'semantic-ui-react';
import './Style.css';
import { motion } from "framer-motion"
import logo from '../Asset/logo.png';
import IconLog from '../Asset/IconLoc.png';
import Poster from '../Data/Informasi/Poster';
import Informasi from '../Data/Informasi/Pengumuman'

class Home extends Component {
     
    render(){
    return (
      <body className='Body'>
        <div class= "Zona1">
          <Poster/>
        </div>

        <div class= "Zona2">
          <div id="LokasiTerkini">
            <div id="IconLoc">
            <img class="ui fluid image" src={IconLog} alt="IconLoc"/>
            </div>
            <p class="TextMerah MerahLokasiTerkini">Lokasi saat ini</p>
            <p class="TextKonten KontenLokasiTerkini">Lobi DTETI Lantai 1</p>
          </div>

          <div id="LogoHome">
          <img class="ui fluid image" src={logo} alt="logo"/>
        </div>

        <div>
        <p id="pemberitahuan">
        Amati salah satu tombol untuk memulai navigasi GazeThru
        </p>
        </div>

        <motion.div     
      animate={{
        x:400,
        
      }}
      transition={{
        yoyo: Infinity,
        duration: 5,
      }}
      style={{
        position : 'absolute',
        top : '54.72%',
      }}
      >             
          
      <Button className="Button" color={"blue"} >
          <p id="FontButton">Informasi</p>
      </Button>
      <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />
      
      </motion.div>
      <motion.div  
      
      animate={{
        x:-400,
        
      }}
      transition={{
        yoyo: Infinity,
        duration: 5,
      }}
      style={{
        position : 'absolute',
        right : '12.19%',
        top : '68.7%',
      }}
      >             
          
      <Button className="Button" color={"blue"} >
          <p id="FontButton">Peta</p>
      </Button>
      <Progress class='ui inverted progress' percent={100} indicating attached='bottom' />
      
      </motion.div>
      
        <div id="pengumuman">
          <p class="TextMerah PosisiJudulInformasi" >Pemberitahuan</p>
          <Informasi/>
        </div>
            
        </div>

       
      </body>
    );
  }
}

  
  export default Home;