import React, {Component} from 'react';
import { Responsive, Grid, Progress, Button } from 'semantic-ui-react';
import './Style.css';
import { motion } from "framer-motion"
import InteraksiMata from '../Components/InteraksiMata';
import logo from '../Asset/logo.png';


class Home extends Component {


    render(){
    return (
      <body className='Body'>
        
        <div class= "Zona1">
        </div>

        <div class= "Zona2">
          <div id="LokasiTerkini">
            
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
      <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />
      
      </motion.div>
      
        <div id="pengumuman">

        </div>

        </div>

       
      </body>
    );
  }
}

  
  export default Home;