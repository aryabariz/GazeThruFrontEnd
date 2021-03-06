import React, {Component} from 'react';
import '.././Style.css';
import './StyleInformasi.css'
import { Button, Progress} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../Asset/logo.png';
import gmbrinformasi from '../../Asset/GmbrInformasi.png'

class Menu extends Component {


  render(){
  return (
    <body className='Body'>
      <div class="Atas">
          <div class="LogoTengah">
            <img class="ui fluid image" src={logo} alt="logo"/>
          
          </div>
      <motion.div     
          animate={{
            x:400,
            
          }}
          transition={{
            yoyo: Infinity,
            duration: 5,
          }}
          className='TombolBack'
          >             
              
          <Button className="Button" color={"red"} >
              <p id="FontButton">Kembali</p>
          </Button>

          <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />
      
      </motion.div>
      </div> 
      <div class="Bawah">
          <div class="IlusInformasi">
            <img class="ui fluid image" src={gmbrinformasi} alt="gmbrinformasi"/>
          </div>

          <motion.div     
              animate={{
                y:400,
                
              }}
              transition={{
                yoyo: Infinity,
                duration: 5,
              }}
              style={{
                position : 'absolute',
                top : '4.61%',
                left : '11.25%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} >
                  <p id="FontButton">Agenda</p>
              </Button>
              <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
          </motion.div>

          <motion.div     
              animate={{
                y:-400,
                
              }}
              transition={{
                yoyo: Infinity,
                duration: 5,
              }}
              style={{
                position : 'absolute',
                bottom : '21.6%',
                right : '11.87%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} >
                  <p id="FontButton">Tentang</p>
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
                bottom : '11.82%',
                right : '26.87%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} >
                  <p id="FontButton">Prestasi</p>
              </Button>
              <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
          </motion.div>
      </div>

      
      
     
    </body>
  );
}
}


export default Menu;