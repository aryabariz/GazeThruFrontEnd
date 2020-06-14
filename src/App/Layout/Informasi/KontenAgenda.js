import React, {Component} from 'react';
import '.././Style.css';
import './StylePeta.css'
import { Button, Progress} from 'semantic-ui-react';
import { motion } from "framer-motion";
import logo from '../../Asset/logo.png';


class KontenAgenda extends Component {


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
          <div id="GambarAgenda">
            
          </div>
          <div id="KeteranganAgenda">

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
                top : '9.74%',
                left : '6.56%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} >
                  <p id="FontButton">Sebelumnya</p>
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
                bottom : '31.9%',
                right : '6.56%',
              }}
              >             
                  
              <Button className="Button" color={"blue"} >
                  <p id="FontButton">Berikutnya</p>
              </Button>
              <Progress class='ui inverted progress' percent={20} indicating attached='bottom' />             
          </motion.div>

      </div>

      
      
     
    </body>
  );
}
}


export default KontenAgenda;